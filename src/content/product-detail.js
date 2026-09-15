import { productCategories } from './products.js';

// Tier 2: one page per category. Products are sections on these pages.
// Keep these slugs stable: navigation and category cards use them.
export const productCategoryPaths = {
  enterprise: '/enterprise-business-platforms',
  sustainability: '/sustainability-compliance-platforms',
  operations: '/asset-operations-platforms',
  ai: '/ai-intelligence-platforms',
  experience: '/digital-experience-platforms',
};

export const productDetail = {
  home: 'Home', products: 'Products', skipLink: 'Skip to content',
  explore: 'Explore the Platforms', talk: 'Discuss Your Requirements',
  overview: 'Overview', platforms: 'Platforms', integration: 'Integration',
  overviewEyebrow: 'Purpose-built platforms',
  platformsEyebrow: 'In this category', platformsTitle: 'Find your starting point.',
  platformFocus: 'Platform focus', discuss: 'Discuss this platform',
  integrationEyebrow: 'Part of the ITG ecosystem',
  integrationTitle: 'Start with one platform. Build a connected enterprise.',
  integrationBody: 'ITG products can be adopted independently or as part of a broader enterprise architecture. Define how the platform will connect to your systems, teams and data before expanding to the next business need.',
  integrationPoints: [
    { icon: 'hub', title: 'Connect your systems', body: 'Plan the data flows and integration points across your existing business applications.' },
    { icon: 'verified_user', title: 'Establish governance', body: 'Align access, data ownership and reporting with your operational requirements.' },
    { icon: 'trending_up', title: 'Expand progressively', body: 'Start with a defined business priority and extend the platform as your needs evolve.' },
  ],
  relatedEyebrow: 'Explore more', relatedTitle: 'Discover connected product categories.',
  relatedLink: 'Explore category', allProducts: 'View All Products',
  contactEyebrow: 'Let’s find the right fit',
  contactTitle: 'Bring your requirements. Explore the possibilities.',
  contactBody: 'Tell us about your operations, existing systems and priorities so we can help identify the right platform and the next steps.',
  // Configure an email to enable product enquiries. The fallback is a live page.
  contactEmail: '', contactLabel: 'Request a Product Demo',
  contactFallback: { label: 'Meet the ITG Team', href: '/company' },
};

const categoryDetails = {
  enterprise: {
    icon: 'layers', shortName: 'Enterprise Business',
    headline: 'Bring your business together.', accent: 'Build with control.',
    overviewTitle: 'A connected foundation for core business operations.',
    overviewBody: 'Finance, customer relationships and manufacturing each need a clear operational foundation. Explore the platforms in this category to find a starting point that fits the way your organization works.',
    tags: ['Business operations', 'Customer relationships', 'Manufacturing'],
    platforms: [
      { id: 'integra-erp', name: 'Integra ERP', icon: 'domain', description: 'Unified enterprise resource planning', body: 'Bring core business functions into a shared operational framework. Start a conversation about how enterprise resource planning can support your finance and operations teams.', focus: ['Enterprise resource planning', 'Finance and operations', 'Business process coordination'] },
      { id: 'integra-crm', name: 'Integra CRM', icon: 'groups', description: 'Customer engagement & relationship management', body: 'Give customer relationships a structured home within your enterprise. Explore how CRM can connect customer information with the teams responsible for engagement.', focus: ['Customer relationships', 'Customer engagement', 'Team coordination'] },
      { id: 'cyclo-erp', name: 'Cyclo ERP', icon: 'factory', description: 'Manufacturing & spinning mills ERP', body: 'Approach enterprise planning around the needs of manufacturing and spinning mills. Discuss the production context, operational processes and information your teams need to manage.', focus: ['Manufacturing operations', 'Spinning mill processes', 'Industry-specific resource planning'] },
    ],
  },
  sustainability: {
    icon: 'eco', shortName: 'Sustainability & Compliance',
    headline: 'Connect product data.', accent: 'Create greater transparency.',
    overviewTitle: 'Make sustainability and traceability part of your infrastructure.',
    overviewBody: 'Sustainability reporting and product transparency depend on organized information. Explore platforms for managing sustainability data and connecting product records across the value chain.',
    tags: ['Sustainability data', 'Product traceability', 'Reporting readiness'],
    platforms: [
      { id: 'ecomagnet', name: 'EcoMagnet', icon: 'eco', description: 'Sustainability, ESG & CSRD intelligence', body: 'Create a starting point for discussions about sustainability information and reporting readiness. Align the platform scope with the data, reporting processes and governance your organization needs.', focus: ['Sustainability information', 'ESG intelligence', 'CSRD reporting readiness'] },
      { id: 'dpp-platform', name: 'Digital Product Passport Platform', icon: 'account_tree', description: 'EU DPP & traceability infrastructure', body: 'Connect product information with a structured approach to traceability. Explore how digital product passports can fit your product data, supply chain relationships and transparency requirements.', focus: ['Digital product records', 'Product traceability', 'Value chain transparency'] },
    ],
  },
  operations: {
    icon: 'settings', shortName: 'Assets & Operations',
    headline: 'Connect assets and information.', accent: 'Keep operations moving.',
    overviewTitle: 'Bring structure to everyday operational complexity.',
    overviewBody: 'Assets and documents carry information that teams rely on every day. Explore platforms that support asset lifecycle management and organized document processes across enterprise environments.',
    tags: ['Asset lifecycle', 'Operational workflows', 'Document management'],
    platforms: [
      { id: 'astaric', name: 'Astaric', icon: 'deployed_code', description: 'Asset lifecycle & RFID management', body: 'Explore a structured approach to managing assets across their lifecycle. Discuss your asset environment, identification needs and the role of RFID in your operations.', focus: ['Asset lifecycle management', 'RFID-based identification', 'Asset operations'] },
      { id: 'documax', name: 'DocuMax', icon: 'menu_book', description: 'Document management & compliance platform', body: 'Make document management part of your operational foundation. Define how records, document workflows and governance should support the teams that use them.', focus: ['Document management', 'Document workflows', 'Records governance'] },
    ],
  },
  ai: {
    icon: 'neurology', shortName: 'AI & Intelligence',
    headline: 'Put intelligence to work.', accent: 'Where decisions happen.',
    overviewTitle: 'Connect intelligence with the work your teams already do.',
    overviewBody: 'Intelligence is most useful when it has a clear operational purpose. Explore platforms focused on logistics and operations, alongside meeting and engagement intelligence.',
    tags: ['Operations intelligence', 'Decision support', 'Engagement intelligence'],
    platforms: [
      { id: 'aullect', name: 'Aullect', icon: 'local_shipping', description: 'AI-powered logistics & operations intelligence', body: 'Explore intelligence in the context of logistics and operational decisions. Start with the processes, data and information gaps that matter most to your teams.', focus: ['Logistics intelligence', 'Operational insights', 'Decision support'] },
      { id: 'zeito', name: 'Zeito', icon: 'auto_awesome', description: 'AI meeting & engagement intelligence', body: 'Explore how meeting and engagement intelligence can support your teams. Discuss the conversations, information and working practices that shape your needs.', focus: ['Meeting intelligence', 'Engagement insights', 'Team information needs'] },
    ],
  },
  experience: {
    icon: 'devices', shortName: 'Digital Experience',
    headline: 'Present with consistency.', accent: 'Across every touchpoint.',
    overviewTitle: 'A structured foundation for your digital presentation.',
    overviewBody: 'Digital catalogs and brand systems help teams create a consistent experience. Explore a platform approach to organizing presentation and supporting a shared visual language across channels.',
    tags: ['Digital catalogs', 'Brand consistency', 'Experience systems'],
    platforms: [
      { id: 'style-lab', name: 'StyleLab', icon: 'palette', description: 'Catalog & digital branding system', body: 'Bring catalog presentation and digital branding into a shared framework. Discuss how your product content, visual identity and digital channels should work together.', focus: ['Digital catalog presentation', 'Digital branding', 'Experience consistency'] },
    ],
  },
};

export const productPages = productCategories.map(category => ({
  ...category,
  ...categoryDetails[category.id],
  href: productCategoryPaths[category.id],
}));
