import { consumerGoodsIntelligence } from '@/data/platforms/consumer-goods-intelligence';
import { lawIntoAction } from '@/data/platforms/law-into-action';
import { platforms } from '@/data/platforms/landing-page.js';
import { svitch } from './svitch';
import { aullect } from './aullect';
import { amaanah } from './amaanah';

/* ============================================================================
 * TIER 2: THE SIX PLATFORM PAGES
 * ==============================
 * One page per platform, at /<platform id> — e.g. /supply-chain. The card
 * fields (title, lead, body, image) come from data/platforms/landing-page.js;
 * everything else on the page is here.
 *
 * TIER 3 = the products on each page (`products` below). Each product is a
 * section of its platform page; add the matching link in navbar-tier3.js:
 *   /supply-chain#aullect
 * Keep product `id`s stable so shared links keep working.
 *
 * A platform with no products yet (`products: []`) still gets its page; the
 * navbar-tier3.js has a single "overview" link for it, and the page hides its empty
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
    overviewTitle: 'Make sourcing decisions with connected information.',
    overviewBody: 'Bring product, supplier and regulatory information into a consistent decision process so teams can compare options and act with greater confidence.',
    products: [
      { id: 'integra-erp', name: 'Consumer Goods Intelligence', icon: 'domain', description: consumerGoodsIntelligence.tagline, body: consumerGoodsIntelligence.body, focus: consumerGoodsIntelligence.sections[0].items.map(item => item.title) },
      { id: 'integra-crm', name: 'Law Into Action', icon: 'groups', description: lawIntoAction.tagline, body: lawIntoAction.body, focus: ['4-step compliance check wizard', 'Product-level regulation and HS code matching', 'Conversational AI legal intelligence', 'Regulatory views and governance mapping', 'CBAM carbon cost estimator', 'Weekly AI Radar and Partner API'] },
    ], body: 'Intelligence and tools that support informed sourcing decisions across products, suppliers and legal requirements.', lead: 'Source with a clearer view of products, obligations and demand.',
  },
  'supply-chain': {
    icon: 'local_shipping', shortName: 'Supply Chain',
    headline: 'Connect the chain.', accent: 'Keep operations moving.',
    overviewTitle: 'Connect planning, movement and industrial assets.',
    overviewBody: 'Supply chain decisions rely on current information from production, logistics and assets. These products create focused operating views for each of those needs.',
    products: [
      { id: 'aullect', name: 'CGI Industrial ERP', icon: 'local_shipping', description: 'ERP for industrial production and planning.', body: 'Connect materials, production orders, costing and operational reporting in an ERP workflow designed for industrial teams.', focus: ['Production and material planning', 'Inventory and cost control', 'Shop-floor and management reporting'] },
      { id: 'astaric', name: 'RILITS', icon: 'deployed_code', description: 'Visibility into logistics and industrial assets.', body: 'Track the identity, location and status of assets and movements across sites and partners so teams can resolve exceptions sooner.', focus: ['Asset and shipment identification', 'Location and event tracking', 'Exception and performance views'] },
      { id: 'cyclo-erp', name: 'Aullect', icon: 'route', description: aullect.tagline, body: aullect.body, focus: aullect.focus },
    ], body: 'Platforms for industrial planning, logistics intelligence and asset visibility across the supply chain.',
  },
  'contract-lifecycle': {
    icon: 'contract', shortName: 'Spend Management',
    headline: 'Govern every agreement.', accent: 'From draft to renewal.',
    overviewTitle: 'Control commitments before they become costs.',
    overviewBody: 'Connect purchasing and people-related spend to approved workflows, current records and useful reporting.',
    products: [
      { id: 'documax', name: 'Enterprise Procurement', icon: 'menu_book', description: 'Enterprise purchasing under control.', body: 'Manage requisitions, supplier decisions, purchase orders and approvals in one procurement process with traceable commitments.', focus: ['Purchase request and approval workflows', 'Supplier and order management', 'Spend visibility and controls'] },
      { id: 'zeito', name: 'Human Resource', icon: 'auto_awesome', description: 'Workforce information and HR processes.', body: 'Organize employee records and recurring HR workflows with appropriate access, approvals and management visibility.', focus: ['Employee records and lifecycle', 'HR requests and approvals', 'Workforce reporting and access control'] },
    ], body: 'Platforms to manage procurement and workforce spending with clearer controls and visibility.', lead: 'Keep purchasing and workforce commitments visible.',
  },
  'supplier-info-risk-management': {
    icon: 'handshake', shortName: 'Supplier Risk',
    headline: 'Know your suppliers.', accent: 'Manage the risk they carry.',
    overviewTitle: 'Keep supplier information current and risk in view.',
    overviewBody: 'Supplier data, sustainability information and risk indicators are only useful when they are up to date and easy to review. Explore products that bring supplier and ESG information into a structured, reportable environment.',
    products: [
      { id: 'ecomagnet', name: 'Svitch', icon: 'eco', description: svitch.tagline, body: svitch.body, focus: svitch.modules.map(module => module.title) },
    ],
  },
  'product-lifecycle-management': {
    icon: 'deployed_code', shortName: 'Product Lifecycle',
    headline: 'Follow every product.', accent: 'From design to end of life.',
    overviewTitle: 'Connect product records across the lifecycle.',
    overviewBody: 'Product data, catalogs and traceability records need to stay connected as products move from design to market and beyond. Explore products for digital product passports and structured catalog presentation.',
    products: [
      { id: 'dpp-platform', name: 'TraceMe -DPP', icon: 'account_tree', description: 'EU DPP & traceability infrastructure', body: 'Connect product information with a structured approach to traceability. Explore how digital product passports can fit your product data, supply chain relationships and transparency requirements.', focus: ['Digital product records', 'Product traceability', 'Value chain transparency'] },
      { id: 'style-lab', name: 'StyleLab', icon: 'palette', description: 'Catalog & digital branding system', body: 'Bring catalog presentation and digital branding into a shared framework. Discuss how your product content, visual identity and digital channels should work together.', focus: ['Digital catalog presentation', 'Digital branding', 'Experience consistency'] },
    ],
  },
  'data-privacy': {
    icon: 'privacy_tip', shortName: 'Data Privacy',
    headline: 'Know your personal data.', accent: 'Protect it by design.',
    overviewTitle: 'A platform foundation for privacy.',
    overviewBody: 'Personal data spreads across applications, documents and suppliers. Explore Amaanah for PDPL compliance across processing activities, vendors and cross-border transfers.',
    products: [
      { id: 'amaanah', name: 'Amaanah', icon: 'privacy_tip', description: amaanah.tagline, body: amaanah.body, focus: amaanah.focus },
    ],
  },
};

export const platformPages = platforms.map(platform => {
  const href = `/${platform.id}`;
  return { ...platform, ...platformDetails[platform.id], href };
});
