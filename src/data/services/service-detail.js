/* ============================================================================
 * SERVICE CATEGORY PAGES  (tier 2)
 * ===============================
 * Five pages, one per Services menu entry: Engineering, Data Management, ESG,
 * Cloud & Infrastructure and BPO. Individual services (tier 3) are sections
 * on these pages, exactly the way products are sections on the platform pages.
 *
 * Re-organised Sept 2026 from six categories. Two were removed (Enterprise
 * Platforms and Implementations, AI and Advanced Technologies) together with
 * their services; their old addresses forward to /services
 * (src/routes/oldAddresses.js).
 *
 * Everything you might want to reword or re-image is in this file. Change the
 * text between the quote marks and save — the site picks it up on its own.
 *
 * TWO RULES WORTH KEEPING
 *   1. Keep the slugs in `serviceCategoryPaths` stable. The navigation menu,
 *      the footer and any link you have shared point at them.
 *   2. Keep each service `id` in step with the menu in `navbar-tier3.js`. The menu
 *      links to `/<slug>#<id>`, and the page scrolls to that section.
 *
 * ICONS are Material Symbols names. A name that is not listed in the
 * `icon_names=` list in `index.html` renders as an empty box — add it there
 * first if you introduce a new one.
 * ========================================================================= */

export const serviceCategoryPaths = {
  engineering: '/engineering-services',
  'data-management': '/data-management-services',
  esg: '/esg-services',
  cloud: '/cloud-infrastructure-services',
  bpo: '/bpo-services',
};

/* Wording shared by all five pages. Change it once, it changes everywhere. */
export const serviceDetail = {
  home: 'Home',
  services: 'Services',
  skipLink: 'Skip to content',
  explore: 'Explore the Services',
  talk: 'Request a Consultation',
  // Section-navigation labels.
  overview: 'Overview',
  servicesNav: 'Services',
  delivery: 'Delivery',
  overviewEyebrow: 'What this covers',
  servicesEyebrow: 'In this category',
  servicesTitle: 'Find the engagement that fits.',
  serviceFocus: 'What this includes',
  discuss: 'Discuss this service',
  serviceLink: 'Explore service',   // link from each service to its own page
  deliveryEyebrow: 'How we deliver',
  deliveryTitle: 'A structured path from scope to adoption.',
  deliveryIntro:
    'Every engagement follows the same delivery model: understand the environment, design against it, build in stages and stay involved once the work is live.',
  steps: [
    { title: 'Assess', body: 'Review the systems, processes and constraints already in place. Agree on the scope worth committing to.' },
    { title: 'Architect', body: 'Define the design, integration points and success measures before build begins.' },
    { title: 'Deliver', body: 'Build and validate in controlled stages, with your teams involved at each checkpoint.' },
    { title: 'Enable', body: 'Hand over with documentation and training, then support adoption as usage grows.' },
  ],
  relatedEyebrow: 'Explore more',
  relatedTitle: 'Discover the other delivery capabilities.',
  relatedLink: 'Explore services',
  allServices: 'View All Services',
  contactEyebrow: 'Your next step',
  // Configure an email to enable service enquiries. The fallback is a live page.
  contactEmail: '',
  contactFallback: { label: 'Start a Conversation', href: '/contact?topic=project' },
};

export const serviceCategories = [
  /* ── Engineering Services ────────────────────────────────────────────────── */
  {
    id: 'engineering',
    name: 'Engineering Services',
    shortName: 'Engineering',
    icon: 'code',
    image: '/images/services/pillar-design.jpg',
    focus: 'center',
    headline: 'Platforms built to hold.',
    accent: 'Designed around how you work.',
    description:
      'Engineering services for AI integration, connected devices, cloud platforms and dedicated product delivery.',
    overviewTitle: 'Build and modernize systems that work together.',
    lead: 'A platform is only as good as the process it supports.',
    overviewBody:
      'ITG combines software, data and platform engineering to connect AI capabilities, edge devices and enterprise applications. Teams can engage for a defined integration or a dedicated product workstream.',
    outcomes: [
      { icon: 'route', title: 'Workflows that match reality', body: 'Interfaces and data models shaped by the process they serve, not the other way round.' },
      { icon: 'shield', title: 'Secure by construction', body: 'Access control, validation and audit built into the foundation rather than added late.' },
      { icon: 'trending_up', title: 'Room to extend', body: 'Architecture that accommodates the next requirement without a rebuild.' },
    ],
    services: [
      {
        id: 'web-development',
        name: 'AI & Agentic Systems Integration',
        icon: 'language',
        description: 'Connect AI agents to business systems.',
        body: 'Integrate AI services and agent workflows with enterprise data, tools and approvals so useful automation can operate within clear controls.',
        focus: ['Use-case and workflow design', 'Model, tool and data integration', 'Human approval, observability and governance'],
      },
      {
        id: 'application-development',
        name: 'Embedded / IoT & Edge Computing',
        icon: 'deployed_code',
        description: 'Software for connected devices and the edge.',
        body: 'Build embedded and IoT systems that capture device data, act locally where needed and connect reliably to enterprise platforms.',
        focus: ['Device and sensor integration', 'Edge processing and connectivity', 'Secure data exchange and fleet management'],
      },
      {
        id: 'ui-ux-design',
        name: 'Cloud & Platform Modernization',
        icon: 'devices',
        description: 'Modernize cloud foundations and platforms.',
        body: 'Assess application dependencies, design target architecture and move workloads in controlled stages with security and operations built in.',
        focus: ['Platform and workload assessment', 'Cloud architecture and migration', 'Reliability, security and operating model'],
      },
      {
        id: 'graphic-design',
        name: 'Dedicated Product Engineering (PODs)',
        icon: 'palette',
        description: 'A dedicated team for sustained product delivery.',
        body: 'Assemble a focused engineering pod with product, design and delivery skills to build, improve and support a defined product roadmap.',
        focus: ['Roadmap and team setup', 'Iterative build and quality assurance', 'Documentation and product handover'],
      },
      {
        id: 'sharepoint-solutions',
        name: 'SharePoint Solutions',
        icon: 'groups',
        description: 'Enterprise collaboration portals',
        body: 'Turn SharePoint into a governed working environment: structured document handling, intranet portals and collaboration workflows that stay manageable as content grows.',
        focus: ['Intranet and collaboration portals', 'Document libraries and records governance', 'Workflow automation within Microsoft 365'],
      },
    ],
    feature: {
      eyebrow: 'Engineering discipline',
      title: 'Built in stages, reviewed at every one.',
      body: 'Large platforms fail in the gaps between design, build and handover. We close them by keeping architecture decisions documented, releases incremental and your teams inside the review loop from the first sprint.',
      points: ['Architecture agreed before build', 'Incremental, reviewable releases', 'Documentation and handover as deliverables'],
      image: '/images/services/ind-enterprise.jpg',
      imageAlt: 'Engineering teams working on enterprise digital platforms',
    },
    cta: { title: 'Need engineering capacity for a complex system?', body: 'Tell us what you need to connect, build or modernize. We will help define a practical delivery scope.', label: 'Discuss Engineering Services' },
  },

  /* ── Data Management Services ────────────────────────────────────────────── */
  {
    id: 'data-management',
    name: 'Data Management Services',
    shortName: 'Data Management',
    icon: 'bar_chart',
    image: '/images/services/pillar-data.jpg',
    focus: 'center',
    headline: 'Reporting people trust.',
    accent: 'Decisions people can defend.',
    description:
      'Improve the quality, movement and structure of data used across your business.',
    overviewTitle: 'Make operational data dependable and usable.',
    lead: 'Most reporting problems are definition problems.',
    overviewBody:
      'Data programs begin with trusted definitions and controlled movement. ITG helps teams clean source data, migrate it safely and build warehouse structures that support reporting and future analytics.',
    outcomes: [
        { icon: 'check_circle', title: 'Data you can trust', body: 'Quality rules and ownership applied before information reaches downstream systems.' },
        { icon: 'route', title: 'Controlled movement', body: 'Migration and pipeline steps reconciled from source to destination.' },
        { icon: 'bar_chart', title: 'A foundation for analysis', body: 'Warehouse structures designed around consistent definitions and useful access.' },
      ],
    services: [
      {
        id: 'power-bi',
        name: 'Data Cleansing, Validation & Hygiene',
        icon: 'bar_chart',
        description: 'Improve data quality at the source.',
        body: 'Profile, standardize and validate data so teams can resolve duplicates, missing values and inconsistent definitions before information reaches reports or applications.',
        focus: ['Data profiling and quality rules', 'Cleansing and deduplication workflows', 'Validation, monitoring and ownership'],
      },
      {
        id: 'bi-solutions',
        name: 'Data Migration & ETL Pipeline Services',
        icon: 'trending_up',
        description: 'Move data through controlled pipelines.',
        body: 'Plan source-to-target mapping, build extraction and transformation pipelines, and reconcile results so migrations and recurring data flows remain dependable.',
        focus: ['Source mapping and migration planning', 'ETL pipeline design and orchestration', 'Reconciliation, testing and cutover'],
      },
      {
        id: 'data-visualization',
        name: 'Data Warehousing',
        icon: 'grid_view',
        description: 'Organize data for reliable analysis.',
        body: 'Design warehouse models, ingestion and governance around the questions teams need to answer, with clear ownership and refresh rules.',
        focus: ['Warehouse architecture and modelling', 'Ingestion and transformation layers', 'Access, lineage and refresh governance'],
      },
    ],
    feature: { eyebrow: 'Data discipline', title: 'Know the source before moving the data.', body: 'Cleansing, migration and warehousing only work when the meaning and ownership of each field are understood. We document those decisions and validate each handoff before the next system depends on it.', points: ['Source definitions agreed', 'Quality and reconciliation rules applied', 'Ownership and lineage documented'], image: '/images/services/pillar-data.jpg', imageAlt: 'Enterprise data systems and analysis' },
    cta: { title: 'Where does your data lose reliability?', body: 'Tell us which source, migration or report is hardest to trust. We will define the first improvement step.', label: 'Discuss Data Management' },
  },

  /* ── ESG Services  (added Sept 2026 — first-draft copy, review before launch) ── */
  {
    id: 'esg',
    name: 'ESG Services',
    shortName: 'ESG',
    icon: 'eco',
    image: '/images/industries/ind-sustainability.jpg',
    focus: 'center',
    headline: 'Report with evidence.',
    accent: 'Improve with intent.',
    description:
      'ESG data, reporting and supply-chain due diligence, set up so the figures you publish can be traced back to their source.',
    overviewTitle: 'Turn ESG obligations into a process your teams can run.',
    lead: 'Most ESG effort goes into finding the data, not using it.',
    overviewBody:
      'Environmental, social and governance data is usually spread across finance, facilities, HR and suppliers, and collected by spreadsheet once a year. We help you define what to measure, where each figure comes from and who owns it, then put the collection, review and reporting on a repeatable footing. Our work supports your sustainability, legal and assurance advisers; it does not replace them.',
    outcomes: [
      { icon: 'route', title: 'Figures you can trace', body: 'Every reported number linked back to its source, owner and method.' },
      { icon: 'verified_user', title: 'Ready for review', body: 'Evidence and approvals organised for internal and external scrutiny.' },
      { icon: 'trending_up', title: 'Progress you can steer', body: 'Targets and actions tracked through the year, not rebuilt at year end.' },
    ],
    services: [
      {
        id: 'esg-data-reporting',
        name: 'Carbon Accounting & ESG Dashboards',
        icon: 'bar_chart',
        description: 'Measure emissions and report ESG performance.',
        body: 'Bring activity data, calculation methods and ESG indicators into dashboards and disclosure workflows that retain the evidence behind each figure.',
        focus: ['Emissions data and calculation workflows', 'ESG indicator dashboards', 'Review, approval and source traceability'],
      },
      {
        id: 'csrd-readiness',
        name: 'Supply Chain ESG & Vendor Sustainability',
        icon: 'verified_user',
        description: 'Understand sustainability across suppliers.',
        body: 'Collect relevant vendor ESG information, assess risks and improvement opportunities, and connect supplier responses to procurement decisions.',
        focus: ['Supplier questionnaires and data requests', 'Risk and performance assessment', 'Follow-up actions and evidence records'],
      },
      {
        id: 'carbon-accounting',
        name: 'Green IT & Carbon Footprint Optimization',
        icon: 'eco',
        description: 'Reduce the footprint of technology operations.',
        body: 'Measure the energy and emissions associated with IT services, then identify practical changes to infrastructure, workloads and equipment lifecycle.',
        focus: ['IT energy and emissions baseline', 'Infrastructure and workload optimization', 'Progress tracking and reporting'],
      },
      {
        id: 'supplier-due-diligence',
        name: 'Automated Regulatory Disclosure Engines',
        icon: 'account_tree',
        description: 'Prepare disclosures with controlled data flows.',
        body: 'Connect source data, calculation rules, approvals and report outputs to reduce manual work in recurring regulatory disclosures.',
        focus: ['Disclosure requirements and data mapping', 'Automated collection and validation', 'Review, audit trail and report generation'],
      },
    ],
    feature: {
      eyebrow: 'What gets missed',
      title: 'A number is only as good as its source.',
      body: 'Published ESG figures get questioned — by auditors, customers and investors. We make sure each one can be traced to the activity data, the method and the person who approved it, so answering the question takes minutes rather than weeks.',
      points: ['Source and method recorded per figure', 'Clear ownership and approval trail', 'Evidence kept alongside the report'],
      image: '/images/services/ind-sustainability.jpg',
      imageAlt: 'Renewable energy and sustainable infrastructure',
    },
    cta: {
      title: 'Getting ready for ESG reporting?',
      body: 'Tell us what you need to report and where your data lives today. We will help you plan the path from there.',
      label: 'Discuss an ESG Engagement',
    },
  },

  /* ── Cyber Security ─────────────────────────────────────── */
  {
    id: 'cloud',
    name: 'Cyber Security',
    shortName: 'Cyber Security',
    icon: 'cloud',
    image: '/images/services/pillar-cloud.jpg',
    focus: 'center',
    headline: 'Move with a plan.',
    accent: 'Not just a lift and shift.',
    description:
      'Protect infrastructure and applications through assessment, engineering, operations and governance.',
    overviewTitle: 'Build security into the operating environment.',
    lead: 'Security decisions depend on current evidence about systems, threats and controls.',
    overviewBody:
      'Cyber security work has to cover the estate teams actually run. ITG connects cloud and infrastructure controls, targeted testing, security operations review and GRC implementation into a practical improvement plan.',
    outcomes: [
        { icon: 'shield', title: 'Controls with clear ownership', body: 'Security responsibilities and safeguards mapped to the systems they protect.' },
        { icon: 'manage_search', title: 'Risks that can be prioritized', body: 'Assessment findings ranked by impact, exposure and remediation effort.' },
        { icon: 'verified_user', title: 'Improvement you can verify', body: 'Actions tracked through implementation, testing and review.' },
      ],
    services: [
      {
        id: 'cloud-consulting',
        name: 'Cloud & Infrastructure Security',
        icon: 'cloud',
        description: 'Secure cloud and infrastructure foundations.',
        body: 'Review identity, network, configuration and monitoring controls across cloud and on-premises systems, then implement prioritized improvements.',
        focus: ['Architecture and configuration review', 'Identity and access controls', 'Monitoring, hardening and recovery'],
      },
      {
        id: 'cloud-migration',
        name: 'Security Assessment and Testing',
        icon: 'architecture',
        description: 'Find and validate security weaknesses.',
        body: 'Assess applications, infrastructure and processes with a defined testing scope, then prioritize findings and verify remediation.',
        focus: ['Assessment scope and threat scenarios', 'Technical testing and evidence', 'Risk-ranked findings and retesting'],
      },
      {
        id: 'hybrid-multicloud',
        name: 'SOC Maturity Assessment',
        icon: 'hub',
        description: 'Assess the maturity of security operations.',
        body: 'Review monitoring coverage, alert handling, incident workflows and team capability to define a realistic SOC improvement roadmap.',
        focus: ['Logging and detection coverage', 'Triage and response processes', 'People, tooling and maturity roadmap'],
      },
      {
        id: 'grc-implementation',
        name: 'GRC Implementation',
        icon: 'verified_user',
        description: 'Governance, risk and compliance implementation',
        body: 'Discuss governance, risk and compliance requirements and the controls needed to support them.',
        focus: ['Governance requirements', 'Risk controls', 'Compliance processes'],
      },
    ],
    feature: { eyebrow: 'Security in practice', title: 'Make every finding actionable.', body: 'A useful assessment shows where a control is weak, who owns the fix and how the team will verify it. We connect testing, implementation and operating procedures so the result improves day-to-day security.', points: ['Findings tied to affected systems', 'Remediation owners and priorities agreed', 'Controls retested after changes'], image: '/images/services/pillar-platform.jpg', imageAlt: 'Enterprise technology infrastructure' },
    cta: { title: 'Ready to strengthen your security posture?', body: 'Tell us which systems or controls you need to assess. We will help define a focused starting scope.', label: 'Discuss Cyber Security' },
  },

  /* ── BPO Services (was Automation and Process Services; copy still describes automation) ── */
  {
    id: 'bpo',
    name: 'BPO Services',
    shortName: 'BPO',
    icon: 'bolt',
    image: '/images/services/pillar-automation.jpg',
    focus: 'center',
    headline: 'Less manual effort.',
    accent: 'Not less control.',
    description:
      'Managed support and operations for technology, data, sales and finance teams.',
    overviewTitle: 'Extend operations with accountable service delivery.',
    lead: 'A managed service works when the handoffs and measures are explicit.',
    overviewBody:
      'ITG supports repeatable business processes with clear service levels, documented handoffs and reporting. Engagements are scoped around the work, quality controls and information access needed to deliver reliably.',
    outcomes: [
        { icon: 'work', title: 'Reliable response', body: 'Requests and exceptions handled through clear queues, priorities and escalations.' },
        { icon: 'check_circle', title: 'Quality under control', body: 'Work reviewed against agreed standards with visible error and rework trends.' },
        { icon: 'bar_chart', title: 'Transparent performance', body: 'Service levels, throughput and outcomes reported in a consistent way.' },
      ],
    services: [
      {
        id: 'workflow-automation',
        name: 'Technical Support & IT Help Desk',
        icon: 'route',
        description: 'Responsive support for users and systems.',
        body: 'Provide a structured help desk for incidents and requests, with triage, escalation, knowledge capture and service reporting.',
        focus: ['Ticket intake and classification', 'Resolution and escalation workflows', 'Knowledge base and service metrics'],
      },
      {
        id: 'rpa',
        name: 'AI Training Data Operations',
        icon: 'bolt',
        description: 'High-quality data operations for AI teams.',
        body: 'Prepare, label, review and govern training data with documented instructions and quality checks suited to the model use case.',
        focus: ['Data preparation and annotation', 'Quality sampling and review', 'Secure handling and throughput reporting'],
      },
      {
        id: 'digital-transformation',
        name: 'B2B SDR Support',
        icon: 'auto_awesome',
        description: 'Support business-to-business prospecting.',
        body: 'Coordinate research, outreach preparation, CRM updates and appointment support within an agreed sales development process.',
        focus: ['Account and contact research', 'Outreach workflow support', 'CRM hygiene and activity reporting'],
      },
      {
        id: 'finance-accounting-outsourcing',
        name: 'Finance & Accounting Outsourcing (FAO)',
        icon: 'account_balance',
        description: 'Finance and accounting outsourcing',
        body: 'Discuss the finance and accounting activities your team needs support with and the handoffs, controls and reporting required.',
        focus: ['Finance operations', 'Accounting support', 'Reporting and controls'],
      },
    ],
    feature: { eyebrow: 'Service governance', title: 'Define the work before scaling it.', body: 'We document inputs, decisions, quality checks and escalation paths at the start. That gives both teams a common operating picture and a way to improve the service as volume grows.', points: ['Clear scope and service levels', 'Documented handoffs and escalation', 'Regular quality and performance review'], image: '/images/services/ind-enterprise.jpg', imageAlt: 'Team coordinating enterprise operations' },
    cta: { title: 'Need capacity in a critical workflow?', body: 'Describe the volume, turnaround and controls your team needs. We will outline an appropriate service model.', label: 'Discuss BPO Services' },
  },
];

export const servicePages = serviceCategories.map(category => ({ ...category, href: serviceCategoryPaths[category.id] }));
