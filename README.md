# Nyamekye Samuel Asamoah — Portfolio (redesign)

Client-facing portfolio: **Digital Creative · AI · Data**. Plain HTML, CSS and JS, no build step, deployed on Vercel.

Live: https://nsasamoah.vercel.app

## Structure

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Hero, selected work, featured case study, services, short about, process, contact CTA |
| Work | `/work` | All projects, filters: `/work/websites`, `/work/ai-video`, `/work/design`, `/work/data` |
| Services | `/services` | Four service packages, deliverables, process, FAQ |
| About | `/about` | Story, experience, toolkit |
| Contact | `/contact` | Project inquiry form (service, budget, timeline). `?service=website|video|design|data` preselects |
| Case studies | `/evemed`, `/lactadelle`, `/englishplay` | Overview, challenge, approach, result |
| Music | `/music`, `/anthem`, `/lomo`, `/rise-again`, `/wo-ne-me` | Kofi Nyamekye releases, kept apart from the client pitch |
| Design galleries | `/gallery`, `/ads`, `/tshirts` | Lightbox galleries |
| Data | `/data` | "Currently building" (SQL, Power BI, Python) |
| Writing | `/blog` | Articles on codedevpay.com |
| Certificates | `/certificates` | IBM badge (Credly) and DataCamp PDFs |
| Thanks / 404 | `/thanks`, `/404` | Form success page; not-found page |

Old URLs (`/projects/*`, `/skills`, `/experience`, `/learning`, `/certifications`, `/landing`) redirect in `vercel.json`.

## Design system (`assets/css/site.css`)

- Colours: Obsidian `#101114`, Warm Ivory `#F5F3EF`, Slate `#252831`, Electric Blue `#465CFF`, Soft Blue `#A8B5FF`, Muted Grey `#888A91`
- Fonts: Space Grotesk (headings), Manrope (body), IBM Plex Mono (small labels only)
- Section surfaces: `.sec--dark`, `.sec--slate`, `.sec--light`, `.sec--paper`

## Images

All images are WebP in `assets/img/` (`name.webp` up to 1600px, `name-sm.webp` up to 720px). The old `assets/flyers/` and `assets/web/` folders are no longer used and can be deleted from the repo.

To add a project image: export a 1600px-wide WebP and a 720px `-sm` copy into `assets/img/...`.

## To do before going fully live

- [ ] Add 2–3 real testimonials: uncomment the block in `index.html` (search for `TESTIMONIALS`)
- [ ] Replace the low-resolution Rise Again and Wo Ne Me covers (currently 320×180)
- [ ] Add mobile screenshots for Evemed and Lactadelle case studies
- [ ] Add a résumé PDF (footer links to LinkedIn for now)
- [ ] Publish the first finished data project on `/data`
- [ ] Send one test inquiry through `/contact` (FormSubmit sends to asanyamekye@gmail.com)

## Contact

asanyamekye@gmail.com · [LinkedIn](https://www.linkedin.com/in/asanyamekye/) · [GitHub](https://github.com/KofiNyamekye)
