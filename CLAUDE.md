# Project: The Estate Concierge Group — website

I'm rebuilding my Wix site as a custom-coded site for full design freedom.
An earlier pass scaffolded this project; I want you to refine the front end so it
faithfully matches my existing Wix site. This phase is aesthetics/front-end only —
no backend, portals, or auth.

## Reference — match THIS
My live Wix site (study every page and mirror its structure, layout, and content):
https://ibraheemabiani.wixsite.com/the-estate-concierge

Design inspiration: daftariangroup.com. Service copy reference: apm-socal.com.

## Stack & how to run
- Astro (static). Node is installed.
- `npm run dev` → http://localhost:4321 . `npm run build` → /dist.
- All editable content lives in `src/data/site.js`.
- Pages: `src/pages/*.astro`. Components: `src/components/*.astro`.
  Layout: `src/layouts/Base.astro`. Design tokens: `src/styles/global.css`.

## Design system (keep this)
- Palette: charcoal #22272E, champagne gold #BF9F5E, cream #F5F1EA, white.
- Fonts: Cormorant Garamond (serif display) + Jost (sans).
- Generous whitespace, gold hairlines, gold bullets, uppercase letter-spaced eyebrows.

## Already built — KEEP these, don't regress them
- Transparent header that turns solid charcoal on scroll.
- Full-bleed autoplay video hero (poster fallback).
- Infinite-loop video carousel with side-peeks, arrows, and dots.
- Full-screen hamburger overlay menu.
- Scroll-reveal animations; responsive; accessible.

## FIX THESE (priorities)
1. NAVIGATION must match Wix exactly: Home · Services · About Us · Our Team ·
   Contact, plus the gold "Schedule Consultation" button.
   - Remove "Property Management" and "Concierge Maintenance" as top-level items.
   - Add "Services" to the nav. On my Wix, check how Services behaves (dropdown vs.
     its own landing page) and replicate it. Property Management and Concierge
     Maintenance should live UNDER Services, not in the top bar.
   - Nav is defined in `src/data/site.js` (the `nav` array) and rendered in
     `src/components/Header.astro` (desktop nav + overlay). Update both.
2. BUILD the missing Services page (route `/services`) to match my Wix /services
   page — visit it live and replicate its layout and copy.
3. Then compare EVERY page against my Wix site side by side and fix any layout,
   spacing, section-order, or copy mismatches. Match Wix, not the current build,
   wherever they differ.

## Notes
- Placeholder photos/videos/headshots/contact info are intentional — leave them as
  clearly-swappable placeholders unless I give you real assets.
- Existing pages: Home, /property-management, /concierge-maintenance, /about,
  /team, /contact, /schedule.
- The Wix routes for reference: /services, /property-management,
  /concierge-maintenance, /about-our-story (About Us), /about-our-story-1 (Our Team),
  /contact, /schedule-consultation.

Start by running `npm run dev`, open my Wix site alongside it, and fix #1 and #2 first.