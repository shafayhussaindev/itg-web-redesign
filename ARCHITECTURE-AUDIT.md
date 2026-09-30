# Architecture Audit — Phase 1

*2026-09-30. Read-only audit: this file is the only thing added and nothing else was changed. It's a temporary working document; delete it after the refactor.*

## 0. Baseline (before any change)

| Check | Result |
|---|---|
| `npm run lint` | 0 errors, 2 warnings (`react-refresh/only-export-components` in `components/ui/navigation-menu.jsx` and one more) |
| `npm test` | 10 files, 32 tests pass |
| `vite build` | succeeds in ~6s (large-chunk warning only) |
| Git | **36 uncommitted changes** in the app repo, including the deletions of `src/routes/oldAddresses.js` and `components/common/RedirectTo.jsx`, edits to `vercel.json`, and 6 new untracked files (Rilits, Traceme, Digital Showroom data + custom blocks). **These must be committed before the refactor starts**, so every refactor step can be compared and reverted. |

Redirects: with `oldAddresses.js` gone, there are **no redirects** in the current working tree. `vercel.json` has only the SPA rewrite. If the old URLs (`/ai-intelligence`, `/products`, …) should still forward, that has to be restored first. It's a separate decision from the refactor.

---

## 1. Application entry

```text
index.html  (#root, fonts, icon font subset, SEO meta)
 → src/main.jsx         createRoot(<App/>), imports styles/global.css
 → src/App.jsx          <BrowserRouter><Suspense><AppRoutes/></Suspense>
 → src/routes/AppRoutes.jsx
 → layouts/MainLayout.jsx   Navbar · <Outlet/> · Footer · BackToTop · CookieBanner · MeasurementManager
 → page component (all lazy() except HomePage)
```

There are no context providers, no global state library and no API layer.

## 2. Routing (`src/routes/AppRoutes.jsx`, the only place routes exist)

| Pattern | Source | Component |
|---|---|---|
| `/` | fixed | `pages/Home/HomePage` |
| `/solutions` `/platforms` `/services` `/industries` `/company` | fixed | `<Section>Page` |
| `/<solution id>` ×6 | `solutionPages.map` | `SolutionDetailPage page={…}` |
| `/<platform href>` ×6 | `platformPages.map` | `PlatformDetailPage` |
| `/<service href>` ×5 | `servicePages.map` | `ServiceDetailPage` |
| `/<industry href>` ×5 | `industryPages.map` | `IndustryDetailPage` |
| `/<parent href>/<item id>` ×~90 | `itemPages.map` | `ItemPage` |
| `/contact` `/terms` `/privacy` | fixed | Contact, Legal |
| `*` | fixed | `NotFound` |

None of the routes use `:param` placeholders; each generated page is its own static route with its data passed in as a prop. Every link on the site is a plain `<a href>`, so each navigation is a full page load.

## 3. Navigation: Tier 1 → Tier 2 → Tier 3 → URL → Page

```text
TIER 1  hard-coded JSX in Navbar.jsx: "Solutions" "Platforms" "Services" "Industries"
        (label + /solutions href + "View All …" text, written out 4× desktop + 4× mobile)
        + data: site.js mainNav.extraLinks (Company), mainNav.cta (Contact us)
  ↓
TIER 2  order/description/overviewLabel: data/site/navbar-tier2.js   { href }
        name: read from the page object (solutionPages[].name, platformPages[].title, …)
  ↓
TIER 3  order: data/site/navbar-tier3.js   { [tier2 href]: [{ id }] }
        name/line: read from the item (capabilities[].title/subtitle, products[].name/description, …)
        URL = `${tier2 href}/${id}` (or a row's own href, e.g. Data Privacy → #overview)
  ↓
data/site/site.js → withChildren() merges the three → mainNav
  ↓
Navbar.jsx → MegaMenu (desktop, Radix NavigationMenu) / Collapsible (mobile)
  ↓
<a href> → full load → AppRoutes → ItemPage / *DetailPage
```

Problems found:

- **Tier 1 isn't data.** Labels, hrefs and "View All X" are written out 8 times in JSX, along with per-menu widths.
- **Mobile nav repeats one block four times,** with four near-identical state objects and toggle functions (`openMobileSolutions`, `openMobilePlatforms`, …).
- **`Navbar.jsx` is 657 lines:** MegaMenu, desktop bar and mobile menu all in one file.
- **The builder `withChildren()` lives in `site.js`,** alongside the footer and cookie text.

## 4. Page families

| Family | Page files | Sections | Data | CSS |
|---|---|---|---|---|
| Home | `Home/HomePage.jsx` | 10 in `Home/sections/` | `data/site/home.js` | Tailwind + `global.css` |
| Solutions | `SolutionsPage`, `SolutionDetailPage` | Hero, HowItWorks(+Lottie), SolutionCategories, CtaBand | `data/solutions/*` | `landing-pages.css` / `detail-pages*.css` |
| Platforms | `PlatformsPage` (430 lines, most sections inline), `PlatformDetailPage` | PlatformEcosystem, HowItWorks | `data/platforms/*` | `platforms.css`, `platform-detail.css` |
| Services | `ServicesPage`, `ServiceDetailPage` | 6 sections + icons map | `data/services/*` | `services.css`, `service-detail.css` |
| Industries | `IndustriesPage`, `IndustryDetailPage` | 6 sections + icons map | `data/industries/*` (+ grid from `data/solutions/landing-page.js`) | `industries.css`, `industry-detail.css` |
| Company | `CompanyPage` | 10 sections + icons map | `data/company/landing-page.js` | `company.css` |
| Items | `ItemPage/ItemPage.jsx` | 7 custom blocks in `custom/` | `data/itemPages.js` + parent files + `data/site/item-page.js` | `item-page.css`, `custom/*.css` |
| Contact | `Contact/ContactPage.jsx` (484 lines) | inline | `data/site/contact.js` | `contact.css` |
| Legal | `Legal/{LegalPage,PrivacyPolicy,TermsAndConditions}.jsx` | — | **hard-coded `SECTIONS`** | Tailwind |

## 5. Data architecture

```text
data/
  site/        home.js · site.js (nav builder + footer + cookie) · navbar-tier2.js · navbar-tier3.js
               contact.js · item-page.js (item labels, families, pageExtras)
  solutions/   landing-page.js · solutionPages.js (builder) · solution-detail.js (labels)
               6 page files · 2 item extras (mobile-/enterprise-app-development)
  platforms/   landing-page.js (the 6 platforms) · platform-detail.js (builder + labels + products)
               8 product files (aullect, amaanah, svitch, rilits, traceme, digital-showroom,
               law-into-action, consumer-goods-intelligence)
  services/    landing-page.js · service-detail.js (builder + labels + all 5 categories)
  industries/  landing-page.js · industry-detail.js (builder + labels + all 5) · 2 item extras
  company/     landing-page.js
  itemPages.js (builder: all ~90 item pages)
```

Content is cleanly separated from JSX throughout, apart from Legal, the Tier-1 nav labels and the PlatformEcosystem node labels.

## 6. Dynamic builders

1. `solutions/solutionPages.js`: imports the 6 files in **menu order** and derives each item's `focus` from `coreCapabilities`.
2. `platforms/platform-detail.js`: maps `landing-page.js → platforms` and attaches `products` (some pulled from product files).
3. `services/service-detail.js`, `industries/industry-detail.js`: `categories.map(c => ({ ...c, href: paths[c.id] }))`.
4. `itemPages.js`: normalises the four families into parents, flattens their items, applies `pageExtras` from `site/item-page.js`, builds siblings and the contact link, and exports `itemPages` + `itemLabel()`.
5. `site/site.js → withChildren()`: the navigation (section 3).

**Custom item pages:** `ItemPage.jsx` checks 7 hard-coded paths (`isLia`, `isCgi`, `isSvitch`, …) and renders the matching `custom/*Content.jsx`. Nothing in the file layout shows which items are "custom"; you only find out by reading the booleans.

## 7. Styling architecture

| Layer | File(s) | Scope |
|---|---|---|
| Tokens + Tailwind | `styles/global.css` `:root` | every page |
| Tailwind config | `tailwind.config.js` | Home, Legal, navbar/footer, bits of detail pages |
| Landing base | `styles/landing-pages.css` (`.tier1-site`) | 5 landing pages. **Re-declares the colour tokens**: identical values, except `--border`, which is an rgba here and an HSL triplet in global.css (a different meaning) |
| Landing per-page | `pages/<X>/<x>.css` | one page each |
| Detail base → family → theme | `detail-pages.css` → `<family>-detail.css` / `item-page.css` / `contact.css` → `detail-pages-theme.css` | 22 detail + ~90 item pages + contact. **The import order is load-bearing** |

Class prefixes kept from older names (`.tier1-site`, `.solution-detail` used by *all* detail families, `pp-`/`pc-` for platforms) are understood internally but confuse newcomers. Renaming them would touch thousands of selectors, so the risk is high and the payoff low.

## 8. Reusable components

| Component | Used by |
|---|---|
| `navigation/Navbar`, `Footer`, `BackToTop` | every page |
| `common/CookieBanner`, `MeasurementManager` | every page |
| `common/Icons` (`MSym`) | almost everything |
| `sections/CategoryCards` | /solutions, /platforms |
| `sections/WhyITG` | /solutions, /services |
| `sections/CtaLabel` | landing-page CTAs |
| `ui/button`, `navigation-menu`, `collapsible` | Navbar only |
| `ui/spotlight` | Home hero only (feature-specific, but lives in `ui/`) |

## 9. Problems found (not fixed)

| # | Problem | Severity |
|---|---|---|
| P1 | Tier-1 nav hard-coded 8× in `Navbar.jsx`; mobile block ×4 with 4 duplicate state/toggle pairs | high (clarity) |
| P2 | `Navbar.jsx` 657 lines mixes 3 components | medium |
| P3 | Nav data split across `site/navbar-tier2.js`, `site/navbar-tier3.js` and a builder inside `site/site.js` | medium |
| P4 | Custom item pages hidden behind 7 path booleans in `ItemPage.jsx` | medium |
| P5 | Item-page data split: `data/itemPages.js` (root) + `data/site/item-page.js` | low |
| P6 | Colour tokens declared twice (`global.css`, `landing-pages.css`) | low |
| P7 | File naming mixes kebab-case (`landing-page.js`, `item-page.js`) and camelCase (`solutionPages.js`, `itemPages.js`) | low |
| P8 | `ui/spotlight.jsx` is Home-hero-only but sits in the shared `ui/` folder | low |
| P9 | `PlatformsPage.jsx` (430 lines) builds most sections inline, unlike every other landing page | low; extracting them risks visual drift |
| P10 | Legal copy hard-coded in JSX | low |
| P11 | `SolutionDetailPage` has its own hash-scroll instead of `useHashScroll`. Documented as intentional (it also opens the accordion) | keep |
| P12 | Two components named `HowItWorks` (Solutions and Platforms) | low; they're page-scoped and different |
| P13 | Dead: `public/assets/` (4 empty dirs); `images/industries/ind-enterprise.jpg`, `images/services/ind-government.jpg` (no references) | low |
| P14 | `CLAUDE.md` describes paths that no longer exist (`src/content/`, `pages/tier1/`, `Tier1Route`, `RedirectTo`, `oldAddresses`) | medium (misleads) |
| P15 | `output/`, `tmp/` untracked and unignored; `media-originals/` is tracked (includes `hero.mp4` source) | low |
| P16 | 2 lint warnings | low |

What is **not** a problem: the data-driven builders, the route table, the page/sections/data split, `hooks/`, `lib/`, and `public/images/<section>/`. These already match the requested target and should stay.

---

## 10. Proposed target architecture

This is a small set of changes, because most of the codebase is already where it should be.

```text
src/
├── main.jsx · App.jsx                  (unchanged; no app/ folder or providers.jsx: nothing to provide)
├── routes/AppRoutes.jsx                (unchanged; still the single route table)
├── layouts/                            (unchanged)
├── components/
│   ├── navigation/
│   │   ├── Navbar.jsx                  desktop bar only, renders navigation data   ← P1/P2
│   │   ├── MegaMenu.jsx                extracted from Navbar                       ← P2
│   │   ├── MobileMenu.jsx              one loop instead of 4 copies                ← P1/P2
│   │   ├── Footer.jsx · BackToTop.jsx
│   ├── common/                         Icons, CookieBanner, MeasurementManager
│   ├── sections/                       CategoryCards, WhyITG, CtaLabel (shared landing blocks)
│   └── ui/                             button, navigation-menu, collapsible (shadcn)
├── pages/
│   ├── Home/sections/Spotlight.jsx     moved from components/ui               ← P8
│   ├── …                               (Solutions, Platforms, Services, Industries, Company, Contact, Legal unchanged)
│   └── ItemPage/
│       ├── ItemPage.jsx                standard template
│       └── custom/
│           ├── index.js                { '/sourcing/law-into-action': LawIntoActionContent, … }  ← P4
│           └── *Content.jsx
├── data/
│   ├── navigation/                                                         ← P3
│   │   ├── navigation.js               Tier 1 list + CTA + Company link + the builder (was in site.js/Navbar)
│   │   ├── tier2.js                    was site/navbar-tier2.js
│   │   └── tier3.js                    was site/navbar-tier3.js
│   ├── items/                                                              ← P5
│   │   ├── itemPages.js                was data/itemPages.js
│   │   └── itemPageLabels.js           was site/item-page.js
│   ├── site/                           home.js, contact.js, site.js (footer + cookie only)
│   └── solutions/ platforms/ services/ industries/ company/   (unchanged)
├── styles/
│   ├── global.css                      the ONLY place colour tokens are defined   ← P6
│   ├── landing-pages.css               duplicate token block removed (keeps its --border override)
│   └── detail-pages.css · detail-pages-theme.css
├── hooks/ · lib/ · test/               unchanged
```

Root: add `output/` and `tmp/` to `.gitignore`, delete `public/assets/`, and rewrite `CLAUDE.md` to match. `README.md` and `src/data/README.md` get updated for the new paths.

### Deliberately NOT proposed

| Suggested in the brief | Why not |
|---|---|
| `src/app/` + `providers.jsx` | Would add nesting for 2 files; there are no providers |
| `src/assets/images` | Images must stay in `public/` (string paths in data, and no hashing is intended) |
| Per-page `data/` folders inside `pages/` | Would split the one content folder the owner edits; `src/data/README.md` depends on it |
| `components/global/` | Nothing generic enough to belong there; would be an empty category |
| Renaming CSS classes (`.tier1-site`, `.solution-detail`, `pp-`) | Thousands of selectors, high regression risk, no behaviour gain |
| Splitting `PlatformsPage.jsx` sections | Inline sections share refs and state with the page; visual-drift risk. Can be done later if wanted |
| Merging `detail-pages.css` + `detail-pages-theme.css` | The family stylesheets load **between** them; merging changes the cascade |

### Risks that need a decision before Phase 2

1. **Commit the 36 pending changes first** (or tell me they should be discarded). I won't refactor on top of uncommitted work.
2. **Navbar rewrite (P1/P2)** is the only step with real visual/behaviour risk: the dropdowns, mobile accordions and the transparent-over-hero logic. I'd verify it with before/after screenshots at desktop, tablet and mobile, plus clicking every menu.
3. **File naming (P7):** normalising means renaming about 20 data files (kebab → camelCase as the brief asks) and every import. It's mechanical and low-risk, but it changes the paths in `src/data/README.md` that you already use. Keep kebab-case, or switch?
4. **Redirects:** should the old URLs still forward (the redirects were removed in the pending changes)?

### Decisions (owner, 2026-09-30)

1. Pending changes: the owner commits them; Phase 2 starts after that.
2. Naming: keep kebab-case for data files; rename only the camelCase ones (`solutionPages.js`, `itemPages.js`).
3. Navbar split: yes, with before/after screenshot checks.
4. Redirects: removal was intended; old URLs show the 404.

### Phase plan once approved

1. Commit a baseline and take baseline screenshots (Home, 1 landing page, 1 of each detail family, 1 standard + 1 custom item page, Contact, Legal, 404, at 3 widths).
2. Move the nav data into `data/navigation/`, then run lint, tests and build.
3. Split and dedupe the Navbar, then screenshot-compare and click through the menus.
4. Add the custom-item registry and move the item data, then build and check all 7 custom pages.
5. Token dedupe, Spotlight move, dead-file removal, `.gitignore`.
6. Update the docs (README, data README, CLAUDE.md).
7. Full validation: lint, tests, build, every route family, nav tiers, mobile, Lottie, video, form, cookie, analytics wiring, hash scroll, BackToTop, 404.
