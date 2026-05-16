# Vellum & Vine

A type-led branding and design studio website — Lisbon, Portugal.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Generation fingerprint

| Axis | Pick |
|---|---|
| Archetype | **F — Type Editorial** (words ARE the product) |
| Style | S6 — Fashion Editorial |
| Voice | V2 — Intellectual Editorial |
| Header | center-logo-split |
| Footer | FT2 — Asymmetric Editorial |
| Service cards | CV2 — Oversized Number Minimal |
| Hero | H1 — Giant two-line manifesto, typographic (T7) |
| Contact | CT3 — Type-only |
| About | AB4 — Type-only manifesto |
| CTA | CTA1 — Centered oversized type |
| Palette | ink-on-vellum, oxblood-wine accent |
| Asset mode | prompt-only (images via `lib/image-fallback`) |
| Build mode | landing-only (no admin) |

## Pages

`/` · `/services` · `/services/[slug]` · `/work` · `/about` · `/contact` · `/privacy` · `/terms`

## Notes

- The contact form composes a pre-addressed email to the studio — no backend
  is wired (landing build). Connect a form handler to upgrade it.
- Background imagery is rendered as editorial colour fields via
  `lib/image-fallback`. Drop real photography into `siteConfig` slots, or set
  `UNSPLASH_ACCESS_KEY`, to replace them.
- The build skill's industry gate misdetected "retail" — Vellum & Vine is a
  creative-services studio with no products, so no cart/checkout was built.
