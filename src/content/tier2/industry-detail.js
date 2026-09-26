/* ============================================================================
 * INDUSTRY PAGES  (tier 2)
 * =======================
 * Five pages, one per Industries menu entry (Sept 2026, was eleven). The segments inside each
 * sector are sections on these pages, the same way services are sections on
 * the tier-2 service pages and products on the tier-2 product pages.
 *
 * Everything you might want to reword or re-image is in this file. Change the
 * text between the quote marks and save — the site picks it up on its own.
 *
 * TWO RULES WORTH KEEPING
 *   1. Keep the slugs in `industryPaths` stable. The navigation menu and any
 *      link you have shared point at them.
 *   2. Keep each segment `id` in step with the menu in `site.js`. The menu
 *      links to `/<slug>#<id>`, and the page scrolls to that section.
 *
 * The six sectors removed in Sept 2026 (Enterprise & Corporate, Healthcare,
 * Government, Energy & ESG, Education, Travel) forward to /industries
 * (src/lib/old-addresses.ts).
 *
 * ICONS are Material Symbols names. A name that is not listed in the
 * `icon_names=` list in `index.html` renders as an empty box — add it there
 * first if you introduce a new one.
 * ========================================================================= */

export const industryPaths = {
  'consumer-goods': '/consumer-goods',
  'manufacturing-industries': '/manufacturing-industries',
  'logistics-supply-chain': '/logistics-supply-chain-operations',
  'real-estate-construction': '/real-estate-construction-facilities',
  'professional-services': '/professional-services',
};

/* Wording shared by all five pages. Change it once, it changes everywhere. */
export const industryDetail = {
  home: 'Home',
  industries: 'Industries',
  skipLink: 'Skip to content',
  explore: 'Explore the Sector',
  talk: 'Talk to an Industry Expert',
  overview: 'Overview',
  segmentsNav: 'Who We Serve',
  capabilitiesNav: 'What We Deliver',
  approachNav: 'Approach',
  overviewEyebrow: 'The operating context',
  segmentsEyebrow: 'Inside this sector',
  segmentsTitle: 'Organizations we work with.',
  segmentFocus: 'Where we typically help',
  discuss: 'Discuss this segment',
  segmentLink: 'Explore segment',   // link from each segment to its own page
  capabilitiesEyebrow: 'Applied capability',
  capabilitiesTitle: 'What ITG delivers in this sector.',
  approachEyebrow: 'How we engage',
  approachTitle: 'Sector context first, technology second.',
  approachIntro:
    'Industry work goes wrong when a platform is dropped into an operating model it was never shaped around. Every engagement starts with the constraints your sector actually runs under.',
  steps: [
    { title: 'Understand', body: 'Learn the sector’s operating model, reporting obligations and the constraints your teams work within.' },
    { title: 'Map', body: 'Translate those constraints into platform requirements, integration points and success measures.' },
    { title: 'Deliver', body: 'Build and validate in stages against the standards your industry is held to.' },
    { title: 'Sustain', body: 'Support adoption and keep the platform aligned as regulation and operations move.' },
  ],
  relatedEyebrow: 'Explore more',
  relatedTitle: 'Discover the other sectors we serve.',
  relatedLink: 'Explore sector',
  allIndustries: 'View All Industries',
  contactEyebrow: 'Your next step',
  // Configure an email to enable sector enquiries. The fallback is a live page.
  contactEmail: '',
  contactFallback: { label: 'Start a Conversation', href: '/contact?topic=project' },
};

export const industryCategories = [
  {
    id: 'consumer-goods',
    name: 'Consumer Goods',
    shortName: 'Consumer Goods',
    icon: 'shopping_cart',
    image: '/assets/industries/ind-retail.jpg',
    focus: 'center',
    headline: 'One inventory.',
    accent: 'Every channel.',
    description:
      'Commerce, inventory and customer platforms for retail and consumer businesses selling across stores, marketplaces and direct channels.',
    overviewTitle: 'The channel count went up. The stock did not.',
    lead: 'Most retail problems are inventory accuracy problems.',
    overviewBody:
      'Selling across stores, a website and two marketplaces only works if every channel reads the same stock position. We connect commerce, inventory and fulfilment so availability is accurate, oversells stop, and customer information from each channel lands somewhere your teams can actually use.',
    outcomes: [
      { icon: 'shopping_cart', title: 'Accurate availability', body: 'One stock position serving every channel, updated as orders land.' },
      { icon: 'groups', title: 'A usable customer record', body: 'Purchase and service history joined across channels rather than siloed.' },
      { icon: 'bar_chart', title: 'Channel-level performance', body: 'Margin and movement visible by channel, category and location.' },
    ],
    capabilities: [
      { icon: 'shopping_cart', title: 'Retail and omnichannel platforms', body: 'Store, online and marketplace operations on shared inventory and pricing.' },
      { icon: 'language', title: 'E-commerce and marketplace integration', body: 'Listings, orders and fulfilment connected to core systems.' },
      { icon: 'groups', title: 'Customer engagement and CRM', body: 'Customer records and service history joined across every channel.' },
      { icon: 'bar_chart', title: 'Sales and performance analytics', body: 'Movement, margin and category performance in one reporting layer.' },
    ],
    segments: [
      {
        id: 'omnichannel',
        name: 'Retail & Omni-Channel Businesses',
        icon: 'shopping_cart',
        description: 'Unified retail channels',
        body: 'Retailers running stores alongside digital channels, where the operational challenge is a single stock and pricing position that every channel can trust.',
        focus: ['Unified inventory and pricing', 'Click-and-collect and cross-channel fulfilment', 'Store and online performance reporting'],
      },
      {
        id: 'fmcg',
        name: 'Consumer Goods & FMCG',
        icon: 'shopping_bag',
        description: 'FMCG operations',
        body: 'Fast-moving goods businesses where volume, shelf life and trade promotion economics drive the system requirements more than the catalogue does.',
        focus: ['Demand planning and replenishment', 'Batch, expiry and shelf-life control', 'Trade promotion and margin analysis'],
      },
      {
        id: 'ecommerce',
        name: 'E-Commerce & Marketplaces',
        icon: 'language',
        description: 'Marketplace ecosystems',
        body: 'Digital-first sellers operating across their own storefront and third-party marketplaces, each with its own listing rules, fees and fulfilment expectations.',
        focus: ['Multi-marketplace listing and order sync', 'Fulfilment and returns workflows', 'Channel fee and profitability analysis'],
      },
      {
        id: 'brand-distributors',
        name: 'Brand Owners & Distributors',
        icon: 'campaign',
        description: 'Brand and distribution',
        body: 'Brands selling through distribution need visibility past their own invoice — into sell-through, stock held in the channel and territory performance.',
        focus: ['Distributor and territory management', 'Sell-through and channel stock visibility', 'Pricing, rebates and claims'],
      },
      {
        id: 'private-label',
        name: 'Private Label Manufacturers',
        icon: 'layers',
        description: 'Private label operations',
        body: 'Producing under someone else’s brand means many specifications, short runs and exacting compliance documentation per customer.',
        focus: ['Customer specification management', 'Short-run planning and costing', 'Compliance and certification records'],
      },
    ],
    feature: {
      eyebrow: 'The unglamorous fix',
      title: 'Fix stock accuracy before adding channels.',
      body: 'Adding a marketplace to an inventory position that is already wrong multiplies the problem rather than growing the business. We check counting discipline, receipt and return handling first. It is a duller conversation than a new channel, and it is what makes the new channel work.',
      points: ['Stock accuracy assessed before expansion', 'Receipt and return handling tightened', 'One position published to every channel'],
      image: '/assets/services/ind-retail.jpg',
      imageAlt: 'Retail operations coordinated across physical and digital channels',
    },
    cta: {
      title: 'Selling across more channels than you can track?',
      body: 'Tell us your channel mix and where availability goes wrong. We will start there.',
      label: 'Discuss a Retail Engagement',
    },
  },

  {
    id: 'manufacturing-industries',
    name: 'Manufacturing & Industries',
    shortName: 'Manufacturing',
    icon: 'factory',
    image: '/assets/industries/ind-manufacturing.jpg',
    focus: 'center',
    headline: 'The floor and the system.',
    accent: 'Telling the same story.',
    description:
      'Digital platforms for production, traceability and smart factory operations, built to reconcile what the plan says with what the shop floor is actually doing.',
    overviewTitle: 'Close the gap between the plan and the floor.',
    lead: 'Planning systems and production reality drift apart daily.',
    overviewBody:
      'In most plants the schedule lives in one system, actual output in another, and quality in a third — reconciled by someone at the end of a shift. We connect production equipment, material movements and operational reporting so the picture is current rather than retrospective, and so traceability holds when a customer or auditor asks.',
    outcomes: [
      { icon: 'factory', title: 'Current production visibility', body: 'Output, downtime and material consumption visible as they happen.' },
      { icon: 'account_tree', title: 'Traceability that holds up', body: 'Lot and batch history reconstructable from raw material to dispatch.' },
      { icon: 'trending_up', title: 'Planning that reflects capacity', body: 'Schedules built on real throughput rather than nominal rates.' },
    ],
    capabilities: [
      { icon: 'factory', title: 'Manufacturing operations platforms', body: 'Production planning, execution and reporting on one connected system.' },
      { icon: 'neurology', title: 'Industry 4.0 and smart factory systems', body: 'Equipment and sensor data integrated into operational decisions.' },
      { icon: 'local_shipping', title: 'Supply chain visibility and planning', body: 'Material requirements aligned with production commitments.' },
      { icon: 'bolt', title: 'Industrial automation and analytics', body: 'Process automation and performance analysis across the plant.' },
    ],
    segments: [
      {
        id: 'manufacturing-ops',
        name: 'Manufacturing Operations',
        icon: 'factory',
        description: 'End-to-end operations',
        body: 'General manufacturing environments where planning, materials, production and quality need to sit on one operational picture rather than four disconnected ones.',
        focus: ['Production planning and scheduling', 'Material requirements and inventory', 'Quality recording and non-conformance'],
      },
      {
        id: 'textile-apparel',
        name: 'Textile & Apparel Manufacturing',
        icon: 'shopping_bag',
        description: 'Textile and apparel operations',
        body: 'Textile and apparel production carries style, size and colour dimensions that generic manufacturing systems handle badly. Costing and material planning have to work at that granularity.',
        focus: ['Style, colour and size matrix handling', 'Material planning and fabric utilization', 'Order-level costing and margin visibility'],
      },
      {
        id: 'spinning-mills',
        name: 'Spinning Mills & Processing Units',
        icon: 'settings',
        description: 'Spinning and processing units',
        body: 'Continuous processing has its own economics — count changes, blend ratios and machine-level efficiency drive cost more than headcount does. Systems have to record at that level to be useful.',
        focus: ['Count, blend and process parameter tracking', 'Machine-level efficiency and downtime', 'Process costing and yield analysis'],
      },
      {
        id: 'industry-4-0-factories',
        name: 'Industry 4.0 & Smart Factories',
        icon: 'neurology',
        description: 'Connected factory systems',
        body: 'Connecting equipment is the straightforward part. The value comes from deciding which signals matter, what they trigger, and who acts — which is where we start.',
        focus: ['Equipment and sensor data integration', 'Condition monitoring and alerting', 'Predictive and preventive maintenance'],
      },
      {
        id: 'heavy-light',
        name: 'Heavy & Light Industrial Enterprises',
        icon: 'build',
        description: 'Industrial enterprises',
        body: 'Industrial businesses running mixed make-to-order and make-to-stock work, where the same platform has to serve engineering, production and after-sales service.',
        focus: ['Make-to-order and project manufacturing', 'Asset and maintenance management', 'After-sales service and spares'],
      },
    ],
    feature: {
      eyebrow: 'A practical constraint',
      title: 'Shop-floor data has to be easy to enter.',
      body: 'Systems fail on the floor when recording is slower than the work. Operators route around anything that costs them time, and the data goes stale within weeks. We design capture around the actual working conditions — gloves, noise, movement — before worrying about the reports it feeds.',
      points: ['Capture designed for floor conditions', 'Minimal keystrokes per transaction', 'Validation at entry, not in reporting'],
      image: '/assets/services/ind-manufacturing.jpg',
      imageAlt: 'Industrial production line with connected monitoring systems',
    },
    cta: {
      title: 'Planning and production out of step?',
      body: 'Describe your production environment and where the reporting gaps sit. We will look at what it takes to close them.',
      label: 'Discuss a Manufacturing Engagement',
    },
  },

  {
    id: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain Operations',
    shortName: 'Logistics & Supply Chain',
    icon: 'local_shipping',
    image: '/assets/industries/ind-logistics.jpg',
    focus: 'center',
    headline: 'Know where it is.',
    accent: 'And what it costs.',
    description:
      'Platforms for warehousing, transport and distribution operations, where visibility and cost per movement decide whether the network works.',
    overviewTitle: 'Visibility is only useful if it is current.',
    lead: 'A location updated once a day is a location you cannot act on.',
    overviewBody:
      'Logistics operations are judged on exceptions — the late load, the missing pallet, the delivery that failed twice. We build the tracking, scanning and alerting that surfaces those while they can still be fixed, and connect them to the cost data that shows which lanes and customers actually pay.',
    outcomes: [
      { icon: 'route', title: 'Exceptions surfaced early', body: 'Delays and failures flagged while there is still time to intervene.' },
      { icon: 'deployed_code', title: 'Accurate stock positions', body: 'Scanned movements keeping warehouse records current by location.' },
      { icon: 'bar_chart', title: 'Cost that can be attributed', body: 'Movement cost traceable to lane, customer and service level.' },
    ],
    capabilities: [
      { icon: 'deployed_code', title: 'Warehouse management and control', body: 'Receipt, putaway, picking and dispatch under scanned control.' },
      { icon: 'local_shipping', title: 'Transport and fleet operations', body: 'Planning, execution and tracking across owned and contracted fleet.' },
      { icon: 'hub', title: 'Network and distribution visibility', body: 'Movement status across sites, carriers and partners in one view.' },
      { icon: 'bar_chart', title: 'Operational cost analytics', body: 'Cost per movement analysed by lane, customer and service level.' },
    ],
    segments: [
      {
        id: 'warehousing',
        name: 'Logistics & Warehousing',
        icon: 'deployed_code',
        description: 'Warehouse operations',
        body: 'Warehouse operations where accuracy comes from scanned, enforced processes rather than from counting more often.',
        focus: ['Receipt, putaway and location control', 'Directed picking and dispatch', 'Cycle counting and stock accuracy'],
      },
      {
        id: 'transportation-fleet',
        name: 'Transportation & Fleet Operations',
        icon: 'local_shipping',
        description: 'Fleet operations',
        body: 'Fleet operators balancing utilization against service commitments, where vehicle cost and driver hours are the constraints that matter.',
        focus: ['Route and load planning', 'Vehicle utilization and maintenance', 'Driver scheduling and compliance'],
      },
      {
        id: 'distribution-fulfillment',
        name: 'Distribution & Fulfillment Centers',
        icon: 'hub',
        description: 'Distribution networks',
        body: 'Multi-site distribution where the question is which site serves which order, and how stock is balanced across the network.',
        focus: ['Network stock balancing', 'Order allocation and sourcing rules', 'Site-level throughput reporting'],
      },
      {
        id: 'last-mile',
        name: 'Last-Mile Delivery',
        icon: 'route',
        description: 'Last-mile logistics',
        body: 'Final delivery is where most cost and nearly all customer experience sit. Proof, failure handling and re-attempt logic matter more than the route optimizer.',
        focus: ['Delivery sequencing and tracking', 'Proof of delivery and exceptions', 'Failed delivery and re-attempt handling'],
      },
      {
        id: 'supply-chain-ops',
        name: 'Supply Chain Operations',
        icon: 'account_tree',
        description: 'Supply chain execution',
        body: 'End-to-end supply chain teams needing one view across suppliers, inbound movement, stock and outbound commitments.',
        focus: ['Supplier and inbound visibility', 'Demand and replenishment planning', 'End-to-end performance measurement'],
      },
    ],
    feature: {
      eyebrow: 'What makes it work',
      title: 'Scanning discipline beats better software.',
      body: 'Warehouse accuracy is a process outcome, not a licensing one. If movements can be completed without a scan, the record will drift no matter what system sits behind it. We design the process so the scan is the fastest way to do the job.',
      points: ['Movements enforced through scanning', 'Exceptions routed, not silently allowed', 'Accuracy measured continuously'],
      image: '/assets/services/ind-logistics.jpg',
      imageAlt: 'Distribution centre operations with scanned movement control',
    },
    cta: {
      title: 'Losing visibility across the network?',
      body: 'Tell us where shipments go dark and what it costs you. That is the practical place to begin.',
      label: 'Discuss a Logistics Engagement',
    },
  },

  {
    id: 'real-estate-construction',
    name: 'Real Estate, Construction & Facilities',
    shortName: 'Real Estate & Construction',
    icon: 'construction',
    image: '/assets/industries/ind-realestate.jpg',
    focus: 'center',
    headline: 'Assets, projects, and',
    accent: 'the cost of both.',
    description:
      'Integrated platforms for developers, contractors and facilities operators, connecting project delivery with the assets those projects become.',
    overviewTitle: 'The project ends. The asset does not.',
    lead: 'Handover is where most information is lost.',
    overviewBody:
      'Construction and property organizations run two different businesses: delivering projects and operating what they produce. The information gathered during delivery is exactly what facilities teams need afterwards, and it is usually discarded at handover. We connect the two so commissioning data becomes operating data.',
    outcomes: [
      { icon: 'bar_chart', title: 'Cost visible during delivery', body: 'Commitment and spend tracked against budget while decisions can still change it.' },
      { icon: 'deployed_code', title: 'Assets with a history', body: 'Commissioning information carried through into operations and maintenance.' },
      { icon: 'construction', title: 'Controlled project delivery', body: 'Variations, approvals and progress recorded against a single plan.' },
    ],
    capabilities: [
      { icon: 'construction', title: 'Project controls and delivery', body: 'Programme, cost and variation management across the project lifecycle.' },
      { icon: 'deployed_code', title: 'Asset and facilities management', body: 'Asset registers, maintenance planning and lifecycle records.' },
      { icon: 'account_balance', title: 'Property and portfolio operations', body: 'Tenancy, leasing and portfolio performance management.' },
      { icon: 'bar_chart', title: 'Cost and commitment reporting', body: 'Budget, commitment and actual cost visible in one place.' },
    ],
    segments: [
      {
        id: 'real-estate-dev',
        name: 'Real Estate Developers',
        icon: 'apartment',
        description: 'Development operations',
        body: 'Developers managing capital commitment across a pipeline of schemes, where cash flow and sales progress drive every decision.',
        focus: ['Development appraisal and cost planning', 'Sales and reservation pipelines', 'Cash flow and funding reporting'],
      },
      {
        id: 'facilities',
        name: 'Property & Facilities Management',
        icon: 'settings',
        description: 'Facilities operations',
        body: 'Operators responsible for buildings in use, where planned maintenance, reactive work and tenant obligations compete for the same resources.',
        focus: ['Planned and reactive maintenance', 'Tenant requests and service levels', 'Contractor and compliance management'],
      },
      {
        id: 'construction-controls',
        name: 'Construction & Project Controls',
        icon: 'construction',
        description: 'Project delivery',
        body: 'Contractors and project teams needing programme, cost and variation control tight enough to defend a final account.',
        focus: ['Programme and progress tracking', 'Variation and change control', 'Subcontractor and valuation management'],
      },
      {
        id: 'infrastructure',
        name: 'Infrastructure & Utilities',
        icon: 'power',
        description: 'Infrastructure operations',
        body: 'Long-lived infrastructure where maintenance planning, regulatory obligations and asset condition determine investment priorities.',
        focus: ['Asset condition and criticality', 'Regulatory and safety compliance', 'Long-range investment planning'],
      },
      {
        id: 'asset-intensive',
        name: 'Asset-Intensive Organizations',
        icon: 'deployed_code',
        description: 'Asset-heavy enterprises',
        body: 'Organizations whose balance sheet is mostly physical assets, where lifecycle cost and availability matter more than acquisition price.',
        focus: ['Asset register and lifecycle costing', 'Maintenance strategy and availability', 'Replacement and disposal planning'],
      },
    ],
    feature: {
      eyebrow: 'The handover problem',
      title: 'Commissioning data is operating data.',
      body: 'Asset registers, warranties, maintenance schedules and drawings all exist at practical completion. Capturing them in a structured form at that moment costs a fraction of reconstructing them two years later, which is what facilities teams usually end up doing.',
      points: ['Asset data captured at commissioning', 'Warranties and documents linked to assets', 'Maintenance schedules live from day one'],
      image: '/assets/industries/cta-industries.jpg',
      imageAlt: 'Construction and property development under way',
    },
    cta: {
      title: 'Projects and operations on separate systems?',
      body: 'Tell us what gets lost at handover. That gap is usually worth closing first.',
      label: 'Discuss a Property Engagement',
    },
  },

  {
    id: 'professional-services',
    name: 'Professional Services',
    shortName: 'Professional Services',
    icon: 'work',
    image: '/assets/industries/ind-professional.jpg',
    focus: 'center',
    headline: 'Time is the product.',
    accent: 'Track it properly.',
    description:
      'Structured systems for consulting, legal, financial and managed service firms, where utilization and recoverability decide the result.',
    overviewTitle: 'You cannot manage a margin you cannot see until month end.',
    lead: 'Recoverability is decided during the engagement, not after it.',
    overviewBody:
      'Professional firms lose margin quietly: unbilled time, scope that expanded without a variation, engagements that were never profitable from the second week. We build the time capture, engagement structure and reporting that make those visible early enough to act on, with the confidentiality controls the work requires.',
    outcomes: [
      { icon: 'bar_chart', title: 'Margin visible early', body: 'Engagement profitability tracked during delivery rather than after invoicing.' },
      { icon: 'groups', title: 'Utilization you can act on', body: 'Chargeable time and capacity visible by person, team and practice.' },
      { icon: 'lock', title: 'Confidentiality maintained', body: 'Client separation and access control enforced by the platform.' },
    ],
    capabilities: [
      { icon: 'route', title: 'Engagement and project management', body: 'Scope, resourcing and delivery tracked from proposal to close.' },
      { icon: 'bar_chart', title: 'Time, billing and recoverability', body: 'Time capture through to invoice, with write-off visibility.' },
      { icon: 'groups', title: 'Client and relationship management', body: 'Client records, pipeline and engagement history in one place.' },
      { icon: 'lock', title: 'Confidentiality and access control', body: 'Matter-level separation, conflict checks and audit trails.' },
    ],
    segments: [
      {
        id: 'consulting',
        name: 'Consulting Firms',
        icon: 'groups',
        description: 'Advisory operations',
        body: 'Advisory businesses where resourcing decisions and scope discipline determine whether an engagement makes money.',
        focus: ['Resource planning and utilization', 'Engagement scope and change control', 'Project profitability reporting'],
      },
      {
        id: 'financial-advisory',
        name: 'Financial Advisory',
        icon: 'account_balance',
        description: 'Financial advisory firms',
        body: 'Advisory firms operating under regulatory obligation, where client suitability records and reporting have to be complete and retrievable.',
        focus: ['Client onboarding and suitability records', 'Regulatory reporting and retention', 'Portfolio and performance reporting'],
      },
      {
        id: 'legal-compliance',
        name: 'Legal & Compliance Firms',
        icon: 'balance',
        description: 'Legal operations',
        body: 'Legal practices where matter management, conflict checking and privileged document handling are foundational requirements.',
        focus: ['Matter and document management', 'Conflict checking and confidentiality', 'Time recording and billing'],
      },
      {
        id: 'accounting-audit',
        name: 'Accounting & Audit Firms',
        icon: 'bar_chart',
        description: 'Accounting and audit',
        body: 'Firms managing cyclical workload peaks and strict working paper standards, where evidence and review trails must be complete.',
        focus: ['Engagement and working paper management', 'Review, approval and sign-off trails', 'Deadline and workload planning'],
      },
      {
        id: 'managed-services',
        name: 'IT & Managed Services Providers',
        icon: 'cloud',
        description: 'Managed services',
        body: 'Service providers delivering against contracted service levels, where ticket economics and contract profitability need to be visible per client.',
        focus: ['Service desk and ticket workflows', 'Service level measurement and reporting', 'Contract and per-client profitability'],
      },
    ],
    feature: {
      eyebrow: 'The habit that decides it',
      title: 'Time recorded weekly is time already lost.',
      body: 'Recoverability tracks almost exactly with how promptly time is recorded. Entries made days later are estimates, and estimates are written off. Making capture take seconds, on whatever device is to hand, does more for margin than any pricing exercise.',
      points: ['Capture in seconds, on any device', 'Unbilled time visible weekly', 'Write-offs attributed to a cause'],
      image: '/assets/company/meeting.jpg',
      imageAlt: 'Professional services team reviewing an engagement',
    },
    cta: {
      title: 'Margin leaking between engagements?',
      body: 'Tell us how time is captured today and where recoverability drops. That is usually where the answer is.',
      label: 'Discuss a Professional Services Engagement',
    },
  },
];

export const industryPages = industryCategories.map(category => ({
  ...category,
  href: industryPaths[category.id],
}));
