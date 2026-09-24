# ITG Technologies — Corporate Website

Marketing site for ITG Technologies: AI-powered enterprise software, automation,
sustainability intelligence and digital experience platforms.

## Stack

- **React 18** + **TypeScript**, built with **Vite**
- **Tailwind CSS** with shadcn/ui components
- **React Router** for routing
- **GSAP** for timeline animation, **Lenis** for smooth scrolling

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:8080.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the project |
| `npm run test` | Run the Vitest suite once |

## Layout

The code is organised the same way the site is: home, tier 1 (the five
top-level pages), tier 2 (the pages under each drop-down), then contact and
legal. Every page folder holds that page's components **and** its stylesheet.

```
src/
  App.tsx            All routes, grouped home / tier 1 / tier 2 / other
  content/           ALL editable copy (see content/README.md)
    site.js          Menu bar + footer
    home.js · contact.js
    tier1/           solutions · platforms · services · industries · company
    tier2/           platform-detail · service-detail · industry-detail
      solutions/     one file per solution page + shared solution-detail.js
  pages/
    home/            HomePage.tsx + sections/
    tier1/
      shared/        Tier1Route (header/footer + base.css), CtaLabel, WhyITG, hooks
      solutions/  platforms/  services/  industries/  company/
    tier2/
      shared/        base.css (the tier-2 foundation), useHashScroll
      solutions/  platforms/  services/  industries/
    contact/         Contact page
    legal/           Terms, Privacy, LegalPage
    NotFound.tsx
  components/
    layout/          Header (shared nav), Footer
    ui/              shadcn primitives
    icons/           Material Symbols wrapper
  hooks/  lib/  contexts/   Site-wide helpers
public/              ALL images, video and icons, served as-is.
  assets/            Referenced by path, e.g. '/assets/logo-trimmed.png'
```

The home and legal pages use Tailwind. The tier-1 pages use hand-written CSS
scoped to `.tier1-site`, loaded through `pages/tier1/shared/Tier1Route.tsx`.
The tier-2 pages and Contact share `pages/tier2/shared/base.css`, and each adds
its own stylesheet from its folder.

## Brand

Palette tokens are defined once in `src/index.css` and mirrored for the tier-1
scope in `src/pages/tier1/shared/base.css`:

- **Navy** `#0D2140` — all filled actions (`--btn-navy`)
- **Accent blue** `#3D6FB4`, lightened to `#A8C6EA` on dark surfaces — headings,
  rules and diagram marks
- **Teal** `#0D9488` (deep `#0F766E`, `#8FE3D9` on dark surfaces) — icon tiles, checkmarks and bullets
- Brand red `#E5001E` is reserved for the logo and never used in UI
