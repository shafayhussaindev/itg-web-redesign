/* ============================================================================
 * SERVICE CATEGORY PAGES  (tier 2)
 * ===============================
 * Six pages, one per Services menu category. Individual services are sections
 * on these pages, exactly the way products are sections on the tier-2 product
 * pages.
 *
 * Everything you might want to reword or re-image is in this file. Change the
 * text between the quote marks and save — the site picks it up on its own.
 *
 * TWO RULES WORTH KEEPING
 *   1. Keep the slugs in `serviceCategoryPaths` stable. The navigation menu,
 *      the footer and any link you have shared point at them.
 *   2. Keep each service `id` in step with the menu in `site.js`. The menu
 *      links to `/<slug>#<id>`, and the page scrolls to that section.
 *
 * ICONS are Material Symbols names. A name that is not listed in the
 * `icon_names=` list in `index.html` renders as an empty box — add it there
 * first if you introduce a new one.
 * ========================================================================= */

export const serviceCategoryPaths = {
  'digital-engineering': '/digital-engineering-services',
  'data-analytics': '/data-analytics-intelligence',
  automation: '/automation-process-services',
  'enterprise-platforms': '/enterprise-platform-services',
  'ai-advanced': '/ai-advanced-technology-services',
  cloud: '/cloud-infrastructure-services',
};

/* Wording shared by all six pages. Change it once, it changes everywhere. */
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
  contactFallback: { label: 'Meet the ITG Team', href: '/company' },
};

export const serviceCategories = [
  {
    id: 'digital-engineering',
    name: 'Digital Engineering Services',
    shortName: 'Digital Engineering',
    icon: 'code',
    image: '/assets/services/pillar-design.jpg',
    focus: 'center',
    headline: 'Platforms built to hold.',
    accent: 'Designed around how you work.',
    description:
      'Enterprise web and application platforms, designed and engineered around business workflows rather than assembled from templates.',
    tags: ['Workflow-led design', 'Secure foundations', 'Built to scale'],
    overviewTitle: 'Engineering that starts with the workflow, not the screen.',
    lead: 'A platform is only as good as the process it supports.',
    overviewBody:
      'Digital engineering at ITG begins with how work actually moves through your organization — who needs what information, at which point, and under what controls. The interface, the architecture and the integration points follow from that. The result is a platform your teams can use without workarounds and your engineers can extend without rewriting.',
    outcomes: [
      { icon: 'route', title: 'Workflows that match reality', body: 'Interfaces and data models shaped by the process they serve, not the other way round.' },
      { icon: 'shield', title: 'Secure by construction', body: 'Access control, validation and audit built into the foundation rather than added late.' },
      { icon: 'trending_up', title: 'Room to extend', body: 'Architecture that accommodates the next requirement without a rebuild.' },
    ],
    services: [
      {
        id: 'web-development',
        name: 'Web Development',
        icon: 'language',
        description: 'Enterprise web platforms and portals',
        body: 'Build web platforms that carry real business processes — customer portals, partner systems and internal applications with the performance, accessibility and security an enterprise environment requires.',
        focus: ['Enterprise portals and web applications', 'Performance, accessibility and responsive delivery', 'Integration with business systems and identity'],
      },
      {
        id: 'application-development',
        name: 'Application Development',
        icon: 'deployed_code',
        description: 'Custom application engineering',
        body: 'Engineer applications around processes that standard software does not cover. Scope, architecture and release approach are defined against your operating environment before build begins.',
        focus: ['Custom business application design', 'API and service architecture', 'Staged release and quality assurance'],
      },
      {
        id: 'ui-ux-design',
        name: 'UI UX Design',
        icon: 'devices',
        description: 'Human-centered product design',
        body: 'Design interfaces around the people who use them daily. Research, structure and interaction are resolved before build, so engineering work is spent on a design that has already been tested.',
        focus: ['User research and journey mapping', 'Interaction and interface design systems', 'Accessibility and usability validation'],
      },
      {
        id: 'graphic-design',
        name: 'Graphic and Visual Design',
        icon: 'palette',
        description: 'Brand and visual systems',
        body: 'Establish a visual language that holds together across products, documents and channels — defined as a reusable system rather than a set of one-off assets.',
        focus: ['Visual identity and design systems', 'Product and campaign visual assets', 'Brand consistency across digital channels'],
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
      image: '/assets/services/ind-enterprise.jpg',
      imageAlt: 'Engineering teams working on enterprise digital platforms',
    },
    cta: {
      title: 'Have a platform to build?',
      body: 'Bring the workflow, the constraints and the systems it has to sit alongside. We will help define a scope worth committing to.',
      label: 'Discuss an Engineering Engagement',
    },
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics and Intelligence',
    shortName: 'Data & Intelligence',
    icon: 'bar_chart',
    image: '/assets/services/pillar-data.jpg',
    focus: 'center',
    headline: 'Reporting people trust.',
    accent: 'Decisions people can defend.',
    description:
      'Analytics, business intelligence and reporting built on definitions your teams agree on, so the numbers hold up when they are questioned.',
    tags: ['Agreed definitions', 'Operational reporting', 'Decision support'],
    overviewTitle: 'The hard part is agreement, not the dashboard.',
    lead: 'Most reporting problems are definition problems.',
    overviewBody:
      'When two teams report different revenue figures, the tool is rarely at fault — the underlying definitions were never reconciled. We start by settling what each measure means and where it comes from, then build the models and reports on top. What follows is a reporting layer that survives scrutiny in a board meeting.',
    outcomes: [
      { icon: 'balance', title: 'One set of definitions', body: 'Measures agreed across finance and operations before a report is built.' },
      { icon: 'grid_view', title: 'Reporting that fits the role', body: 'Executive summaries and operational detail drawn from the same trusted model.' },
      { icon: 'verified_user', title: 'Governed access', body: 'Clear ownership of data, refresh cycles and who can see what.' },
    ],
    services: [
      {
        id: 'power-bi',
        name: 'Power BI and Analytics',
        icon: 'bar_chart',
        description: 'Power BI dashboards and analytics',
        body: 'Build Power BI from the model upward — data sources, relationships and measures defined first, then reports designed for the decisions they support.',
        focus: ['Data modelling and measure definition', 'Report and dashboard design', 'Refresh, workspace and access governance'],
      },
      {
        id: 'bi-solutions',
        name: 'Business Intelligence Solutions',
        icon: 'trending_up',
        description: 'Enterprise BI platforms',
        body: 'Establish the reporting layer that sits across your business systems, with the data pipelines, warehouse structure and governance to keep it dependable.',
        focus: ['Data warehouse and pipeline design', 'Cross-system reporting architecture', 'Data quality and ownership frameworks'],
      },
      {
        id: 'data-visualization',
        name: 'Data Visualization and Reporting',
        icon: 'grid_view',
        description: 'Reports and visual storytelling',
        body: 'Present information so the conclusion is visible without explanation — reporting packs, operational views and board material designed for the reader.',
        focus: ['Report and visualization design standards', 'Operational and executive reporting packs', 'Distribution, scheduling and commentary'],
      },
    ],
    feature: {
      eyebrow: 'Before the first report',
      title: 'Settle the numbers, then build the view.',
      body: 'We run a definition workshop before any modelling starts. Each measure gets an owner, a source and a written meaning. It is unglamorous work, and it is the difference between a dashboard that gets used and one that gets argued with.',
      points: ['Agreed measures with named owners', 'Documented sources and refresh cycles', 'Reporting designed to the decision'],
      image: '/assets/services/ind-manufacturing.jpg',
      imageAlt: 'Operational data reviewed on screen in an industrial setting',
    },
    cta: {
      title: 'Not confident in the numbers?',
      body: 'Tell us which reports get questioned and where the figures diverge. That is usually the right place to start.',
      label: 'Discuss a Data Engagement',
    },
  },
  {
    id: 'automation',
    name: 'Automation and Process Services',
    shortName: 'Automation & Process',
    icon: 'bolt',
    image: '/assets/services/pillar-automation.jpg',
    focus: 'center',
    headline: 'Less manual effort.',
    accent: 'Not less control.',
    description:
      'Workflow automation, robotic process automation and process redesign applied where they reduce effort without weakening oversight.',
    tags: ['Process first', 'Audit retained', 'Measured effort saved'],
    overviewTitle: 'Automate the process you have fixed, not the one you have.',
    lead: 'Automating a broken process makes it fail faster.',
    overviewBody:
      'We map the process before proposing any automation, because a workflow with unclear ownership or missing controls will simply break at machine speed. Once the process is sound, automation is applied where the effort and error rate justify it — and the approvals, logs and exception paths stay in place.',
    outcomes: [
      { icon: 'route', title: 'Processes mapped first', body: 'Handoffs, exceptions and approvals documented before anything is automated.' },
      { icon: 'lock', title: 'Controls preserved', body: 'Approval gates and audit trails carried through the automated path.' },
      { icon: 'target', title: 'Effort measured', body: 'A baseline taken before, so the saving can be shown afterwards.' },
    ],
    services: [
      {
        id: 'workflow-automation',
        name: 'Workflow Automation',
        icon: 'route',
        description: 'Streamlined process flows',
        body: 'Rebuild approval and handoff-heavy processes as governed digital workflows, with routing, escalation and exception handling made explicit.',
        focus: ['Process mapping and redesign', 'Approval routing and escalation rules', 'Exception handling and audit trails'],
      },
      {
        id: 'rpa',
        name: 'RPA Robotic Process Automation',
        icon: 'bolt',
        description: 'Bot-driven task automation',
        body: 'Apply software robots to the repetitive, rule-based tasks that sit between systems, with monitoring and fallback defined before anything runs unattended.',
        focus: ['Task assessment and automation suitability', 'Bot development, testing and deployment', 'Monitoring, exception alerts and fallback paths'],
      },
      {
        id: 'digital-transformation',
        name: 'Digital Transformation Services',
        icon: 'auto_awesome',
        description: 'Operating model modernization',
        body: 'Work through the sequencing when the change is larger than a single process — which capability moves first, what it depends on, and how the organization absorbs it.',
        focus: ['Current-state assessment and roadmap', 'Sequencing and dependency planning', 'Change, adoption and capability building'],
      },
    ],
    feature: {
      eyebrow: 'The honest assessment',
      title: 'Some processes should not be automated.',
      body: 'Part of the work is telling you where automation will not pay back — low volume, high variation, or a process due to be replaced anyway. We would rather narrow the scope early than deliver a bot that nobody trusts six months later.',
      points: ['Suitability assessed before commitment', 'Volume and error baselines taken', 'Scope narrowed where payback is thin'],
      image: '/assets/services/ind-logistics.jpg',
      imageAlt: 'Logistics operations coordinated across connected systems',
    },
    cta: {
      title: 'Know which process is costing you?',
      body: 'Bring the one your teams complain about most. We will look at whether automation is the right answer before proposing it.',
      label: 'Discuss an Automation Engagement',
    },
  },
  {
    id: 'enterprise-platforms',
    name: 'Enterprise Platforms and Implementations',
    shortName: 'Enterprise Platforms',
    icon: 'layers',
    image: '/assets/services/pillar-platform.jpg',
    focus: 'center',
    headline: 'Implementation that lands.',
    accent: 'And keeps working after.',
    description:
      'Dynamics 365, Salesforce and wider ERP and CRM programmes implemented with migration, integration and adoption planned from the start.',
    tags: ['Migration planned', 'Integration mapped', 'Adoption supported'],
    overviewTitle: 'The licence is the easy part.',
    lead: 'Platform programmes rarely fail on technology.',
    overviewBody:
      'They fail on data nobody cleaned, integrations discovered late, and users who were trained once and left to it. We plan the migration, map the integration surface and build enablement into the schedule — so the platform is genuinely in use at the point the programme closes, not merely installed.',
    outcomes: [
      { icon: 'account_tree', title: 'Migration taken seriously', body: 'Data profiled, cleansed and reconciled with a defined cutover.' },
      { icon: 'hub', title: 'Integrations mapped early', body: 'The full surface identified during design, not during testing.' },
      { icon: 'school', title: 'Adoption built in', body: 'Role-based enablement and support planned alongside the build.' },
    ],
    services: [
      {
        id: 'dynamics-365',
        name: 'Microsoft Dynamics 365',
        icon: 'domain',
        description: 'Dynamics 365 implementation',
        body: 'Implement Dynamics 365 against your operating model — configuration, extension and integration decided on business requirements rather than default settings.',
        focus: ['Requirement mapping and solution design', 'Configuration, extension and integration', 'Data migration, testing and go-live support'],
      },
      {
        id: 'salesforce',
        name: 'Salesforce Implementation',
        icon: 'groups',
        description: 'Salesforce delivery and setup',
        body: 'Set up Salesforce around how your commercial teams actually sell and serve, with the object model, automation and reporting designed for that process.',
        focus: ['Object model and process configuration', 'Automation, validation and reporting setup', 'Migration, user enablement and rollout'],
      },
      {
        id: 'erp-crm-enablement',
        name: 'ERP and CRM Enablement',
        icon: 'layers',
        description: 'ERP/CRM adoption services',
        body: 'Support the programme around the platform: readiness assessment, data preparation, training and the post-go-live period when adoption is decided.',
        focus: ['Readiness assessment and programme planning', 'Data preparation and reconciliation', 'Training, hypercare and ongoing support'],
      },
    ],
    feature: {
      eyebrow: 'Where programmes slip',
      title: 'Data migration is the schedule risk.',
      body: 'Legacy data is almost always worse than expected — duplicates, missing references, fields used for something other than their label. We profile it early and give you an honest read on effort, because discovering it during user testing is what pushes go-live dates.',
      points: ['Data profiled at the start, not the end', 'Cleansing effort quantified early', 'Reconciled cutover with a rollback plan'],
      image: '/assets/services/ind-retail.jpg',
      imageAlt: 'Retail operations running on connected enterprise platforms',
    },
    cta: {
      title: 'Planning a platform programme?',
      body: 'Tell us the platform, the timeline and the systems it has to connect to. We will give you a realistic view of the work.',
      label: 'Discuss an Implementation',
    },
  },
  {
    id: 'ai-advanced',
    name: 'AI and Advanced Technologies',
    shortName: 'AI & Advanced Tech',
    icon: 'neurology',
    image: '/assets/cat-ai.jpg',
    focus: 'center',
    headline: 'Applied where it earns its place.',
    accent: 'Measured against the alternative.',
    description:
      'Artificial intelligence, applied machine learning and smart systems delivered against a defined decision, with a baseline to measure them by.',
    tags: ['Defined use case', 'Measured baseline', 'Human oversight'],
    overviewTitle: 'Start from the decision, not the technology.',
    lead: 'The question is what decision improves, and by how much.',
    overviewBody:
      'AI work goes wrong when it starts from capability rather than need. We begin with a decision that is currently made on incomplete information, establish how well it is made today, and only then assess whether a model improves it enough to justify building and maintaining one. Where it does, oversight and review are designed in from the start.',
    outcomes: [
      { icon: 'target', title: 'A defined use case', body: 'A specific decision or process identified before any model is proposed.' },
      { icon: 'balance', title: 'An honest baseline', body: 'Current performance measured, so improvement can be demonstrated.' },
      { icon: 'verified_user', title: 'Oversight by design', body: 'Human review, escalation and monitoring built into the workflow.' },
    ],
    services: [
      {
        id: 'ai-services',
        name: 'Artificial Intelligence Services',
        icon: 'neurology',
        description: 'AI strategy and delivery',
        body: 'Assess where AI is worth applying across your operations, then deliver the selected use cases with the data preparation and evaluation they require.',
        focus: ['Use case identification and feasibility', 'Data readiness and model development', 'Evaluation, monitoring and review cycles'],
      },
      {
        id: 'ai-solutions',
        name: 'AI Solutions and Enablement',
        icon: 'auto_awesome',
        description: 'Production AI enablement',
        body: 'Move models out of evaluation and into daily operation, with integration, monitoring and retraining handled as part of the operating process.',
        focus: ['Integration into operational workflows', 'Monitoring, drift detection and retraining', 'User guidance and oversight procedures'],
      },
      {
        id: 'industry-4',
        name: 'Industry 4.0 and Smart Systems',
        icon: 'factory',
        description: 'Smart manufacturing systems',
        body: 'Connect production equipment, sensor data and operational systems so manufacturing decisions can be made on current conditions rather than yesterday’s report.',
        focus: ['Sensor and equipment data integration', 'Operational monitoring and alerting', 'Predictive and condition-based maintenance'],
      },
    ],
    feature: {
      eyebrow: 'A realistic position',
      title: 'Often the answer is better reporting.',
      body: 'A number of the problems brought to us as AI projects are solved more reliably by fixing the data model and the reporting on top of it. We will say so when that is the case. It is a shorter engagement and a better outcome.',
      points: ['Feasibility assessed before build', 'Simpler alternatives considered first', 'Maintenance cost stated up front'],
      image: '/assets/services/ind-healthcare.jpg',
      imageAlt: 'Clinical teams working with connected healthcare systems',
    },
    cta: {
      title: 'Considering an AI initiative?',
      body: 'Describe the decision you want to improve and how it is made today. That is enough for a useful first conversation.',
      label: 'Discuss an AI Engagement',
    },
  },
  {
    id: 'cloud',
    name: 'Cloud and Infrastructure Services',
    shortName: 'Cloud & Infrastructure',
    icon: 'cloud',
    image: '/assets/services/pillar-cloud.jpg',
    focus: 'center',
    headline: 'Move with a plan.',
    accent: 'Not just a lift and shift.',
    description:
      'Cloud strategy, architecture and migration across hybrid and multi-cloud environments, with cost and operational ownership addressed before the move.',
    tags: ['Assessed workloads', 'Cost modelled', 'Operations defined'],
    overviewTitle: 'Decide what moves, what changes, and what stays.',
    lead: 'Not every workload belongs in the cloud.',
    overviewBody:
      'A migration that copies existing servers into a cloud account usually costs more and runs no better. We assess each workload against its dependencies, data residency requirements and running cost, then choose per workload: migrate as-is, re-architect, or leave it where it is. The result is a plan you can fund and defend.',
    outcomes: [
      { icon: 'architecture', title: 'A decision per workload', body: 'Migrate, re-architect or retain, assessed against dependencies and cost.' },
      { icon: 'bar_chart', title: 'Cost modelled beforehand', body: 'Projected running cost established before commitment, not discovered after.' },
      { icon: 'settings', title: 'Operations defined', body: 'Monitoring, backup and ownership agreed as part of the migration.' },
    ],
    services: [
      {
        id: 'cloud-consulting',
        name: 'Cloud Consulting',
        icon: 'cloud',
        description: 'Cloud readiness and strategy',
        body: 'Establish where cloud adoption makes sense for your estate — workload assessment, target architecture and a cost model you can take to a budget discussion.',
        focus: ['Workload assessment and readiness review', 'Target architecture and platform selection', 'Cost modelling and migration business case'],
      },
      {
        id: 'cloud-migration',
        name: 'Cloud Architecture and Migration',
        icon: 'architecture',
        description: 'Architect and migrate workloads',
        body: 'Design the target environment and move workloads into it in controlled waves, with networking, identity, security and rollback settled before each one.',
        focus: ['Landing zone, network and identity design', 'Phased migration waves and cutover planning', 'Security baselines and rollback procedures'],
      },
      {
        id: 'hybrid-multicloud',
        name: 'Hybrid and Multi-Cloud Enablement',
        icon: 'hub',
        description: 'Flexible cloud operating models',
        body: 'Operate across on-premise and more than one cloud without losing consistency, with connectivity, identity and monitoring handled as one environment.',
        focus: ['Hybrid connectivity and identity federation', 'Consistent policy and governance across providers', 'Unified monitoring, backup and recovery'],
      },
    ],
    feature: {
      eyebrow: 'What gets missed',
      title: 'The running cost is the real decision.',
      body: 'Migration cost is visible and finite. Running cost is neither, and it is where cloud programmes lose support internally. We model it per workload before the move and agree who owns it afterwards.',
      points: ['Running cost projected per workload', 'Ownership agreed before migration', 'Monitoring and backup in scope from day one'],
      image: '/assets/services/ind-government.jpg',
      imageAlt: 'Secure public sector infrastructure and connected facilities',
    },
    cta: {
      title: 'Weighing up a migration?',
      body: 'Share the estate and what is driving the move. We will help you work out what should actually go.',
      label: 'Discuss a Cloud Engagement',
    },
  },
];

export const servicePages = serviceCategories.map(category => ({
  ...category,
  href: serviceCategoryPaths[category.id],
}));
