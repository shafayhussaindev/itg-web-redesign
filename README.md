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

```
src/
  components/
    layout/        Header (shared nav), Footer, NavSearch
    sections/      Home page sections
    ui/            shadcn primitives
  pages/           Route entry points
  tier1/           Solutions, Products, Services, Industries, Company
                   — their own components, data and stylesheets
  hooks/           useLenis, scroll and counter animations
  assets/          Logos and brand imagery
public/            Static files served as-is (icons, video, photography)
```

The home page is built from `src/components/sections`; the tier-1 pages live
under `src/tier1` with their own scoped stylesheets, and share the site header
through `src/tier1/Tier1Route.tsx`.

## Brand

Palette tokens are defined once in `src/index.css` and mirrored for the tier-1
scope in `src/tier1/styles/index.css`:

- **Navy** `#0D2140` — all filled actions (`--btn-navy`)
- **Accent blue** `#3D6FB4`, lightened to `#A8C6EA` on dark surfaces — headings,
  rules and diagram marks
- **Teal** `#0D9488` (deep `#0F766E`, `#8FE3D9` on dark surfaces) — icon tiles, checkmarks and bullets
- Brand red `#E5001E` is reserved for the logo and never used in UI
