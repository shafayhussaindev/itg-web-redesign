# Editing the website's text

Everything you are likely to want to change — headings, paragraphs, button
labels, menu entries, card lists, image filenames — is in **this folder**.
You do not need to open anything else.

---

## Which file do I open?

The folder is split the same way the site is:

```
content/
├─ site.js       menu bar + footer (every page)
├─ home.js       the front page
├─ contact.js    the Contact page
├─ tier1/        the five top-level pages
└─ tier2/        the pages one level down (the drop-down menu pages)
   └─ solutions/ one file per solution page
```

| I want to change…                                  | Open                                           |
| -------------------------------------------------- | ---------------------------------------------- |
| The top menu bar, or the footer                     | `site.js`                                      |
| The front page (the one with the video)             | `home.js`                                      |
| yoursite.com/contact                                | `contact.js`                                   |
| **Tier 1**                                          |                                                |
| yoursite.com/solutions                              | `tier1/solutions.js`                           |
| yoursite.com/platforms                              | `tier1/platforms.js`                           |
| yoursite.com/services                               | `tier1/services.js`                            |
| yoursite.com/industries                             | `tier1/industries.js`                          |
| yoursite.com/company                                | `tier1/company.js`                             |
| **Tier 2**                                          |                                                |
| yoursite.com/artificial-intelligence                | `tier2/solutions/artificial-intelligence.js`   |
| yoursite.com/enterprise-solutions                   | `tier2/solutions/enterprise-solutions.js`      |
| yoursite.com/esg-solutions                          | `tier2/solutions/esg-solutions.js`             |
| yoursite.com/custom-solutions                       | `tier2/solutions/custom-solutions.js`          |
| yoursite.com/industrial-solutions                   | `tier2/solutions/industrial-solutions.js`      |
| yoursite.com/data-privacy-solutions                 | `tier2/solutions/data-privacy-solutions.js`    |
| Shared solution-page labels, delivery steps, email  | `tier2/solutions/solution-detail.js`           |
| The six platform pages (and their products)         | `tier2/platform-detail.js`                     |
| The five Services pages                             | `tier2/service-detail.js`                      |
| The five industry pages                             | `tier2/industry-detail.js`                     |

Inside each file the blocks appear **in the same order as the page**, top to
bottom, with a comment saying which part of the page each one is.

---

## Tier-2 solution pages

Each of the six solution pages has a `solutionPage` block in its content file.
Edit the hero, outcomes, capability descriptions, applications and closing copy
there. AI & Intelligence also reuses its existing `capabilities` and `dpp` blocks.

To enable email enquiries across all six pages, set `contactEmail` in
`solution-detail.js`. Leave it empty to show the Company-page link instead.
No form submission or email service is required: the configured link opens the
visitor's email application with the solution name in the subject.

The six pages, in menu order: Artificial Intelligence, Enterprise Solutions,
ESG Solutions, Custom Solutions, Industrial Solutions, Data Privacy Solutions.
To add or re-order one, change the Solutions menu in `site.js`, the list in
`src/pages/tier2/solutions/solutionPages.ts`, and `solutionCategories` in
`tier1/solutions.js` (the cards on /solutions).

Each page’s address is its `id`, e.g. `id: esg-solutions` → `/esg-solutions`,
and the file is named the same. The old addresses (`/ai-intelligence`,
`/sustainability-compliance`, …) still work: they forward to the new ones.

Capability `id` values match the menu links in `site.js`. If you change an ID,
update the matching Tier 3 `id` in `site.js` too. Those links open the capability and scroll to it.

## Tier-2 platform pages  (the "Platforms" menu, formerly "Products")

There are six platforms: Sourcing, Supply Chain, Contract Lifecycle, Supplier
Info & Risk Management, Product Lifecycle Management and Data Privacy.

- **The list of platforms** — name, short line, card text, image, and the
  product names on each card — is `tier1/platforms.js`. Each platform's
  address is its `id`: `id: 'supply-chain'` → `/supply-chain`.
- **Each platform's page** — headline, overview, tags, and its **products**
  (Tier 3) — is `tier2/platform-detail.js`.

Products are sections on their platform's page and links in the Platforms menu,
e.g. `/supply-chain#aullect`. Keep product `id` values stable. When you move a
product between platforms, move its block in `platform-detail.js` **and** its
name in the `includes` list in `platforms.js`.

A platform with no products yet (Data Privacy, for now) still has a page. Its
menu fly-out shows one "About …" link, and the empty products section is hidden.
Add products to its `products: []` list and they appear everywhere.

The old addresses (`/products` and the five old `…-platforms` category pages)
forward to `/platforms`.

Set `platformDetail.contactEmail` in `platform-detail.js` to enable demo
enquiry emails. Until configured, the button goes to the Contact page.

## Tier-2 service category pages

The five Services pages all live in one file, `service-detail.js` — the
page copy, the individual services and the wording shared across all five.
The same five are also the "Services We Deliver" cards in `tier1/services.js`.

Routes are `/engineering-services`, `/data-management-services`,
`/esg-services`, `/cloud-infrastructure-services` and `/bpo-services`. The old addresses
(`/digital-engineering-services` etc.) forward to the new ones; the two
removed categories (Enterprise Platforms, AI & Advanced) forward to `/services`.
Individual services are sections within these pages, so there are no tier-3
service routes.

Two things to keep in step, both noted at the top of the file:

- the slugs in `serviceCategoryPaths`, because the menu and any link you have
  shared point at them;
- each service `id`, because the menu links to `/<slug>#<id>` and the page
  scrolls to that section. `/cloud-infrastructure-services#hybrid-multicloud`
  is an example.

The four delivery steps shown at the bottom of every service page are in
`serviceDetail.steps`. Edit them once and all five pages change.

Set `serviceDetail.contactEmail` to enable enquiry emails, exactly as for the
solution and product pages. Until configured the closing button says
“Meet the ITG Team” and links to Company.

## Tier-2 industry pages

The five industry pages all live in one file, `industry-detail.js` — the
sector copy, the segments inside each sector, and the wording shared across all
five.

Routes are `/consumer-goods`, `/manufacturing-industries`,
`/logistics-supply-chain-operations`, `/real-estate-construction-facilities`
and `/professional-services`. The old addresses forward to the new ones; the six
removed sectors (Enterprise & Corporate, Healthcare, Government, Energy & ESG,
Education, Travel) forward to `/industries`.

The same five industries are also listed on the Home page (`home.js`), the
/industries page (`tier1/industries.js` for the photo sections and diagram,
`tier1/solutions.js` for the photo grid) and the /platforms page
(`tier1/platforms.js`). Keep those lists in step when you add or remove one.
Segments are sections within these pages, so there are no tier-3 industry
routes.

Two things to keep in step, both noted at the top of the file:

- the slugs in `industryPaths`, because the menu and any link you have shared
  point at them;
- each segment `id`, because the menu links to `/<slug>#<id>` and the page
  scrolls to that section.

Set `industryDetail.contactEmail` to enable enquiry emails, as for the other
families.

## The four rules

**1. Only change what is between the quote marks.**

```js
title: 'Enterprise Solutions Designed for Real-World Complexity',
        └──────────── change this ────────────────────────────┘
```

Leave the word before the colon (`title:`) alone — that is the label the page
looks for. Leave the comma at the end alone too.

**2. If your text contains an apostrophe, use the curly one: `’` not `'`**

A straight apostrophe ends the text early and breaks the page.

```js
body: 'What’s next',     ✅  curly — fine
body: 'What's next',     ❌  breaks
```

The curly one is what Word and your phone type by default. If you are unsure,
rewrite to avoid it ("What is next").

**3. Anything after `//` or between `/*` and `*/` is a note to you.**

The site ignores it. You can edit those notes freely.

**4. To remove an item from a list, delete its whole `{ … },` block.**

To add one, copy an existing block, paste it below, and change the words. Keep
the commas between blocks.

---

## Common jobs

### Change a button's text or where it goes

```js
cta: { label: 'Explore All Solutions', href: '/solutions' },
```

- `label` is what the visitor reads.
- `href` is where it goes. `/services` is a page on this site. `#contact` jumps
  to a spot further down the same page. `https://…` goes to another website.
  `#` on its own is a placeholder that goes nowhere yet.

### Swap a photo or video

Image and video names look like `/assets/cat-ai.jpg` or `/hero.mp4`. Those
files live in the **`public`** folder at the top of the project.

The easy way: put your new file in `public` using **exactly the same name** as
the old one, replacing it. Nothing in this folder needs to change.

The other way: add your file to `public` under a new name, then write that name
in here — a file at `public/assets/new-photo.jpg` is written
`'/assets/new-photo.jpg'` (leading slash, no `public`).

### Change an icon

Icons are written as names, like `icon: 'neurology'`. They come from Google's
Material Symbols set: <https://fonts.google.com/icons> — click any icon and
copy the name shown beneath it.

⚠️ **One extra step for a brand-new icon.** The site only downloads the icons it
actually uses, so a name that is not already on the site shows up blank. To add
one, open **`index.html`** at the top of the project, find the long
`icon_names=…` list (around line 44), and add your new name to it. The list is
comma-separated and alphabetical.

Icons already available: check the same `icon_names=` list — anything in there
can be used immediately.

---

## Seeing your changes

With the site running locally (`npm run dev`), save the file and the browser
updates by itself.

**If the page goes blank after an edit**, you have almost certainly broken a
quote mark or deleted a comma. Undo your change (Ctrl+Z) and the page comes
back. The most common cause by far is rule 2 above.

---

## What is *not* in this folder

- **Colours, fonts, spacing, layout** — those live in `src/index.css` and in
  the `.css` file inside each page folder under `src/pages/`.
- **Legal pages** (`/terms`, `/privacy`) — those are long documents and live in
  `src/pages/legal/Terms.tsx` and `src/pages/legal/Privacy.tsx`.
- **How the page is put together** (which block sits where) — that is in the
  page's component file. Ask before changing those.
