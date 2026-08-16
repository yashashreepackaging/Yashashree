# Yashashree Packaging — Next.js site

Same visual design as the original HTML site, rebuilt in Next.js (App Router) with Framer Motion animations and Lenis smooth scrolling on everything: header shrink/mobile menu, hero entrance + tilt logo, scroll-triggered reveals, staggered grids, hover lifts, and an animated WhatsApp button.

## Run locally (Windows)

```
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Next.js (auto-detected). No env vars needed.
4. Deploy.

Or from the CLI:

```
npm install -g vercel
vercel
```

## Structure

- `app/` — layout, global CSS (unchanged visual styles), page assembly
- `components/` — one component per section, plus `Reveal.jsx` / `Stagger.jsx` (reusable animation wrappers) and `SmoothScroll.jsx` (Lenis)
- `public/images/` — all original images
