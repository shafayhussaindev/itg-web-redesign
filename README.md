# ITG Technologies — Corporate Website

Marketing site for ITG Technologies. React 18 + JavaScript (JSX), built with Vite,
styled with Tailwind (home and legal pages) and plain CSS (everything else),
routed with React Router, smooth scrolling by Lenis, GSAP for the home hero.
No backend: all content is static and lives in `src/data/`.

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:8080 (updates as you save) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the project |
| `npm run test` | Run the Vitest suite once |

## Where things live

```
src/
  main.jsx            starts the app, loads styles/global.css
  App.jsx             wraps the site in the router
  routes/             EVERY URL — AppRoutes.jsx (with a map at the top) + oldAddresses.js (redirects)
  layouts/            MainLayout.jsx (navbar + footer around every page),
                      LandingPageLayout.jsx (wrapper for /solutions /platforms /services /industries /company)
  pages/              one folder per page; the page file sits at the top, its pieces in sections/
    Home/  Solutions/  Platforms/  Services/  Industries/  Company/  Contact/  Legal/
    ItemPage/         the ONE template behind all 90 item pages (e.g. /esg-solutions/carbon-circularity)
  components/
    navigation/       Navbar, Footer, BackToTop
    common/           CookieBanner, MeasurementManager, RedirectTo, Icons (Material Symbols)
    sections/         blocks shared by several landing pages (CategoryCards, WhyITG, CtaLabel)
    ui/               shadcn/ui primitives (lowercase file names are the shadcn convention)
  data/               ALL the words, menus and image paths — see src/data/README.md
  styles/             global.css, landing-pages.css, detail-pages.css, detail-pages-theme.css
  hooks/              reusable React hooks (useLenis, useInView, useHashScroll, …)
  lib/                small helpers (analytics, cookie consent, contact links, class names)
public/images/<section>/   every photo and video
```

**Page names.** Each section has three levels. Your spreadsheets call them tiers:

| Tier | Example URL | Page file |
| --- | --- | --- |
| Tier 1: landing page | `/solutions` | `pages/Solutions/SolutionsPage.jsx` |
| Tier 2: detail page | `/esg-solutions` | `pages/Solutions/SolutionDetailPage.jsx` (one template for all six solutions) |
| Tier 3: item page | `/esg-solutions/carbon-circularity` | `pages/ItemPage/ItemPage.jsx` (one template for all items in all four sections) |

## How do I…

**…change a page's text?** Search for a few of its words (`Ctrl+Shift+F` in
VS Code). They are in one file under `src/data/`. `src/data/README.md` has a
table of which file holds which page, and a worked example.

**…change a page's hero?**
- Words: the page's data file (for `/esg-solutions/carbon-circularity`, the `carbon-circularity` block in `src/data/solutions/esg-solutions.js`).
- Photo: the `image:` field in that same file.
- Layout: the page template (`pages/ItemPage/ItemPage.jsx`, the `<section className="sd-hero">`).
- Styling: `.sd-hero` rules in `src/styles/detail-pages.css`, with the site-wide look in `src/styles/detail-pages-theme.css`.

**…change an image?** Put the file in `public/images/<section>/` and write its
path without `public` in the data file: `'/images/solutions/cat-ai.jpg'`. The live
site caches images for a year, so use a **new file name** for a changed image.

**…change global colours or fonts?**
- Home and legal pages: CSS variables at the top of `src/styles/global.css`, plus `tailwind.config.js`.
- Landing pages: the `.tier1-site` variables at the top of `src/styles/landing-pages.css`.
- Detail and item pages: they use the global variables.

Fonts are loaded in `index.html`.

**…add a component?**
- Used by one page only: put it in that page's `sections/` folder.
- Shared by several pages: put it in `src/components/sections/`, or `src/components/common/` if it isn't a page section.
- File names are PascalCase, e.g. `PricingTable.jsx`.

**…add a new detail or item page?** Add an entry to the right data file.
The page and its URL appear automatically, because routes are generated from
the data. Add its id to `src/data/site/navbar-tier3.js` to show it in the menu.
See `src/data/README.md` → Common jobs.

**…add a completely new page (new URL, new layout)?**
1. Create `src/pages/Careers/CareersPage.jsx`.
2. Add a line to `src/routes/AppRoutes.jsx`:
   `const CareersPage = lazy(() => import("@/pages/Careers/CareersPage"));` and
   `<Route path="/careers" element={<CareersPage />} />`.
3. Put its words in `src/data/`.

**…rename a URL?** Change it, then add the old address to BOTH
`src/routes/oldAddresses.js` and the `redirects` in `vercel.json`, so shared
links keep working.

## Good to know

- Imports use `@/…` for anything in `src/` (e.g. `@/components/navigation/Navbar`), and `./…` inside the same folder.
- Landing pages load `landing-pages.css` **before** their own stylesheet, and the import order is deliberate. Keep `LandingPageLayout` as the first import in those page files.
- Tailwind only scans the files listed under `content` in `tailwind.config.js` (home, legal, contact, detail pages, shared components). The landing-page files use plain CSS classes, not Tailwind; add a new Tailwind-styled file to that list.
- After a change, run `npm run build` **and** open the page in the browser. A passing build doesn't prove the page renders.

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

## Brand

- **Navy** `#0D2140`: all filled actions (`--btn-navy`)
- **Accent blue** `#3D6FB4`, lightened to `#A8C6EA` on dark surfaces: headings, rules and diagram marks
- **Teal** `#0D9488` (deep `#0F766E`, `#8FE3D9` on dark surfaces): icon tiles, checkmarks and bullets
- **Brand red** `#E5001E` is reserved for the logo and never used in UI
