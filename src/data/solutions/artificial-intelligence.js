/* ============================================================================
 * AI & INTELLIGENCE PAGE
 * ======================
 * shown at  yoursite.com/artificial-intelligence
 *
 * Reached from the top menu: Solutions > AI & Intelligence.
 * Change the text between the quote marks and save.
 * ========================================================================= */

/* One long block per capability, in page order. */
const capabilities = [
  {
    id: 'ai-strategy', icon: 'target', title: 'AI Compliance & Risk Advisory',
    subtitle: 'Govern AI throughout its lifecycle with technical controls and auditable policies.',
    description: 'Enterprise AI needs systematic oversight to manage liability, protect brand trust and address regulatory obligations. We establish governance from data curation through continuous post-deployment monitoring, translating the EU AI Act, NIST AI RMF 1.0 and ISO/IEC 42001 into practical guardrails and evidence for review.',
    outcome: ['Documented regulatory readiness', 'Explainable and accountable model decisions', 'Earlier visibility into emerging AI risks'],
    // Listed on this solution's page as bullet points and on the item's own page as cards.
    coreCapabilities: [
      { icon: 'policy', title: 'Regulatory readiness & cross-jurisdictional mapping', body: 'Assess gaps across regional frameworks, classify high-risk systems and establish technical baselines, conformity assessment processes and mandatory documentation registers.' },
      { icon: 'balance', title: 'Bias, fairness & parity auditing', body: 'Evaluate demographic parity, equalized odds and counterfactual fairness across training data and inference outputs to identify representation gaps, historical bias and proxy discrimination.' },
      { icon: 'manage_search', title: 'Model explainability & interpretability', body: 'Apply SHAP, LIME, integrated gradients and interpretable model architectures so auditors, legal teams and end users can examine critical algorithmic outputs.' },
      { icon: 'trending_up', title: 'Continuous drift & performance monitoring', body: 'Monitor inference telemetry for concept drift, covariate shift and statistical variance, with escalation when performance falls below defined thresholds.' },
      { icon: 'shield', title: 'Adversarial robustness & AI threat assessment', body: 'Stress-test model endpoints against data poisoning, adversarial perturbations, model inversion and indirect prompt injection across LLM pipelines.' },
      { icon: 'groups', title: 'AI ethics & operating governance', body: 'Define cross-functional governance boards, RACI ownership matrices, human-in-the-loop escalation criteria and standardized internal review workflows.' },
    ],
  },
  {
    id: 'applied-ai-ml', icon: 'neurology', title: 'Applied AI',
    subtitle: 'Put production-grade intelligence into core business workflows.',
    description: 'Applied AI connects machine learning with enterprise software engineering. We build custom models, production MLOps pipelines and low-latency integrations that turn experiments into resilient systems for predictive planning, automated reasoning and intelligent execution.',
    outcome: ['Scalable intelligence inside existing workflows', 'More informed inventory, pricing and operational decisions', 'Reproducible model delivery and monitoring'],
    // Listed on this solution's page as bullet points and on the item's own page as cards.
    coreCapabilities: [
      { icon: 'neurology', title: 'Custom machine learning & deep learning', body: 'Build, fine-tune and calibrate domain-specific regression, classification, deep neural networks and domain-adapted foundation models.' },
      { icon: 'deployed_code', title: 'Enterprise MLOps & continuous delivery', body: 'Automate data extraction, retraining and artifact versioning with MLflow and DVC, supported by CI/CD and canary or blue-green deployment strategies.' },
      { icon: 'bar_chart', title: 'Predictive analytics & forecasting', body: 'Use multi-horizon time-series forecasting, demand models and uplift algorithms to support inventory, pricing and planning across large, dynamic datasets.' },
      { icon: 'account_tree', title: 'Decision intelligence & automated workflows', body: 'Combine business rules, mathematical optimization and probabilistic model outputs into decision engines for complex, high-frequency enterprise actions.' },
      { icon: 'hub', title: 'Low-latency API & microservices integration', body: 'Package inference in containerized, autoscaling Docker/Kubernetes services exposed through gRPC or REST for ERP, CRM and custom core systems.' },
      { icon: 'layers', title: 'Data engineering & feature stores', body: 'Build batch and streaming feature stores, including Feast, with data lineage, consistent training and serving features and high-throughput transformation pipelines.' },
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
  },
  {
    id: 'data-platforms', icon: 'hub', title: 'AI Enabled SaaS Platforms',
    subtitle: 'Build AI into the foundations of enterprise SaaS.',
    description: 'We engineer multi-tenant SaaS platforms whose core value comes from AI. Cloud architectures balance shared infrastructure efficiency with the compute, memory and privacy demands of intelligent models serving distinct enterprise customers at scale.',
    outcome: ['Isolated customer data and model workflows', 'Scalable inference with visible compute costs', 'Extensible platforms with resilient deployment'],
    // Listed on this solution's page as bullet points and on the item's own page as cards.
    coreCapabilities: [
      { icon: 'lock', title: 'Multi-tenant data isolation', body: 'Use logical and physical privacy partitioning to prevent cross-tenant data contamination and support isolated fine-tuning and retrieval in each customer environment.' },
      { icon: 'bolt', title: 'Distributed inference & GPU orchestration', body: 'Optimize inference with autoscaling GPU clusters, dynamic batching, AWQ/GPTQ quantization, vLLM and TensorRT to improve utilization and meet response-time targets.' },
      { icon: 'auto_awesome', title: 'Adaptive workflows & personalization', body: 'Use feedback loops, client telemetry and behavioral context to personalize interfaces, automate repetitive flows and provide context-aware task assistance.' },
      { icon: 'bar_chart', title: 'Consumption tracking & cost governance', body: 'Meter token usage, GPU compute seconds and API calls per tenant for transparent subscriptions, usage-based billing and resource control.' },
      { icon: 'code', title: 'Developer ecosystem & extensibility', body: 'Provide public APIs, SDKs, secure webhooks and embedded plugin frameworks so clients can build custom workflows on the platform.' },
      { icon: 'cloud', title: 'High-availability hybrid cloud deployment', body: 'Design hybrid and multi-cloud deployments with automated failover, geographic redundancy and disaster recovery aligned to agreed SLAs.' },
    ],
  },
  {
    id: 'ai-document-intel', icon: 'menu_book', title: 'Document AI',
    subtitle: 'Turn unstructured documents into structured, validated enterprise data.',
    description: 'Document AI combines OCR, visual document understanding, natural language processing and multimodal models to process scanned forms, contracts and financial ledgers. Normalized, validated outputs feed enterprise workflows while confidence scoring and human review manage exceptions.',
    outcome: ['Less manual document processing', 'Validated information ready for enterprise systems', 'Searchable evidence with controlled handling of sensitive data'],
    // Listed on this solution's page as bullet points and on the item's own page as cards.
    coreCapabilities: [
      { icon: 'menu_book', title: 'Multimodal extraction & structural understanding', body: 'Process low-quality scans, skewed images, digital PDFs and faxes, including hierarchical tables, unusual key-value pairs, nested checkboxes and multi-column layouts.' },
      { icon: 'contract', title: 'Semantic legal & contractual analysis', body: 'Extract indemnification clauses, governing laws, renewal dates and obligations from agreements and compliance filings, flagging deviations from standard language.' },
      { icon: 'check_circle', title: 'Data validation & reconciliation', body: 'Check extracted figures against enterprise databases, checksums, tax IDs and purchase orders to catch inconsistencies before ERP ingestion.' },
      { icon: 'manage_search', title: 'Document Q&A & semantic search', body: 'Use Retrieval-Augmented Generation (RAG) and dense vector indexing for natural-language policy queries and clause comparison across document repositories.' },
      { icon: 'groups', title: 'Human-in-the-loop exception management', body: 'Automatically route high-confidence extractions onward and send ambiguous entries, low-contrast text and edge cases to verification queues.' },
      { icon: 'privacy_tip', title: 'Security, redaction & de-identification', body: 'Detect and mask personally identifiable information (PII), sensitive financial data and protected health information (PHI) at ingestion.' },
    ],
  },
  {
    id: 'industry-4-0', icon: 'factory', title: 'Industrial AI',
    subtitle: 'Turn industrial sensor data into better maintenance, quality and safety decisions.',
    description: 'Industrial AI brings machine intelligence into operational technology and manufacturing. Combining edge computing with physical systems modeling, we turn sensor data into actions that reduce downtime, support safety protocols and improve equipment performance in factory, field and processing environments.',
    outcome: ['Earlier warning of equipment failure', 'More consistent quality and process performance', 'Reliable inference in environments with limited connectivity'],
    // Listed on this solution's page as bullet points and on the item's own page as cards.
    coreCapabilities: [
      { icon: 'settings', title: 'Predictive maintenance & condition monitoring', body: 'Analyze high-frequency vibration, thermal imaging, ultrasonic acoustics and motor current signatures to forecast component failures and inform maintenance.' },
      { icon: 'manage_search', title: 'Computer vision for quality assurance', body: 'Deploy high-speed production-line inspection to identify surface anomalies, dimensional variations, weld flaws and missing components.' },
      { icon: 'architecture', title: 'Digital twins & process optimization', body: 'Model assets, turbines and assembly lines, applying reinforcement learning to improve thermal efficiency, reduce scrap and balance energy consumption.' },
      { icon: 'hub', title: 'OT–IT protocol interoperability', body: 'Connect legacy and modern control environments through OPC UA, Modbus, MQTT, Profinet and industrial SCADA integrations.' },
      { icon: 'health_and_safety', title: 'Worker safety & hazard detection', body: 'Use edge video analytics to flag PPE issues, restricted-zone breaches and machinery hazards, with alerts and shutdown integrations governed by site safety controls.' },
      { icon: 'deployed_code', title: 'Edge inference & offline reliability', body: 'Deploy models on edge gateways, NVIDIA Jetson and industrial PCs so critical inference can operate without persistent cloud connectivity.' },
    ],
  },
];

export const solutionPage = {
  id: 'artificial-intelligence', name: 'Artificial Intelligence', shortName: 'Artificial Intelligence', icon: 'neurology',
  image: '/images/solutions/cat-ai.jpg',
  headline: 'Turn data into decisions.', accent: 'Intelligence into advantage.',
  description: 'Embed intelligence across your enterprise systems, data and operations. Move from isolated experiments to AI that supports the way your business works.',
  overview: { eyebrow: 'Intelligence with purpose', title: 'Put your data to work.', body: 'Artificial Intelligence at ITG is not positioned as experimentation or isolated innovation. It is designed as a foundational enterprise capability - embedded into systems, data and workflows to support better decisions, automation and regulatory readiness.', note: 'AI at ITG works with existing enterprise platforms and evolves with business needs.' },
  outcomes: [
    { icon: 'bar_chart', title: 'Better-informed decisions', body: 'Connect trusted data with the people and processes that need it.' },
    { icon: 'bolt', title: 'More effective operations', body: 'Apply AI to practical workflows, from document processing to predictive insights.' },
    { icon: 'shield', title: 'Confidence to scale', body: 'Build governance and human oversight into your approach to enterprise AI.' },
  ],
  // Shared by this solution's item pages (e.g. /artificial-intelligence/<id>): the icons on the
  // "why it matters" cards and the "How we work" steps.
  itemPage: {
    whyIcons: ['verified_user', 'trending_up', 'hub'],
    steps: { eyebrow: 'How we work', title: 'From assessment to ongoing operation.', items: [
      { title: 'Define scope & controls', body: 'Agree the use cases, data requirements, risks and acceptance criteria.' },
      { title: 'Implement & validate', body: 'Integrate with existing systems and review results against the agreed requirements.' },
      { title: 'Monitor & improve', body: 'Assign operational ownership and review performance, exceptions and changes.' },
    ] },
  },
  capabilitiesIntro: 'A full spectrum of AI, data and intelligence services designed for enterprise scale.',
  capabilities: [
    ...capabilities,
    {
      id: 'dpp-ai', icon: 'verified_user', title: 'AI Based Audit',
      subtitle: 'Move from sampled reviews to continuous, full-population audit analysis.',
      description: 'AI-Based Audit applies unsupervised learning, statistical process control and pattern analysis across operational and accounting transactions. Continuous verification helps teams detect non-compliance, financial leakage and potential fraud, with traceable evidence for auditor review.',
      outcome: ['Broader transaction coverage', 'Earlier detection of control gaps and suspicious patterns', 'Traceable findings and evidence for regulatory review'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'layers', title: 'Full-population transaction analysis', body: 'Ingest and test entire general ledgers, journal entries and sub-ledgers across multiple ERP instances to extend coverage beyond random sampling.' },
        { icon: 'neurology', title: 'Anomaly & fraud pattern detection', body: 'Use isolation forests, autoencoders and graph neural networks to surface collusion indicators, split invoices, duplicate payments and unusual weekend postings.' },
        { icon: 'lock', title: 'Segregation of duties & access governance', body: 'Continuously review ERP roles, privilege escalation and historical actions for conflicting access rights and toxic combinations that breach internal controls.' },
        { icon: 'policy', title: 'Compliance & reporting automation', body: 'Evaluate controls against SOX, IFRS and applicable statutory requirements, generating evidence packages and working papers for external review.' },
        { icon: 'shopping_cart', title: 'Vendor & procurement integrity', body: 'Compare vendor records, invoices and purchase orders with public registers, sanctions lists and employee registries to identify conflicts, phantom vendors and pricing deviations.' },
        { icon: 'account_tree', title: 'Transparent audit trails & decision narratives', body: 'Attach source evidence and natural-language explanations to flagged anomalies, workflow deviations and risk scores so auditors can trace the underlying cause.' },
      ],
    },
  ],
  applications: [
    { icon: 'account_balance', title: 'Finance & shared services', body: 'Extract information from documents and bring operational and financial data into useful decision views.' },
    { icon: 'factory', title: 'Manufacturing & operations', body: 'Connect production data to performance insights, exception detection and maintenance planning.' },
    { icon: 'groups', title: 'Enterprise leadership', body: 'Build a shared view of business performance with governed data and role-based analytics.' },
  ],
  feature: { eyebrow: 'Enterprise AI, by design', title: 'Intelligence that fits your enterprise.', body: 'AI creates value when it connects to real processes. We bring data foundations, applied intelligence and enterprise integration together, with governance throughout the journey.', points: ['Business priorities before technology choices', 'Trusted data and connected systems', 'Human oversight and responsible adoption'], image: '/images/services/pillar-data.jpg', imageAlt: 'Enterprise data and analytics technology' },
  cta: { title: 'Make intelligence part of how you work.', body: 'Talk with ITG about AI strategy, applied intelligence, and systems that scale with your business.', label: 'Talk to an AI Expert' },
};
