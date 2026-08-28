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
  primaryCta: 'Talk to an Industry Expert →',
  secondaryCta: 'Explore Industries →',
  image: '/assets/industries/hero-industries.jpg',
};

/** The three introduction paragraphs, in their existing order. */
export const industriesIntro = [
  'Every industry operates under unique operational, regulatory and competitive pressures.',
  'ITG partners with organizations across key industries to design and deliver technology solutions that address sector-specific challenges while enabling long-term scalability and innovation.',
  'Our industry expertise allows us to align digital platforms, automation and intelligence with real business workflows — not generic implementations.',
];

/**
 * The eight industry features, in their existing page order.
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
    id: 'enterprise',
    number: '01',
    // NEEDS CONFIRMATION — this industry name was invisible in the source
    // screenshot (its icon+name row was mid fade-in when the page was
    // captured; only the top edge of the icon badge rendered). Every other
    // section's name was legible. 'Enterprise Technology' is the name used in
    // the redesign brief's own section list; confirm against the live page.
    name: 'Enterprise Technology',
    icon: 'building',
    sub: 'Enterprise Technology for Large-Scale Organizations',
    body: 'ITG supports large enterprises, holding companies, and corporate groups with robust technology platforms that improve governance, visibility and operational control. We help organizations modernize legacy environments, integrate complex systems and support shared services across regions.',
    focus: [
      'Enterprise ERP & Business Platforms',
      'Shared Services & Centralized Operations',
      'Data Governance & Executive Reporting',
      'Process Standardization & Automation',
    ],
    image: '/assets/industries/ind-enterprise.jpg',
    side: 'right',
  },
  {
    id: 'manufacturing',
    number: '02',
    name: 'Manufacturing & Industrial',
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
    id: 'retail',
    number: '03',
    name: 'Retail & Consumer',
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
    id: 'logistics',
    number: '04',
    name: 'Logistics & Operations',
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
    side: 'left',
  },
  {
    id: 'realestate',
    number: '05',
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
    side: 'right',
  },
  {
    id: 'healthcare',
    number: '06',
    name: 'Healthcare & Life Sciences',
    icon: 'health',
    sub: 'Technology Supporting Care, Compliance and Innovation',
    body: 'ITG delivers healthcare and life sciences technology solutions that support patient care, operational efficiency and regulatory compliance. We help organizations modernize systems while ensuring data security and governance.',
    focus: [
      'Healthcare Management Platforms',
      'Clinic & Medical Center Systems',
      'HealthTech & Digital Health Solutions',
      'Compliance & Data Security',
    ],
    image: '/assets/industries/ind-healthcare.jpg',
    side: 'left',
  },
  {
    id: 'professional',
    number: '07',
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
  {
    id: 'sustainability',
    number: '08',
    name: 'Sustainability & ESG',
    icon: 'globe',
    sub: 'Digital Platforms for Sustainable and Responsible Growth',
    // NEEDS CONFIRMATION — the paragraph's final line was clipped in the source
    // screenshot: the next section's background had animated up over it, so
    // only the top ~7px of the glyphs survived and no amount of upscaling
    // recovers them. Everything up to 'reporting,' is verbatim. Supply the
    // remaining words from the live page and append them here.
    body: 'ITG helps organizations address sustainability, ESG and regulatory requirements through intelligent digital platforms. Our solutions support data collection, reporting,',
    focus: [
      'ESG & Sustainability Platforms',
      'Carbon & Compliance Systems',
      'Circular Economy Enablement',
      'Environmental & Governance Reporting',
    ],
    image: '/assets/industries/ind-sustainability.jpg',
    side: 'left',
  },
];

/** Label shown above each feature's focus list. Verbatim from the live page. */
export const focusHeading = 'Key Focus Areas';

export const industriesCta = {
  title: 'Technology Solutions Designed for Your Industry',
  body: 'From enterprise operations to sustainability platforms, ITG delivers industry-aligned technology solutions that support growth, compliance and operational excellence.',
  primary: 'Talk to an Industry Expert →',
  background: '/assets/industries/cta-industries.jpg',
};
