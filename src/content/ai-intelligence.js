/* ============================================================================
 * AI & INTELLIGENCE PAGE
 * ======================
 * shown at  yoursite.com/ai-intelligence
 *
 * Reached from the top menu: Solutions > AI & Intelligence.
 * Change the text between the quote marks and save.
 * ========================================================================= */

/* The banner at the top of the page. */
export const hero = {
  eyebrow: 'AI & INTELLIGENCE',
  title: 'AI & Intelligence',
  subtitle: 'Embedding Intelligence Across Enterprise Systems, Data and Operations',
  body: 'AI & Intelligence at ITG is not positioned as experimentation or isolated innovation. It is designed as a foundational enterprise capability - embedded into systems, data and workflows to support better decisions, automation and regulatory readiness.',
  note: 'AI at ITG works with existing enterprise platforms and evolves with business needs.',
  primaryCta: { label: 'Explore Capabilities', href: '#capabilities' },
  secondaryCta: { label: 'Talk to an Expert', href: '#contact' },
  listTitle: 'We help organizations:',
  list: [
    'Move from fragmented data to connected intelligence',
    'Apply AI where it delivers measurable operational value',
    'Prepare for compliance, traceability and audit confidence',
    'Modernize operations through intelligent automation',
  ],
};

/* The "What this solution covers" grid. Each card jumps to the matching
 * capability further down the page — `id` is what links the two, so if you
 * change an `id` here, change it in `capabilities` below as well. */
export const cover = {
  title: 'What This Solution Covers',
  intro: 'A full spectrum of AI, data and intelligence services designed for enterprise scale.',
  cards: [
    { id: 'ai-strategy', icon: 'target', title: 'AI Strategy & Advisory', description: 'Business-aligned AI direction with responsible governance.' },
    { id: 'applied-ai-ml', icon: 'neurology', title: 'Applied AI & Machine Learning', description: 'Practical AI that runs inside real workflows.' },
    { id: 'enterprise-analytics', icon: 'bar_chart', title: 'Enterprise Analytics & Business Intelligence', description: 'Decision intelligence across roles and departments.' },
    { id: 'data-platforms', icon: 'hub', title: 'Data Platforms & Insights', description: 'Structured data foundations for AI and analytics.' },
    { id: 'ai-document-intel', icon: 'menu_book', title: 'AI Document Intelligence', description: 'Turn unstructured documents into usable data.' },
    { id: 'industry-4-0', icon: 'factory', title: 'Industry 4.0 & Smart Systems', description: 'Connected operations with predictive insights.' },
    { id: 'dpp-ai', icon: 'verified_user', title: 'Digital Product Passport (AI-Enabled)', description: 'AI-enabled compliance, traceability, and audit confidence.' },
  ],
};

/* Labels reused above every capability block below. */
export const capabilityLabels = {
  focus: 'Solution Focus',
  outcome: 'Outcome',
};

/* One long block per capability, in page order. */
export const capabilities = [
  {
    id: 'ai-strategy',
    icon: 'target',
    title: 'AI Strategy & Advisory',
    subtitle: 'Defining a Responsible, Business-Aligned AI Direction',
    description:
      'AI adoption succeeds when it is aligned with business priorities, governance and readiness. We support leadership teams in defining where AI makes sense and how it should scale responsibly.',
    focus: [
      'AI readiness and maturity assessment',
      'Business-aligned AI roadmap',
      'Use-case prioritization',
      'Governance, risk and ethical considerations',
    ],
    outcome: [
      'Clear AI direction aligned with enterprise objectives',
      'Reduced risk of fragmented or ungoverned AI initiatives',
    ],
    ctas: [
      { label: 'Talk to an AI Strategy Expert', href: '#contact' },
      { label: 'Request an AI Readiness Discussion', href: '#contact' },
    ],
  },
  {
    id: 'applied-ai-ml',
    icon: 'neurology',
    title: 'Applied AI & Machine Learning',
    subtitle: 'Practical AI Embedded into Real Business Workflows',
    description:
      'We design AI and machine learning capabilities that operate inside enterprise processes, supporting automation and decision-making where it matters.',
    focus: [
      'Predictive and prescriptive analytics',
      'Intelligent automation',
      'Pattern recognition and anomaly detection',
      'Decision-support systems',
    ],
    outcome: [
      'Faster, data-driven decisions',
      'Reduced manual effort',
      'Improved operational efficiency',
    ],
    ctas: [
      { label: 'Explore Applied AI Use Cases', href: '#contact' },
      { label: 'Talk to an AI Solutions Expert', href: '#contact' },
    ],
  },
  {
    id: 'enterprise-analytics',
    icon: 'bar_chart',
    title: 'Enterprise Analytics & Business Intelligence',
    subtitle: 'From Static Reporting to Decision Intelligence',
    description:
      'Enterprises need visibility that goes beyond reports. We enable real-time, role-based analytics that support operational and strategic decisions.',
    focus: [
      'Executive and operational dashboards',
      'Cross-system analytics',
      'Performance and KPI monitoring',
      'Financial and operational intelligence',
    ],
    outcome: [
      'Single source of truth',
      'Improved decision confidence across departments',
    ],
    ctas: [
      { label: 'Explore Enterprise Analytics Capabilities', href: '#contact' },
      { label: 'See Analytics Across Business Systems', href: '#contact' },
    ],
  },
  {
    id: 'data-platforms',
    icon: 'hub',
    title: 'Data Platforms & Insights',
    subtitle: 'Building the Data Foundation for Intelligence',
    description:
      'AI and analytics depend on structured, trusted data. We design data platforms that unify enterprise information into analytics- and AI-ready foundations.',
    focus: [
      'Enterprise data architecture',
      'Data integration and modeling',
      'Structured data pipelines',
      'Governance-ready data design',
    ],
    outcome: [
      'Reliable enterprise data',
      'Faster analytics and AI deployment',
    ],
    ctas: [
      { label: 'Explore Data Platform Architecture', href: '#contact' },
      { label: 'Talk to a Data & Analytics Expert', href: '#contact' },
    ],
  },
  {
    id: 'ai-document-intel',
    icon: 'menu_book',
    title: 'AI Document Intelligence',
    subtitle: 'Turning Unstructured Documents into Actionable Data',
    description:
      'Organizations manage large volumes of documents - invoices, contracts, certificates, reports. We apply AI to extract structure, meaning, and insight from unstructured content.',
    focus: [
      'Intelligent document classification',
      'Data extraction and validation',
      'Workflow automation',
      'Audit-ready document processing',
    ],
    outcome: [
      'Reduced manual processing',
      'Faster document workflows',
      'Improved compliance and accuracy',
    ],
    ctas: [
      { label: 'See Document Intelligence in Action', href: '#contact' },
      { label: 'Explore Document Intelligence Platform', href: '#contact' },
    ],
  },
  {
    id: 'industry-4-0',
    icon: 'factory',
    title: 'Industry 4.0 & Smart Systems',
    subtitle: 'Intelligence for Connected Industrial Operations',
    description:
      'We apply AI and data intelligence to industrial environments to enable smarter, more connected operations.',
    focus: [
      'Production analytics',
      'Operational visibility',
      'Predictive insights',
      'Smart factory enablement',
    ],
    outcome: [
      'Improved efficiency and yield',
      'Better production control',
      'Data-driven industrial decisions',
    ],
    ctas: [
      { label: 'Explore Smart Industry Solutions', href: '#contact' },
      { label: 'View Manufacturing Use Cases', href: '#contact' },
    ],
  },
];

/* The highlighted block near the bottom. */
export const dpp = {
  icon: 'verified_user',
  title: 'Digital Product Passport (AI-Enabled)',
  body: 'Build compliance, traceability and audit confidence through AI-enabled product intelligence that integrates with enterprise systems.',
  cta: { label: 'Explore DPP Enablement', href: '#contact' },
};

/* The closing band above the footer. */
export const finalCta = {
  title: 'Ready to Operationalize AI Across Your Enterprise?',
  body: 'Talk with ITG about AI strategy, applied intelligence, and systems that scale with your business.',
  primaryCta: { label: 'Talk to an AI Expert', href: '#contact' },
  secondaryCta: { label: 'Request a Readiness Discussion', href: '#contact' },
};
