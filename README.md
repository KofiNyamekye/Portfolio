# Nyamekye Samuel Asamoah — Portfolio

**Digital Creative · AI · Data**

I turn ideas into digital experiences that work. I design websites, create AI-powered content and build data-driven solutions that help businesses communicate, grow and work smarter.

🔗 **Live site:** https://nsasamoah.vercel.app
📧 **Start a project:** https://nsasamoah.vercel.app/contact

---

## About this site

This is my client-facing portfolio. It exists to show what I can do for a business, prove it with real projects, and make it easy to start working together.

It's plain HTML, CSS and JavaScript with no framework and no build step, deployed on Vercel. I directed the strategy, positioning, design and content, and built it with AI-assisted workflows (structured prompting, iterative refinement, review and debugging), so the site is also a working example of how I ship with AI.

---

## What I offer

| Service | What it covers | Proof on the site |
|---|---|---|
| **Websites & landing pages** | Business sites, landing pages, redesigns, WhatsApp and booking integrations, basic SEO | Evemed Diagnostics, Lactadelle |
| **AI-powered video & content** | AI video ads, promo videos, social content, scripts and concepts | EnglishPLAY ad, World Cup anthem video |
| **Brand & graphic design** | Campaign flyers, social media designs, product labels, brand concepts, apparel | CodeDevPay campaigns, ads & labels, T-shirt designs |
| **Data & dashboards** | Excel reports, Power BI dashboards, data cleaning, SQL analysis | Projects in progress |

---

## Pages

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Hero, selected work, featured case study, services, short about, process, contact |
| Work | `/work` | All projects with filters: `/work/websites`, `/work/ai-video`, `/work/design`, `/work/data` |
| Services | `/services` | Four service packages with deliverables, process and FAQ |
| About | `/about` | Story, experience timeline and toolkit |
| Contact | `/contact` | Project inquiry card that opens the FlowPard form, plus email and LinkedIn |
| Case studies | `/evemed`, `/lactadelle`, `/englishplay` | Overview, challenge, approach and result |
| Design galleries | `/gallery`, `/ads`, `/tshirts` | Campaign, advertising and apparel design with a lightbox |
| Music | `/music`, `/anthem`, `/lomo`, `/rise-again`, `/wo-ne-me` | AI-assisted releases as Kofi Nyamekye |
| Data | `/data` | Data projects currently being built |
| Writing | `/blog` | Articles published on codedevpay.com |
| Certificates | `/certificates` | IBM badge on Credly and DataCamp certificates |
| Thank you / 404 | `/thanks`, `/404` | Form confirmation and not-found pages |

Old addresses (`/projects`, `/projects/*`, `/skills`, `/experience`, `/learning`, `/certifications`, `/landing`) redirect to the new pages through `vercel.json`, so old links and search results still work.

---

## Features

- **Light and dark mode.** Follows the visitor's device setting, with a sun/moon toggle in the header. The choice is remembered per browser and the page never flashes the wrong theme while loading.
- **Flyer slideshows.** Design cards fan out three designs. Hovering cycles through the whole collection; on phones it plays slowly while the card is on screen. It's off for visitors who prefer reduced motion.
- **Project filters** on the Work page, with shareable clean URLs.
- **Case studies** written as problem → approach → result, using real outcomes only.
- **Click-to-play YouTube** on the music pages (privacy-enhanced, loaded only when played).
- **Responsive and accessible:** mobile-first layouts, keyboard navigation, visible focus states, skip link, reduced-motion support.
- **Fast:** all images are WebP in two sizes (about 5 MB in total, down from about 38 MB). Images lazy-load, and the CSS and JS are cached long-term with version stamps.
- **SEO:** per-page titles, descriptions and Open Graph images; JSON-LD structured data; `sitemap.xml`; `robots.txt`; Google Search Console verification; photo favicons for browser tabs and search results.
- **Analytics:** Vercel Analytics and Speed Insights.

---

## Design system

Defined in `assets/css/site.css`.

| Role | Colour |
|---|---|
| Obsidian (dark backgrounds) | `#101114` |
| Warm Ivory (light backgrounds) | `#F5F3EF` |
| Slate (dark surfaces) | `#252831` |
| Electric Blue (primary accent) | `#465CFF` |
| Soft Blue (accent on dark) | `#A8B5FF` |
| Muted Grey (supporting text) | `#888A91` |

**Typography:** Space Grotesk for headings, Manrope for body text and buttons, IBM Plex Mono for small labels only.

Colours are set through theme variables (`--bg-1`, `--text`, `--muted`, `--accent-text` and so on), so every section works in both light and dark mode.

---

## Project structure

```
.
├── index.html, work.html, services.html, about.html, contact.html, …
├── vercel.json          clean URLs, redirects, caching and security headers
├── sitemap.xml, robots.txt
├── favicon.ico, favicon-96.png, favicon-192.png, favicon-512.png
├── apple-touch-icon.png, site.webmanifest
├── og.png               default social-share image
└── assets/
    ├── css/site.css     all styles
    ├── js/site.js       menu, theme toggle, filters, slideshow, lightbox, video
    ├── img/             WebP images (name.webp = large, name-sm.webp = small)
    │   ├── work/        website and video project images
    │   ├── music/       song covers
    │   └── design/      codedevpay/, ads/, apparel/
    └── certificates/    DataCamp PDFs
```

## Contact form

The Contact page shows a link-preview card that opens my project form on FlowPard (https://www.flowpard.com/f/contact-form/). FlowPard doesn't currently allow its forms to be embedded inside other websites. If that changes, `vercel.json` already allows `flowpard.com` in `frame-src`, so the form can go straight into the page.

---

## Tools

**Web:** HTML, CSS, JavaScript, GitHub, Vercel
**Data:** Excel, SQL, Power BI, Python
**Creative:** Canva, Photoshop, Clipchamp
**AI:** ChatGPT, Claude, Gemini, Veo 3, Suno, OpenArt

---

## Contact

**Nyamekye Samuel Asamoah**, digital creative based in Ghana, working with clients worldwide. Creative Director and AI/prompt engineering tutor at CodeDevPay Academy. Releases AI-assisted music as **Kofi Nyamekye**.

- Email: asanyamekye@gmail.com
- LinkedIn: https://www.linkedin.com/in/asanyamekye/
- GitHub: https://github.com/KofiNyamekye
- YouTube: https://www.youtube.com/@asa_nyamekye
- Audiomack: https://audiomack.com/asanyamekye
