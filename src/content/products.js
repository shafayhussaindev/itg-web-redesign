/* ============================================================================
 * PRODUCTS PAGE
 * =============
 * shown at  yoursite.com/products
 *
 * Everything on this page that you might want to reword, re-order or re-image
 * is in this file. Change the text between the quote marks and save — the site
 * picks it up on its own. See content/README.md if anything here is unclear.
 * ========================================================================= */

// Every string below is taken VERBATIM from the live Products page
// (itg-technologies.vercel.app/products). Do not reword — edit here only
// if the approved copy itself changes.
//
// The single exception is `ecosystem.heading`, flagged inline: the redesign
// introduces a dedicated ecosystem section that has no counterpart in the
// original page, so it had no existing heading to inherit.

export const productsHero = {
  eyebrow: 'PRODUCTS',
  title: 'Products',
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
  primaryCta: 'Request a Product Demo',
  secondaryCta: 'Explore Platforms by Category',
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

export const categoriesHeading = 'Product Categories';

export const productCategories = [
  {
    id: 'enterprise',
    icon: 'layers',
    title: 'Enterprise Business Platforms',
    lead: 'Run core business operations with confidence',
    body:
      'Platforms that support finance, operations, governance, and multi-entity business control across the enterprise.',
    includes: ['Integra ERP', 'Integra CRM', 'Cyclo ERP'],
    cta: 'Explore Enterprise Business Platforms',
    image: '/assets/products/cat-enterprise.webp',
    // object-position keeps the meaningful part of each render in frame
    focus: '62% 42%',
    feature: true,
  },
  {
    id: 'sustainability',
    icon: 'leaf',
    title: 'Sustainability and Compliance Platforms',
    lead: 'Enable traceability, ESG readiness, and regulatory confidence',
    body:
      'Platforms designed to manage sustainability data, compliance reporting, and product traceability as enterprise infrastructure.',
    includes: ['EcoMagnet', 'Digital Product Passport Platform'],
    cta: 'Explore Sustainability Platforms',
    image: '/assets/products/cat-sustainability.webp',
    focus: '58% 45%',
  },
  {
    id: 'operations',
    icon: 'gear',
    title: 'Asset Operations and Automation Platforms',
    lead: 'Control assets, automate operations, and improve performance',
    body:
      'Platforms that manage assets, workflows, documentation, and operational automation across enterprise environments.',
    includes: ['Astaric', 'DocuMax'],
    cta: 'Explore Asset and Automation Platforms',
    image: '/assets/products/cat-operations.webp',
    focus: '70% 48%',
  },
  {
    id: 'ai',
    icon: 'spark',
    title: 'AI and Intelligence Platforms',
    lead: 'Apply intelligence to decisions, operations, and engagement',
    body:
      'Platforms that embed AI-driven insights, decision support, and automation into real enterprise processes.',
    includes: ['Aullect', 'Zeito'],
    cta: 'Explore AI and Intelligence Platforms',
    image: '/assets/products/cat-ai.webp',
    focus: '52% 46%',
  },
  {
    id: 'experience',
    icon: 'screen',
    title: 'Digital Experience Platforms',
    lead: 'Standardize digital presentation and experience at scale',
    body:
      'Platforms that support structured digital catalogs, design systems, and experience consistency across channels.',
    includes: ['StyleLab'],
    cta: 'Explore Digital Experience Platforms',
    image: '/assets/products/cat-experience.webp',
    focus: '38% 72%',
  },
];

export const ecosystem = {
  // NOT from the original page — the original had no dedicated ecosystem
  // section. Kept to a plain descriptive label rather than marketing copy.
  heading: 'The ITG Product Ecosystem',
};

export const howItWorks = {
  heading: 'How ITG Products Work Together',
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

export const industries = {
  heading: 'Products Across Industries',
  intro: 'ITG platforms are used across industries including:',
  items: [
    'Enterprise and Corporate',
    'Manufacturing and Industrial',
    'Retail and Consumer Goods',
    'Logistics Supply Chain and Operations',
    'Healthcare and Life Sciences',
    'Government and Public Sector',
    'Energy Sustainability and ESG',
  ],
  note: 'Each platform is configured to align with industry-specific operational and regulatory requirements.',
};

export const productsCta = {
  heading: 'Ready to Explore ITG Platforms?',
  primary: 'Explore Platforms by Category',
  secondary: 'View Industry Use Cases',
};
