/* ============================================================================
 * SITE-WIDE CONTENT
 * =================
 * shown on EVERY page — the top navigation menu and the footer
 *
 * Change the text between the quote marks and save. See content/README.md if
 * anything here is unclear.
 * ========================================================================= */

/* ----------------------------------------------------------------------------
 * TOP NAVIGATION (the menu bar across the top of every page)
 *
 * Each entry is one row of a drop-down menu:
 *     title        the words the visitor reads
 *     description  the small grey line underneath
 *     href         where clicking it goes — "/company" is a page on this site,
 *                  "#anything" is a placeholder that goes nowhere yet
 *     children     an optional second level, shown when the row is hovered
 *
 * To remove a menu row, delete its whole { ... } block including the comma.
 * To add one, copy an existing block and change the words.
 * ------------------------------------------------------------------------- */

const solutionsItems = [
  {
    title: "AI & Intelligence",
    description: "Data-driven insights and intelligent automation at scale.",
    href: "/ai-intelligence",
    children: [
      { title: "AI Strategy & Advisory", description: "Vision, roadmap, and responsible AI adoption", href: "/ai-intelligence#ai-strategy" },
      { title: "Applied AI & Machine Learning", description: "Production-grade ML for real business impact", href: "/ai-intelligence#applied-ai-ml" },
      {
        title: "Enterprise Analytics & Business Intelligence",
        description: "Insight-driven decisions across the enterprise",
        href: "/ai-intelligence#enterprise-analytics",
      },
      { title: "Data Platforms & Insights", description: "Modern data stacks and actionable insights", href: "/ai-intelligence#data-platforms" },
      { title: "AI Document Intelligence", description: "Automated extraction and document workflows", href: "/ai-intelligence#ai-document-intel" },
      {
        title: "Industry 4.0 & Smart Systems",
        description: "Connected operations and intelligent automation",
        href: "/ai-intelligence#industry-4-0",
      },
      {
        title: "Digital Product Passport (AI-enabled)",
        description: "AI-accelerated compliance and traceability",
        href: "/ai-intelligence#dpp-ai",
      },
    ],
  },
  {
    title: "Enterprise Business Systems",
    description: "Unified platforms for finance, operations, and core processes.",
    href: "#enterprise-systems",
    children: [
      { title: "Enterprise ERP Solutions", description: "End-to-end ERP modernization", href: "#erp-solutions" },
      { title: "Financial & Operational Systems", description: "Scalable finance and ops platforms", href: "#financial-ops" },
      { title: "CRM & Customer Engagement", description: "Unified customer lifecycle systems", href: "#crm-engagement" },
      {
        title: "Procurement & Vendor Management",
        description: "Strategic sourcing and supplier ecosystems",
        href: "#procurement-vendor",
      },
      {
        title: "Manufacturing & Industry-Specific ERP",
        description: "Industry-tailored ERP for production",
        href: "#manufacturing-erp",
      },
      {
        title: "Corporate & Multi-Entity Systems",
        description: "Group-level governance and consolidation",
        href: "#multi-entity-systems",
      },
    ],
  },
  {
    title: "Automation & Cloud",
    description: "Automated workflows and modern, cloud-ready infrastructure.",
    href: "#automation-cloud",
    children: [
      { title: "Workflow Automation", description: "Streamlined operations and approvals", href: "#workflow-automation" },
      {
        title: "Robotic Process Automation (RPA)",
        description: "Automate repetitive tasks at scale",
        href: "#rpa",
      },
      {
        title: "Cloud Architecture & Modernization",
        description: "Cloud-native design and migration",
        href: "#cloud-modernization",
      },
      {
        title: "Hybrid & Multi-Cloud Solutions",
        description: "Flexible cloud operating models",
        href: "#hybrid-multi-cloud",
      },
      { title: "System & API Integration", description: "Connected systems and data flows", href: "#system-api" },
      {
        title: "Document & Records Management",
        description: "Secure document governance and lifecycle",
        href: "#document-records",
      },
      {
        title: "Asset & RFID-Based Automation",
        description: "Asset intelligence and RFID tracking",
        href: "#asset-rfid",
      },
    ],
  },
  {
    title: "Digital Experience",
    description: "User-centric enterprise platforms and experiences.",
    href: "#digital-experience",
    children: [
      {
        title: "Enterprise Web Engineering",
        description: "Scalable web platforms for business",
        href: "#enterprise-web",
      },
      { title: "Mobile Application Development", description: "Native and cross-platform apps", href: "#mobile-apps" },
      {
        title: "UI/UX & Product Design Systems",
        description: "Unified UX and design systems",
        href: "#ui-ux-design",
      },
      {
        title: "Digital Portals & Experience Platforms",
        description: "Customer, partner, and employee portals",
        href: "#digital-portals",
      },
      {
        title: "Branding & Digital Design Systems",
        description: "Brand-consistent digital experiences",
        href: "#branding-design",
      },
    ],
  },
  {
    title: "Sustainability & Compliance",
    description: "Traceability, ESG readiness, and regulatory compliance.",
    href: "#sustainability",
    children: [
      { title: "Sustainability & ESG Solutions", description: "ESG performance and governance", href: "#esg-solutions" },
      { title: "CSRD Readiness & Reporting", description: "EU CSRD compliance readiness", href: "#csrd" },
      { title: "Digital Product Passport (EU)", description: "EU DPP implementation", href: "#dpp-eu" },
      { title: "Traceability & Transparency Systems", description: "End-to-end supply visibility", href: "#traceability" },
      { title: "Compliance & Audit Enablement", description: "Audit readiness and assurance", href: "#compliance-audit" },
      { title: "Carbon & Circularity Intelligence", description: "Emissions and circularity insights", href: "#carbon-circularity" },
    ],
  },
];

const industriesItems = [
  {
    title: "Enterprise & Corporate",
    description: "Enterprise-grade platforms for multi-entity organizations.",
    href: "#industry-enterprise-corporate",
    children: [
      { title: "Large Enterprises", description: "Enterprise-scale operations", href: "#industry-large-enterprises" },
      { title: "Holding Companies & Groups", description: "Group-level governance", href: "#industry-holding-groups" },
      { title: "Conglomerates", description: "Multi-sector enterprises", href: "#industry-conglomerates" },
      { title: "Shared Services Centers", description: "Centralized service hubs", href: "#industry-shared-services" },
      { title: "Multi-Entity Organizations", description: "Complex entity structures", href: "#industry-multi-entity" },
    ],
  },
  {
    title: "Manufacturing & Industrial",
    description: "Digital platforms for production, compliance and smart factories.",
    href: "#industry-manufacturing-industrial",
    children: [
      { title: "Manufacturing Operations", description: "End-to-end operations", href: "#industry-manufacturing-ops" },
      {
        title: "Textile & Apparel Manufacturing",
        description: "Textile and apparel operations",
        href: "#industry-textile-apparel",
      },
      {
        title: "Spinning Mills & Processing Units",
        description: "Spinning and processing units",
        href: "#industry-spinning-mills",
      },
      {
        title: "Industry 4.0 & Smart Factories",
        description: "Connected factory systems",
        href: "#industry-4-0-factories",
      },
      {
        title: "Heavy & Light Industrial Enterprises",
        description: "Industrial enterprises",
        href: "#industry-heavy-light",
      },
    ],
  },
  {
    title: "Retail & Consumer Goods",
    description: "Omnichannel operations and data-driven retail management.",
    href: "#industry-retail-consumer",
    children: [
      {
        title: "Retail & Omni-Channel Businesses",
        description: "Unified retail channels",
        href: "#industry-omnichannel",
      },
      { title: "Consumer Goods & FMCG", description: "FMCG operations", href: "#industry-fmcg" },
      { title: "E-Commerce & Marketplaces", description: "Marketplace ecosystems", href: "#industry-ecommerce" },
      { title: "Brand Owners & Distributors", description: "Brand and distribution", href: "#industry-brand-distributors" },
      {
        title: "Private Label Manufacturers",
        description: "Private label operations",
        href: "#industry-private-label",
      },
    ],
  },
  {
    title: "Logistics, Supply Chain & Operations",
    description: "End-to-end visibility and operational efficiency.",
    href: "#industry-logistics-supply-chain",
    children: [
      { title: "Logistics & Warehousing", description: "Warehouse operations", href: "#industry-warehousing" },
      {
        title: "Transportation & Fleet Operations",
        description: "Fleet operations",
        href: "#industry-transportation-fleet",
      },
      {
        title: "Distribution & Fulfillment Centers",
        description: "Distribution networks",
        href: "#industry-distribution-fulfillment",
      },
      { title: "Last-Mile Delivery", description: "Last-mile logistics", href: "#industry-last-mile" },
      { title: "Supply Chain Operations", description: "Supply chain execution", href: "#industry-supply-chain-ops" },
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Secure, compliant systems for healthcare and regulated environments.",
    href: "#industry-healthcare-life-sciences",
    children: [
      {
        title: "Hospitals & Healthcare Providers",
        description: "Provider operations",
        href: "#industry-hospitals",
      },
      { title: "Clinics & Medical Centers", description: "Clinical operations", href: "#industry-clinics" },
      { title: "HealthTech Companies", description: "Health technology", href: "#industry-healthtech" },
      {
        title: "Pharmaceuticals & Life Sciences",
        description: "Pharma and life sciences",
        href: "#industry-pharma",
      },
      {
        title: "Medical Supply & Distribution",
        description: "Medical supply chains",
        href: "#industry-medical-supply",
      },
    ],
  },
  {
    title: "Real Estate, Construction & Facilities",
    description: "Integrated platforms for assets and projects.",
    href: "#industry-real-estate-construction",
    children: [
      { title: "Real Estate Developers", description: "Development operations", href: "#industry-real-estate-dev" },
      {
        title: "Property & Facilities Management",
        description: "Facilities operations",
        href: "#industry-facilities",
      },
      {
        title: "Construction & Project Controls",
        description: "Project delivery",
        href: "#industry-construction-controls",
      },
      { title: "Infrastructure & Utilities", description: "Infrastructure operations", href: "#industry-infrastructure" },
      {
        title: "Asset-Intensive Organizations",
        description: "Asset-heavy enterprises",
        href: "#industry-asset-intensive",
      },
    ],
  },
  {
    title: "Professional Services",
    description: "Structured systems for consulting, legal and financial firms.",
    href: "#industry-professional-services",
    children: [
      { title: "Consulting Firms", description: "Advisory operations", href: "#industry-consulting" },
      { title: "Financial Advisory", description: "Financial advisory firms", href: "#industry-financial-advisory" },
      { title: "Legal & Compliance Firms", description: "Legal operations", href: "#industry-legal-compliance" },
      { title: "Accounting & Audit Firms", description: "Accounting and audit", href: "#industry-accounting-audit" },
      {
        title: "IT & Managed Services Providers",
        description: "Managed services",
        href: "#industry-managed-services",
      },
    ],
  },
  {
    title: "Government & Public Sector",
    description: "Secure, transparent digital platforms for public institutions.",
    href: "#industry-government-public",
    children: [
      { title: "Government Authorities", description: "Government bodies", href: "#industry-government-authorities" },
      {
        title: "Public Sector Enterprises",
        description: "State-owned enterprises",
        href: "#industry-public-enterprises",
      },
      { title: "Municipalities & Smart Cities", description: "Smart city programs", href: "#industry-municipalities" },
      { title: "Regulatory Bodies", description: "Regulatory agencies", href: "#industry-regulatory" },
      {
        title: "Public Infrastructure Organizations",
        description: "Infrastructure bodies",
        href: "#industry-public-infrastructure",
      },
    ],
  },
  {
    title: "Energy, Sustainability & ESG",
    description: "Sustainability, compliance and ESG intelligence platforms.",
    href: "#industry-energy-sustainability",
    children: [
      {
        title: "Sustainability-Driven Enterprises",
        description: "Sustainability leaders",
        href: "#industry-sustainability-driven",
      },
      { title: "ESG-Focused Organizations", description: "ESG-centric orgs", href: "#industry-esg-focused" },
      { title: "Energy & Utilities", description: "Energy and utilities", href: "#industry-energy-utilities" },
      {
        title: "Circular Economy Initiatives",
        description: "Circularity programs",
        href: "#industry-circular-economy",
      },
      {
        title: "Environmental Compliance Bodies",
        description: "Environmental compliance",
        href: "#industry-environmental-compliance",
      },
    ],
  },
  {
    title: "Education & Research",
    description: "Digital systems for academic and research institutions.",
    href: "#industry-education-research",
    children: [
      { title: "Universities & Institutions", description: "Academic institutions", href: "#industry-universities" },
      { title: "Research Organizations", description: "Research organizations", href: "#industry-research-orgs" },
      {
        title: "Training & Skill Development",
        description: "Learning and development",
        href: "#industry-training-skills",
      },
    ],
  },
  {
    title: "Travel & Hospitality Services",
    description: "Operational efficiency and enhanced guest experiences.",
    href: "#industry-travel-hospitality",
    children: [
      { title: "Hotels & Hospitality Groups", description: "Hospitality groups", href: "#industry-hotels" },
      { title: "Travel & Tourism Operators", description: "Travel operators", href: "#industry-travel-operators" },
      { title: "Event & Experience Companies", description: "Events and experiences", href: "#industry-events" },
    ],
  },
];

const productsItems = [
  {
    title: "Enterprise Business Platforms",
    description: "Core platforms for finance, operations, and business management.",
    href: "#enterprise-business-platforms",
    children: [
      { title: "Integra ERP", description: "Unified enterprise resource planning", href: "#integra-erp" },
      { title: "Integra CRM", description: "Customer engagement & relationship management", href: "#integra-crm" },
      { title: "Cyclo ERP", description: "Manufacturing & spinning mills ERP", href: "#cyclo-erp" },
    ],
  },
  {
    title: "Sustainability & Compliance Platforms",
    description: "Platforms for ESG, traceability and regulatory reporting.",
    href: "#sustainability-compliance-platforms",
    children: [
      { title: "EcoMagnet", description: "Sustainability, ESG & CSRD intelligence", href: "#ecomagnet" },
      {
        title: "Digital Product Passport Platform",
        description: "EU DPP & traceability infrastructure",
        href: "#dpp-platform",
      },
    ],
  },
  {
    title: "Asset, Operations & Automation Platforms",
    description: "Systems for asset management and operational automation.",
    href: "#asset-operations-platforms",
    children: [
      { title: "Astaric", description: "Asset lifecycle & RFID management", href: "#astaric" },
      { title: "DocuMax", description: "Document management & compliance platform", href: "#documax" },
    ],
  },
  {
    title: "AI & Intelligence Platforms",
    description: "AI platforms for insights, decisions and automation.",
    href: "#ai-intelligence-platforms",
    children: [
      { title: "Aullect", description: "AI-powered logistics & operations intelligence", href: "#aullect" },
      { title: "Zeito", description: "AI meeting & engagement intelligence", href: "#zeito" },
    ],
  },
  {
    title: "Digital Experience Platforms",
    description: "Platforms that deliver seamless, user-centric digital experiences.",
    href: "#digital-experience-platforms",
    children: [{ title: "Style Lab", description: "Catalog & digital branding system", href: "#style-lab" }],
  },
];

const servicesItems = [
  {
    title: "Digital Engineering Services",
    description: "End-to-end digital build and design services.",
    href: "#services-digital-engineering",
    children: [
      { title: "Web Development", description: "Modern web experiences", href: "#services-web-development" },
      { title: "Application Development", description: "Custom app engineering", href: "#services-app-development" },
      { title: "UI UX Design", description: "Human-centered product design", href: "#services-ui-ux-design" },
      { title: "Graphic and Visual Design", description: "Brand and visual systems", href: "#services-graphic-design" },
      { title: "SharePoint Solutions", description: "Enterprise collaboration portals", href: "#services-sharepoint" },
    ],
  },
  {
    title: "Data Analytics and Intelligence",
    description: "Insights, reporting, and BI enablement.",
    href: "#services-data-analytics",
    children: [
      { title: "Power BI and Analytics", description: "Power BI dashboards and analytics", href: "#services-power-bi" },
      { title: "Business Intelligence Solutions", description: "Enterprise BI platforms", href: "#services-bi-solutions" },
      { title: "Data Visualization and Reporting", description: "Reports and visual storytelling", href: "#services-data-viz" },
    ],
  },
  {
    title: "Automation and Process Services",
    description: "Automation-led operational improvements.",
    href: "#services-automation",
    children: [
      { title: "Workflow Automation", description: "Streamlined process flows", href: "#services-workflow-automation" },
      {
        title: "RPA Robotic Process Automation",
        description: "Bot-driven task automation",
        href: "#services-rpa",
      },
      {
        title: "Digital Transformation Services",
        description: "Operating model modernization",
        href: "#services-digital-transformation",
      },
    ],
  },
  {
    title: "Enterprise Platforms and Implementations",
    description: "Enterprise-grade platform rollout.",
    href: "#services-enterprise-platforms",
    children: [
      { title: "Microsoft Dynamics 365", description: "Dynamics 365 implementation", href: "#services-dynamics-365" },
      { title: "Salesforce Implementation", description: "Salesforce delivery and setup", href: "#services-salesforce" },
      { title: "ERP and CRM Enablement", description: "ERP/CRM adoption services", href: "#services-erp-crm" },
    ],
  },
  {
    title: "AI and Advanced Technologies",
    description: "Applied AI and smart systems.",
    href: "#services-ai-advanced",
    children: [
      { title: "Artificial Intelligence Services", description: "AI strategy and delivery", href: "#services-ai" },
      { title: "AI Solutions and Enablement", description: "Production AI enablement", href: "#services-ai-solutions" },
      { title: "Industry 4.0 and Smart Systems", description: "Smart manufacturing systems", href: "#services-industry-4" },
    ],
  },
  {
    title: "Cloud and Infrastructure Services",
    description: "Cloud strategy and migration.",
    href: "#services-cloud",
    children: [
      { title: "Cloud Consulting", description: "Cloud readiness and strategy", href: "#services-cloud-consulting" },
      {
        title: "Cloud Architecture and Migration",
        description: "Architect and migrate workloads",
        href: "#services-cloud-migration",
      },
      {
        title: "Hybrid and Multi-Cloud Enablement",
        description: "Flexible cloud operating models",
        href: "#services-hybrid-multicloud",
      },
    ],
  },
];

const extraLinks = [
  { label: "Company", href: "/company" },
];

export const mainNav = {
  solutions: solutionsItems,
  industries: industriesItems,
  products: productsItems,
  services: servicesItems,
  // Plain links with no drop-down, shown after the menus above.
  extraLinks,
  // The button on the right of the bar.
  cta: { label: "Contact us", href: "/contact" },
};

/* ----------------------------------------------------------------------------
 * FOOTER (the dark band at the bottom of every page)
 * ------------------------------------------------------------------------- */

export const footer = {
  tagline: "Engineering intelligent digital platforms for modern enterprises.",

  // The four link columns, left to right.
  columns: [
    {
      heading: "Solutions",
      links: [
        { label: "Intelligence & AI", href: "/ai-intelligence" },
        { label: "Business Platforms", href: "#" },
        { label: "Automation & Cloud", href: "#" },
        { label: "Digital Experience", href: "#" },
        { label: "Growth & Commerce", href: "#" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Insights", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Case Studies", href: "#" },
        { label: "Research", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms and Conditions", href: "/terms" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ],

  // The bottom strip. The year is filled in automatically, so it is not here.
  copyrightHolder: "ITG Technologies Co. All rights reserved.",
  bottomLinks: [
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  linkedin: "https://www.linkedin.com/company/itgtechnologiescompany/posts/?feedView=all",
};
