# Editing the website's text

Everything you are likely to want to change — headings, paragraphs, button
labels, menu entries, card lists, image filenames — is in **this folder**.
You do not need to open anything else.

---

## Which file do I open?

| I want to change…                             | Open                  |
| --------------------------------------------- | --------------------- |
| The top menu bar, or the footer                | `site.js`             |
| The front page (the one with the video)        | `home.js`             |
| yoursite.com/solutions                         | `solutions.js`        |
| yoursite.com/products                          | `products.js`         |
| yoursite.com/services                          | `services.js`         |
| yoursite.com/industries                        | `industries.js`       |
| yoursite.com/company                           | `company.js`          |
| yoursite.com/ai-intelligence                   | `ai-intelligence.js`  |
| yoursite.com/enterprise-systems                | `enterprise-systems.js` |
| yoursite.com/automation-cloud                  | `automation-cloud.js` |
| yoursite.com/digital-experience                | `digital-experience.js` |
| yoursite.com/sustainability-compliance         | `sustainability-compliance.js` |
| Shared tier-2 labels, delivery steps and email | `solution-detail.js` |
| The six service category pages, and their shared labels | `service-detail.js` |
| The eleven industry pages, and their shared labels | `industry-detail.js` |

Inside each file the blocks appear **in the same order as the page**, top to
bottom, with a comment saying which part of the page each one is.

---

## Tier-2 solution pages

Each of the five solution pages has a `solutionPage` block in its content file.
Edit the hero, outcomes, capability descriptions, applications and closing copy
there. AI & Intelligence also reuses its existing `capabilities` and `dpp` blocks.

To enable email enquiries across all five pages, set `contactEmail` in
`solution-detail.js`. Leave it empty to show the Company-page link instead.
No form submission or email service is required: the configured link opens the
visitor's email application with the solution name in the subject.

Capability `id` values match the menu links in `site.js`. If you change an ID,
update its menu link too. Those links open the capability and scroll to it.

## Tier-2 product category pages

The five product category pages use `product-detail.js`. Edit the category
headlines, overview paragraphs, product summaries, integration section and
closing CTA there. Category names, descriptions and images come from `products.js`.

Routes are `/enterprise-business-platforms`, `/sustainability-compliance-platforms`,
`/asset-operations-platforms`, `/ai-intelligence-platforms` and
`/digital-experience-platforms`. Products appear as visible sections within these
pages; there are no tier-3 product routes. The Products menu and category buttons
use the same content, so links stay in sync. Keep product `id` values stable to
preserve direct links such as `/enterprise-business-platforms#integra-erp`.

Set `productDetail.contactEmail` in `product-detail.js` to enable demo enquiry
emails. Until configured, the closing button says “Meet the ITG Team” and links
to Company.

## Tier-2 service category pages

The six service category pages all live in one file, `service-detail.js` — the
category copy, the individual services and the wording shared across all six.

Routes are `/digital-engineering-services`, `/data-analytics-intelligence`,
`/automation-process-services`, `/enterprise-platform-services`,
`/ai-advanced-technology-services` and `/cloud-infrastructure-services`.
Individual services are sections within these pages, so there are no tier-3
service routes.

Two things to keep in step, both noted at the top of the file:

- the slugs in `serviceCategoryPaths`, because the menu and any link you have
  shared point at them;
- each service `id`, because the menu links to `/<slug>#<id>` and the page
  scrolls to that section. `/cloud-infrastructure-services#hybrid-multicloud`
  is an example.

The four delivery steps shown at the bottom of every service page are in
`serviceDetail.steps`. Edit them once and all six pages change.

Set `serviceDetail.contactEmail` to enable enquiry emails, exactly as for the
solution and product pages. Until configured the closing button says
“Meet the ITG Team” and links to Company.

## Tier-2 industry pages

The eleven industry pages all live in one file, `industry-detail.js` — the
sector copy, the segments inside each sector, and the wording shared across all
eleven.

Routes are `/enterprise-corporate`, `/manufacturing-industrial`,
`/retail-consumer-goods`, `/logistics-supply-chain`,
`/healthcare-life-sciences`, `/real-estate-construction`,
`/professional-services`, `/government-public-sector`,
`/energy-sustainability-esg`, `/education-research` and `/travel-hospitality`.
Segments are sections within these pages, so there are no tier-3 industry
routes.

Two things to keep in step, both noted at the top of the file:

- the slugs in `industryPaths`, because the menu and any link you have shared
  point at them;
- each segment `id`, because the menu links to `/<slug>#<id>` and the page
  scrolls to that section.

**Two sectors still need artwork.** Education & Research and Travel &
Hospitality have no photography of their own, so they borrow a related picture.
Both are marked `NEEDS ARTWORK` in the file. Drop a proper image into
`public/assets/industries/` and change the path.

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

- **Colours, fonts, spacing, layout** — those live in `src/index.css` and
  `src/tier1/styles/`.
- **Legal pages** (`/terms`, `/privacy`) — those are long documents and live in
  `src/pages/Terms.tsx` and `src/pages/Privacy.tsx`.
- **How the page is put together** (which block sits where) — that is in the
  page's component file. Ask before changing those.
