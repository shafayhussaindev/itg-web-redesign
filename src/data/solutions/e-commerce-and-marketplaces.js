// Page copy supplied by the owner, Sept 2026.
// Shown at /custom-solutions/e-commerce-and-marketplaces.
// The hero heading and buttons come from this item's entry in
// custom-solutions.js; the line under the heading (`tagline`) and everything
// below the hero are here.
export const eCommerceAndMarketplaces = {
  tagline: 'Architecting high-throughput commerce engines and multi-sided digital marketplaces engineered to scale.',

  challenge: {
    eyebrow: 'The core challenge',
    title: 'Move Beyond the Limits of Monolithic Commerce Platforms',
    body: 'Standard off-the-shelf commerce templates collapse under complex enterprise operations—such as multi-vendor splits, dynamic B2B pricing tiers, cross-border settlements, and sudden high-concurrency order surges. Outgrowing standard software should not force you to compromise your operational model. ITG designs and builds composable, headless commerce backbones and multi-vendor ecosystems that integrate natively with your ERP, CRM, and supply chain systems, securing complete control over customer touchpoints and transactional data.',
    driversTitle: 'When custom commerce is required',
    drivers: [
      { title: 'Complex Monetization', body: 'Requirement for custom commission schedules, escrow mechanisms, and automated multi-seller payouts.' },
      { title: 'B2B Buying Realities', body: 'Workflows demanding custom negotiated pricing, credit terms, multi-tier purchase authorizations, and quote-to-order logic.' },
      { title: 'Scale & Concurrency Bottlenecks', body: 'Flash sales or seasonal volume driving database locks, checkout latency, and abandoned transactions.' },
      { title: 'System Fragmentation', body: 'Disconnected inventory, logistics, and billing systems creating inventory drift and continuous manual intervention.' },
    ],
  },

  // `icon:` is a Material Symbols name (see src/data/README.md).
  capabilities: {
    eyebrow: 'Core platform capabilities',
    title: 'Engineered for High-Transaction Digital Ecosystems',
    items: [
      { icon: 'storefront', title: 'Multi-Vendor Marketplace Platforms', body: 'Build scalable two-sided and multi-sided networks featuring dedicated vendor portals, automated catalog onboarding, algorithmic search matching, and single-cart multi-seller checkouts.' },
      { icon: 'handshake', title: 'Enterprise B2B Portals', body: 'Transform wholesale transactions with negotiated price sheets, bulk ordering matrices, dynamic RFQ (Request for Quote) pipelines, and organizational role-based buying hierarchies.' },
      { icon: 'hub', title: 'Headless & Composable Architectures', body: 'Decouple customer-facing frontends from backend commerce engines via resilient GraphQL and REST APIs, powering omnichannel web, mobile, and kiosk experiences without risking core payment pipelines.' },
      { icon: 'account_balance', title: 'Automated Payment & Split Settlement Engines', body: 'Native multi-currency processing, dynamic regional tax calculation (VAT/GST/Sales Tax), automated seller KYC verification, and escrow-backed multi-party payout automation.' },
      { icon: 'inventory_2', title: 'Distributed Inventory & Smart Routing', body: 'Real-time multi-location inventory synchronization across warehouses, stores, and 3PL partners with rule-driven order distribution to minimize shipping times and transit costs.' },
    ],
  },

  comparison: {
    eyebrow: 'Architecture comparison',
    title: 'Architectural Superiority: SaaS Monolith vs. ITG Custom Engine',
    columns: ['SaaS Monolith', 'ITG Custom Engine'],
    rows: [
      ['Architecture', 'Monolithic, plugin-dependent core', 'Modular, API-first event-driven microservices'],
      ['Business Logic', 'Constrained by third-party marketplace templates', '100% custom-tailored logic and proprietary workflow ownership'],
      ['Concurrency & Throughput', 'Throttled shared-cloud bandwidth', 'Elastic auto-scaling cloud clusters engineered for zero throttling'],
      ['Data Sovereignty', 'Trapped in proprietary vendor silos', 'Direct bidirectional streaming to your internal data lake and BI tools'],
      ['System Integration', 'Fragile webhooks and manual uploads', 'Direct, low-latency sync with enterprise ERPs (SAP, Oracle, NetSuite) and WMS'],
    ],
  },

  delivery: {
    eyebrow: 'Delivery framework',
    title: 'From Blueprint to Production',
    steps: [
      { title: 'Flow & Ecosystem Architecture', body: 'Map merchant verification, buyer journeys, commission pipelines, and system data flows.' },
      { title: 'Core Engine Engineering', body: 'Build transaction ledgers, cart state systems, pricing calculators, and tenant management portals.' },
      { title: 'Enterprise System Integration', body: 'Implement low-latency connectors linking ERPs, warehouse management (WMS), and payment networks.' },
      { title: 'Concurrency & Security Testing', body: 'Stress-test platform resiliency against 100k+ concurrent transactions and conduct full PCI-DSS security audits.' },
      { title: 'Deployment & Telemetry', body: 'Phased production release, legacy data migration, and live analytics instrumentation tracking GMV, checkout latency, and throughput.' },
    ],
  },

  outcomes: {
    eyebrow: 'Business outcomes',
    title: 'Quantifiable Platform Impact',
    items: [
      { icon: 'bolt', title: 'Sub-Second Processing', body: 'Low-latency API pipelines driving higher checkout completions and customer retention.' },
      { icon: 'lock', title: 'Zero Database Lockouts', body: 'Event-driven transaction pipelines eliminate race conditions and stock inconsistencies during extreme traffic spikes.' },
      { icon: 'public', title: 'Rapid Global Expansion', body: 'Seamlessly introduce new currencies, regional tax regimes, and multi-tenant seller structures in days.' },
      { icon: 'fact_check', title: 'Automated Operational Overheads', body: 'Reduce dispute handling and reconciliation workloads by up to 90% via automated audit trails.' },
    ],
  },

  cases: {
    eyebrow: 'Proof of capability',
    title: 'Featured Marketplace Transformation',
    items: [
      {
        title: 'Modernizing Industrial Equipment Distribution',
        challenge: 'An industrial supplier faced operational bottlenecks and lost revenue due to manual distributor quoting, phone-based orders, and printed catalogs.',
        solution: 'ITG built a dedicated B2B trading marketplace with real-time stock availability, automated credit verification, and automated freight calculations.',
        impact: 'Drove a 240% increase in digital GMV within the first 6 months and decreased quote-to-fulfillment turnaround by 65%.',
      },
    ],
  },

  // The closing band. Its button opens the Contact page with this solution
  // already filled in as the subject; "Back to Custom Solutions" sits beside it.
  contact: {
    title: 'Build an Uncompromised Commerce Architecture',
    body: 'Consult with ITG engineers to architect an enterprise platform designed for your exact transactional scale.',
    cta: 'Schedule an Architecture Review',
  },
};
