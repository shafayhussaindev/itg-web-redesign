import { aullect } from '@/data/platforms/aullect';
import { enterpriseAppDevelopment } from '@/data/solutions/enterprise-app-development';
import { lastMileDelivery } from '@/data/industries/last-mile-delivery';
import { mobileAppDevelopment } from '@/data/solutions/mobile-app-development';

/* ============================================================================
 * ITEM PAGES (the third menu level)
 * ==================================
 * One page for every item in the four menus: each solution capability, each
 * platform product, each service and each industry segment. The address is
 * its parent page's address, then the item's id:
 *
 *   /esg-solutions/carbon-circularity
 *   /supply-chain/aullect
 *   /engineering-services/web-development
 *
 * WHERE THE WORDS COME FROM
 *   An item page has no copy of its own. Its title, tagline, description and
 *   bullet points are the item's entry in its parent page's file:
 *     Solutions   src/data/solutions/<page>.js          (capabilities)
 *     Platforms   src/data/platforms/platform-detail.js (products)
 *     Services    src/data/services/service-detail.js   (services)
 *     Industries  src/data/industries/industry-detail.js (segments)
 *   Edit the item there and the menu, the parent page and the item page all
 *   change together. The page template is src/pages/ItemPage/ItemPage.tsx.
 *
 *   This file holds only the wording shared by all item pages (headings,
 *   button labels), plus `pageExtras` below for anything you want on ONE
 *   item page only.
 *
 * Keep item ids stable: they are part of the page address.
 * ========================================================================= */

// Wording shared by every item page. `{kind}` is replaced by the family's
// singular word below (capability, product, service, segment); `{parent}` by
// the parent page's name.
export const itemPageLabels = {
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
export const itemFamilies = {
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
  '/custom-solutions/mobile-apps': {
    metrics: mobileAppDevelopment.metrics,
    overview: mobileAppDevelopment.overview,
    why: mobileAppDevelopment.why,
    applied: mobileAppDevelopment.applied,
    steps: mobileAppDevelopment.steps,
  },
  '/logistics-supply-chain-operations/transportation-fleet': {
    overview: lastMileDelivery.overview,
    why: lastMileDelivery.why,
    applied: lastMileDelivery.applied,
    steps: lastMileDelivery.steps,
  },
  '/custom-solutions/enterprise-web': {
    overview: enterpriseAppDevelopment.overview,
    why: enterpriseAppDevelopment.why,
    applied: enterpriseAppDevelopment.applied,
    steps: enterpriseAppDevelopment.steps,
  },
  '/supply-chain/cyclo-erp': {
    overview: aullect.overview,
    why: aullect.why,
    applied: aullect.applied,
    steps: aullect.steps,
  },
};
