/* Nyamekye Samuel Asamoah — site behaviour (no dependencies) */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");

  /* Header: solid background after scrolling */
  var header = document.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("is-scrolled", window.scrollY > 24); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu */
  var menuBtn = document.querySelector(".menu-btn");
  if (menuBtn && header) {
    var setMenu = function (open) {
      header.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    menuBtn.addEventListener("click", function () { setMenu(!header.classList.contains("is-open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    header.querySelectorAll(".mobile-menu a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  }

  /* Reveal on scroll (content is visible without JS) */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.01 });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add("in"); }); }

  /* Work page filters, synced with clean URLs: /work/websites, /work/ai-video, /work/design, /work/data */
  var filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    var buttons = filterBar.querySelectorAll("[data-filter]");
    var cards = document.querySelectorAll("[data-cat]");
    var apply = function (key, push) {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.filter === key)); });
      cards.forEach(function (c) {
        var show = key === "all" || c.dataset.cat.split(" ").indexOf(key) > -1;
        c.hidden = !show;
        if (show) c.classList.add("in");
      });
      if (push) {
        var path = key === "all" ? "/work" : "/work/" + key;
        if (location.pathname !== path) history.replaceState(null, "", path);
      }
    };
    buttons.forEach(function (b) { b.addEventListener("click", function () { apply(b.dataset.filter, true); }); });
    var m = location.pathname.match(/\/work\/([a-z-]+)/);
    var start = m && filterBar.querySelector('[data-filter="' + m[1] + '"]') ? m[1] : "all";
    apply(start, false);
  }

  /* Click-to-play YouTube (privacy-enhanced, loads only on demand) */
  document.querySelectorAll("[data-yt]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + btn.dataset.yt + "?autoplay=1&rel=0";
      f.title = btn.getAttribute("aria-label") || "YouTube video";
      f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      f.allowFullscreen = true;
      f.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0";
      btn.replaceWith(f);
    });
  });

  /* Gallery lightbox */
  var lb = document.querySelector(".lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img"), lbCap = lb.querySelector(".lightbox-cap"), lbClose = lb.querySelector(".lightbox-close"), lastFocus;
    var close = function () { lb.classList.remove("is-open"); document.body.classList.remove("menu-open"); if (lastFocus) lastFocus.focus(); };
    document.querySelectorAll("[data-full]").forEach(function (b) {
      b.addEventListener("click", function () {
        lastFocus = b;
        lbImg.src = b.dataset.full; lbImg.alt = b.querySelector("img").alt; lbCap.textContent = b.dataset.caption || "";
        lb.classList.add("is-open"); document.body.classList.add("menu-open"); lbClose.focus();
      });
    });
    lbClose.addEventListener("click", close);
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && lb.classList.contains("is-open")) close(); });
  }

  /* Contact form: preselect the service from ?service=… */
  var params = new URLSearchParams(location.search);
  var svc = params.get("service");
  if (svc) {
    var input = document.querySelector('input[name="service"][value="' + svc + '"]');
    if (input) input.checked = true;
  }

  /* Footer year */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();

/* Light / dark mode: follows the device until the visitor picks one; the choice is saved per browser */
(function () {
  "use strict";
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var current = function () {
    var t = root.getAttribute("data-theme");
    if (t === "light" || t === "dark") return t;
    return mq && mq.matches ? "dark" : "light";
  };
  var paint = function () {
    var t = current();
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.setAttribute("content", t === "dark" ? "#101114" : "#f5f3ef");
    });
    document.querySelectorAll(".theme-toggle").forEach(function (b) {
      b.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  };
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      document.body.classList.add("theme-anim");
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
      setTimeout(function () { document.body.classList.remove("theme-anim"); }, 400);
    });
  });
  if (mq) {
    var onChange = function () { paint(); };
    if (mq.addEventListener) mq.addEventListener("change", onChange); else if (mq.addListener) mq.addListener(onChange);
  }
  paint();
})();

/* Flyer slideshow: hover (or keyboard focus) cycles through the collection.
   On touch screens it plays slowly while the card is on screen. Off for reduced motion. */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  document.querySelectorAll("[data-slides]").forEach(function (box) {
    var srcs = box.dataset.slides.split(","), imgs = box.querySelectorAll("img"), n = srcs.length;
    if (reduce || n <= imgs.length) return;
    var card = box.closest(".card"), offset = 0, timer = null, loaded = false;
    var groups = Math.ceil(n / imgs.length);
    var dots = document.createElement("span");
    dots.className = "slide-dots"; dots.setAttribute("aria-hidden", "true");
    for (var d = 0; d < groups; d++) dots.appendChild(document.createElement("i"));
    box.appendChild(dots);
    var mark = function () {
      var g = Math.floor(offset / imgs.length) % groups;
      dots.querySelectorAll("i").forEach(function (el, i) { el.classList.toggle("on", i === g); });
    };
    mark();
    var preload = function () {
      if (loaded) return; loaded = true;
      srcs.forEach(function (s) { var im = new Image(); im.src = s; });
    };
    var step = function () {
      offset = (offset + imgs.length) % (groups * imgs.length);
      imgs.forEach(function (im, i) {
        setTimeout(function () {
          im.classList.add("is-swapping");
          setTimeout(function () {
            im.removeAttribute("srcset"); im.removeAttribute("sizes");
            im.src = srcs[(offset + i) % n];
            im.classList.remove("is-swapping");
          }, 300);
        }, i * 110);
      });
      mark();
    };
    var start = function (delay) {
      if (timer) return; preload(); box.classList.add("is-playing");
      timer = setInterval(step, delay);
      setTimeout(step, 450);
    };
    var stop = function () { clearInterval(timer); timer = null; box.classList.remove("is-playing"); };
    if (canHover) {
      card.addEventListener("mouseenter", function () { start(1700); });
      card.addEventListener("mouseleave", stop);
      card.addEventListener("focus", function () { start(1700); });
      card.addEventListener("blur", stop);
    } else if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting && e.intersectionRatio > .6) start(2600); else stop(); });
      }, { threshold: [0, .6] }).observe(box);
    }
  });
})();
