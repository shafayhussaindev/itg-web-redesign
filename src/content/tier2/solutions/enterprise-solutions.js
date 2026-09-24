/* Tier 2: /enterprise-solutions. All page copy and imagery are editable here.
 * Keep capability ids in sync with the links in site.js. */
export const solutionPage = {
  id: 'enterprise-solutions',
  name: 'Enterprise Solutions',
  shortName: 'Enterprise',
  icon: 'apartment',
  image: '/assets/cat-enterprise.jpg',
  headline: 'One connected enterprise.',
  accent: 'Built to move forward.',
  description: 'Bring finance, operations, procurement and customer relationships together in business systems designed around the way you work.',
  tags: ['Connected operations', 'Trusted information', 'Enterprise control'],
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
  capabilitiesIntro: 'From a single business function to a multi-entity platform, build a foundation that works across your organization.',
  capabilities: [
    { id: 'erp-solutions', icon: 'layers', title: 'Enterprise ERP Solutions', subtitle: 'A common foundation for core operations.', description: 'Connect finance, inventory, purchasing and operational processes through an ERP architecture aligned to your business model.', focus: ['Process mapping and ERP roadmaps', 'Platform configuration and system integration', 'Data migration, validation and user enablement'], outcome: ['Consistent information across functions', 'A manageable path from legacy systems to modern operations'] },
    { id: 'financial-ops', icon: 'account_balance', title: 'Financial & Operational Systems', subtitle: 'Bring financial control closer to operations.', description: 'Align financial records with the activities that drive them, giving teams a clearer view of budgets, costs and performance.', focus: ['Financial workflows and approval controls', 'Budgeting, cost allocation and management reporting', 'Operational reporting and reconciliation'], outcome: ['Better visibility into costs and commitments', 'More consistent reporting and financial controls'] },
    { id: 'crm-engagement', icon: 'groups', title: 'CRM & Customer Engagement', subtitle: 'A connected view of every customer relationship.', description: 'Help commercial and service teams work from shared customer information throughout acquisition, delivery and ongoing engagement.', focus: ['Sales pipelines and opportunity management', 'Customer service and engagement workflows', 'CRM integration with finance and operations'], outcome: ['Better handovers between customer-facing teams', 'Clearer visibility into customer activity and follow-up'] },
    { id: 'procurement-vendor', icon: 'handshake', title: 'Procurement & Vendor Management', subtitle: 'Create structure from sourcing to payment.', description: 'Connect supplier information, purchasing requests and approvals so procurement becomes easier to manage and review.', focus: ['Supplier onboarding and vendor records', 'Purchase requests, orders and approval workflows', 'Supplier performance and spend visibility'], outcome: ['More accountable purchasing decisions', 'A traceable record of supplier interactions'] },
    { id: 'manufacturing-erp', icon: 'factory', title: 'Manufacturing & Industry-Specific ERP', subtitle: 'Business systems shaped by production realities.', description: 'Support the planning, material and reporting needs of industrial teams with workflows tailored to their operating environment.', focus: ['Production planning and material requirements', 'Inventory, quality and shop-floor integration', 'Industry-specific costing and operational reporting'], outcome: ['Better alignment between planning and execution', 'Clearer visibility into materials and production costs'] },
    { id: 'multi-entity-systems', icon: 'domain', title: 'Corporate & Multi-Entity Systems', subtitle: 'Group visibility with local accountability.', description: 'Connect business units through common reporting and governance while supporting the operational needs of individual entities.', focus: ['Group structures and entity-level access', 'Intercompany workflows and consolidation', 'Shared services and common master data'], outcome: ['A more consistent view across the group', 'Defined responsibilities across entities and teams'] },
  ],
  applications: [
    { icon: 'domain', title: 'Multi-entity organizations', body: 'Connect group reporting, shared services and local operations through a common platform foundation.' },
    { icon: 'factory', title: 'Manufacturing businesses', body: 'Bring purchasing, materials, production and finance into one connected operating model.' },
    { icon: 'shopping_cart', title: 'Retail & distribution', body: 'Align inventory, orders and customer information across channels and locations.' },
  ],
  feature: { eyebrow: 'Designed around your operations', title: 'Modernize without losing what works.', body: 'Start with the processes that matter most. We map dependencies, plan integrations and phase the transition so teams can adopt new systems with clarity.', points: ['Business-led process design', 'Integration with your existing landscape', 'A phased approach to adoption'], image: '/assets/services/pillar-platform.jpg', imageAlt: 'Enterprise technology and platform architecture' },
  cta: { title: 'Build a more connected business.', body: 'Tell us where your systems create friction. Together, we can define a practical starting point for modernization.', label: 'Talk to a Systems Expert' },
};
