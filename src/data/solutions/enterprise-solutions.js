/* Tier 2: /enterprise-solutions. All page copy and imagery are editable here.
 * Keep capability ids in sync with the links in data/navigation/tier3.js. */
export const solutionPage = {
  id: 'enterprise-solutions',
  name: 'Enterprise Solutions',
  shortName: 'Enterprise',
  icon: 'apartment',
  image: '/images/solutions/cat-enterprise.jpg',
  headline: 'One connected enterprise.',
  accent: 'Built to move forward.',
  description: 'Bring finance, operations, procurement and customer relationships together in business systems designed around the way you work.',
  overview: {
    eyebrow: 'A stronger business foundation',
    title: 'Connect the systems that run your business.',
    body: 'Disconnected platforms create duplicate work, inconsistent reporting and gaps between teams. ITG brings core business processes into a connected environment, with clear ownership and a shared view of performance.',
    note: 'Modernize at a pace that fits your operations, with existing investments and business continuity in mind.',
  },
  outcomes: [
    { icon: 'hub', title: 'Connected workflows', body: 'Help information move across departments without repeated manual entry.' },
    { icon: 'bar_chart', title: 'Clearer business visibility', body: 'Align operational and financial reporting around consistent business data.' },
    { icon: 'shield', title: 'Control as you grow', body: 'Build roles, approvals and traceable transactions into everyday operations.' },
  ],
  // Shared by this solution's item pages (e.g. /enterprise-solutions/<id>): the icons on the
  // "why it matters" cards and the "How we work" steps.
  itemPage: {
    whyIcons: ['hub', 'trending_up', 'verified_user'],
    steps: { eyebrow: 'How we work', title: 'From assessment to ongoing operation.', items: [
      { title: 'Assess & align', body: 'Map existing systems, workflows and data, then agree priorities and success measures.' },
      { title: 'Implement & integrate', body: 'Configure the workflows and integrations, validate data and test with the teams who use them.' },
      { title: 'Adopt & improve', body: 'Establish ownership, support adoption and review performance as operational needs change.' },
    ] },
  },
  capabilitiesIntro: 'From a single business function to a multi-entity platform, build a foundation that works across your organization.',
  capabilities: [
    {
      id: 'digital-transformation', icon: 'layers', title: 'Digital Transformation',
      subtitle: 'Modernize legacy systems, workflows and the enterprise operating model.',
      description: 'Digital Transformation modernizes enterprise operations by systematically transitioning legacy workflows into integrated, digital-first architectures. This discipline moves beyond surface-level digitization to fundamentally re-engineer business processes, break down operational data silos, and establish agile technology ecosystems. By aligning organizational strategy with modern cloud platforms, automation pipelines, and API-driven architectures, enterprises establish continuous adaptability, operational resilience, and cross-functional visibility.',
      outcome: ['More adaptable and resilient operations', 'Connected data across departments', 'Lower complexity across the technology portfolio'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'hub', title: 'Legacy System Modernization & Cloud Migration', body: 'Decoupling monolithic legacy software architectures into containerized, cloud-native microservices to improve platform scalability, reduce maintenance overhead, and enhance system uptime.' },
        { icon: 'layers', title: 'End-to-End Business Process Automation', body: 'Re-engineering paper-based and siloed operational workflows into event-driven automated pipelines that eliminate manual handoffs and reduce processing cycle times.' },
        { icon: 'account_tree', title: 'Enterprise API & Data Interoperability', body: 'Architecting central API gateways and middleware layers that unify heterogeneous enterprise systems, facilitating bi-directional data flow across internal departments and external partner networks.' },
        { icon: 'policy', title: 'Digital Operating Model Design', body: 'Establishing organizational governance, continuous delivery practices, and agile delivery frameworks that enable technical teams to deploy updates rapidly and respond to market shifts.' },
        { icon: 'groups', title: 'Workplace Modernization & Collaboration Tooling', body: 'Implementing secure, distributed digital workplace ecosystems that facilitate asynchronous collaboration, centralized knowledge sharing, and enterprise identity management.' },
        { icon: 'verified_user', title: 'Technology Portfolio Rationalization', body: 'Evaluating legacy IT software estates to eliminate redundant tool sets, consolidate software licensing, and optimize total cost of ownership (TCO) across enterprise platforms.' },
      ],
    },
    {
      id: 'supply-chain-management', icon: 'account_balance', title: 'Supply Chain Management',
      subtitle: 'Connect sourcing, inventory, fulfillment and distribution in one responsive network.',
      description: 'Modern supply chain management focuses on building resilient, transparent, and responsive logistics and fulfillment ecosystems across global networks. By connecting supplier networks, production scheduling, warehouse operations, and distribution channels into a single data fabric, this practice mitigates operational disruptions, optimizes working capital, and enables demand-driven supply chain planning.',
      outcome: ['Greater visibility across the supply chain', 'Demand-led inventory and replenishment', 'More resilient logistics and supplier networks'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'hub', title: 'End-to-End Supply Chain Visibility & Control Towers', body: 'Integrating multimodal tracking feeds, telematics, and inventory databases into unified operational control towers for real-time shipment monitoring and disruption alerts.' },
        { icon: 'layers', title: 'Multi-Echelon Demand & Inventory Optimization', body: 'Utilizing statistical modeling to forecast SKU-level demand variations, automate replenishment orders, and balance safety stock across regional distribution centers and micro-fulfillment hubs.' },
        { icon: 'account_tree', title: 'Warehouse & Fulfillment Automation', body: 'Optimizing material handling, pick-and-pack routing, cross-docking, and inventory layout within modern warehouse management systems (WMS).' },
        { icon: 'policy', title: 'Transportation & Fleet Logistics Optimization', body: 'Implementing dynamic route planning, freight consolidation algorithms, and carrier performance monitoring to reduce transit times and carbon footprint.' },
        { icon: 'groups', title: 'Supplier Collaboration & Procurement Syncing', body: 'Establishing vendor portals that synchronize production schedules, raw material orders, and lead times directly with tier-1 and tier-2 manufacturing partners.' },
        { icon: 'verified_user', title: 'Supply Chain Risk Mitigation & Scenario Simulation', body: 'Modeling vulnerability points across global trade corridors, component bottlenecks, and geopolitical events to create agile contingency routing and multi-sourcing strategies.' },
      ],
    },
    {
      id: 'customer-relationship-management', icon: 'groups', title: 'Customer Relationship Management',
      subtitle: 'Unify customer engagement, sales pipelines and lifecycle support.',
      description: 'Customer Relationship Management (CRM) architectures unify customer engagement, sales operations, and lifecycle support across every touchpoint. This domain designs, deploys, and optimizes centralized CRM systems that eliminate customer data fragmentation, align marketing and sales pipelines, and provide complete visibility into customer acquisition, retention, and service histories.',
      outcome: ['A consistent view of every customer', 'Coordinated sales and service workflows', 'Better visibility into retention and account health'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'hub', title: 'Enterprise CRM Architecture & Implementation', body: 'Configuring and deploying enterprise CRM platforms (such as Salesforce, Microsoft Dynamics, and HubSpot) customized to complex B2B or B2C sales funnels and organizational hierarchies.' },
        { icon: 'layers', title: 'Unified Customer Data Platform (CDP) Integration', body: 'Consolidating behavioral data, purchase records, and service interactions from disparate touchpoints into single, verified 360-degree customer profile registries.' },
        { icon: 'account_tree', title: 'Pipeline Management & Sales Force Automation', body: 'Automating lead qualification, territory management, quote-to-cash workflows, and sales forecasting to increase win rates and shorten transaction lifecycles.' },
        { icon: 'policy', title: 'Omnichannel Service & Case Resolution Systems', body: 'Deploying multi-channel ticketing, SLA tracking, and context-aware routing across voice, email, chat, and portal interactions to accelerate resolution speeds.' },
        { icon: 'groups', title: 'Customer Journey Analytics & Lifecycle Tracking', body: 'Tracking retention metrics, churn signals, customer lifetime value (LTV), and account health scores to systematically identify upsell and cross-sell opportunities.' },
        { icon: 'verified_user', title: 'Data Cleansing, Deduplication & Governance', body: 'Designing automated hygiene routines that detect duplicate records, validate contact credentials, and maintain strict adherence to global privacy mandates such as GDPR and CCPA.' },
      ],
    },
    {
      id: 'vendor-info-and-risk-management', icon: 'handshake', title: 'Vendor Info & Risk Management',
      subtitle: 'Govern third-party information, performance and risk throughout the relationship.',
      description: 'Vendor Information and Risk Management establishes proactive governance over third-party ecosystems, suppliers, and service providers. This capability creates standardized workflows for vendor onboarding, ongoing due diligence, financial risk scoring, and security posture monitoring, safeguarding organizations against operational disruptions, regulatory penalties, and third-party security breaches.',
      outcome: ['Validated vendor records and due diligence', 'Earlier visibility into security and compliance risks', 'Stronger continuity across supplier relationships'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'hub', title: 'Third-Party Risk Assessment & Due Diligence', body: 'Conducting comprehensive operational, financial, and cybersecurity assessments during vendor onboarding and throughout the contract lifecycle.' },
        { icon: 'layers', title: 'Vendor Master Data Management (MDM)', body: 'Centralizing supplier demographic details, banking credentials, tax certifications, and corporate ownership records into a single, validated repository.' },
        { icon: 'account_tree', title: 'Continuous Cyber & Data Security Posture Monitoring', body: 'Tracking third-party security certifications (SOC 2, ISO 27001), threat intelligence feeds, and external vulnerability exposures to detect supply chain cyber vulnerabilities.' },
        { icon: 'policy', title: 'Regulatory Compliance & Sanctions Screening', body: 'Automating vendor screening against global Politically Exposed Persons (PEP) lists, international sanctions databases, and anti-money laundering (AML) registries.' },
        { icon: 'groups', title: 'Vendor Performance Scoring & SLA Tracking', body: 'Establishing clear performance indicators (KPIs) and operational scorecards to measure vendor delivery accuracy, service quality, and contractual SLA adherence.' },
        { icon: 'verified_user', title: 'Business Continuity & Concentration Risk Management', body: 'Identifying over-reliance on single-source suppliers and assessing vendor disaster recovery plans to maintain operational continuity during unexpected vendor insolvency or failure.' },
      ],
    },
    {
      id: 'product-lifecycle-management', icon: 'factory', title: 'Product Lifecycle Management',
      subtitle: 'Connect engineering and product data from concept through retirement.',
      description: 'Product Lifecycle Management (PLM) orchestrates the end-to-end trajectory of a product from initial concept, design engineering, and prototyping through manufacturing, service support, and retirement. By uniting cross-functional product data into a single source of truth, this discipline aligns engineering, quality assurance, regulatory compliance, and procurement teams to accelerate time-to-market and control engineering changes.',
      outcome: ['Controlled product revisions and engineering changes', 'Aligned engineering, manufacturing and procurement data', 'Traceability throughout the product lifecycle'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'hub', title: 'Centralized Engineering & CAD Data Management', body: 'Creating unified data repositories that manage native CAD models, technical drawings, mechanical simulations, and firmware versions across distributed engineering teams.' },
        { icon: 'layers', title: 'Multi-Level Bill of Materials (BOM) Management', body: 'Structuring and maintaining complex engineering BOMs (EBOM), manufacturing BOMs (MBOM), and service BOMs (SBOM) to ensure alignment across manufacturing and procurement.' },
        { icon: 'account_tree', title: 'Engineering Change Order (ECO) & Revision Control', body: 'Establishing structured change-management workflows with clear audit trails, approval gates, and automated downstream notification for every drawing or component revision.' },
        { icon: 'policy', title: 'Regulatory Compliance & Material Traceability', body: 'Tracking chemical compositions, material declarations, and environmental certifications (e.g., RoHS, REACH, FDA) down to the part level to maintain global market access.' },
        { icon: 'groups', title: 'Design for Manufacturability (DFM) & Assembly', body: 'Integrating manufacturing constraints directly into early engineering cycles to detect tooling interferences, optimize tolerances, and reduce production scrap rates.' },
        { icon: 'verified_user', title: 'Service Lifecycle & End-of-Life (EOL) Phase-Out', body: 'Managing aftermarket spare parts catalogs, maintenance procedures, component obsolescence notifications, and sustainable product disposal strategies.' },
      ],
    },
    {
      id: 'contract-management', icon: 'domain', title: 'Contract Management',
      subtitle: 'Manage agreements from drafting and negotiation to obligations and renewal.',
      description: 'Contract Management modernizes the creation, negotiation, execution, and post-award administration of legal agreements. By transitioning manual, fragmented legal workflows into structured Contract Lifecycle Management (CLM) environments, this practice reduces contract cycle times, eliminates unmonitored contractual liabilities, and ensures continuous commercial and legal compliance.',
      outcome: ['Faster, structured agreement workflows', 'Clearer ownership of obligations and deadlines', 'Searchable contracts with traceable approvals'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'hub', title: 'Dynamic Contract Authoring & Template Standardization', body: 'Implementing centralized clause libraries and standard fallback positions to enable rapid drafting of non-disclosure agreements, master service agreements, and statements of work.' },
        { icon: 'layers', title: 'Collaborative Negotiation & Redlining Management', body: 'Providing digital environments that track multi-party negotiations, redline revisions, and approval workflows with real-time audit trails.' },
        { icon: 'account_tree', title: 'Automated Approval Workflows & Signature Integration', body: 'Routing agreements through configurable approval hierarchies based on contract value, geography, or risk profile, coupled with secure e-signature integrations.' },
        { icon: 'policy', title: 'Obligation Management & Milestone Tracking', body: 'Systematically indexing contractual commitments, deliverables, service levels, penalty clauses, and renewal deadlines to prevent accidental auto-renewals and contractual breaches.' },
        { icon: 'groups', title: 'Contract Risk & Deviation Analysis', body: 'Scanning executed and third-party paper agreements to flag deviations from standard enterprise terms, atypical liability caps, or problematic indemnification clauses.' },
        { icon: 'verified_user', title: 'Centralized Contract Repository & Secure Archival', body: 'Maintaining a secure, searchable contract archive with role-based access control, cryptographic integrity checks, and metadata tagging for regulatory reporting and internal audit.' },
      ],
    },
  ],
  applications: [
    { icon: 'domain', title: 'Multi-entity organizations', body: 'Connect group reporting, shared services and local operations through a common platform foundation.' },
    { icon: 'factory', title: 'Manufacturing businesses', body: 'Bring purchasing, materials, production and finance into one connected operating model.' },
    { icon: 'shopping_cart', title: 'Retail & distribution', body: 'Align inventory, orders and customer information across channels and locations.' },
  ],
  feature: { eyebrow: 'Designed around your operations', title: 'Modernize without losing what works.', body: 'Start with the processes that matter most. We map dependencies, plan integrations and phase the transition so teams can adopt new systems with clarity.', points: ['Business-led process design', 'Integration with your existing landscape', 'A phased approach to adoption'], image: '/images/services/pillar-platform.jpg', imageAlt: 'Enterprise technology and platform architecture' },
  cta: { title: 'Build a more connected business.', body: 'Tell us where your systems create friction. Together, we can define a practical starting point for modernization.', label: 'Talk to a Systems Expert' },
};
