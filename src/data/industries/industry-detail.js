import { homeTextile } from '@/data/industries/home-textile';
import { lastMileDelivery } from '@/data/industries/last-mile-delivery';
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
 *   2. Keep each segment `id` in step with the menu in `data/navigation/tier3.js`. The menu
 *      links to `/<slug>#<id>`, and the page scrolls to that section.
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
    image: '/images/industries/ind-retail.jpg',
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
        id: 'electronics',
        name: "Electronics",
        icon: 'shopping_cart',
        description: 'Connected electronics retail and distribution.',
        body: 'Unify model, serial number, warranty and channel information across electronics sales and service so stock and customer promises stay accurate.',
        focus: ['Serial-number and warranty records', 'Stock visibility across stores and channels', 'Returns and after-sales workflows'],
      },
      {
        id: 'fashion-and-apparel',
        name: "Fashion & Apparel",
        icon: 'shopping_bag',
        description: 'Fast-moving fashion and apparel operations.',
        body: 'Coordinate styles, sizes, seasons and replenishment across stores, online channels and suppliers with one view of availability and margin.',
        focus: ['Style, size and colour inventory', 'Seasonal planning and replenishment', 'Channel-level sales and margin'],
      },
      {
        id: 'household-and-decor',
        name: "Household & Décor",
        icon: 'language',
        description: 'Product and inventory control for home goods.',
        body: 'Manage household and décor assortments across physical and digital channels, including variants, bulky items, fulfilment and returns.',
        focus: ['Product variants and rich catalog data', 'Inventory by location and channel', 'Delivery and returns coordination'],
      },
      {
        id: 'food-and-beverages',
        name: "Food & Beverages",
        icon: 'campaign',
        description: 'Traceable food and beverage operations.',
        body: 'Connect batch, shelf-life, demand and distribution information so food and beverage teams can respond quickly to quality and availability issues.',
        focus: ['Batch and expiry tracking', 'Demand and replenishment planning', 'Distribution and recall visibility'],
      },
      {
        id: 'footwear',
        name: "Footwear",
        icon: 'layers',
        description: 'Footwear from assortment to fulfilment.',
        body: 'Track footwear sizes, styles and seasonal ranges while keeping inventory, supplier orders and customer channels aligned.',
        focus: ['Size and style matrix management', 'Supplier and production visibility', 'Omnichannel availability and returns'],
      },
    ],
    feature: {
      eyebrow: 'The unglamorous fix',
      title: 'Fix stock accuracy before adding channels.',
      body: 'Adding a marketplace to an inventory position that is already wrong multiplies the problem rather than growing the business. We check counting discipline, receipt and return handling first. It is a duller conversation than a new channel, and it is what makes the new channel work.',
      points: ['Stock accuracy assessed before expansion', 'Receipt and return handling tightened', 'One position published to every channel'],
      image: '/images/services/ind-retail.jpg',
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
    name: "Manufacturing",
    shortName: 'Manufacturing',
    icon: 'factory',
    image: '/images/industries/ind-manufacturing.jpg',
    focus: 'center',
    headline: 'The floor and the system.',
    accent: 'Telling the same story.',
    description:
      'Digital platforms for production, traceability and smart factory operations, built to reconcile what the plan says with what the shop floor is actually doing.',
    overviewTitle: 'Connect production planning with execution.',
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
        id: 'spinning-mills',
        name: "Spinning Mills",
        icon: 'factory',
        description: 'Production planning for spinning mills.',
        body: 'Connect cotton intake, blends, counts, machine capacity and yarn output to keep spinning plans grounded in actual mill performance.',
        focus: ['Blend, count and lot planning', 'Machine utilization and downtime', 'Yarn quality and process costing'],
      },
      {
        id: 'home-textile',
        name: "Home Textile",
        icon: 'shopping_bag',
        description: homeTextile.tagline,
        body: homeTextile.body,
        focus: homeTextile.focus,
      },
      {
        id: 'garments',
        name: "Garments",
        icon: 'settings',
        description: 'Connected garment production workflows.',
        body: 'Track styles, sizes, lines and work in progress from sampling through finishing and dispatch, with clear visibility into output and defects.',
        focus: ['Style and size order management', 'Line planning and work-in-progress tracking', 'Quality and shipment readiness'],
      },
      {
        id: 'fertilizers',
        name: "Fertilizers",
        icon: 'neurology',
        description: 'Controlled fertilizer production and distribution.',
        body: 'Connect plant operations, batch quality, maintenance and dispatch records to support reliable fertilizer supply and compliance.',
        focus: ['Batch and formulation records', 'Plant performance and maintenance', 'Quality, inventory and dispatch traceability'],
      },
      {
        id: 'food-packaging',
        name: "Food Packaging",
        icon: 'build',
        description: 'Traceable food packaging operations.',
        body: 'Manage specifications, materials, production runs and quality evidence for packaging that serves food and beverage supply chains.',
        focus: ['Material and specification control', 'Run-level production and waste', 'Food-contact quality and traceability'],
      },
    ],
    feature: {
      eyebrow: 'A practical constraint',
      title: 'Shop-floor data has to be easy to enter.',
      body: 'Systems fail on the floor when recording is slower than the work. Operators route around anything that costs them time, and the data goes stale within weeks. We design capture around the actual working conditions — gloves, noise, movement — before worrying about the reports it feeds.',
      points: ['Capture designed for floor conditions', 'Minimal keystrokes per transaction', 'Validation at entry, not in reporting'],
      image: '/images/services/ind-manufacturing.jpg',
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
    name: "Logistics & Supply Chain",
    shortName: 'Logistics & Supply Chain',
    icon: 'local_shipping',
    image: '/images/industries/ind-logistics.jpg',
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
        id: 'warehouse-automation',
        name: "Warehouse Automation",
        icon: 'deployed_code',
        description: 'Automate accurate warehouse movement.',
        body: 'Use scanning, directed tasks and real-time stock updates across receiving, putaway, picking and dispatch.',
        focus: ['Barcode or RFID capture', 'Directed warehouse workflows', 'Stock accuracy and exception reporting'],
      },
      {
        id: 'last-mile-delivery',
        name: "Last-Mile Delivery",
        icon: 'local_shipping',
        description: lastMileDelivery.tagline,
        body: lastMileDelivery.body,
        focus: lastMileDelivery.focus,
      },
      {
        id: 'shipment-management-automation',
        name: "Shipment Management Automation",
        icon: 'hub',
        description: 'Manage shipments from booking to delivery.',
        body: 'Automate shipment creation, carrier assignment, milestone tracking and exception handling across transport partners.',
        focus: ['Shipment booking and documentation', 'Carrier and milestone integration', 'Delay alerts and delivery confirmation'],
      },
      {
        id: 'ocean-logistics-intelligence',
        name: "Ocean Logistics Intelligence",
        icon: 'route',
        description: 'Visibility into ocean freight movement.',
        body: 'Bring booking, vessel, container and port events into a usable operating view so teams can manage delays and plan downstream work.',
        focus: ['Booking and container visibility', 'Milestone and exception tracking', 'ETA and downstream planning'],
      },
      {
        id: 'courier-integration',
        name: "Courier Integration",
        icon: 'account_tree',
        description: 'Connect courier services to core operations.',
        body: 'Integrate courier rates, label generation, tracking and delivery events with order and service workflows.',
        focus: ['Courier selection and booking', 'Label and tracking integration', 'Status updates, exceptions and returns'],
      },
    ],
    feature: {
      eyebrow: 'What makes it work',
      title: 'Scanning discipline beats better software.',
      body: 'Warehouse accuracy is a process outcome, not a licensing one. If movements can be completed without a scan, the record will drift no matter what system sits behind it. We design the process so the scan is the fastest way to do the job.',
      points: ['Movements enforced through scanning', 'Exceptions routed, not silently allowed', 'Accuracy measured continuously'],
      image: '/images/services/ind-logistics.jpg',
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
    image: '/images/industries/ind-realestate.jpg',
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
        id: 'project-management',
        name: "Project Management",
        icon: 'apartment',
        description: 'Control projects from plan to handover.',
        body: 'Connect schedules, budgets, approvals and progress reporting so property and construction teams can see commitments and issues early.',
        focus: ['Programme and milestone tracking', 'Budget, commitments and variations', 'Document control and handover'],
      },
      {
        id: 'facility-management',
        name: "Facility Management",
        icon: 'settings',
        description: 'Keep buildings and services running.',
        body: 'Bring asset registers, maintenance schedules, service requests and vendor work into one facilities operating view.',
        focus: ['Asset and location registers', 'Preventive and reactive maintenance', 'Service levels and vendor performance'],
      },
      {
        id: 'asset-management',
        name: "Asset Management",
        icon: 'construction',
        description: 'Know what assets you own and maintain.',
        body: 'Create reliable asset records from acquisition through operation, maintenance and retirement, linked to locations and responsibilities.',
        focus: ['Asset identification and hierarchy', 'Lifecycle and maintenance history', 'Condition, cost and replacement planning'],
      },
      {
        id: 'infrastructure-and-utilities',
        name: 'Infrastructure & Utilities',
        icon: 'power',
        description: 'Infrastructure operations',
        body: 'Long-lived infrastructure where maintenance planning, regulatory obligations and asset condition determine investment priorities.',
        focus: ['Asset condition and criticality', 'Regulatory and safety compliance', 'Long-range investment planning'],
      },
      {
        id: 'asset-intensive-organizations',
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
      image: '/images/industries/cta-industries.jpg',
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
    image: '/images/industries/ind-professional.jpg',
    focus: 'center',
    headline: 'Time is the product.',
    accent: 'Track it properly.',
    description:
      'Workflow automation for agencies, audit teams, legal operations and ESG assurance.',
    overviewTitle: 'Turn specialist work into accountable workflows.',
    lead: 'Professional work needs flexibility without losing the record of how decisions were made.',
    overviewBody:
      'ITG helps service teams manage intake, assignments, evidence, reviews and deliverables in connected systems. The result is clearer ownership and a reliable record from request through completion.',
    outcomes: [
        { icon: 'route', title: 'Work with clear ownership', body: 'Requests, tasks and approvals assigned to the right team at the right time.' },
        { icon: 'verified_user', title: 'Evidence ready for review', body: 'Decisions, documents and findings kept with the engagement record.' },
        { icon: 'bar_chart', title: 'Visible service performance', body: 'Progress, turnaround and exceptions available without manual status chasing.' },
      ],
    capabilities: [
      { icon: 'route', title: 'Engagement and project management', body: 'Scope, resourcing and delivery tracked from proposal to close.' },
      { icon: 'bar_chart', title: 'Time, billing and recoverability', body: 'Time capture through to invoice, with write-off visibility.' },
      { icon: 'groups', title: 'Client and relationship management', body: 'Client records, pipeline and engagement history in one place.' },
      { icon: 'lock', title: 'Confidentiality and access control', body: 'Matter-level separation, conflict checks and audit trails.' },
    ],
    segments: [
      {
        id: 'agency-automation',
        name: "Agency Automation",
        icon: 'groups',
        description: 'Coordinate agency work and clients.',
        body: 'Connect briefs, staffing, approvals, deliverables and billing so agency teams can manage client work without losing visibility into scope and margin.',
        focus: ['Client intake and project setup', 'Resource and deliverable workflows', 'Time, cost and margin visibility'],
      },
      {
        id: 'test-and-audit-automation',
        name: "Test & Audit Automation",
        icon: 'account_balance',
        description: 'Automate testing and audit evidence.',
        body: 'Plan tests, collect evidence, record findings and track remediation through a consistent review workflow.',
        focus: ['Audit plans and test procedures', 'Evidence collection and review', 'Findings and remediation tracking'],
      },
      {
        id: 'legal-and-compliance-automation',
        name: "Legal & Compliance Automation",
        icon: 'balance',
        description: 'Organize legal and compliance work.',
        body: 'Route matters, obligations, approvals and supporting records through workflows that preserve ownership and a clear audit trail.',
        focus: ['Matter and obligation registers', 'Review and approval workflows', 'Deadlines, evidence and reporting'],
      },
      {
        id: 'esg-and-audit-automation',
        name: "ESG & Audit Automation",
        icon: 'bar_chart',
        description: 'Connect ESG data with audit review.',
        body: 'Collect sustainability evidence, apply review controls and track audit requests so disclosures can be supported by traceable source information.',
        focus: ['ESG evidence collection', 'Control and approval workflows', 'Audit requests and issue resolution'],
      },
      {
        id: 'it-and-managed-services-providers',
        name: 'IT & Managed Services Providers',
        icon: 'cloud',
        description: 'Managed services',
        body: 'Service providers delivering against contracted service levels, where ticket economics and contract profitability need to be visible per client.',
        focus: ['Service desk and ticket workflows', 'Service level measurement and reporting', 'Contract and per-client profitability'],
      },
    ],
    feature: { eyebrow: 'Built around expert judgment', title: 'Automate the handoffs, preserve the decisions.', body: 'Specialist teams still need to exercise judgment. We make intake, evidence collection and review steps more reliable while leaving professional decisions with the people accountable for them.', points: ['Clear intake and assignment', 'Evidence attached to each decision', 'Escalations and approvals traceable'], image: '/images/company/meeting.jpg', imageAlt: 'Professional services team reviewing an engagement' },
    cta: { title: 'Which service workflow needs better control?', body: 'Tell us where requests, evidence or approvals get lost. We will help define a practical automation scope.', label: 'Discuss Professional Services' },
  },
];

export const industryPages = industryCategories.map(category => ({ ...category, href: industryPaths[category.id] }));
