/* ============================================================================
 * HOME PAGE
 * =========
 * shown at  yoursite.com/
 *
 * The blocks below are in the same order as the page: the first one is the
 * video banner at the top, the last one is the band above the footer.
 * Change the text between the quote marks and save.
 *
 * `icon:` values are Google Material Symbol names — see content/README.md
 * before using a name that is not already somewhere on the site.
 * ========================================================================= */

/* 1 — The video banner at the very top. */
export const hero = {
  // The headline is split so the second line can be tinted.
  headlineLine1: 'Building Intelligent Platforms for an',
  headlineAccent: 'AI-driven World',
  body: 'ITG engineers enterprise AI software delivering speed, control, and measurable digital transformation for highly regulated modern organizations.',
  primaryCta: { label: 'Explore Solutions', href: '/solutions' },
  secondaryCta: { label: 'Talk to an Expert', href: '#contact' },
  scrollHint: 'Scroll',
  // Files in the `public` folder. Replace the file, keep the name, and the
  // page picks up the new one.
  video: '/hero.mp4',
  videoPoster: '/hero-poster.jpg',
};

/* 2 — The single centred paragraph under the banner. */
export const trust = {
  title: 'Enterprise Technology Built for Trust, Resilience and Scale',
  body: 'In a market shaped by AI acceleration, regulatory pressure and operational volatility, ITG delivers platforms that help organizations govern data, automate workflows, secure operations and scale confidently across complex business environments.',
};

/* 3 — "Who we are". */
export const whoWeAre = {
  title: 'A Global Technology Partner for Intelligent Transformation',
  // Each string is its own paragraph.
  paragraphs: [
    'ITG Technologies helps enterprises convert complexity into connected digital systems by combining AI, structured data, platform engineering and deep operational understanding.',
    'We work beyond software delivery. Our teams design digital foundations that connect people, processes, data and decisions, enabling organizations to modernize faster while protecting governance, compliance and long-term adaptability.',
  ],
};

/* 4 — Three solution cards. */
export const solutions = {
  title: 'Enterprise Solutions Designed for Real-World Complexity',
  intro: 'Modern enterprises must manage fragmented systems, rising compliance demands, sustainability expectations, distributed operations and faster customer cycles. ITG brings these challenges into one digital operating model, creating visibility where decisions are made.',
  cta: { label: 'Explore All Solutions', href: '/solutions' },
  cards: [
    {
      icon: 'neurology',
      title: 'Intelligence & AI',
      description: 'Embedded intelligence that automates decisions and drives predictive performance.',
    },
    {
      icon: 'domain',
      title: 'Business Platforms',
      description: 'Core operational systems engineered for governance and scale.',
    },
    {
      icon: 'cloud',
      title: 'Automation & Cloud',
      description: 'Secure infrastructure modernization with integrated workflow automation.',
    },
  ],
};

/* 5 — Platforms: copy on the left, four cards on the right. */
export const platforms = {
  title: 'Enterprise Platforms Built for Control, Intelligence and Scale',
  intro: 'ITG platforms become the digital backbone for enterprise performance, connecting workflows, documents, approvals, analytics, compliance evidence and AI-assisted decision support.',
  body: 'Each platform is engineered to integrate with existing systems, support regional and industry regulations, and scale across entities without compromising security, governance or operational clarity.',
  cta: { label: 'Explore Platforms', href: '/products' },
  cards: [
    { icon: 'layers', title: 'Enterprise Business Systems Core operational and financial backbone platforms.' },
    { icon: 'verified_user', title: 'Sustainability & Regulatory Systems Integrated ESG, compliance and traceability layers' },
    { icon: 'build', title: 'Asset & Operations Intelligence Automation across physical and digital infrastructure.' },
    { icon: 'neurology', title: 'AI & Decision Intelligence Embedded analytics and predictive optimization engines.' },
  ],
};

/* 6 — Industry grid. */
export const industries = {
  title: 'Industry-Focused Expertise with Measurable Impact',
  intro: 'We work across industries where scale, regulation and operational complexity demand robust digital platforms.',
  note: 'Industry-aligned delivery that strengthens governance, visibility and long-term performance.',
  cardLinkLabel: 'Explore Industry',
  cardLinkHref: '/industries',
  cta: { label: 'Explore Industries', href: '/industries' },
  cards: [
    {
      icon: 'domain',
      name: 'Enterprise & Corporate',
      description: 'Enterprise and corporate platforms built for governance, compliance and multi-entity control.',
    },
    {
      icon: 'factory',
      name: 'Manufacturing & Industrial',
      description: 'Manufacturing and industrial operations strengthened through connected systems and data intelligence.',
    },
    {
      icon: 'shopping_bag',
      name: 'Retail & Consumer Goods',
      description: 'Retail and consumer goods operations unified across inventory, commerce and performance analytics.',
    },
    {
      icon: 'local_shipping',
      name: 'Logistics Supply Chain and Operations',
      description: 'Logistics, supply chain and operations aligned with real-time visibility and control.',
    },
    {
      icon: 'apartment',
      name: 'Real Estate Construction and Facilities',
      description: 'Real estate, construction and facilities managed through integrated, audit-ready platforms.',
    },
    {
      icon: 'health_and_safety',
      name: 'Healthcare & Life Sciences',
      description: 'Healthcare and life sciences platforms designed for compliance, data integrity and operational resilience.',
    },
    {
      icon: 'work',
      name: 'Professional Services',
      description: 'Professional services enabled by systems that improve utilization, governance and delivery control.',
    },
    {
      icon: 'eco',
      name: 'Energy Sustainability and ESG',
      description: 'Energy, sustainability and ESG platforms that support traceability, reporting and regulatory readiness.',
    },
  ],
};

/* 7 — The four numbered steps. The numbers are added automatically. */
export const howWeWork = {
  title: 'A Disciplined Approach to Enterprise Transformation',
  intro: 'Structured execution designed for scale, governance and long-term impact.',
  steps: [
    { icon: 'arrow_outward', title: 'Understand', description: 'Business structure, regulatory context and operational challenges.' },
    { icon: 'architecture', title: 'Design', description: 'Secure, scalable architectures aligned with enterprise governance.' },
    { icon: 'construction', title: 'Build', description: 'Implement platforms with quality control and integration discipline.' },
    { icon: 'layers', title: 'Evolve', description: 'Continuously optimize performance, automation and intelligence.' },
  ],
};

/* 8 — "Why ITG": copy on the left, four ticked cards on the right. */
export const whyItg = {
  eyebrow: 'Why ITG',
  title: 'Why Enterprises Partner with ITG',
  body: 'We align enterprise platforms with long-term governance, operational resilience and measurable outcomes.',
  reasons: [
    { title: 'Enterprise-First Mindset', description: 'Designed for governance, resilience and long-term platform value.' },
    { title: 'Platform-Centric Delivery', description: 'Systems engineered for reuse, scale and integration.' },
    { title: 'Governance, Security & Compliance', description: 'Built-in regulatory and operational control frameworks.' },
    { title: 'Industry & Regulatory Awareness', description: 'Deep domain alignment across complex environments.' },
  ],
};

/* 9 — Insights. */
export const insights = {
  title: 'Perspectives, Research and Real-World Outcomes',
  intro: 'Insights at ITG provide executive perspectives, research depth and proof of outcomes - designed to inform decision-makers, not market trends.',
  body: 'Thought leadership and evidence-based guidance for enterprise leaders navigating transformation.',
  cta: { label: 'Explore Insights', href: '#' },
  cards: [
    { category: 'Thought Leadership', title: 'Executive Perspectives on Enterprise AI Adoption' },
    { category: 'Case Studies', title: 'Operational Transformation with Enterprise Platforms' },
    { category: 'Research and Publications', title: 'Data Governance and Compliance in Multi-Entity Organizations' },
    { category: 'News and Media', title: 'ITG Platform Initiatives and Industry Updates' },
  ],
};

/* 10 — Global presence. */
export const globalPresence = {
  title: 'Global Reach with Local Understanding',
  body: 'With teams and partners across regions, ITG delivers platforms aligned with local business needs and global enterprise standards.',
  regions: ['Middle East', 'Europe', 'Asia'],
};

/* 11 — The closing band above the footer. */
export const finalCta = {
  title: 'Engineering What’s Next — Together',
  body: 'Partner with ITG to modernize systems, deploy scalable platforms, and unlock intelligent enterprise performance.',
  cta: { label: 'Speak with an ITG Solution Architect', href: '/company' },
};
