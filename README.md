# ITG Technologies — Corporate Website

Marketing site for ITG Technologies. React 18 + JavaScript (JSX), built with Vite,
routed with React Router, styled with Tailwind (home, legal and the site chrome)
and plain CSS (everything else). Lenis gives the smooth scrolling, GSAP the home
hero entrance, Lottie the /solutions diagram.

**There is no backend.** Every word, menu entry and image path is a JavaScript
object in `src/data/`, bundled at build time. The only outside calls are Google
Fonts, Google Analytics (with consent) and the contact form's optional endpoint.

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
| `npm test` | Run the Vitest suite once (`npm run test:watch` to keep it running) |

## Project structure

```
index.html                 page shell: SEO defaults, fonts, the icon-font subset
src/
  main.jsx                 starts React, loads styles/global.css
  App.jsx                  router + loading fallback
  routes/AppRoutes.jsx     EVERY URL, with a map at the top
  layouts/
    MainLayout.jsx         navbar, footer, cookie banner, back-to-top around every page
    LandingPageLayout.jsx  wrapper for the five landing pages (title, smooth scroll, their CSS)
  pages/                   one folder per area of the site
    Home/                  HomePage.jsx + sections/
    Solutions/             SolutionsPage.jsx (/solutions), SolutionDetailPage.jsx (6 pages), sections/
    Platforms/             PlatformsPage.jsx, PlatformDetailPage.jsx (6 pages), sections/
    Services/              ServicesPage.jsx, ServiceDetailPage.jsx (5 pages), sections/
    Industries/            IndustriesPage.jsx, IndustryDetailPage.jsx (5 pages), sections/
    Company/               CompanyPage.jsx + sections/
    ItemPage/              ItemPage.jsx — the ONE template behind all ~90 item pages
      custom/              the item pages with a custom middle section (list in custom/index.jsx)
    Contact/  Legal/  NotFound.jsx
  components/              pieces used on more than one page
    navigation/            Navbar, MegaMenu (desktop drop-down), MobileMenu, Footer, BackToTop
    common/                Icons (Material Symbols), CookieBanner, MeasurementManager (analytics)
    sections/              blocks shared by landing pages: CategoryCards, WhyITG, CtaLabel
    ui/                    shadcn/Radix primitives used by the navbar (button, navigation-menu, collapsible)
  data/                    ALL the words — see src/data/README.md
    navigation/            the menu bar: navigation.js (Tier 1), tier2.js, tier3.js
    items/                 item-pages.js (builds the ~90 item pages), item-page.js (their shared labels)
    site/                  home.js, site.js (footer, cookie popup), contact.js
    solutions/ platforms/ services/ industries/ company/
  styles/                  global.css (colours, Tailwind), landing-pages.css, detail-pages*.css
  hooks/                   useLenis, useHashScroll, useInView, useAnimationActivity, useFrostClip
  lib/                     analytics, cookie consent, contact links, cn()
public/images/<section>/   every photo, video and logo (referenced as '/images/…')
```

Not part of the site: `media-originals/` (source artwork), `output/` and `tmp/`
(PDF side work), `dist/` (build output, git-ignored).

## How pages are made

Each area of the site has three levels. The spreadsheets call them tiers:

| Tier | Example URL | Page file | Words |
| --- | --- | --- | --- |
| 1: landing page | `/solutions` | `pages/Solutions/SolutionsPage.jsx` | `data/solutions/landing-page.js` |
| 2: detail page | `/esg-solutions` | `pages/Solutions/SolutionDetailPage.jsx` (one template, 6 pages) | `data/solutions/esg-solutions.js` |
| 3: item page | `/esg-solutions/sbti-management` | `pages/ItemPage/ItemPage.jsx` (one template, ~90 pages) | the item's entry in its Tier 2 file |

Only the fixed pages are written out in `routes/AppRoutes.jsx`. The Tier 2 and
Tier 3 routes are generated from the data: `AppRoutes` loops over the page lists
the data files export (`solutionPages`, `platformPages`, `servicePages`,
`industryPages`, `itemPages`) and hands each page its data as the `page` prop.
**Add an entry to a data file and its page exists.**

Item pages have no words of their own. `data/items/item-pages.js` builds each
one from the item's entry in its Tier 2 file (a solution capability, platform
product, service or industry segment) plus its parent's outcomes and steps, so
the menu, the Tier 2 page and the item page can never disagree.
`pageExtras` in `data/items/item-page.js` adds things to ONE item page (its own
photo, hero line, hero buttons, contact wording). Some items also swap the standard
middle of the page for a custom block; those are listed in `pages/ItemPage/custom/index.jsx`.
E-commerce & Marketplaces and Generative Media Production share one such layout,
`CapabilityPageContent.jsx`; each page's words are in its own file in `data/solutions/`.

## Navigation

```
Tier 1  data/navigation/navigation.js   the four menus: label, landing page, "View All" text
Tier 2  data/navigation/tier2.js        which detail pages each menu lists, in order
Tier 3  data/navigation/tier3.js        which items appear under each detail page
          → URL  <tier 2 href>/<item id>
          → page ItemPage.jsx
```

Names in the menu are read from the pages themselves, so renaming a page renames
its menu entry. `components/navigation/Navbar.jsx` renders the bar, `MegaMenu.jsx`
the desktop drop-down, `MobileMenu.jsx` the small-screen menu. Every link is a
plain `<a href>`, so each click loads the new page from the server.

## Finding things

| To change… | Open |
| --- | --- |
| Any sentence you can see | Search a few of its words (`Ctrl+Shift+F`); it is in one file under `src/data/` |
| Menu labels, "View All" text, Company link, Contact us button | `src/data/navigation/navigation.js` |
| Which pages a menu lists (Tier 2) | `src/data/navigation/tier2.js` |
| Which items appear under a page (Tier 3) | `src/data/navigation/tier3.js` |
| How the menu looks or behaves | `src/components/navigation/Navbar.jsx`, `MegaMenu.jsx`, `MobileMenu.jsx` |
| Footer text, cookie popup text | `src/data/site/site.js` |
| Home page text | `src/data/site/home.js` |
| The `/solutions` landing page | words `src/data/solutions/landing-page.js`, layout `src/pages/Solutions/SolutionsPage.jsx` |
| One solution page, e.g. `/esg-solutions` | `src/data/solutions/esg-solutions.js` (file name = URL) |
| One platform / service / industry page | `src/data/platforms/platform-detail.js`, `services/service-detail.js`, `industries/industry-detail.js` |
| An item page | the item's block in its Tier 2 file (search for its id) |
| Labels on every item page ("Back to…") | `src/data/items/item-page.js` |
| Layout of all item pages | `src/pages/ItemPage/ItemPage.jsx` |
| Filled button colour everywhere | `--btn-navy` in `src/styles/global.css` |
| The navbar's shadcn button | `src/components/ui/button.jsx` |
| Global colours | the `:root` block at the top of `src/styles/global.css` (used by every page) |
| Fonts | `index.html` (loading) and `tailwind.config.js` (`fontFamily`) |
| One page's styling | the `.css` file in that page's folder |
| All landing pages / all detail pages | `src/styles/landing-pages.css` / `src/styles/detail-pages.css` and `detail-pages-theme.css` |
| Legal text | `src/pages/Legal/PrivacyPolicy.jsx`, `TermsAndConditions.jsx` |
| Where contact-form messages go | `connect` in `src/data/site/contact.js` |

## Adding things

**A new item page** (e.g. a new ESG capability)
1. Copy an item block in `src/data/solutions/esg-solutions.js`, give it a new `id`, change the words.
2. Add `{ id: "your-new-id" },` under `/esg-solutions` in `src/data/navigation/tier3.js`.

The page `/esg-solutions/your-new-id` now exists. Platforms, services and
industries work the same way in their own Tier 2 files.

**A new Tier 2 page**
- Solution: create `src/data/solutions/<id>.js` (copy an existing one) and add it to the list in `src/data/solutions/solution-pages.js`.
- Platform: add it to `platforms` in `src/data/platforms/landing-page.js`.
- Service / industry: add a category in `service-detail.js` / `industry-detail.js` and its URL in `serviceCategoryPaths` / `industryPaths`.
- Then add a row with its `href` to that menu in `src/data/navigation/tier2.js`.

**A completely new page (new URL, new layout)**
1. Create `src/pages/Careers/CareersPage.jsx`, and its words in `src/data/careers/`.
2. In `src/routes/AppRoutes.jsx` add
   `const CareersPage = lazy(() => import("@/pages/Careers/CareersPage"));` and
   `<Route path="/careers" element={<CareersPage />} />`.
3. If it uses Tailwind classes, add its path to `content` in `tailwind.config.js`.
4. Link to it, e.g. from `extraLinks` in `src/data/navigation/navigation.js` or the footer in `src/data/site/site.js`.

**A new section on an existing page**: create `src/pages/<Page>/sections/NewThing.jsx`,
put its words in that page's data file as a new `export const`, and place
`<NewThing />` in the page file.

**A new component**: used by one page → that page's `sections/` folder. Shared by
several pages → `src/components/sections/` (page blocks) or `src/components/common/`.
File names are PascalCase, e.g. `PricingTable.jsx`.

**A new icon**: icons are Material Symbols names (`icon: 'neurology'`). A name not
used anywhere yet must be added to the `icon_names=` list in `index.html`, or it
shows as text.

**A new or changed image**: put it in `public/images/<section>/` and write its path
without `public`: `'/images/solutions/cat-ai.jpg'`. The live site caches images
for a year, so give a changed image a **new file name**.

## Good to know

- Imports use `@/…` for anything in `src/` and `./…` inside the same folder.
- Landing pages load `landing-pages.css` **before** their own stylesheet, and the order is deliberate. Keep `LandingPageLayout` as the first import in those page files.
- Detail pages load `detail-pages.css`, then their own stylesheet, then `detail-pages-theme.css`. Keep that order too.
- Tailwind only scans the files listed under `content` in `tailwind.config.js`. The landing pages and data files use plain CSS class names; add a new Tailwind-styled file to that list.
- After a change, run `npm run build` **and** open the page in the browser. There is no type checker, so a typo can build fine and still blank the page.
- Don't edit `node_modules/`, `dist/` or `package-lock.json` by hand.

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
