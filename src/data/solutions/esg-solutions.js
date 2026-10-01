/* Tier 2: /esg-solutions. Capability copy describes technology
 * support, not legal advice, certification or a guarantee of compliance. */
export const solutionPage = {
  id: 'esg-solutions', name: 'ESG Solutions', shortName: 'ESG', icon: 'eco',
  image: '/images/solutions/cat-sustainability.jpg',
  headline: 'From complex requirements', accent: 'to connected evidence.',
  description: 'Manage sustainability reporting, climate targets, ESG risk, circularity and the controls behind reliable disclosures.',
  overview: { eyebrow: 'Connected sustainability operations', title: 'Make ESG information actionable and auditable.', body: 'Sustainability programs depend on current data, accountable owners and repeatable decisions. ITG connects reporting, targets, risk and circularity workflows so teams can manage progress through the year.', note: 'Controls, evidence and access rules support every reported figure and decision.' },
  outcomes: [
        { icon: 'hub', title: 'Connected evidence', body: 'Bring source information, ownership and supporting records into a structured environment.' },
        { icon: 'target', title: 'Targets and risks in view', body: 'Monitor climate commitments and ESG risks through current indicators and assigned actions.' },
        { icon: 'verified_user', title: 'Readiness for review', body: 'Support reporting teams with documented controls and traceable data.' },
      ],
  // Shared by this solution's item pages (e.g. /esg-solutions/<id>): the icons on the
  // "why it matters" cards and the "How we work" steps.
  itemPage: {
    whyIcons: ['hub', 'trending_up', 'verified_user'],
    steps: { eyebrow: 'How we work', title: 'From assessment to ongoing governance.', items: [
      { title: 'Assess & prioritize', body: 'Map obligations, current data and controls, then agree priorities and accountable owners.' },
      { title: 'Connect & validate', body: 'Implement workflows, connect source records and validate the evidence with relevant teams.' },
      { title: 'Monitor & review', body: 'Track performance, exceptions and corrective actions as requirements and operations change.' },
    ] },
  },
  capabilitiesIntro: 'Build the systems that help teams collect, connect and explain sustainability and compliance information.',
  capabilities: [
    {
      id: 'sustainability-reporting-and-management', icon: 'eco', title: 'Sustainability Reporting & Management',
      subtitle: 'Turn sustainability information into traceable, audit-ready disclosures.',
      description: 'Sustainability Reporting & Management establishes verifiable, auditable frameworks for collecting, validating, and disclosing corporate environmental, social, and governance (ESG) metrics. This capability bridges operational activities with global disclosure mandates—such as the Corporate Sustainability Due Diligence Directive (CSDDD), Corporate Sustainability Reporting Directive (CSRD/ESRS), Global Reporting Initiative (GRI), and IFRS Sustainability Disclosure Standards (ISSB S1/S2). By transitioning from fragmented annual surveys to automated, audit-ready data pipelines, organizations provide stakeholders, investors, and regulatory bodies with transparent, traceable sustainability performance.',
      outcome: ['Connected and validated ESG data', 'Evidence-backed stakeholder disclosures', 'Visible progress against transition plans'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'policy', title: 'Regulatory Reporting Framework Alignment', body: 'Operationalizing data aggregation models mapped directly to CSRD (European Sustainability Reporting Standards), GRI, TCFD, and SEC climate disclosure rules.' },
        { icon: 'layers', title: 'Double Materiality Assessments', body: 'Conducting structured impact and financial materiality evaluations to identify, quantify, and document which ESG factors present material risks and opportunities to the enterprise.' },
        { icon: 'hub', title: 'Automated ESG Data Aggregation', body: 'Engineering automated connectors to pull environmental consumption metrics, workforce demographics, and governance records directly from enterprise ERP, utility providers, and HR systems.' },
        { icon: 'verified_user', title: 'Audit-Ready Data Lineage & Assurance', body: 'Establishing non-repudiable data trails, source evidence linking, and documentation trees to support mandatory limited and reasonable third-party assurance audits.' },
        { icon: 'groups', title: 'Stakeholder Disclosures & Benchmarking', body: 'Structuring unified disclosure packages for rating agencies, institutional investors, supply chain clients, and benchmark indexes (such as CDP and Dow Jones Sustainability Index).' },
        { icon: 'eco', title: 'Decarbonization Roadmap Tracking', body: 'Modeling multi-year transition plans and operational initiatives to quantify expected versus actual emissions abatements and capital allocation efficiency.' },
      ],
    },
    {
      id: 'sbti-management', icon: 'bar_chart', title: 'SBTi Management',
      subtitle: 'Translate science-based climate targets into monitored reduction roadmaps.',
      description: 'Science Based Targets initiative (SBTi) Management guides enterprises through setting, submitting, validating, and monitoring corporate decarbonization targets aligned with climate science and the 1.5°C threshold of the Paris Agreement. This discipline focuses on building granular greenhouse gas (GHG) inventories across Scope 1, Scope 2, and Scope 3 emissions, converting long-term net-zero commitments into actionable, trajectory-modeled reduction roadmaps across the corporate value chain.',
      outcome: ['Consistent Scope 1, 2 and 3 inventories', 'Documented target submissions and boundaries', 'Clear progress and variance tracking'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'policy', title: 'GHG Protocol Inventory Accounting', body: 'Ingesting activity data across direct operations and indirect value chains in strict compliance with the GHG Protocol Corporate Standard and Scope 3 Calculation Guidance.' },
        { icon: 'layers', title: 'Near-Term & Long-Term Target Modeling', body: 'Structuring compliant 5- to 10-year near-term targets and 2050 net-zero targets across absolute contraction and sector-specific decarbonization approaches (SDA).' },
        { icon: 'hub', title: 'Scope 3 Value Chain Decarbonization', body: 'Measuring and prioritizing reduction pathways across the 15 Scope 3 categories, specifically purchased goods, upstream transport, business travel, and use-of-sold products.' },
        { icon: 'verified_user', title: 'Formal SBTi Dossier & Validation Submission', body: 'Preparing official technical submissions, calculation workbooks, boundary justifications, and methodological documentation required for formal validation by the SBTi committee.' },
        { icon: 'groups', title: 'Target Recalculation & Boundary Governance', body: 'Establishing trigger mechanisms for target recalculations based on structural corporate changes, including mergers, acquisitions, and divestitures.' },
        { icon: 'eco', title: 'Annual Progress Tracking & Variance Analysis', body: 'Generating annual progress tracking statements against validated trajectory lines, identifying variance drivers and guiding operational interventions.' },
      ],
    },
    {
      id: 'esg-risk-management', icon: 'verified_user', title: 'ESG Risk Management',
      subtitle: 'Identify and manage environmental, social and governance exposures.',
      description: 'ESG Risk Management identifies, evaluates, and mitigates material exposures arising from environmental shifts, social responsibilities, and governance vulnerabilities across enterprise operations and value chains. By embedding ESG factors into existing Enterprise Risk Management (ERM) frameworks, this practice enables organizations to quantify physical, transition, regulatory, and reputational risks, protecting balance sheets from climate liabilities and compliance penalties.',
      outcome: ['ESG risks connected to enterprise risk management', 'Better visibility into climate and supply chain exposure', 'Defined mitigation and incident escalation'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'policy', title: 'Climate Scenario Analysis & Physical Risk Modeling', body: 'Modeling acute and chronic physical climate risks—such as extreme weather disruptions, sea-level rise, and heat stress—against physical assets and production facilities under NGFS and IPCC climate scenarios.' },
        { icon: 'layers', title: 'Transition Risk & Carbon Price Exposure', body: 'Assessing vulnerability to economic transitions, including incoming carbon border taxes (CBAM), carbon pricing mechanisms, shifting consumer sentiment, and raw material phase-outs.' },
        { icon: 'hub', title: 'Social & Human Rights Impact Assessments', body: 'Reviewing labor standards, health and safety records, community relations, and modern slavery risks throughout the upstream and downstream supply network.' },
        { icon: 'verified_user', title: 'Governance Vulnerability & Business Ethics Review', body: 'Systematically evaluating corporate board diversity, executive remuneration ties to ESG performance, anti-corruption policies, and whistleblower protections.' },
        { icon: 'groups', title: 'ERM Integration & Risk Register Quantification', body: 'Translating qualitative ESG indicators into quantitative financial metrics integrated directly into enterprise-wide risk heat maps and Value-at-Risk (VaR) calculations.' },
        { icon: 'eco', title: 'Crisis Management & Incident Response Planning', body: 'Establishing rapid escalation paths and contingency operational procedures for addressing high-visibility environmental incidents or regulatory investigations.' },
      ],
    },
    {
      id: 'circularity-management', icon: 'route', title: 'Circularity Management',
      subtitle: 'Retain material value through circular design, recovery and reuse.',
      description: 'Circularity Management guides organizations from linear "take-make-waste" operating models to closed-loop circular systems. This practice evaluates material flows, optimizes product architecture for remanufacturing, and implements take-back logistics to retain material value throughout the economic lifecycle. By decoupling revenue generation from virgin resource extraction, companies lower material acquisition costs, reduce operational waste, and fulfill expanding circular economy regulations.',
      outcome: ['Traceable material flows and recovery potential', 'Connected take-back and reuse programs', 'Evidence for circular product decisions'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'policy', title: 'Material Flow Analysis (MFA) & Mass Balance Tracking', body: 'Quantifying the volume, lifecycle, and fate of materials entering and leaving facilities to identify resource losses, byproduct streams, and recovery potential.' },
        { icon: 'layers', title: 'Circular Product Design & Disassembly Optimization', body: 'Implementing design strategies that prioritize modularity, non-toxic inputs, recycled-content integration, and ease of mechanical disassembly at end-of-life.' },
        { icon: 'hub', title: 'Reverse Logistics & Take-Back Program Architecture', body: 'Designing return networks, sorting workflows, and processing partnerships to recover post-consumer and post-industrial assets for secondary utilization.' },
        { icon: 'verified_user', title: 'Waste Diversion & Zero-Waste-to-Landfill Certification', body: 'Establishing monitoring architectures to eliminate waste sent to landfills, verifying diversion rates through certified recovery, composting, and recycling channels.' },
        { icon: 'groups', title: 'Digital Product Passports (DPP) & Material Lineage', body: 'Implementing serialized tracking frameworks that log raw material origin, repair histories, disassembly instructions, and recycled content for downstream value preservation.' },
        { icon: 'eco', title: 'Secondary Market & Industrial Symbiosis Facilitation', body: 'Structuring programs to monetize manufacturing scrap, surplus inventory, and byproducts as secondary feedstock for adjacent manufacturing industries.' },
      ],
    },
    {
      id: 'compliance-and-audit-management', icon: 'shield', title: 'Compliance & Audit Management',
      subtitle: 'Connect obligations, internal controls, audit evidence and remediation.',
      description: 'Compliance & Audit Management establishes unified governance architectures to systematically manage corporate compliance obligations, internal policy enforcement, and audit cycles. By consolidating multiple regulatory standards into an integrated control framework, this domain eliminates redundant verification workflows, closes policy enforcement gaps, and maintains continuous audit-readiness across business units.',
      outcome: ['Less duplicated control testing', 'Accountable corrective actions', 'Continuous readiness for audit and review'],
      // Listed on this solution's page as bullet points and on the item's own page as cards.
      coreCapabilities: [
        { icon: 'policy', title: 'Unified Compliance Framework Architecture', body: 'Mapping overlapping cross-industry mandates (e.g., ISO standards, SOX, OSHA, environmental permits) to single internal controls, eliminating duplicate testing overhead.' },
        { icon: 'layers', title: 'Automated Internal Audit Workflow Management', body: 'Designing end-to-end audit lifecycle operations—from risk assessment and universe planning to fieldwork execution, testing documentation, and issue remediation tracking.' },
        { icon: 'hub', title: 'Corrective and Preventive Action (CAPA) Systems', body: 'Standardizing root-cause analysis, assigning corrective action ownership, and tracking remediation milestones for compliance findings and non-conformities.' },
        { icon: 'verified_user', title: 'Continuous Regulatory Horizon Scanning', body: 'Tracking international and regional legislative updates, industry guidelines, and regulatory enforcement actions to proactively adjust internal control procedures.' },
        { icon: 'groups', title: 'Policy Management & Distribution Lifecycle', body: 'Centralizing policy authoring, executive review, mandatory employee attestation, and version-controlled policy distribution across the organization.' },
        { icon: 'eco', title: 'Audit Trail & Regulatory Inquiries Preparation', body: 'Compiling evidence repositories and traceable testing documentation to respond efficiently to external regulatory inquiries, statutory audits, and certifications.' },
      ],
    },
  ],
  applications: [
    { icon: 'factory', title: 'Manufacturers & exporters', body: 'Connect materials, production and product records to support customer and market information needs.' },
    { icon: 'shopping_bag', title: 'Brands & supply chains', body: 'Bring supplier information and product evidence into a more transparent data environment.' },
    { icon: 'domain', title: 'Corporate reporting teams', body: 'Coordinate data collection, review and evidence across business units.' },
  ],
  feature: { eyebrow: 'Traceability by design', title: 'Every insight starts with a source.', body: 'Useful reporting depends on information people can explain. We connect data to its source, owner and review history, helping teams build confidence in the evidence behind their decisions.', points: ['Source records linked to reported information', 'Defined ownership and review workflows', 'An adaptable enterprise data foundation'], image: '/images/industries/ind-sustainability.jpg', imageAlt: 'Renewable energy and sustainable industrial infrastructure' },
  cta: { title: 'Build the foundation for greater transparency.', body: 'Let us explore your data landscape, traceability needs and reporting workflows together.', label: 'Talk to a Sustainability Expert' },
};
