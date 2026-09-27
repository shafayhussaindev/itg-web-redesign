// Copy for offerings whose names changed after their original detail pages were
// written. The ids remain stable because they are part of published URLs.
export const pageContent = {
  solutions: {
    '/artificial-intelligence': { children: {
      'data-platforms': { summary: 'Deploy AI as a governed software capability.', body: 'Design AI-enabled SaaS products around a defined business workflow, with model behaviour, data access, human review and monitoring built into the service.', focus: ['Product workflow and AI use-case design', 'Secure data and model integration', 'Human review, monitoring and iteration'], outcome: ['AI features that support a real user task', 'A controlled path from pilot to production'] },
      'dpp-ai': { summary: 'Review evidence and exceptions with AI assistance.', body: 'Use AI to prepare audit evidence, identify anomalies and route findings to the people who can verify them. Keep source records and human decisions visible throughout.', focus: ['Evidence extraction and classification', 'Exception detection and review queues', 'Traceable findings and human sign-off'], outcome: ['Less manual preparation for audits', 'A clearer record of evidence and decisions'] },
    } },
    '/enterprise-solutions': { children: {
      'erp-solutions': { summary: 'Modernize the processes behind the technology.', body: 'Map the work, data and dependencies across the enterprise, then move to connected systems in stages that protect continuity and support adoption.', focus: ['Current-state and process assessment', 'Target architecture and integration roadmap', 'Migration, adoption and change management'], outcome: ['A practical modernization sequence', 'Connected processes with clear ownership'] },
      'financial-ops': { summary: 'Coordinate supply, inventory and fulfilment.', body: 'Connect purchasing, stock positions, demand signals and delivery commitments so teams can plan and respond with a shared view of the supply chain.', focus: ['Demand and inventory visibility', 'Supplier and purchase order coordination', 'Fulfilment and exception tracking'], outcome: ['Fewer handoff gaps across the chain', 'Better visibility into stock and commitments'] },
      'procurement-vendor': { summary: 'Keep vendor information and risk under control.', body: 'Build a reliable supplier record with onboarding, ownership, assessment and review workflows that make risk visible before a decision is made.', focus: ['Supplier onboarding and master data', 'Risk assessment and review cycles', 'Ownership, approvals and audit records'], outcome: ['More complete supplier records', 'Risk decisions backed by current evidence'] },
      'manufacturing-erp': { summary: 'Connect product data from design to retirement.', body: 'Manage product definitions, revisions, materials and approvals in a connected lifecycle so engineering, sourcing and operations work from the same record.', focus: ['Product master data and revisions', 'Bills of materials and change control', 'Lifecycle approvals and traceability'], outcome: ['Fewer conflicting product records', 'Clearer control of changes across teams'] },
      'multi-entity-systems': { summary: 'Manage agreements and obligations in one place.', body: 'Create a controlled contract lifecycle from request and drafting through approval, signature, renewal and obligation tracking.', focus: ['Contract intake and templates', 'Review, approval and signature workflows', 'Obligations, renewals and searchable records'], outcome: ['Less time spent locating agreements', 'Better visibility into deadlines and commitments'] },
    } },
    '/esg-solutions': { page: {
      description: 'Manage sustainability reporting, climate targets, ESG risk, circularity and the controls behind reliable disclosures.',
      overview: { eyebrow: 'Connected sustainability operations', title: 'Make ESG information actionable and auditable.', body: 'Sustainability programs depend on current data, accountable owners and repeatable decisions. ITG connects reporting, targets, risk and circularity workflows so teams can manage progress through the year.', note: 'Controls, evidence and access rules support every reported figure and decision.' },
      outcomes: [
        { icon: 'hub', title: 'Connected evidence', body: 'Bring source information, ownership and supporting records into a structured environment.' },
        { icon: 'target', title: 'Targets and risks in view', body: 'Monitor climate commitments and ESG risks through current indicators and assigned actions.' },
        { icon: 'verified_user', title: 'Readiness for review', body: 'Support reporting teams with documented controls and traceable data.' },
      ],
    }, children: {
      'csrd': { summary: 'Turn science-based targets into a managed plan.', body: 'Organize emissions baselines, target assumptions, owners and progress measures so climate commitments can be monitored and reported consistently.', focus: ['Baseline and target data management', 'Progress tracking and ownership', 'Scenario and reporting views'], outcome: ['A traceable view of target progress', 'Earlier visibility into gaps against the plan'] },
      'dpp-eu': { summary: 'Identify and monitor material ESG risks.', body: 'Connect risk registers, indicators, owners and supporting evidence across environmental, social and governance topics to support timely action.', focus: ['Risk identification and scoring', 'Indicators, alerts and ownership', 'Mitigation actions and evidence'], outcome: ['Clearer prioritization of ESG issues', 'Documented decisions and follow-up'] },
      'traceability': { summary: 'Make material flows and circular use visible.', body: 'Track material composition, use, recovery and reuse across the product lifecycle to support circularity decisions and reporting.', focus: ['Material and component records', 'Reuse and recovery pathways', 'Circularity measures and reporting'], outcome: ['Better visibility into material flows', 'Evidence for circular design decisions'] },
      'carbon-circularity': { summary: 'Protect sensitive information across systems.', body: 'Bring privacy requirements and information security controls into a coordinated program covering data discovery, access, retention and incident response.', focus: ['Data inventory and classification', 'Access and retention controls', 'Incident and compliance workflows'], outcome: ['More consistent handling of sensitive data', 'Clearer accountability for privacy controls'] },
    } },
    '/custom-solutions': { page: {
      description: 'Design and build applications, commerce experiences, improved processes and generative media workflows for your business.',
      overview: { eyebrow: 'Designed for your operating model', title: 'Make custom work solve a defined business need.', body: 'Custom solutions begin with the process and the audience. ITG designs the workflow, experience and integration around those needs, then delivers in reviewable stages.', note: 'The goal is a solution your teams can operate, maintain and extend.' },
    }, children: {
      'ui-ux-design': { summary: 'Redesign processes around measurable outcomes.', body: 'Document the current workflow, identify delays and unnecessary handoffs, and design a simpler process with clear roles and controls before automating it.', focus: ['Process discovery and measurement', 'Future-state workflow design', 'Roles, controls and adoption planning'], outcome: ['Fewer avoidable handoffs', 'A process ready for responsible automation'] },
      'digital-portals': { summary: 'Build commerce experiences that connect to operations.', body: 'Create storefronts and marketplaces with product data, ordering, payment and fulfilment workflows that stay connected to the systems behind the sale.', focus: ['Catalog and checkout experiences', 'Marketplace and payment integrations', 'Order, inventory and fulfilment workflows'], outcome: ['A coherent buying experience', 'Orders visible across channels and operations'] },
      'branding-design': { summary: 'Produce governed media at scale.', body: 'Use generative workflows to create visual and written assets while keeping brand standards, review and rights management in the production process.', focus: ['Creative direction and prompt systems', 'Brand and quality review workflows', 'Asset management and production handoff'], outcome: ['Faster production of approved assets', 'More consistent content across channels'] },
    } },
    '/industrial-solutions': { page: {
      icon: 'factory',
      image: '/images/industries/ind-manufacturing.jpg',
      description: 'Connect materials, quality, production, tracking and audit workflows across industrial operations.',
      overview: { eyebrow: 'Industrial operations in one view', title: 'Bring control to the full production flow.', body: 'Industrial teams need reliable records from bill of materials through production, quality, asset movement and audit. ITG builds the systems and integrations that keep those records current and usable.', note: 'Start with the process where missing information creates the most operational risk.' },
      outcomes: [
        { icon: 'factory', title: 'Production visibility', body: 'Planning, execution and exceptions visible to the teams that act on them.' },
        { icon: 'account_tree', title: 'Traceable materials and assets', body: 'Changes and movements recorded across the industrial lifecycle.' },
        { icon: 'verified_user', title: 'Stronger operational control', body: 'Quality and audit evidence available without reconstructing it after the fact.' },
      ],
      capabilitiesIntro: 'Choose the capability that resolves a specific control or visibility gap in your operation.',
      applications: [
        { icon: 'factory', title: 'Production sites', body: 'Connect planning, shop-floor execution and material records.' },
        { icon: 'deployed_code', title: 'Asset-intensive operations', body: 'Trace equipment, components and maintenance events across locations.' },
        { icon: 'verified_user', title: 'Quality and compliance teams', body: 'Keep checks, findings and corrective actions in a controlled workflow.' },
      ],
      feature: { eyebrow: 'Connected by design', title: 'Operational records that stand up to scrutiny.', body: 'A useful industrial system captures information at the point of work, connects it to the right item or asset, and keeps every change traceable. We design around the conditions on the floor and the decisions made beyond it.', points: ['Capture at the point of work', 'Consistent identifiers across systems', 'Exception and audit trails built in'], image: '/images/services/ind-manufacturing.jpg', imageAlt: 'Industrial production line with connected monitoring systems' },
      cta: { title: 'Where does production information break down?', body: 'Describe the workflow, asset or quality record that is hardest to trust. We will identify a practical starting point.', label: 'Discuss Industrial Solutions' },
    }, children: {
      'workflow-automation': { summary: 'Control bills of materials and revisions.', body: 'Maintain accurate material structures from design through production, with controlled changes and clear impact on sourcing, costing and manufacturing.', focus: ['BOM structures and version control', 'Engineering change approvals', 'Material and cost impact visibility'], outcome: ['Fewer production errors from outdated BOMs', 'Traceable product changes'] },
      'rpa': { summary: 'Standardize and improve industrial workflows.', body: 'Map production and support processes, assign ownership and track exceptions so work moves consistently across teams and systems.', focus: ['Process mapping and ownership', 'Workflow routing and escalation', 'Performance and exception reporting'], outcome: ['More predictable process execution', 'Clearer visibility into bottlenecks'] },
      'cloud-modernization': { summary: 'Record quality where the work happens.', body: 'Connect inspections, non-conformances, corrective actions and supplier quality into a controlled record that supports day-to-day improvement.', focus: ['Inspection plans and results', 'Non-conformance and corrective action', 'Supplier and batch quality records'], outcome: ['Earlier detection of quality issues', 'Better traceability of corrective action'] },
      'hybrid-multi-cloud': { summary: 'Connect machines, people and operational data.', body: 'Bring equipment signals into production workflows and dashboards so teams can understand throughput, downtime and conditions in time to act.', focus: ['Machine and sensor connectivity', 'Production and downtime visibility', 'Condition alerts and operational analytics'], outcome: ['Faster response to shop-floor events', 'Better use of production data'] },
      'system-api': { summary: 'Trace materials, assets and movement.', body: 'Capture identity and location events across industrial processes so teams can reconstruct where an item came from, where it went and what happened to it.', focus: ['Item and batch identification', 'Movement and status capture', 'End-to-end trace records'], outcome: ['More reliable operational visibility', 'Faster investigation of exceptions'] },
      'document-records': { summary: 'Connect planning with core operations.', body: 'Bring purchasing, inventory, production, finance and reporting onto an ERP foundation configured for the way the enterprise actually works.', focus: ['Core process and data model design', 'ERP configuration and integration', 'Migration and user enablement'], outcome: ['More consistent operational data', 'Fewer disconnected manual processes'] },
      'asset-rfid': { summary: 'Review industrial controls and evidence.', body: 'Structure audits around the processes, assets and records that matter most, with findings, actions and approvals traceable from discovery to closure.', focus: ['Control and evidence mapping', 'Inspection and finding workflows', 'Corrective action and closure tracking'], outcome: ['A clearer view of control gaps', 'Audit evidence that is easier to retrieve'] },
    } },
    '/data-privacy-solutions': { children: {
      'consent-management': { summary: 'Keep processing records current.', body: 'Automate the collection and maintenance of records of processing activities, with named owners, purposes, data categories and review dates.', focus: ['Processing activity inventory', 'Owner review and approval workflows', 'Change tracking and reporting'], outcome: ['A more current RoPA', 'Less manual effort preparing privacy reviews'] },
      'data-subject-rights': { summary: 'Honor choices across connected channels.', body: 'Capture consent and preferences with clear purpose and provenance, then distribute changes to the systems that act on them.', focus: ['Consent and preference capture', 'Purpose and evidence records', 'Synchronization across systems'], outcome: ['More consistent treatment of user choices', 'Evidence of how preferences were recorded'] },
      'breach-response': { summary: 'Minimize retention of sensitive data.', body: 'Design workflows that avoid storing personal data where it is unnecessary and apply deletion, expiry and access rules to what must be retained.', focus: ['Data minimization and retention mapping', 'Expiry and deletion automation', 'Access and exception controls'], outcome: ['Reduced unnecessary data exposure', 'Retention rules that can be demonstrated'] },
    } },
  },
  industries: {
    '/consumer-goods': { children: {
      omnichannel: { summary: 'Connected electronics retail and distribution.', body: 'Unify model, serial number, warranty and channel information across electronics sales and service so stock and customer promises stay accurate.', focus: ['Serial-number and warranty records', 'Stock visibility across stores and channels', 'Returns and after-sales workflows'] },
      fmcg: { summary: 'Fast-moving fashion and apparel operations.', body: 'Coordinate styles, sizes, seasons and replenishment across stores, online channels and suppliers with one view of availability and margin.', focus: ['Style, size and colour inventory', 'Seasonal planning and replenishment', 'Channel-level sales and margin'] },
      ecommerce: { summary: 'Product and inventory control for home goods.', body: 'Manage household and décor assortments across physical and digital channels, including variants, bulky items, fulfilment and returns.', focus: ['Product variants and rich catalog data', 'Inventory by location and channel', 'Delivery and returns coordination'] },
      'brand-distributors': { summary: 'Traceable food and beverage operations.', body: 'Connect batch, shelf-life, demand and distribution information so food and beverage teams can respond quickly to quality and availability issues.', focus: ['Batch and expiry tracking', 'Demand and replenishment planning', 'Distribution and recall visibility'] },
      'private-label': { summary: 'Footwear from assortment to fulfilment.', body: 'Track footwear sizes, styles and seasonal ranges while keeping inventory, supplier orders and customer channels aligned.', focus: ['Size and style matrix management', 'Supplier and production visibility', 'Omnichannel availability and returns'] },
    } },
    '/manufacturing-industries': { page: { overviewTitle: 'Connect production planning with execution.' }, children: {
      'manufacturing-ops': { summary: 'Production planning for spinning mills.', body: 'Connect cotton intake, blends, counts, machine capacity and yarn output to keep spinning plans grounded in actual mill performance.', focus: ['Blend, count and lot planning', 'Machine utilization and downtime', 'Yarn quality and process costing'] },
      'textile-apparel': { summary: 'Visibility across home textile production.', body: 'Coordinate fabric, processing, cut-and-sew and finishing operations with order-level traceability and costing.', focus: ['Fabric and material requirements', 'Production stages and quality checks', 'Order-level costing and delivery status'] },
      'spinning-mills': { summary: 'Connected garment production workflows.', body: 'Track styles, sizes, lines and work in progress from sampling through finishing and dispatch, with clear visibility into output and defects.', focus: ['Style and size order management', 'Line planning and work-in-progress tracking', 'Quality and shipment readiness'] },
      'industry-4-0-factories': { summary: 'Controlled fertilizer production and distribution.', body: 'Connect plant operations, batch quality, maintenance and dispatch records to support reliable fertilizer supply and compliance.', focus: ['Batch and formulation records', 'Plant performance and maintenance', 'Quality, inventory and dispatch traceability'] },
      'heavy-light': { summary: 'Traceable food packaging operations.', body: 'Manage specifications, materials, production runs and quality evidence for packaging that serves food and beverage supply chains.', focus: ['Material and specification control', 'Run-level production and waste', 'Food-contact quality and traceability'] },
    } },
    '/logistics-supply-chain-operations': { children: {
      warehousing: { summary: 'Automate accurate warehouse movement.', body: 'Use scanning, directed tasks and real-time stock updates across receiving, putaway, picking and dispatch.', focus: ['Barcode or RFID capture', 'Directed warehouse workflows', 'Stock accuracy and exception reporting'] },
      'transportation-fleet': { summary: 'Coordinate the final delivery mile.', body: 'Plan delivery sequences, track drivers and capture proof of delivery while making failed attempts and customer updates visible.', focus: ['Route and stop planning', 'Driver tracking and proof of delivery', 'Exception and re-attempt workflows'] },
      'distribution-fulfillment': { summary: 'Manage shipments from booking to delivery.', body: 'Automate shipment creation, carrier assignment, milestone tracking and exception handling across transport partners.', focus: ['Shipment booking and documentation', 'Carrier and milestone integration', 'Delay alerts and delivery confirmation'] },
      'last-mile': { summary: 'Visibility into ocean freight movement.', body: 'Bring booking, vessel, container and port events into a usable operating view so teams can manage delays and plan downstream work.', focus: ['Booking and container visibility', 'Milestone and exception tracking', 'ETA and downstream planning'] },
      'supply-chain-ops': { summary: 'Connect courier services to core operations.', body: 'Integrate courier rates, label generation, tracking and delivery events with order and service workflows.', focus: ['Courier selection and booking', 'Label and tracking integration', 'Status updates, exceptions and returns'] },
    } },
    '/real-estate-construction-facilities': { children: {
      'real-estate-dev': { summary: 'Control projects from plan to handover.', body: 'Connect schedules, budgets, approvals and progress reporting so property and construction teams can see commitments and issues early.', focus: ['Programme and milestone tracking', 'Budget, commitments and variations', 'Document control and handover'] },
      facilities: { summary: 'Keep buildings and services running.', body: 'Bring asset registers, maintenance schedules, service requests and vendor work into one facilities operating view.', focus: ['Asset and location registers', 'Preventive and reactive maintenance', 'Service levels and vendor performance'] },
      'construction-controls': { summary: 'Know what assets you own and maintain.', body: 'Create reliable asset records from acquisition through operation, maintenance and retirement, linked to locations and responsibilities.', focus: ['Asset identification and hierarchy', 'Lifecycle and maintenance history', 'Condition, cost and replacement planning'] },
    } },
    '/professional-services': { page: {
      description: 'Workflow automation for agencies, audit teams, legal operations and ESG assurance.',
      overviewTitle: 'Turn specialist work into accountable workflows.',
      lead: 'Professional work needs flexibility without losing the record of how decisions were made.',
      overviewBody: 'ITG helps service teams manage intake, assignments, evidence, reviews and deliverables in connected systems. The result is clearer ownership and a reliable record from request through completion.',
      outcomes: [
        { icon: 'route', title: 'Work with clear ownership', body: 'Requests, tasks and approvals assigned to the right team at the right time.' },
        { icon: 'verified_user', title: 'Evidence ready for review', body: 'Decisions, documents and findings kept with the engagement record.' },
        { icon: 'bar_chart', title: 'Visible service performance', body: 'Progress, turnaround and exceptions available without manual status chasing.' },
      ],
      feature: { eyebrow: 'Built around expert judgment', title: 'Automate the handoffs, preserve the decisions.', body: 'Specialist teams still need to exercise judgment. We make intake, evidence collection and review steps more reliable while leaving professional decisions with the people accountable for them.', points: ['Clear intake and assignment', 'Evidence attached to each decision', 'Escalations and approvals traceable'], image: '/images/company/meeting.jpg', imageAlt: 'Professional services team reviewing an engagement' },
      cta: { title: 'Which service workflow needs better control?', body: 'Tell us where requests, evidence or approvals get lost. We will help define a practical automation scope.', label: 'Discuss Professional Services' },
    }, children: {
      consulting: { summary: 'Coordinate agency work and clients.', body: 'Connect briefs, staffing, approvals, deliverables and billing so agency teams can manage client work without losing visibility into scope and margin.', focus: ['Client intake and project setup', 'Resource and deliverable workflows', 'Time, cost and margin visibility'] },
      'financial-advisory': { summary: 'Automate testing and audit evidence.', body: 'Plan tests, collect evidence, record findings and track remediation through a consistent review workflow.', focus: ['Audit plans and test procedures', 'Evidence collection and review', 'Findings and remediation tracking'] },
      'legal-compliance': { summary: 'Organize legal and compliance work.', body: 'Route matters, obligations, approvals and supporting records through workflows that preserve ownership and a clear audit trail.', focus: ['Matter and obligation registers', 'Review and approval workflows', 'Deadlines, evidence and reporting'] },
      'accounting-audit': { summary: 'Connect ESG data with audit review.', body: 'Collect sustainability evidence, apply review controls and track audit requests so disclosures can be supported by traceable source information.', focus: ['ESG evidence collection', 'Control and approval workflows', 'Audit requests and issue resolution'] },
    } },
  },
  services: {
    '/engineering-services': { page: {
      description: 'Engineering services for AI integration, connected devices, cloud platforms and dedicated product delivery.',
      overviewTitle: 'Build and modernize systems that work together.',
      overviewBody: 'ITG combines software, data and platform engineering to connect AI capabilities, edge devices and enterprise applications. Teams can engage for a defined integration or a dedicated product workstream.',
      cta: { title: 'Need engineering capacity for a complex system?', body: 'Tell us what you need to connect, build or modernize. We will help define a practical delivery scope.', label: 'Discuss Engineering Services' },
    }, children: {
      'web-development': { summary: 'Connect AI agents to business systems.', body: 'Integrate AI services and agent workflows with enterprise data, tools and approvals so useful automation can operate within clear controls.', focus: ['Use-case and workflow design', 'Model, tool and data integration', 'Human approval, observability and governance'] },
      'application-development': { summary: 'Software for connected devices and the edge.', body: 'Build embedded and IoT systems that capture device data, act locally where needed and connect reliably to enterprise platforms.', focus: ['Device and sensor integration', 'Edge processing and connectivity', 'Secure data exchange and fleet management'] },
      'ui-ux-design': { summary: 'Modernize cloud foundations and platforms.', body: 'Assess application dependencies, design target architecture and move workloads in controlled stages with security and operations built in.', focus: ['Platform and workload assessment', 'Cloud architecture and migration', 'Reliability, security and operating model'] },
      'graphic-design': { summary: 'A dedicated team for sustained product delivery.', body: 'Assemble a focused engineering pod with product, design and delivery skills to build, improve and support a defined product roadmap.', focus: ['Roadmap and team setup', 'Iterative build and quality assurance', 'Documentation and product handover'] },
    } },
    '/data-management-services': { page: {
      description: 'Improve the quality, movement and structure of data used across your business.',
      overviewTitle: 'Make operational data dependable and usable.',
      overviewBody: 'Data programs begin with trusted definitions and controlled movement. ITG helps teams clean source data, migrate it safely and build warehouse structures that support reporting and future analytics.',
      outcomes: [
        { icon: 'check_circle', title: 'Data you can trust', body: 'Quality rules and ownership applied before information reaches downstream systems.' },
        { icon: 'route', title: 'Controlled movement', body: 'Migration and pipeline steps reconciled from source to destination.' },
        { icon: 'bar_chart', title: 'A foundation for analysis', body: 'Warehouse structures designed around consistent definitions and useful access.' },
      ],
      feature: { eyebrow: 'Data discipline', title: 'Know the source before moving the data.', body: 'Cleansing, migration and warehousing only work when the meaning and ownership of each field are understood. We document those decisions and validate each handoff before the next system depends on it.', points: ['Source definitions agreed', 'Quality and reconciliation rules applied', 'Ownership and lineage documented'], image: '/images/services/pillar-data.jpg', imageAlt: 'Enterprise data systems and analysis' },
      cta: { title: 'Where does your data lose reliability?', body: 'Tell us which source, migration or report is hardest to trust. We will define the first improvement step.', label: 'Discuss Data Management' },
    }, children: {
      'power-bi': { summary: 'Improve data quality at the source.', body: 'Profile, standardize and validate data so teams can resolve duplicates, missing values and inconsistent definitions before information reaches reports or applications.', focus: ['Data profiling and quality rules', 'Cleansing and deduplication workflows', 'Validation, monitoring and ownership'] },
      'bi-solutions': { summary: 'Move data through controlled pipelines.', body: 'Plan source-to-target mapping, build extraction and transformation pipelines, and reconcile results so migrations and recurring data flows remain dependable.', focus: ['Source mapping and migration planning', 'ETL pipeline design and orchestration', 'Reconciliation, testing and cutover'] },
      'data-visualization': { summary: 'Organize data for reliable analysis.', body: 'Design warehouse models, ingestion and governance around the questions teams need to answer, with clear ownership and refresh rules.', focus: ['Warehouse architecture and modelling', 'Ingestion and transformation layers', 'Access, lineage and refresh governance'] },
    } },
    '/esg-services': { children: {
      'esg-data-reporting': { summary: 'Measure emissions and report ESG performance.', body: 'Bring activity data, calculation methods and ESG indicators into dashboards and disclosure workflows that retain the evidence behind each figure.', focus: ['Emissions data and calculation workflows', 'ESG indicator dashboards', 'Review, approval and source traceability'] },
      'csrd-readiness': { summary: 'Understand sustainability across suppliers.', body: 'Collect relevant vendor ESG information, assess risks and improvement opportunities, and connect supplier responses to procurement decisions.', focus: ['Supplier questionnaires and data requests', 'Risk and performance assessment', 'Follow-up actions and evidence records'] },
      'carbon-accounting': { summary: 'Reduce the footprint of technology operations.', body: 'Measure the energy and emissions associated with IT services, then identify practical changes to infrastructure, workloads and equipment lifecycle.', focus: ['IT energy and emissions baseline', 'Infrastructure and workload optimization', 'Progress tracking and reporting'] },
      'supplier-due-diligence': { summary: 'Prepare disclosures with controlled data flows.', body: 'Connect source data, calculation rules, approvals and report outputs to reduce manual work in recurring regulatory disclosures.', focus: ['Disclosure requirements and data mapping', 'Automated collection and validation', 'Review, audit trail and report generation'] },
    } },
    '/cloud-infrastructure-services': { page: {
      shortName: 'Cyber Security',
      description: 'Protect infrastructure and applications through assessment, engineering, operations and governance.',
      overviewTitle: 'Build security into the operating environment.',
      overviewBody: 'Cyber security work has to cover the estate teams actually run. ITG connects cloud and infrastructure controls, targeted testing, security operations review and GRC implementation into a practical improvement plan.',
      lead: 'Security decisions depend on current evidence about systems, threats and controls.',
      outcomes: [
        { icon: 'shield', title: 'Controls with clear ownership', body: 'Security responsibilities and safeguards mapped to the systems they protect.' },
        { icon: 'manage_search', title: 'Risks that can be prioritized', body: 'Assessment findings ranked by impact, exposure and remediation effort.' },
        { icon: 'verified_user', title: 'Improvement you can verify', body: 'Actions tracked through implementation, testing and review.' },
      ],
      feature: { eyebrow: 'Security in practice', title: 'Make every finding actionable.', body: 'A useful assessment shows where a control is weak, who owns the fix and how the team will verify it. We connect testing, implementation and operating procedures so the result improves day-to-day security.', points: ['Findings tied to affected systems', 'Remediation owners and priorities agreed', 'Controls retested after changes'], image: '/images/services/pillar-platform.jpg', imageAlt: 'Enterprise technology infrastructure' },
      cta: { title: 'Ready to strengthen your security posture?', body: 'Tell us which systems or controls you need to assess. We will help define a focused starting scope.', label: 'Discuss Cyber Security' },
    }, children: {
      'cloud-consulting': { summary: 'Secure cloud and infrastructure foundations.', body: 'Review identity, network, configuration and monitoring controls across cloud and on-premises systems, then implement prioritized improvements.', focus: ['Architecture and configuration review', 'Identity and access controls', 'Monitoring, hardening and recovery'] },
      'cloud-migration': { summary: 'Find and validate security weaknesses.', body: 'Assess applications, infrastructure and processes with a defined testing scope, then prioritize findings and verify remediation.', focus: ['Assessment scope and threat scenarios', 'Technical testing and evidence', 'Risk-ranked findings and retesting'] },
      'hybrid-multicloud': { summary: 'Assess the maturity of security operations.', body: 'Review monitoring coverage, alert handling, incident workflows and team capability to define a realistic SOC improvement roadmap.', focus: ['Logging and detection coverage', 'Triage and response processes', 'People, tooling and maturity roadmap'] },
    } },
    '/bpo-services': { page: {
      description: 'Managed support and operations for technology, data, sales and finance teams.',
      overviewTitle: 'Extend operations with accountable service delivery.',
      overviewBody: 'ITG supports repeatable business processes with clear service levels, documented handoffs and reporting. Engagements are scoped around the work, quality controls and information access needed to deliver reliably.',
      lead: 'A managed service works when the handoffs and measures are explicit.',
      outcomes: [
        { icon: 'work', title: 'Reliable response', body: 'Requests and exceptions handled through clear queues, priorities and escalations.' },
        { icon: 'check_circle', title: 'Quality under control', body: 'Work reviewed against agreed standards with visible error and rework trends.' },
        { icon: 'bar_chart', title: 'Transparent performance', body: 'Service levels, throughput and outcomes reported in a consistent way.' },
      ],
      feature: { eyebrow: 'Service governance', title: 'Define the work before scaling it.', body: 'We document inputs, decisions, quality checks and escalation paths at the start. That gives both teams a common operating picture and a way to improve the service as volume grows.', points: ['Clear scope and service levels', 'Documented handoffs and escalation', 'Regular quality and performance review'], image: '/images/services/ind-enterprise.jpg', imageAlt: 'Team coordinating enterprise operations' },
      cta: { title: 'Need capacity in a critical workflow?', body: 'Describe the volume, turnaround and controls your team needs. We will outline an appropriate service model.', label: 'Discuss BPO Services' },
    }, children: {
      'workflow-automation': { summary: 'Responsive support for users and systems.', body: 'Provide a structured help desk for incidents and requests, with triage, escalation, knowledge capture and service reporting.', focus: ['Ticket intake and classification', 'Resolution and escalation workflows', 'Knowledge base and service metrics'] },
      rpa: { summary: 'High-quality data operations for AI teams.', body: 'Prepare, label, review and govern training data with documented instructions and quality checks suited to the model use case.', focus: ['Data preparation and annotation', 'Quality sampling and review', 'Secure handling and throughput reporting'] },
      'digital-transformation': { summary: 'Support business-to-business prospecting.', body: 'Coordinate research, outreach preparation, CRM updates and appointment support within an agreed sales development process.', focus: ['Account and contact research', 'Outreach workflow support', 'CRM hygiene and activity reporting'] },
    } },
  },
  platforms: {
    '/sourcing': { page: {
      body: 'Intelligence and tools that support informed sourcing decisions across products, suppliers and legal requirements.',
      overviewTitle: 'Make sourcing decisions with connected information.',
      overviewBody: 'Bring product, supplier and regulatory information into a consistent decision process so teams can compare options and act with greater confidence.',
      lead: 'Source with a clearer view of products, obligations and demand.',
    }, children: {
      'integra-erp': { summary: 'Consumer goods insight in one operating view.', body: 'Bring product, demand, channel and inventory signals together to support consumer goods planning and commercial decisions.', focus: ['Product and channel performance', 'Demand and stock visibility', 'Decision-ready commercial insights'] },
      'integra-crm': { summary: 'Turn legal requirements into actions.', body: 'Translate obligations into assigned workflows, evidence and review checkpoints so policies can be carried through everyday operations.', focus: ['Requirement and obligation mapping', 'Action ownership and due dates', 'Evidence and compliance reporting'] },
    } },
    '/supply-chain': { page: {
      body: 'Platforms for industrial planning, logistics intelligence and asset visibility across the supply chain.',
      overviewTitle: 'Connect planning, movement and industrial assets.',
      overviewBody: 'Supply chain decisions rely on current information from production, logistics and assets. These products create focused operating views for each of those needs.',
    }, children: {
      aullect: { summary: 'ERP for industrial production and planning.', body: 'Connect materials, production orders, costing and operational reporting in an ERP workflow designed for industrial teams.', focus: ['Production and material planning', 'Inventory and cost control', 'Shop-floor and management reporting'] },
      astaric: { summary: 'Visibility into logistics and industrial assets.', body: 'Track the identity, location and status of assets and movements across sites and partners so teams can resolve exceptions sooner.', focus: ['Asset and shipment identification', 'Location and event tracking', 'Exception and performance views'] },
      'cyclo-erp': { summary: 'Operational intelligence for manufacturing.', body: 'Bring production signals and business data into actionable views for factory planning, performance and continuous improvement.', focus: ['Production data integration', 'Operational dashboards and alerts', 'Performance and improvement analysis'] },
    } },
    '/contract-lifecycle': { page: {
      body: 'Platforms to manage procurement and workforce spending with clearer controls and visibility.',
      overviewTitle: 'Control commitments before they become costs.',
      overviewBody: 'Connect purchasing and people-related spend to approved workflows, current records and useful reporting.',
      lead: 'Keep purchasing and workforce commitments visible.',
    }, children: {
      documax: { summary: 'Enterprise purchasing under control.', body: 'Manage requisitions, supplier decisions, purchase orders and approvals in one procurement process with traceable commitments.', focus: ['Purchase request and approval workflows', 'Supplier and order management', 'Spend visibility and controls'] },
      zeito: { summary: 'Workforce information and HR processes.', body: 'Organize employee records and recurring HR workflows with appropriate access, approvals and management visibility.', focus: ['Employee records and lifecycle', 'HR requests and approvals', 'Workforce reporting and access control'] },
    } },
  },
};
