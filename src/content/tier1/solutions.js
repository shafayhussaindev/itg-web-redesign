/* ============================================================================
 * SOLUTIONS PAGE
 * ==============
 * shown at  yoursite.com/solutions
 *
 * Everything on this page that you might want to reword, re-order or re-image
 * is in this file. Change the text between the quote marks and save — the site
 * picks it up on its own. See content/README.md if anything here is unclear.
 * ========================================================================= */

export const hero = {
  eyebrow: 'Solutions',
  titleLine1: 'Business Outcomes',
  titleAccent: 'Powered by Scale',
  body: 'At ITG Technologies, our solutions are designed around real enterprise challenges — not tools, not buzzwords.',
  primaryCta: { label: 'Explore Our Platforms →', href: '/platforms' },
  secondaryCta: { label: 'Talk to an Expert →', href: '/contact?topic=project' },
};

// Solution Categories — image sits in /public/assets
export const solutionCategories = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    sub: 'Turning Data into Decisions. Intelligence into Advantage.',
    body: 'We help enterprises move from fragmented data and manual decision-making to AI-driven intelligence that scales across operations.',
    image: '/assets/cat-ai.jpg',
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    sub: 'Integrated Systems for Finance, Operations & Growth',
    body: 'We design and implement enterprise-grade business platforms that unify finance, operations, procurement, and customer engagement.',
    image: '/assets/cat-enterprise.jpg',
  },
  {
    id: 'esg-solutions',
    title: 'ESG Solutions',
    sub: 'From Regulatory Pressure to Strategic Advantage',
    body: 'We help organizations meet global sustainability, ESG, and regulatory requirements with confidence and transparency.',
    image: '/assets/cat-sustainability.jpg',
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    sub: 'Engineering Digital Experiences That Perform',
    body: 'We create high-performance digital platforms that connect brands, systems and users — across web, mobile and enterprise portals.',
    image: '/assets/cat-digital.jpg',
  },
  {
    id: 'industrial-solutions',
    title: 'Industrial Solutions',
    sub: 'Automating Processes. Modernizing Infrastructure.',
    body: 'We help enterprises simplify operations and modernize IT landscapes through automation and cloud-first architecture.',
    image: '/assets/cat-automation.jpg',
  },
  {
    id: 'data-privacy-solutions',
    title: 'Data Privacy Solutions',
    sub: 'Know Your Data. Protect It by Design.',
    body: 'We help organizations discover, protect and govern personal data, and respond to individuals’ requests with confidence.',
    // NEEDS ARTWORK: borrowed from the Company page until a privacy image exists.
    image: '/assets/company/security.jpg',
  },
];

// The /industries photo grid (IndustriesGrid.jsx). The five industries, in
// menu order — keep in step with site.js.
export const industries = [
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    body: 'Connected solutions for product intelligence, consumer engagement and compliant operations.',
    image: '/assets/industry-retail.jpg',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industries',
    body: 'Automation, compliance, traceability and operational intelligence for complex industrial environments.',
    image: '/assets/industry-manufacturing.jpg',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain Operations',
    body: 'Visibility, automation and traceability across complex logistics and operational networks.',
    image: '/assets/industry-logistics.jpg',
  },
  {
    id: 'real-estate',
    title: 'Real Estate, Construction & Facilities',
    body: 'Integrated platforms for property, projects and facilities across their whole lifecycle.',
    image: '/assets/industry-realestate.jpg',
  },
  {
    id: 'professional',
    title: 'Professional Services',
    body: 'Structured systems for consulting, legal, advisory and financial firms.',
    image: '/assets/industries/ind-professional.jpg',
  },
];

export const whyItg = [
  {
    id: 'architecture',
    title: 'Enterprise-Grade Platform Architecture',
    body: 'Built for scale, governance, and long-term resilience.',
    icon: 'building',
  },
  {
    id: 'delivery',
    title: 'Platform-Centric Delivery Model',
    body: 'Reusable, modular, outcome-driven systems.',
    icon: 'grid',
  },
  {
    id: 'compliance',
    title: 'Compliance & Sustainability Embedded',
    body: 'Designed for regulatory and ESG readiness.',
    icon: 'shield',
  },
  {
    id: 'secure',
    title: 'Secure. Scalable. Future-Resilient.',
    body: 'Engineered for evolving enterprise demands.',
    icon: 'lock',
  },
];

export const ctaBand = {
  title: 'Ready to Solve Real Business Challenges?',
  body: 'Engineering scalable platforms aligned to your operational goals.',
  primary: { label: 'Explore Our Platforms →', href: '/platforms' },
  secondary: { label: 'Speak With a Solution Architect →', href: '/contact?topic=project' },
  tertiary: { label: 'Request a Strategic Demo →', href: '/contact?topic=product' },
  background: '/assets/cta-skyline.jpg',
};

