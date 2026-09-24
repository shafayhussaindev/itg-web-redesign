/* ============================================================================
 * INDUSTRIES PAGE
 * ===============
 * shown at  yoursite.com/industries
 *
 * Everything on this page that you might want to reword, re-order or re-image
 * is in this file. Change the text between the quote marks and save — the site
 * picks it up on its own. See content/README.md if anything here is unclear.
 * ========================================================================= */

/**
 * ITG Technologies — Industries page copy.
 *
 * EVERY STRING BELOW IS VERBATIM from the approved live Industries page
 * (source of truth: `Industries page update/current industries page.png`).
 * The redesign is visual only. Do not rewrite, shorten, expand or reorder
 * this copy — if it does not fit a layout, change the layout.
 *
 * Two strings are flagged NEEDS CONFIRMATION. Both were unreadable in the
 * source screenshot because the page was captured mid scroll-animation, the
 * same defect that left two Services strings flagged in `data/services.js`.
 * See the comments at each one.
 */

export const industriesHero = {
  eyebrow: 'INDUSTRIES',
  titleLine1: 'Industry-Focused Technology Solutions',
  titleLine2: 'Built for Real-World Complexity',
  body: 'ITG delivers enterprise platforms aligned to industry-specific operations, regulation and scale.',
  primaryCta: { label: 'Talk to an Industry Expert →', href: '/contact?topic=project' },
  // #industries is the Industry Features section id (IndustryFeatures.jsx).
  secondaryCta: { label: 'Explore Industries →', href: '#industries' },
  image: '/assets/industries/hero-industries.jpg',
};

/** The three introduction paragraphs, in their existing order. */
export const industriesIntro = [
  'Every industry operates under unique operational, regulatory and competitive pressures.',
  'ITG partners with organizations across key industries to design and deliver technology solutions that address sector-specific challenges while enabling long-term scalability and innovation.',
  'Our industry expertise allows us to align digital platforms, automation and intelligence with real business workflows — not generic implementations.',
];

/**
 * The five industry features, in menu order (Sept 2026, was eight).
 *
 * `side` is the composition only: 'right' puts the photograph left and the
 * glass panel right, 'left' mirrors it. Alternating down the page is the
 * rhythm the brief asks for and carries no meaning.
 *
 * `icon` names a line icon in `components/industries/icons.jsx`. The live page
 * uses a small circular badge icon per industry; these are the same subjects
 * redrawn on the 24px/1.5-stroke grid the approved Solutions and Services
 * pages already use, so the page belongs to the same family.
 */
export const industryFeatures = [
  {
    id: 'retail',
    number: '01',
    name: 'Consumer Goods',
    icon: 'cart',
    sub: 'Connected Commerce and Customer-Centric Platforms',
    body: 'ITG enables retail and consumer businesses to deliver seamless, data-driven customer experiences across digital and physical channels. We help organizations integrate commerce platforms, analytics and marketing systems to support Omni channel growth.',
    focus: [
      'Retail & Omni channel Platforms',
      'E-Commerce & Marketplaces',
      'Customer Engagement & CRM',
      'Sales & Performance Analytics',
    ],
    image: '/assets/industries/ind-retail.jpg',
    side: 'right',
  },
  {
    id: 'manufacturing',
    number: '02',
    name: 'Manufacturing & Industries',
    icon: 'factory',
    sub: 'Smart Manufacturing and Industry 4.0 Enablement',
    body: 'ITG helps manufacturing and industrial organizations adopt Industry 4.0 technologies to improve productivity, traceability and operational efficiency. Our solutions integrate production systems, analytics and automation to support smarter decision-making and connected operations.',
    focus: [
      'Manufacturing Operations Platforms',
      'Industry 4.0 & Smart Factory Systems',
      'Supply Chain Visibility & Planning',
      'Industrial Automation & Analytics',
    ],
    image: '/assets/industries/ind-manufacturing.jpg',
    side: 'left',
  },
  {
    id: 'logistics',
    number: '03',
    name: 'Logistics & Supply Chain',
    icon: 'truck',
    sub: 'Optimized Operations and Supply Chain Intelligence',
    body: 'ITG delivers technology solutions that enhance visibility, coordination and efficiency across logistics and operational networks. Our platforms support inventory management, fleet operations and real-time operational insights.',
    focus: [
      'Logistics & Warehouse Management',
      'Transportation & Fleet Systems',
      'Inventory & Distribution Platforms',
      'Operations Analytics & Optimization',
    ],
    image: '/assets/industries/ind-logistics.jpg',
    side: 'right',
  },
  {
    id: 'realestate',
    number: '04',
    name: 'Real Estate & Construction',
    icon: 'crane',
    sub: 'Digital Platforms for Property and Project Excellence',
    body: 'ITG supports real estate developers and construction firms with systems that improve project control, asset visibility and operational efficiency. Our solutions help manage complex projects, properties and facilities across their lifecycle.',
    focus: [
      'Real Estate & Property Management Platforms',
      'Construction & Project Controls',
      'Facilities & Asset Management',
      'Financial & Compliance Systems',
    ],
    image: '/assets/industries/ind-realestate.jpg',
    side: 'left',
  },
  {
    id: 'professional',
    number: '05',
    name: 'Professional Services',
    icon: 'briefcase',
    sub: 'Technology for Knowledge-Driven Organizations',
    body: 'ITG supports consulting firms, advisory organizations, and professional service providers with platforms that enhance collaboration, reporting and client engagement. Our solutions help improve productivity, transparency and service delivery.',
    focus: [
      'Project & Engagement Management',
      'Financial & Resource Planning',
      'Document & Knowledge Management',
      'Client Reporting & Analytics',
    ],
    image: '/assets/industries/ind-professional.jpg',
    side: 'right',
  },
];

/** Label shown above each feature's focus list. Verbatim from the live page. */
export const focusHeading = 'Key Focus Areas';

export const industriesCta = {
  title: 'Technology Solutions Designed for Your Industry',
  body: 'From enterprise operations to sustainability platforms, ITG delivers industry-aligned technology solutions that support growth, compliance and operational excellence.',
  primary: { label: 'Talk to an Industry Expert →', href: '/contact?topic=project' },
  background: '/assets/industries/cta-industries.jpg',
};
