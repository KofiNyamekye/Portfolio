# Nyamekye Samuel Asamoah — Portfolio

An AI-assisted portfolio and live case study of human-AI collaboration. It brings together my AI music and video, brand and web projects, flyers and campaign design, and data work in SQL, Power BI and Python.

🔗 **Live site:** https://nsasamoah.vercel.app/
🔗 **Repository:** https://github.com/KofiNyamekye/Portfolio/

---

## About the project

I direct the creative and technical vision. AI tools do the heavy lifting under that direction: structured prompting, iterative refinement and debugging, rather than hand-writing every section.

The site is both:

1. A professional portfolio.
2. A working example of how I plan, direct and ship with AI.

It is plain HTML, CSS and JavaScript with no build step, deployed on Vercel.

---

## Site structure

```
Homepage  →  Projects hub (4 tabs)  →  Individual project pages
```

Every page has the same glass-style design, the same navigation and a sitemap footer. The grid icon in the nav opens a full-page **System Navigation** overlay with links to every section and page.

### Pages

| Page | Path | What it is |
|---|---|---|
| `index.html` | `/` | Homepage: hero, about, skills, tools, featured work, music player, learning, services, certifications, experience, writing and contact |
| `projects.html` | `/projects` | Projects hub with four tabs: **AI Content**, **Flyers & Design**, **Web & Brand**, **Data** (in progress) |
| `evemed.html` | `/evemed` | Case study: Evemed Diagnostics website (24/7 ultrasound clinic) |
| `lactadelle.html` | `/lactadelle` | Case study: Lactadelle brand and website (formerly LactAfrica) |
| `lomo.html` | `/lomo` | LOMO — League of My Own (AI hip-hop single) |
| `rise-again.html` | `/rise-again` | Rise Again (AI hiplife / hip-hop single) |
| `wo-ne-me.html` | `/wo-ne-me` | Wo Ne Me (AI Ghanapiano single) |
| `anthem.html` | `/anthem` | All for One, One for All (World Cup anthem) |
| `englishplay.html` | `/englishplay` | EnglishPLAY AI video ad campaign |
| `gallery.html` | `/gallery` | CodeDevPay campaign gallery (11 designs) |
| `ads.html` | `/ads` | Campaigns and advertisements |
| `tshirts.html` | `/tshirts` | Apparel and T-shirt design concepts |
| `certificates.html` | `/certificates` | Certificates: IBM Skills badge (Credly) and DataCamp PDFs |
| `landing.html` | `/landing` | `noindex` holding page for large site updates, linking to every live page |

### Clean URLs, no `#`

All links are real paths, not hash anchors:

- Homepage sections: `/about`, `/skills`, `/tools`, `/work`, `/music`, `/learning`, `/services`, `/certifications`, `/experience`, `/blog`, `/contact`
- Project tabs: `/projects/ai`, `/projects/design`, `/projects/web`, `/projects/data`
- Certificates: `/certificates/ibm-skills-badge`, `/certificates/intro-sql`, and so on

Vercel serves the right page through the `rewrites` in `vercel.json`, and a small script scrolls to the right section or selects the right tab. Old `#` links still work and are cleaned up to the new path.

---

## Featured projects

### Websites (built with AI-assisted workflows, directed by me)

- **Evemed Diagnostics** — a 24/7 ultrasound clinic site with clean-URL service pages, a mobile home-visit section, work videos, one-tap WhatsApp booking and SEO foundations. Live at https://evemeddiagnostics.com
- **Lactadelle** — brand identity and trade-partner website for NutriPudding™, a plant-based, shelf-stable tiger-nut pudding made in Ghana. Live at https://lactadelle.netlify.app

### AI music (as Kofi Nyamekye)

- **LOMO — League of My Own** — bilingual Twi/English hip-hop single
- **Rise Again** — hiplife / hip-hop testimony track, with a visualizer video
- **Wo Ne Me** — Ghanapiano single
- **All for One, One for All** — World Cup anthem, with a cinematic music video and cover art

### AI video

- **EnglishPLAY** — a 60-second AI-produced ad for a premium English immersion platform. No filming and no studio costs.

### Design collections

- **CodeDevPay Campaign Gallery** — course publicity flyers (Python, JavaScript, Excel, Word, Canva, Photoshop, Generative AI)
- **Campaigns & Advertisements** — product ads, awareness campaigns and business flyers
- **T-Shirt Design Concepts** — apparel branding, reunion shirts and typography-led visuals

### Data (in progress)

SQL analytics showcase, Power BI dashboard and Python regression study. They will be published with their method and findings.

---

## Features

- Responsive, mobile-first layout
- Liquid-glass design with dark and light themes
- Terminal-inspired accents (JetBrains Mono, status indicators, typewriter hero)
- Site-wide System Navigation overlay and consistent sitemap footer
- Projects hub with keyboard-accessible tabs
- Homepage music player: pick a song, then switch between YouTube video and Audiomack audio
- Click-to-play YouTube embeds on the AI music project pages (`youtube-nocookie`, loaded only when played)
- Site previews for web projects, with a built-in mockup until a screenshot is added
- Certificates page with a Credly badge and inline PDF viewers
- SEO: per-page metadata, Open Graph and Twitter cards with each page's own cover image, JSON-LD, `sitemap.xml`, `robots.txt`
- Vercel Analytics and Speed Insights
- Lazy-loaded media

---

## Project layout

```
.
├── index.html, projects.html, evemed.html, lactadelle.html, ...
├── landing.html            holding page (noindex)
├── vercel.json             clean URLs, rewrites and security headers
├── sitemap.xml, robots.txt
├── image.png, hero.png     profile and hero images
└── assets/
    ├── flyers/             covers, flyers and campaign images
    ├── certificates/       DataCamp PDFs
    └── web/                evemed.jpg, lactadelle.jpg (site screenshots)
```

### Adding site previews

Add screenshots at `assets/web/evemed.jpg` and `assets/web/lactadelle.jpg` (about 1600×1000, top of the homepage). They replace the built-in mockups on the homepage, the projects hub and the case-study pages automatically.

---

## Configuration notes

`vercel.json` does three things:

1. **Clean URLs:** `cleanUrls: true`, so `/lomo` serves `lomo.html`.
2. **Rewrites:** the section, tab and certificate paths above serve the homepage, projects hub or certificates page.
3. **Content Security Policy:** third-party embeds must be allowed in `frame-src`. Currently allowed: Credly, `youtube-nocookie.com` and `audiomack.com`. If you add another embed, add its domain there or the browser will block it.

---

## Run locally

There is no build step. Any static server works, but the clean URLs and rewrites only work on Vercel or the Vercel CLI:

```bash
npm i -g vercel
vercel dev
```

Opening the HTML files directly also works, except for the clean-URL paths.

---

## Tools & technologies

**AI and creative:** ChatGPT, Claude AI, Suno AI, Veo 3, OpenArt, Gemini, Clipchamp, HeyGen, Higgsfield
**Analytics and data:** Python, SQL, Power BI, Excel, Jupyter Notebook, Anaconda
**Development:** HTML, CSS, JavaScript, GitHub, Vercel, VS Code
**Design and media:** Canva, Photoshop, graphic design, creative direction, digital media
**Typography:** Syne, DM Sans, JetBrains Mono

---

## AI-assisted workflow

I plan the architecture, direct the visual style, guide each feature, review the output, debug, and manage deployment. The AI writes and refines code and copy under that direction. The result is a portfolio that also shows prompt engineering and human-AI collaboration in practice.

---

## Current focus and plans

- **Now:** Advanced SQL, Advanced Power BI, Python, automation and AI-assisted development
- **Next:** SQL showcase, Power BI dashboards, Excel case studies, data storytelling, automation workflows, more AI media projects and website case studies

---

## Author

**Nyamekye Samuel Asamoah** — Creative Director, AI/Prompt Engineering tutor and data analytics learner, based in Ghana. As **Kofi Nyamekye**, an AI-assisted music artist.

🔗 LinkedIn: https://www.linkedin.com/in/asanyamekye/
🔗 GitHub: https://github.com/KofiNyamekye
📧 Email: asanyamekye@gmail.com

---

*This portfolio is under continuous development and keeps growing as more analytics, AI, automation and creative projects are added.*
