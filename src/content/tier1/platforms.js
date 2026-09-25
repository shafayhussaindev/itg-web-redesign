/* ============================================================================
 * PLATFORMS PAGE
 * ==============
 * shown at  yoursite.com/platforms   (was /products — that address forwards here)
 *
 * Everything on this page that you might want to reword, re-order or re-image
 * is in this file. Change the text between the quote marks and save — the site
 * picks it up on its own. See content/README.md if anything here is unclear.
 * ========================================================================= */

// Most strings below came from the original live Products page. The page was
// renamed to Platforms in Sept 2026 and re-organised around six platforms; the
// wording that said "Products" / "Product Categories" was updated to match.

export const platformsHero = {
  eyebrow: 'PLATFORMS',
  title: 'Platforms',
  subtitle: 'AI-Powered Enterprise Platforms Built for Scale and Control',
  // Display hint, not copy: the fragment of `subtitle` that carries the hero's
  // accent treatment, mirroring the cyan accent on the Solutions hero headline.
  // It must be a verbatim substring of `subtitle` — it adds no words.
  subtitleAccent: 'Scale and Control',
  body: [
    'Core digital platforms engineered to run complex operations',
     ' with governance, security, and long-term reliability.',
    'Each platform is designed as a core system, not a ',
    'standalone tool - enabling integration, governance,',
    ' and long-term operational reliability.',
  ],
  primaryCta: { label: 'Request a Platform Demo', href: '/contact?topic=product' },
  // #platforms and #platform-categories are section ids on this page (PlatformsPage.jsx).
  secondaryCta: { label: 'Explore the Platforms', href: '#platforms' },
  panel: {
    heading: 'Our platforms help organizations:',
    items: [
      'Unify business and operational systems',
      'Enable intelligence and automation where it matters',
      'Meet regulatory and compliance requirements',
      'Scale securely across regions and entities',
    ],
  },
};

export const philosophy = {
  heading: 'Platform-First Product Philosophy',
  body:
    'ITG products are built on a platform-first approach. This means products integrate with existing enterprise systems, data remains structured, auditable, and secure, platforms evolve without disrupting operations, and governance and compliance are built in by design.',
  kicker: 'THIS MEANS',
  note: 'Products can be adopted independently or as part of a broader enterprise architecture.',
  principles: [
    { icon: 'plug', text: 'Products integrate with existing enterprise systems' },
    { icon: 'shield', text: 'Data remains structured, auditable, and secure' },
    { icon: 'flow', text: 'Platforms evolve without disrupting operations' },
    { icon: 'check', text: 'Governance and compliance are built in by design' },
  ],
};

export const platformsHeading = 'Our Platforms';

/* ----------------------------------------------------------------------------
 * THE SIX PLATFORMS
 *
 * Each block is one card on this page AND one Tier 2 page in the Platforms
 * menu. The page's address is its id:  id: 'supply-chain'  →  /supply-chain
 *
 *   icon      a Material Symbols name (see content/README.md, "Change an icon")
 *   includes  the product names listed on the card. The products themselves
 *             (their descriptions, Tier 3 menu links) live in
 *             content/tier2/platform-detail.js — keep the two lists in step.
 *   feature   true on ONE platform only: it gets the large card at the top.
 *   focus     which part of the image stays in frame (x% y%).
 * ------------------------------------------------------------------------- */
export const platforms = [
  {
    id: 'sourcing',
    icon: 'shopping_cart',
    title: 'Sourcing',
    lead: 'Buy smarter, from request to purchase order',
    body:
      'Platforms that bring requisitions, supplier selection, purchasing and spend visibility into one controlled process.',
    includes: ['Integra ERP', 'Integra CRM'],
    cta: 'Explore Sourcing',
    image: '/assets/products/cat-enterprise.webp',
    focus: '62% 42%',
    feature: true,
  },
  {
    id: 'supply-chain',
    icon: 'local_shipping',
    title: 'Supply Chain',
    lead: 'Keep goods, assets and operations moving',
    body:
      'Platforms that connect logistics, production and asset tracking so teams can see and act across the supply chain.',
    includes: ['Aullect', 'Astaric', 'Cyclo ERP'],
    cta: 'Explore Supply Chain',
    image: '/assets/products/cat-operations.webp',
    focus: '70% 48%',
  },
  {
    id: 'contract-lifecycle',
    icon: 'contract',
    title: 'Contract Lifecycle',
    lead: 'Control every agreement, from draft to renewal',
    body:
      'Platforms that manage contract documents, approvals, obligations and the conversations around them in one governed place.',
    includes: ['DocuMax', 'Zeito'],
    cta: 'Explore Contract Lifecycle',
    image: '/assets/products/cat-ai.webp',
    focus: '52% 46%',
  },
  {
    id: 'supplier-info-risk-management',
    icon: 'handshake',
    title: 'Supplier Info & Risk Management',
    lead: 'Know your suppliers and the risks they carry',
    body:
      'Platforms that keep supplier information, sustainability data and risk indicators current and ready for review.',
    includes: ['EcoMagnet'],
    cta: 'Explore Supplier Info & Risk Management',
    image: '/assets/products/cat-sustainability.webp',
    focus: '58% 45%',
  },
  {
    id: 'product-lifecycle-management',
    icon: 'deployed_code',
    title: 'Product Lifecycle Management',
    lead: 'Manage products from design to end of life',
    body:
      'Platforms that connect product records, catalogs and traceability data across every stage of the lifecycle.',
    includes: ['Digital Product Passport Platform', 'StyleLab'],
    cta: 'Explore Product Lifecycle Management',
    image: '/assets/products/cat-experience.webp',
    focus: '38% 72%',
  },
  {
    id: 'data-privacy',
    icon: 'privacy_tip',
    title: 'Data Privacy',
    lead: 'Govern personal data across your systems',
    body:
      'Platforms that help discover, protect and account for the personal data your organization holds.',
    // No products yet. The card hides its "Includes" list while this is empty.
    includes: [],
    cta: 'Explore Data Privacy',
    image: '/assets/products/hero-ecosystem.webp',
    focus: '50% 50%',
  },
];

export const ecosystem = {
  // NOT from the original page — the original had no dedicated ecosystem
  // section. Kept to a plain descriptive label rather than marketing copy.
  heading: 'The ITG Platform Ecosystem',
};

export const howItWorks = {
  heading: 'How ITG Platforms Work Together',
  body:
    'ITG platforms are designed to integrate across business functions, share a unified data foundation, support governance, and scale across industries and regions.',
  note: 'Organizations can start with a single platform and expand progressively as needs evolve.',
  points: [
    'Integrate across business functions',
    'Share a unified data foundation',
    'Support governance and audit readiness',
    'Scale across industries and regions',
  ],
};

/* The photo-card grid near the foot of the page — same design as "Solution
   Categories" on /solutions. It shows the six platforms above (title, lead,
   body, image), so there is nothing else to edit here but the heading. */
export const platformCardsHeading = 'Platform Categories';

export const platformsCta = {
  heading: 'Ready to Explore ITG Platforms?',
  primary: { label: 'Explore the Platforms', href: '#platforms' },
  secondary: { label: 'View Industry Use Cases', href: '/industries' },
};
