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

## Analytics

Set `VITE_GA_MEASUREMENT_ID` to your Google Analytics 4 web stream ID (for
example, `G-XXXXXXXXXX`) in `.env.local` for local development and in the
deployment environment for production. Without a valid ID, no analytics tag
loads. The tag loads only after a visitor chooses Analytics in the cookie
settings, and page views are sent for client-side route changes. A visitor can
withdraw consent through the footer settings, which stops future tracking and
removes accessible Google Analytics cookies. The integration does not collect
form fields or URL query parameters.

In the GA4 web stream's Enhanced Measurement settings, turn off **Page changes
based on browser history events** to avoid duplicate page views; this site
sends those page views itself.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the project |
| `npm run test` | Run the Vitest suite once |

## Where to edit

| Change | Open |
| --- | --- |
| Home text and media | `src/data/shared/home.js` |
| Navigation, footer, cookie text | `src/data/shared/site.js`, `navbar-tier2.js`, `navbar-tier3.js` |
| Six solution topics and their child pages | `src/data/solutionsData.ts` → `src/data/solutions/` |
| Six platform topics and their child pages | `src/data/platformsData.ts` → `src/data/platforms/platform-detail.js` |
| Five service topics and their child pages | `src/data/servicesData.ts` → `src/data/services/service-detail.js` |
| Five industry topics and their child pages | `src/data/industriesData.ts` → `src/data/industries/industry-detail.js` |
| Page layouts | `src/pages/` → the matching site section |
| Site routes and redirects | `src/routes/AppRoutes.tsx`, `src/lib/old-addresses.ts` |
| Shared navigation, footer and cookie banner | `src/components/layout/`, `src/components/modals/` |
| Photos, logos and videos | `public/images/` |

Tier 1 is a section landing page (`SolutionsIndex`, for example). Tier 2 is a
topic page (`SolutionDetail`). Tier 3 is an individual capability or product
(`SolutionSubDetail`). Each family uses one Tier 2 and one Tier 3 template,
filled by its data files. The current public URLs are defined in `AppRoutes.tsx`.

```
public/images/       Site media grouped by section
src/components/      Reusable UI, layout and cookie banner
src/data/            Editable content grouped by section
src/pages/           Home, Company, Contact, four page families, Legal
src/routes/          URL definitions
src/types/           Content types
src/App.tsx          Providers and router setup
src/index.css        Global styles
src/main.tsx         React entry point
```

The home and legal pages use Tailwind. The landing pages use CSS scoped to
`.tier1-site` in `src/components/common/tier1/base.css`. Topic pages and Contact
share `src/components/common/tier2/base.css` plus a local page stylesheet.

## Brand

Palette tokens are defined once in `src/index.css` and mirrored for the tier-1
scope in `src/components/common/tier1/base.css`:

- **Navy** `#0D2140` — all filled actions (`--btn-navy`)
- **Accent blue** `#3D6FB4`, lightened to `#A8C6EA` on dark surfaces — headings,
  rules and diagram marks
- **Teal** `#0D9488` (deep `#0F766E`, `#8FE3D9` on dark surfaces) — icon tiles, checkmarks and bullets
- Brand red `#E5001E` is reserved for the logo and never used in UI
