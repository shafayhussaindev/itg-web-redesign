import { aullect } from '@/data/platforms/aullect';
import { amaanah } from '@/data/platforms/amaanah';
import { digitalShowroom } from '@/data/platforms/digital-showroom';
import { rilits } from '@/data/platforms/rilits';
import { traceme } from '@/data/platforms/traceme';
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
 *   /esg-solutions/data-privacy-and-information-security
 *   /supply-chain/cgi-industrial-erp
 *   /engineering-services/ai-and-agentic-systems-integration
 *
 * WHERE THE WORDS COME FROM
 *   An item page has no copy of its own. Its title, tagline, description and
 *   bullet points are the item's entry in its parent page's file:
 *     Solutions   src/data/solutions/<page>.js          (capabilities)
 *     Platforms   src/data/platforms/platform-detail.js (products)
 *     Services    src/data/services/service-detail.js   (services)
 *     Industries  src/data/industries/industry-detail.js (segments)
 *   Edit the item there and the menu, the parent page and the item page all
 *   change together. The page template is src/pages/ItemPage/ItemPage.jsx.
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
 *   '/enterprise-solutions/digital-transformation': {
 *     image: '/images/solutions/some-photo.jpg', // hero photo (default: the Tier 2 page's)
 *     overview: {                           // adds an Overview section under the hero
 *       title: 'A short heading.',
 *       body: ['First paragraph.', 'Second paragraph.'],
 *     },
 *     hero: {                               // replaces the two hero buttons
 *       primary: { label: 'Request a Demo', href: '#contact' },
 *       secondary: { label: 'Talk to us', href: 'mailto:someone@example.com' },
 *     },
 *     contact: {                            // replaces the closing contact band's words
 *       title: 'Heading', body: 'One line.', cta: 'Button label',
 *       person: 'Name, role (optional)', email: 'someone@example.com (optional)',
 *     },
 *   },
 * ------------------------------------------------------------------------ */
export const pageExtras = {
  '/custom-solutions/mobile-app-development': {
    metrics: mobileAppDevelopment.metrics,
    overview: mobileAppDevelopment.overview,
    why: mobileAppDevelopment.why,
    applied: mobileAppDevelopment.applied,
    steps: mobileAppDevelopment.steps,
  },
  '/logistics-supply-chain-operations/last-mile-delivery': {
    overview: lastMileDelivery.overview,
    why: lastMileDelivery.why,
    applied: lastMileDelivery.applied,
    steps: lastMileDelivery.steps,
  },
  '/custom-solutions/desktop-and-web-app-development': {
    overview: enterpriseAppDevelopment.overview,
    why: enterpriseAppDevelopment.why,
    applied: enterpriseAppDevelopment.applied,
    steps: enterpriseAppDevelopment.steps,
  },
  '/supply-chain/aullect': {
    overview: aullect.overview,
    why: aullect.why,
    applied: aullect.applied,
    steps: aullect.steps,
  },  '/data-privacy/amaanah': {
    overview: amaanah.overview,
    why: amaanah.why,
    applied: amaanah.applied,
    steps: amaanah.steps,
  },  '/product-lifecycle-management/digital-showroom': {
    hero: digitalShowroom.hero,
    contact: digitalShowroom.contact,
  },
  '/product-lifecycle-management/traceme-dpp': {
    metrics: traceme.metrics,
    hero: traceme.hero,
    contact: traceme.contact,
  },
  '/supply-chain/rilits': {
    metrics: rilits.metrics,
    hero: rilits.hero,
    contact: rilits.contact,
  },
};
