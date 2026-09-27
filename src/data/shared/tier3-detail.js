/* ============================================================================
 * TIER 3 PAGES
 * ============
 * One page for every item in the four menus: each solution capability, each
 * platform product, each service and each industry segment. The address is
 * the Tier 2 page it belongs to, then the item's id:
 *
 *   /enterprise-solutions/erp-solutions
 *   /supply-chain/aullect
 *   /engineering-services/web-development
 *   /consumer-goods/omnichannel
 *
 * WHERE THE WORDS COME FROM
 *   Tier 3 titles follow navbar-tier3.js. The tagline, description and bullet
 *   lists come from the item's Tier 2 entry, with updated copy in
 *   page-content.js where an offering was renamed. Both pages read the same
 *   aligned item, so they stay in agreement:
 *     Solutions   content/tier2/solutions/<page>.js   (capabilities)
 *     Platforms   content/tier2/platform-detail.js    (products)
 *     Services    content/tier2/service-detail.js     (services)
 *     Industries  content/tier2/industry-detail.js    (segments)
 *   Edit an item there and both pages change.
 *
 *   This file holds only the wording that is shared by all Tier 3 pages
 *   (headings, button labels), plus `pageExtras` below for anything you want
 *   on ONE Tier 3 page only.
 *
 * Keep item ids stable: they are part of the page address.
 * ========================================================================= */

// Wording shared by every Tier 3 page. `{kind}` is replaced by the family's
// singular word below (capability, product, service, segment); `{parent}` by
// the Tier 2 page's name.
export const tier3Detail = {
  home: 'Home',
  skipLink: 'Skip to content',
  backTo: 'Back to {parent}',
  discuss: 'Discuss this {kind}',
  includedEyebrow: 'What’s included',
  includedTitle: 'What {title} covers.',
  outcomeTitle: 'What this enables',
  whyEyebrow: 'Why it matters',
  whyTitle: 'How {title} supports {parent}.',
  appliedEyebrow: 'In practice',
  stepsEyebrow: 'How we work',
  stepsTitle: 'A clear path from scope to adoption.',
  siblingsEyebrow: 'Also in {parent}',
  siblingsTitle: 'Explore related {kinds}.',
  parentOverview: 'View the {parent} overview',
  contactEyebrow: 'Your next step',
  contactTitle: 'Talk to us about {title}.',
  contactBody: 'Tell us about your operations, existing systems and priorities. We will help you define a practical starting point and the next steps.',
};

// One entry per menu family. `kind` / `kinds` fill the {kind} / {kinds} slots
// above; `label` and `href` are the Tier 1 crumb in the breadcrumb.
export const tier3Families = {
  solutions:  { label: 'Solutions',  href: '/solutions',  kind: 'capability', kinds: 'capabilities' },
  platforms:  { label: 'Platforms',  href: '/platforms',  kind: 'product',    kinds: 'products' },
  services:   { label: 'Services',   href: '/services',   kind: 'service',    kinds: 'services' },
  industries: { label: 'Industries', href: '/industries', kind: 'segment',    kinds: 'segments' },
};

/* ── Extras for ONE page ──────────────────────────────────────────────────
 * Keyed by the page address. Everything is optional; leave a page out and it
 * uses what its Tier 2 entry already says.
 *
 *   '/enterprise-solutions/erp-solutions': {
 *     image: '/images/solutions/some-photo.jpg', // hero photo (default: the Tier 2 page's)
 *     overview: {                           // adds an Overview section under the hero
 *       title: 'A short heading.',
 *       body: ['First paragraph.', 'Second paragraph.'],
 *     },
 *   },
 * ------------------------------------------------------------------------ */
export const pageExtras = {
};
