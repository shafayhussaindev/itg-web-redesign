import { platforms } from '@/content/tier1/platforms.js';

/* ============================================================================
 * TIER 2: THE SIX PLATFORM PAGES
 * ==============================
 * One page per platform, at /<platform id> — e.g. /supply-chain. The card
 * fields (title, lead, body, image) come from content/tier1/platforms.js;
 * everything else on the page is here.
 *
 * TIER 3 = the products on each page (`products` below). Each product is a
 * section of its platform page AND a link in the Platforms menu:
 *   /supply-chain#aullect
 * Keep product `id`s stable so shared links keep working.
 *
 * A platform with no products yet (`products: []`) still gets its page; the
 * menu shows a single "overview" link for it, and the page hides its empty
 * products section.
 *
 * The platform copy (headline, overview, tags) is a first draft written when
 * the platforms were introduced (Sept 2026) — review before launch. The
 * product entries are unchanged from the old product-category pages.
 * ========================================================================= */

// Shared labels used on all six pages.
export const platformDetail = {
  home: 'Home', platforms: 'Platforms', skipLink: 'Skip to content',
  explore: 'Explore the Products', talk: 'Discuss Your Requirements',
  overview: 'Overview', products: 'Products', integration: 'Integration',
  overviewEyebrow: 'Purpose-built platform',
  productsEyebrow: 'On this platform', productsTitle: 'Find your starting point.',
  productFocus: 'Product focus', discuss: 'Discuss this product', productLink: 'Explore product',
  integrationEyebrow: 'Part of the ITG ecosystem',
  integrationTitle: 'Start with one platform. Build a connected enterprise.',
  integrationBody: 'ITG products can be adopted independently or as part of a broader enterprise architecture. Define how the platform will connect to your systems, teams and data before expanding to the next business need.',
  integrationPoints: [
    { icon: 'hub', title: 'Connect your systems', body: 'Plan the data flows and integration points across your existing business applications.' },
    { icon: 'verified_user', title: 'Establish governance', body: 'Align access, data ownership and reporting with your operational requirements.' },
    { icon: 'trending_up', title: 'Expand progressively', body: 'Start with a defined business priority and extend the platform as your needs evolve.' },
  ],
  relatedEyebrow: 'Explore more', relatedTitle: 'Discover connected platforms.',
  relatedLink: 'Explore platform', allPlatforms: 'View All Platforms',
  contactEyebrow: 'Let’s find the right fit',
  contactTitle: 'Bring your requirements. Explore the possibilities.',
  contactBody: 'Tell us about your operations, existing systems and priorities so we can help identify the right platform and the next steps.',
  // Configure an email to enable platform enquiries. The fallback is a live page.
  contactEmail: '', contactLabel: 'Request a Platform Demo',
  contactFallback: { label: 'Request a Platform Demo', href: '/contact?topic=product' },
};

// Per-platform page content, keyed by the platform id in tier1/platforms.js.
const platformDetails = {
  'sourcing': {
    icon: 'shopping_cart', shortName: 'Sourcing',
    headline: 'Source with confidence.', accent: 'Spend with control.',
    overviewTitle: 'A connected foundation for how you buy.',
    overviewBody: 'Requisitions, supplier choices, purchasing and the relationships behind them each need a clear process. Explore the products on this platform to find a starting point that fits the way your organization buys.',
    tags: ['Purchasing & spend', 'Supplier relationships', 'Business operations'],
    products: [
      { id: 'integra-erp', name: 'Integra ERP', icon: 'domain', description: 'Unified enterprise resource planning', body: 'Bring core business functions into a shared operational framework. Start a conversation about how enterprise resource planning can support your finance and operations teams.', focus: ['Enterprise resource planning', 'Finance and operations', 'Business process coordination'] },
      { id: 'integra-crm', name: 'Integra CRM', icon: 'groups', description: 'Customer engagement & relationship management', body: 'Give customer relationships a structured home within your enterprise. Explore how CRM can connect customer information with the teams responsible for engagement.', focus: ['Customer relationships', 'Customer engagement', 'Team coordination'] },
    ],
  },
  'supply-chain': {
    icon: 'local_shipping', shortName: 'Supply Chain',
    headline: 'Connect the chain.', accent: 'Keep operations moving.',
    overviewTitle: 'Bring visibility to goods, assets and production.',
    overviewBody: 'Logistics, assets and production each hold information teams rely on every day. Explore products for logistics intelligence, asset tracking and manufacturing planning across your supply chain.',
    tags: ['Logistics intelligence', 'Asset tracking', 'Manufacturing operations'],
    products: [
      { id: 'aullect', name: 'Aullect', icon: 'local_shipping', description: 'AI-powered logistics & operations intelligence', body: 'Explore intelligence in the context of logistics and operational decisions. Start with the processes, data and information gaps that matter most to your teams.', focus: ['Logistics intelligence', 'Operational insights', 'Decision support'] },
      { id: 'astaric', name: 'Astaric', icon: 'deployed_code', description: 'Asset lifecycle & RFID management', body: 'Explore a structured approach to managing assets across their lifecycle. Discuss your asset environment, identification needs and the role of RFID in your operations.', focus: ['Asset lifecycle management', 'RFID-based identification', 'Asset operations'] },
      { id: 'cyclo-erp', name: 'Cyclo ERP', icon: 'factory', description: 'Manufacturing & spinning mills ERP', body: 'Approach enterprise planning around the needs of manufacturing and spinning mills. Discuss the production context, operational processes and information your teams need to manage.', focus: ['Manufacturing operations', 'Spinning mill processes', 'Industry-specific resource planning'] },
    ],
  },
  'contract-lifecycle': {
    icon: 'contract', shortName: 'Contract Lifecycle',
    headline: 'Govern every agreement.', accent: 'From draft to renewal.',
    overviewTitle: 'Keep contracts, approvals and obligations in one place.',
    overviewBody: 'Contracts carry commitments that outlast the conversations that created them. Explore products for managing contract documents and records, and for capturing the meetings and decisions around them.',
    tags: ['Document management', 'Approvals & obligations', 'Meeting intelligence'],
    products: [
      { id: 'documax', name: 'DocuMax', icon: 'menu_book', description: 'Document management & compliance platform', body: 'Make document management part of your operational foundation. Define how records, document workflows and governance should support the teams that use them.', focus: ['Document management', 'Document workflows', 'Records governance'] },
      { id: 'zeito', name: 'Zeito', icon: 'auto_awesome', description: 'AI meeting & engagement intelligence', body: 'Explore how meeting and engagement intelligence can support your teams. Discuss the conversations, information and working practices that shape your needs.', focus: ['Meeting intelligence', 'Engagement insights', 'Team information needs'] },
    ],
  },
  'supplier-info-risk-management': {
    icon: 'handshake', shortName: 'Supplier Risk',
    headline: 'Know your suppliers.', accent: 'Manage the risk they carry.',
    overviewTitle: 'Keep supplier information current and risk in view.',
    overviewBody: 'Supplier data, sustainability information and risk indicators are only useful when they are up to date and easy to review. Explore products that bring supplier and ESG information into a structured, reportable environment.',
    tags: ['Supplier information', 'ESG & sustainability data', 'Risk readiness'],
    products: [
      { id: 'ecomagnet', name: 'EcoMagnet', icon: 'eco', description: 'Sustainability, ESG & CSRD intelligence', body: 'Create a starting point for discussions about sustainability information and reporting readiness. Align the platform scope with the data, reporting processes and governance your organization needs.', focus: ['Sustainability information', 'ESG intelligence', 'CSRD reporting readiness'] },
    ],
  },
  'product-lifecycle-management': {
    icon: 'deployed_code', shortName: 'Product Lifecycle',
    headline: 'Follow every product.', accent: 'From design to end of life.',
    overviewTitle: 'Connect product records across the lifecycle.',
    overviewBody: 'Product data, catalogs and traceability records need to stay connected as products move from design to market and beyond. Explore products for digital product passports and structured catalog presentation.',
    tags: ['Product records', 'Traceability', 'Digital catalogs'],
    products: [
      { id: 'dpp-platform', name: 'Digital Product Passport Platform', icon: 'account_tree', description: 'EU DPP & traceability infrastructure', body: 'Connect product information with a structured approach to traceability. Explore how digital product passports can fit your product data, supply chain relationships and transparency requirements.', focus: ['Digital product records', 'Product traceability', 'Value chain transparency'] },
      { id: 'style-lab', name: 'StyleLab', icon: 'palette', description: 'Catalog & digital branding system', body: 'Bring catalog presentation and digital branding into a shared framework. Discuss how your product content, visual identity and digital channels should work together.', focus: ['Digital catalog presentation', 'Digital branding', 'Experience consistency'] },
    ],
  },
  'data-privacy': {
    icon: 'privacy_tip', shortName: 'Data Privacy',
    headline: 'Know your personal data.', accent: 'Protect it by design.',
    overviewTitle: 'A platform foundation for privacy.',
    overviewBody: 'Personal data spreads across applications, documents and suppliers. This platform brings the discovery, protection and governance of personal data together. Products for this platform are on the way — talk to us about your requirements in the meantime.',
    tags: ['Data discovery', 'Consent & rights', 'Protection by design'],
    products: [],
  },
};

export const platformPages = platforms.map(platform => ({
  ...platform,
  ...platformDetails[platform.id],
  href: `/${platform.id}`,
}));
