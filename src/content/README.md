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

Inside each file the blocks appear **in the same order as the page**, top to
bottom, with a comment saying which part of the page each one is.

---

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
