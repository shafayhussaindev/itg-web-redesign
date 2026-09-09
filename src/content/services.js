/* ============================================================================
 * SERVICES PAGE
 * =============
 * shown at  yoursite.com/services
 *
 * Everything on this page that you might want to reword, re-order or re-image
 * is in this file. Change the text between the quote marks and save — the site
 * picks it up on its own. See content/README.md if anything here is unclear.
 * ========================================================================= */

// edits go here, never into component markup (same rule as content.js).
//
// TWO STRINGS ARE RECONSTRUCTED, NOT VERBATIM. Both were clipped mid
// scroll-animation in the source screenshot and could not be read in full.
// They are marked NEEDS CONFIRMATION inline. Check them against the live page
// and delete the marker comments once verified.

export const servicesHero = {
  eyebrow: 'Services',
  titleLine1: 'How ITG Delivers',
  titleAccent: 'Enterprise Platforms',
  body: 'Structured delivery for scalable, secure and compliant enterprise systems.',
  primaryCta: 'Request a Service Consultation →',
  secondaryCta: 'View Delivery Pillars →',
  // Floating glass capability chips over the hero photograph.
  chips: [
    { id: 'design', label: 'Design & Engineering', icon: 'code' },
    { id: 'data', label: 'Data & Intelligence', icon: 'chart' },
    { id: 'automation', label: 'Automation', icon: 'bolt' },
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: 'cloud' },
  ],
};

export const deliveryApproach = {
  title: 'Enterprise Delivery and Enablement at ITG',
  intro:
    'ITG delivers enterprise platforms through a disciplined delivery model designed for scale, governance, and long-term reliability.',
  panelHeading: 'Our delivery approach ensures that platforms are:',
  points: [
    {
      id: 'designed',
      title: 'Designed with enterprise architecture in mind',
      note: 'Built for scale and integration',
    },
    {
      id: 'implemented',
      title: 'Implemented with control and integration discipline',
      note: 'Governance and best practices',
    },
    {
      id: 'enabled',
      title: 'Enabled for adoption, performance and compliance',
      note: 'User-centric delivery',
    },
    {
      id: 'evolved',
      title: 'Evolved responsibly as business needs change',
      note: 'Long-term partnership',
    },
  ],
  statement: 'Services at ITG are not standalone offerings.',
  statementNote: 'They represent how we deliver platforms and solutions that endure.',
  // Labels for the Design/Build/Enable architecture visual (brief section 12).
  flow: [
    { id: 'design', label: 'Design', note: 'Architecture first' },
    { id: 'build', label: 'Build', note: 'Controlled delivery' },
    { id: 'enable', label: 'Enable', note: 'Adoption and support' },
  ],
};

// Five delivery pillars. `side` alternates the glass panel left/right to build
// the visual rhythm the brief asks for (section 10) — do not reorder without
// re-alternating.
export const deliveryPillars = [
  {
    id: 'design-engineering',
    number: '01',
    icon: 'code',
    title: 'Design and Engineering',
    sub: 'Building Secure and Scalable Digital Platforms',
    body: 'Enterprise-grade digital platforms, designed and engineered around business workflows and system architecture.',
    enables: [
      'Enterprise web and application platforms',
      'User-centric design systems and interfaces',
      'Secure and scalable digital foundations',
    ],
    includes: [
      'Web Development',
      'Application Development',
      'UI UX Design',
      'Graphic and Visual Design',
      'SharePoint Solutions',
    ],
    image: '/assets/services/pillar-design.jpg',
    side: 'right',
  },
  {
    id: 'data-intelligence',
    number: '02',
    icon: 'chart',
    title: 'Data and Intelligence Enablement',
    sub: 'Turning Data into Decision-Ready Insight',
    body: 'Data structured, analyzed and put to work across enterprise operations.',
    enables: [
      'Executive and operational visibility',
      'Analytics and reporting frameworks',
      'Intelligence-driven decision support',
    ],
    includes: [
      'Data Analytics and Power BI',
      'Business Intelligence Solutions',
      'Data Visualization and Reporting',
    ],
    image: '/assets/services/pillar-data.jpg',
    side: 'left',
  },
  {
    id: 'automation-integration',
    number: '03',
    icon: 'bolt',
    title: 'Automation and Integration',
    sub: 'Improving Efficiency Without Losing Control',
    body: 'Automated workflows and integrated systems, with governance and audit readiness maintained throughout.',
    enables: [
      'Streamlined enterprise processes',
      'Reduced manual effort and risk',
      'Connected systems across the enterprise',
    ],
    includes: [
      'Workflow Automation',
      'RPA Robotic Process Automation',
      // NEEDS CONFIRMATION — clipped in the source screenshot.
      'System and API Integration',
    ],
    image: '/assets/services/pillar-automation.jpg',
    side: 'right',
  },
  {
    id: 'platform-implementation',
    number: '04',
    icon: 'cube',
    title: 'Platform Implementation and Enablement',
    sub: 'Delivering Enterprise Platforms with Confidence',
    body: 'Enterprise platforms implemented and enabled with structure, governance and long-term usability.',
    enables: [
      'ERP and CRM platform deployment',
      'Data migration and integration',
      'User enablement and adoption',
    ],
    includes: ['Microsoft Dynamics 365', 'Salesforce Implementation', 'ERP and CRM Enablement'],
    image: '/assets/services/pillar-platform.jpg',
    side: 'left',
  },
  {
    id: 'cloud-infrastructure',
    number: '05',
    icon: 'cloud',
    title: 'Cloud and Infrastructure Modernization',
    sub: 'Modernizing Enterprise Infrastructure Securely',
    body: 'Cloud architecture, migration and modernization across hybrid and multi-cloud environments.',
    enables: [
      // NEEDS CONFIRMATION — clipped in the source screenshot.
      'Secure cloud architecture',
      'Scalable infrastructure foundations',
      'Governance and operational stability',
    ],
    includes: ['Cloud Consulting', 'Cloud Architecture and Migration', 'Hybrid and Multi-Cloud Enablement'],
    image: '/assets/services/pillar-cloud.jpg',
    side: 'right',
  },
];

export const platformAlignment = {
  title: 'How Delivery Aligns with ITG Platforms',
  intro: 'Each delivery pillar is directly aligned with ITG:',
  hub: 'ITG Platforms',
  nodes: [
    { id: 'solutions', label: 'Solutions' },
    { id: 'products', label: 'Products' },
    { id: 'industry', label: 'Industry requirements' },
  ],
  statement: 'This ensures delivery remains platform-led, not project-led.',
};

export const serviceIndustries = {
  title: 'Industries We Deliver For',
  intro: 'ITG delivers platforms across industries including:',
  statement: 'Delivery is always aligned with industry context and regulation.',
  items: [
    { id: 'enterprise', title: 'Enterprise and Corporate', image: '/assets/services/ind-enterprise.jpg' },
    { id: 'manufacturing', title: 'Manufacturing and Industrial', image: '/assets/services/ind-manufacturing.jpg' },
    { id: 'retail', title: 'Retail and Consumer Goods', image: '/assets/services/ind-retail.jpg' },
    {
      id: 'logistics',
      title: 'Logistics, Supply Chain and Operations',
      image: '/assets/services/ind-logistics.jpg',
    },
    { id: 'healthcare', title: 'Healthcare and Life Sciences', image: '/assets/services/ind-healthcare.jpg' },
    // PLACEHOLDER IMAGE — no Government and Public Sector photograph was
    // supplied, so this reuses the hero interior. Swap in a real image.
    { id: 'government', title: 'Government and Public Sector', image: '/assets/services/ind-government.jpg' },
    { id: 'energy', title: 'Energy, Sustainability and ESG', image: '/assets/services/ind-sustainability.jpg' },
  ],
};

export const servicesCta = {
  title: 'Ready to Engage with ITG Delivery Teams?',
  body: 'Structured delivery, governed implementation, and long-term enablement.',
  primary: 'Request a Service Consultation →',
  secondary: 'Explore ITG Solutions →',
  // The architectural image already approved on the Solutions page CTA.
  background: '/assets/cta-skyline.jpg',
};
