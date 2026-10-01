# Editing the website's text

Every heading, paragraph, button label, card, menu entry and image path is in
**this folder** (`src/data/`). The page files in `src/pages/` only arrange it.

**Quickest way to find any sentence:** in VS Code press `Ctrl+Shift+F`, paste a
few words you can see on the page, and search. Each sentence on the site is
written in exactly one file here.

## Which file do I open?

| Page (URL) | File |
| --- | --- |
| Home `/` | `site/home.js` |
| Menu bar: the four menu names, "View All" links, Company link, Contact us button | `navigation/navigation.js` |
| Menu bar: which pages appear in each menu, and in what order | `navigation/tier2.js` |
| Menu bar: which items appear under each page | `navigation/tier3.js` |
| Footer, cookie popup | `site/site.js` |
| Contact `/contact` | `site/contact.js` |
| Company `/company` | `company/landing-page.js` |
| `/solutions`, `/platforms`, `/services`, `/industries` | `<section>/landing-page.js` |
| One solution, e.g. `/esg-solutions` | `solutions/esg-solutions.js` (file name = URL) |
| One platform, e.g. `/supply-chain` | `platforms/platform-detail.js` (card title/image: `platforms/landing-page.js`) |
| One service area, e.g. `/esg-services` | `services/service-detail.js` |
| One industry, e.g. `/consumer-goods` | `industries/industry-detail.js` |
| An item page, e.g. `/data-privacy-solutions/data-privacy-and-information-security` | the item's entry in its parent's file above (search for its id) |
| Labels shared by all item pages ("Back to…", "Discuss this…") | `items/item-page.js` |
| Labels shared by all solution / platform / service / industry pages | `solutions/solution-detail.js`, top of `platforms/platform-detail.js`, `services/service-detail.js`, `industries/industry-detail.js` |

### Worked example: `/data-privacy-solutions/data-privacy-and-information-security`

Everything on that page comes from the `id: 'data-privacy-and-information-security'`
block in `solutions/data-privacy-solutions.js`:

- `title` — the big heading, "Data Privacy & Information Security" (also used in the menu)
- `subtitle` — the line under it, "Protect information through integrated…" (also the menu's short line)
- `description` — the Overview paragraph
- `outcome` — the "why it matters" cards
- `coreCapabilities` — the "Core capabilities" cards (and the bullet list on `/data-privacy-solutions`)

The hero photo (the big picture at the top) is listed in `site/hero-images.js`,
one line per page address. This page's photo is
`/images/hero/data-privacy-solutions/data-privacy-and-information-security.jpg`
(= `public/images/hero/data-privacy-solutions/data-privacy-and-information-security.jpg`).
An item page missing from that list uses its parent page's hero photo.

Note: ids are part of the page address. Moving an item to another parent
changes its address too: this page was `/esg-solutions/…` until 2026-10-01. To
move one, cut its block into the new parent's file, move its line in
`navigation/tier3.js` and in `site/hero-images.js`, and move its photo folder.
If the block has `coreCapabilities`, the new parent's file needs an `itemPage`
block too (see `solutions/esg-solutions.js`).

### A few items have their own file

Items with a much richer page keep their extra content in a file named after
them: `solutions/mobile-app-development.js`, `solutions/enterprise-app-development.js`,
`platforms/aullect.js`, `platforms/svitch.js`, `platforms/law-into-action.js`,
`platforms/consumer-goods-intelligence.js`, `industries/home-textile.js`,
`industries/last-mile-delivery.js`. Their entry in the parent file points to it,
e.g. `subtitle: mobileAppDevelopment.tagline`.

## The four rules

**1. Only change what is between the quote marks.**

```js
title: 'Enterprise Solutions Designed for Real-World Complexity',
        └──────────── change this ────────────────────────────┘
```

Leave the word before the colon (`title:`) and the comma at the end alone.

**2. If your text contains an apostrophe, use the curly one: `’` not `'`.**
A straight apostrophe ends the text early and breaks the page.

**3. Anything after `//` or between `/*` and `*/` is a note.** The site ignores it.

**4. To remove an item from a list, delete its whole `{ … },` block.** To add
one, copy an existing block, paste it below and change the words. An item's
`id` becomes part of its page address — don't change ids of existing items.

## Common jobs

**Add a new item page** (e.g. a new ESG capability): copy a block in
`solutions/esg-solutions.js`, give it a new `id`, change the words, then add
`{ id: "your-new-id" },` to the `/esg-solutions` list in `navigation/tier3.js`
so it appears in the menu. The page `/esg-solutions/your-new-id` exists
automatically.

**Change a button:** `cta: { label: 'Explore All Solutions', href: '/solutions' }`
— `label` is the text, `href` is where it goes (`/page`, `#section`, or `https://…`).

**Swap a photo or video:** files live in `public/images/<section>/`. Write the
path without `public`: `public/images/solutions/cat-ai.jpg` → `'/images/solutions/cat-ai.jpg'`.
The live site caches images for a year, so give a changed image a **new file
name** and update the path, rather than overwriting the old file.

**Change an icon:** icons are names like `icon: 'neurology'` from
<https://fonts.google.com/icons>. A name not used anywhere on the site yet must
also be added to the `icon_names=` list in `index.html` (project root), or it
shows blank.

**If the page goes blank after an edit,** a quote mark or comma is broken.
Undo (Ctrl+Z) and the page comes back.

## Not in this folder

- Colours, fonts, spacing: `src/styles/` and each page folder's `.css` file.
- Legal pages (`/terms`, `/privacy`): `src/pages/Legal/`.
- Page layout (which section sits where): the page files in `src/pages/`.
