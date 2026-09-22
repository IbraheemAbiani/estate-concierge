# The Estate Concierge Group — Website

A custom-coded luxury website for The Estate Concierge Group, built with
[Astro](https://astro.build). Fully static, fast, and yours to host anywhere.

**Palette:** charcoal · champagne gold · cream/white
**Type:** Cormorant Garamond (serif display) · Jost (sans)

---

## Quick start (run it locally)

You'll need [Node.js 18+](https://nodejs.org) installed.

```bash
npm install        # install dependencies (first time only)
npm run dev        # local dev server at http://localhost:4321
npm run build      # build the production site into /dist
npm run preview    # preview the built site locally
```

---

## Pages

| Page | Route | File |
|------|-------|------|
| Home | `/` | `src/pages/index.astro` |
| Property Management | `/property-management/` | `src/pages/property-management.astro` |
| Concierge Maintenance | `/concierge-maintenance/` | `src/pages/concierge-maintenance.astro` |
| About Us | `/about/` | `src/pages/about.astro` |
| Our Team | `/team/` | `src/pages/team.astro` |
| Contact | `/contact/` | `src/pages/contact.astro` |
| Schedule Consultation | `/schedule/` | `src/pages/schedule.astro` |

---

## ✏️ Editing content (the important part)

**Almost everything lives in one file: [`src/data/site.js`](src/data/site.js).**
Open it and edit the text, names, bios, phone, email, address, and social links.
No need to touch the page files for routine copy changes.

### Swap the contact details
In `src/data/site.js`, update the `site` object at the top: `phone`, `phoneHref`,
`email`, and `address`.

### Swap photos & videos
Replace the placeholder files in `public/images/` and `public/videos/` with your
own, **keeping the same filenames** — the site picks them up automatically. Or
point to new filenames by editing the paths in `src/data/site.js`.

| What | File to replace |
|------|-----------------|
| Hero background video | `public/videos/hero.mp4` (+ poster `public/images/hero-poster.jpg`) |
| Home service photos | `public/images/service-property-management.jpg`, `service-concierge-maintenance.jpg` |
| Carousel clips | `public/videos/showcase-1.mp4` … `showcase-5.mp4` (+ matching posters `public/images/showcase-*.jpg`) |
| Team headshots | `public/images/team-1.jpg`, `team-2.jpg`, `team-3.jpg` |
| "Areas We Serve" tiles | `public/images/area-los-angeles.jpg`, `area-malibu.jpg`, `area-santa-barbara.jpg` |
| Logo | `public/images/logo.png` |
| Social share image | `public/images/og-image.jpg` |

> **Video tips:** use `.mp4` (H.264), muted, and keep files small (a few MB each).
> The hero and carousel videos loop and autoplay silently.

### Team members
Edit the `team` array in `src/data/site.js` — name, title, photo, and bio for each
of the three people.

---

## 📬 Connecting the forms (Formspree)

The Contact and Schedule forms are wired to [Formspree](https://formspree.io) —
no backend or server code required.

1. Create a free Formspree account.
2. Create **two forms** (one for Contact, one for Schedule Consultation).
3. Copy each form's endpoint (looks like `https://formspree.io/f/abcdwxyz`).
4. Paste them into `src/data/site.js`:

```js
formspree: {
  contact:  "https://formspree.io/f/your-contact-id",
  schedule: "https://formspree.io/f/your-schedule-id",
},
```

5. Rebuild / redeploy. Submissions will arrive in your email + Formspree dashboard.
   A hidden honeypot field is already included to reduce spam.

> Prefer no third party? On Netlify you can switch to built-in **Netlify Forms**
> instead — add `netlify` to each `<form>` tag. Ask and I'll wire it.

---

## 🚀 Deploying + connecting your domain

This is a static site, so any static host works. Recommended: **Netlify**.

### Netlify (recommended)
1. Push this folder to a GitHub repo (or drag-and-drop the `dist/` folder after
   `npm run build` into Netlify's "Deploys" page).
2. In Netlify: **Add new site → Import from Git**. Netlify auto-detects Astro
   (build command `npm run build`, publish directory `dist`). `netlify.toml` is
   already included, so it just works.
3. **Domains → Add a domain** → enter your domain → follow Netlify's DNS steps
   (either move your nameservers to Netlify, or add the `A` / `CNAME` records they
   show you at your current registrar). SSL is issued automatically.

### Vercel
Import the repo at vercel.com — it auto-detects Astro. Add your domain under
**Settings → Domains**.

### Cloudflare Pages
Create a Pages project from the repo. Build command `npm run build`, output `dist`.
Add your domain under **Custom domains**.

Also update `site` in `astro.config.mjs` to your final domain (used for canonical
URLs and social links).

---

## Project structure

```
public/            Static assets served as-is (images, videos, logo)
src/
  data/site.js     ← ALL editable content lives here
  layouts/Base.astro   Page shell: <head>, fonts, header, footer, SEO
  components/       Header, Footer, PageHero, StatsBand, CTASection,
                    ServiceCardsGrid, VideoCarousel, Icon
  pages/           One file per page (routes above)
  styles/global.css  Design system: colors, type, buttons, utilities
astro.config.mjs   Astro config (set your domain here)
netlify.toml       Netlify build + headers config
```

## Features built in
- Transparent header that turns solid charcoal on scroll
- Full-bleed autoplay video hero (with poster fallback)
- Infinite-loop video carousel with side-peeks, arrows, and dots
- Full-screen hamburger overlay menu (mobile/tablet)
- Scroll-reveal animations, fully responsive, accessible (skip link, reduced-motion support)

---

*Placeholder photos, videos, names, bios, and contact details are included for
the design pass — swap them per the guide above.*
