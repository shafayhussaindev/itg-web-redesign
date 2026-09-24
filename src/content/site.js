import { productPages } from './product-detail.js';
import { serviceCategoryPaths } from './service-detail.js';
import { industryPaths } from './industry-detail.js';

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
    overviewLabel: "View AI & Intelligence Overview",
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
    href: "/enterprise-systems",
    overviewLabel: "View Enterprise Business Systems Overview",
    children: [
      { title: "Enterprise ERP Solutions", description: "End-to-end ERP modernization", href: "/enterprise-systems#erp-solutions" },
      { title: "Financial & Operational Systems", description: "Scalable finance and ops platforms", href: "/enterprise-systems#financial-ops" },
      { title: "CRM & Customer Engagement", description: "Unified customer lifecycle systems", href: "/enterprise-systems#crm-engagement" },
      {
        title: "Procurement & Vendor Management",
        description: "Strategic sourcing and supplier ecosystems",
        href: "/enterprise-systems#procurement-vendor",
      },
      {
        title: "Manufacturing & Industry-Specific ERP",
        description: "Industry-tailored ERP for production",
        href: "/enterprise-systems#manufacturing-erp",
      },
      {
        title: "Corporate & Multi-Entity Systems",
        description: "Group-level governance and consolidation",
        href: "/enterprise-systems#multi-entity-systems",
      },
    ],
  },
  {
    title: "Automation & Cloud",
    description: "Automated workflows and modern, cloud-ready infrastructure.",
    href: "/automation-cloud",
    overviewLabel: "View Automation & Cloud Overview",
    children: [
      { title: "Workflow Automation", description: "Streamlined operations and approvals", href: "/automation-cloud#workflow-automation" },
      {
        title: "Robotic Process Automation (RPA)",
        description: "Automate repetitive tasks at scale",
        href: "/automation-cloud#rpa",
      },
      {
        title: "Cloud Architecture & Modernization",
        description: "Cloud-native design and migration",
        href: "/automation-cloud#cloud-modernization",
      },
      {
        title: "Hybrid & Multi-Cloud Solutions",
        description: "Flexible cloud operating models",
        href: "/automation-cloud#hybrid-multi-cloud",
      },
      { title: "System & API Integration", description: "Connected systems and data flows", href: "/automation-cloud#system-api" },
      {
        title: "Document & Records Management",
        description: "Secure document governance and lifecycle",
        href: "/automation-cloud#document-records",
      },
      {
        title: "Asset & RFID-Based Automation",
        description: "Asset intelligence and RFID tracking",
        href: "/automation-cloud#asset-rfid",
      },
    ],
  },
  {
    title: "Digital Experience",
    description: "User-centric enterprise platforms and experiences.",
    href: "/digital-experience",
    overviewLabel: "View Digital Experience Overview",
    children: [
      {
        title: "Enterprise Web Engineering",
        description: "Scalable web platforms for business",
        href: "/digital-experience#enterprise-web",
      },
      { title: "Mobile Application Development", description: "Native and cross-platform apps", href: "/digital-experience#mobile-apps" },
      {
        title: "UI/UX & Product Design Systems",
        description: "Unified UX and design systems",
        href: "/digital-experience#ui-ux-design",
      },
      {
        title: "Digital Portals & Experience Platforms",
        description: "Customer, partner, and employee portals",
        href: "/digital-experience#digital-portals",
      },
      {
        title: "Branding & Digital Design Systems",
        description: "Brand-consistent digital experiences",
        href: "/digital-experience#branding-design",
      },
    ],
  },
  {
    title: "Sustainability & Compliance",
    description: "Traceability, ESG readiness, and regulatory compliance.",
    href: "/sustainability-compliance",
    overviewLabel: "View Sustainability & Compliance Overview",
    children: [
      { title: "Sustainability & ESG Solutions", description: "ESG performance and governance", href: "/sustainability-compliance#esg-solutions" },
      { title: "CSRD Readiness & Reporting", description: "EU CSRD compliance readiness", href: "/sustainability-compliance#csrd" },
      { title: "Digital Product Passport (EU)", description: "EU DPP implementation", href: "/sustainability-compliance#dpp-eu" },
      { title: "Traceability & Transparency Systems", description: "End-to-end supply visibility", href: "/sustainability-compliance#traceability" },
      { title: "Compliance & Audit Enablement", description: "Audit readiness and assurance", href: "/sustainability-compliance#compliance-audit" },
      { title: "Carbon & Circularity Intelligence", description: "Emissions and circularity insights", href: "/sustainability-compliance#carbon-circularity" },
    ],
  },
];

const industriesItems = [
  {
    title: "Enterprise & Corporate",
    description: "Enterprise-grade platforms for multi-entity organizations.",
    href: industryPaths['enterprise-corporate'],
    overviewLabel: 'View Enterprise & Corporate Overview',
    children: [
      { title: "Large Enterprises", description: "Enterprise-scale operations", href: `${industryPaths['enterprise-corporate']}#large-enterprises` },
      { title: "Holding Companies & Groups", description: "Group-level governance", href: `${industryPaths['enterprise-corporate']}#holding-groups` },
      { title: "Conglomerates", description: "Multi-sector enterprises", href: `${industryPaths['enterprise-corporate']}#conglomerates` },
      { title: "Shared Services Centers", description: "Centralized service hubs", href: `${industryPaths['enterprise-corporate']}#shared-services` },
      { title: "Multi-Entity Organizations", description: "Complex entity structures", href: `${industryPaths['enterprise-corporate']}#multi-entity` },
    ],
  },
  {
    title: "Manufacturing & Industrial",
    description: "Digital platforms for production, compliance and smart factories.",
    href: industryPaths['manufacturing-industrial'],
    overviewLabel: 'View Manufacturing & Industrial Overview',
    children: [
      { title: "Manufacturing Operations", description: "End-to-end operations", href: `${industryPaths['manufacturing-industrial']}#manufacturing-ops` },
      {
        title: "Textile & Apparel Manufacturing",
        description: "Textile and apparel operations",
        href: `${industryPaths['manufacturing-industrial']}#textile-apparel`,
      },
      {
        title: "Spinning Mills & Processing Units",
        description: "Spinning and processing units",
        href: `${industryPaths['manufacturing-industrial']}#spinning-mills`,
      },
      {
        title: "Industry 4.0 & Smart Factories",
        description: "Connected factory systems",
        href: `${industryPaths['manufacturing-industrial']}#industry-4-0-factories`,
      },
      {
        title: "Heavy & Light Industrial Enterprises",
        description: "Industrial enterprises",
        href: `${industryPaths['manufacturing-industrial']}#heavy-light`,
      },
    ],
  },
  {
    title: "Retail & Consumer Goods",
    description: "Omnichannel operations and data-driven retail management.",
    href: industryPaths['retail-consumer'],
    overviewLabel: 'View Retail & Consumer Goods Overview',
    children: [
      {
        title: "Retail & Omni-Channel Businesses",
        description: "Unified retail channels",
        href: `${industryPaths['retail-consumer']}#omnichannel`,
      },
      { title: "Consumer Goods & FMCG", description: "FMCG operations", href: `${industryPaths['retail-consumer']}#fmcg` },
      { title: "E-Commerce & Marketplaces", description: "Marketplace ecosystems", href: `${industryPaths['retail-consumer']}#ecommerce` },
      { title: "Brand Owners & Distributors", description: "Brand and distribution", href: `${industryPaths['retail-consumer']}#brand-distributors` },
      {
        title: "Private Label Manufacturers",
        description: "Private label operations",
        href: `${industryPaths['retail-consumer']}#private-label`,
      },
    ],
  },
  {
    title: "Logistics, Supply Chain & Operations",
    description: "End-to-end visibility and operational efficiency.",
    href: industryPaths['logistics-supply-chain'],
    overviewLabel: 'View Logistics & Supply Chain Overview',
    children: [
      { title: "Logistics & Warehousing", description: "Warehouse operations", href: `${industryPaths['logistics-supply-chain']}#warehousing` },
      {
        title: "Transportation & Fleet Operations",
        description: "Fleet operations",
        href: `${industryPaths['logistics-supply-chain']}#transportation-fleet`,
      },
      {
        title: "Distribution & Fulfillment Centers",
        description: "Distribution networks",
        href: `${industryPaths['logistics-supply-chain']}#distribution-fulfillment`,
      },
      { title: "Last-Mile Delivery", description: "Last-mile logistics", href: `${industryPaths['logistics-supply-chain']}#last-mile` },
      { title: "Supply Chain Operations", description: "Supply chain execution", href: `${industryPaths['logistics-supply-chain']}#supply-chain-ops` },
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Secure, compliant systems for healthcare and regulated environments.",
    href: industryPaths['healthcare-life-sciences'],
    overviewLabel: 'View Healthcare & Life Sciences Overview',
    children: [
      {
        title: "Hospitals & Healthcare Providers",
        description: "Provider operations",
        href: `${industryPaths['healthcare-life-sciences']}#hospitals`,
      },
      { title: "Clinics & Medical Centers", description: "Clinical operations", href: `${industryPaths['healthcare-life-sciences']}#clinics` },
      { title: "HealthTech Companies", description: "Health technology", href: `${industryPaths['healthcare-life-sciences']}#healthtech` },
      {
        title: "Pharmaceuticals & Life Sciences",
        description: "Pharma and life sciences",
        href: `${industryPaths['healthcare-life-sciences']}#pharma`,
      },
      {
        title: "Medical Supply & Distribution",
        description: "Medical supply chains",
        href: `${industryPaths['healthcare-life-sciences']}#medical-supply`,
      },
    ],
  },
  {
    title: "Real Estate, Construction & Facilities",
    description: "Integrated platforms for assets and projects.",
    href: industryPaths['real-estate-construction'],
    overviewLabel: 'View Real Estate & Construction Overview',
    children: [
      { title: "Real Estate Developers", description: "Development operations", href: `${industryPaths['real-estate-construction']}#real-estate-dev` },
      {
        title: "Property & Facilities Management",
        description: "Facilities operations",
        href: `${industryPaths['real-estate-construction']}#facilities`,
      },
      {
        title: "Construction & Project Controls",
        description: "Project delivery",
        href: `${industryPaths['real-estate-construction']}#construction-controls`,
      },
      { title: "Infrastructure & Utilities", description: "Infrastructure operations", href: `${industryPaths['real-estate-construction']}#infrastructure` },
      {
        title: "Asset-Intensive Organizations",
        description: "Asset-heavy enterprises",
        href: `${industryPaths['real-estate-construction']}#asset-intensive`,
      },
    ],
  },
  {
    title: "Professional Services",
    description: "Structured systems for consulting, legal and financial firms.",
    href: industryPaths['professional-services'],
    overviewLabel: 'View Professional Services Overview',
    children: [
      { title: "Consulting Firms", description: "Advisory operations", href: `${industryPaths['professional-services']}#consulting` },
      { title: "Financial Advisory", description: "Financial advisory firms", href: `${industryPaths['professional-services']}#financial-advisory` },
      { title: "Legal & Compliance Firms", description: "Legal operations", href: `${industryPaths['professional-services']}#legal-compliance` },
      { title: "Accounting & Audit Firms", description: "Accounting and audit", href: `${industryPaths['professional-services']}#accounting-audit` },
      {
        title: "IT & Managed Services Providers",
        description: "Managed services",
        href: `${industryPaths['professional-services']}#managed-services`,
      },
    ],
  },
  {
    title: "Government & Public Sector",
    description: "Secure, transparent digital platforms for public institutions.",
    href: industryPaths['government-public'],
    overviewLabel: 'View Government & Public Sector Overview',
    children: [
      { title: "Government Authorities", description: "Government bodies", href: `${industryPaths['government-public']}#government-authorities` },
      {
        title: "Public Sector Enterprises",
        description: "State-owned enterprises",
        href: `${industryPaths['government-public']}#public-enterprises`,
      },
      { title: "Municipalities & Smart Cities", description: "Smart city programs", href: `${industryPaths['government-public']}#municipalities` },
      { title: "Regulatory Bodies", description: "Regulatory agencies", href: `${industryPaths['government-public']}#regulatory` },
      {
        title: "Public Infrastructure Organizations",
        description: "Infrastructure bodies",
        href: `${industryPaths['government-public']}#public-infrastructure`,
      },
    ],
  },
  {
    title: "Energy, Sustainability & ESG",
    description: "Sustainability, compliance and ESG intelligence platforms.",
    href: industryPaths['energy-sustainability'],
    overviewLabel: 'View Energy & Sustainability Overview',
    children: [
      {
        title: "Sustainability-Driven Enterprises",
        description: "Sustainability leaders",
        href: `${industryPaths['energy-sustainability']}#sustainability-driven`,
      },
      { title: "ESG-Focused Organizations", description: "ESG-centric orgs", href: `${industryPaths['energy-sustainability']}#esg-focused` },
      { title: "Energy & Utilities", description: "Energy and utilities", href: `${industryPaths['energy-sustainability']}#energy-utilities` },
      {
        title: "Circular Economy Initiatives",
        description: "Circularity programs",
        href: `${industryPaths['energy-sustainability']}#circular-economy`,
      },
      {
        title: "Environmental Compliance Bodies",
        description: "Environmental compliance",
        href: `${industryPaths['energy-sustainability']}#environmental-compliance`,
      },
    ],
  },
  {
    title: "Education & Research",
    description: "Digital systems for academic and research institutions.",
    href: industryPaths['education-research'],
    overviewLabel: 'View Education & Research Overview',
    children: [
      { title: "Universities & Institutions", description: "Academic institutions", href: `${industryPaths['education-research']}#universities` },
      { title: "Research Organizations", description: "Research organizations", href: `${industryPaths['education-research']}#research-orgs` },
      {
        title: "Training & Skill Development",
        description: "Learning and development",
        href: `${industryPaths['education-research']}#training-skills`,
      },
    ],
  },
  {
    title: "Travel & Hospitality Services",
    description: "Operational efficiency and enhanced guest experiences.",
    href: industryPaths['travel-hospitality'],
    overviewLabel: 'View Travel & Hospitality Overview',
    children: [
      { title: "Hotels & Hospitality Groups", description: "Hospitality groups", href: `${industryPaths['travel-hospitality']}#hotels` },
      { title: "Travel & Tourism Operators", description: "Travel operators", href: `${industryPaths['travel-hospitality']}#travel-operators` },
      { title: "Event & Experience Companies", description: "Events and experiences", href: `${industryPaths['travel-hospitality']}#events` },
    ],
  },
];

const productsItems = productPages.map(page => ({
  title: page.title,
  description: page.body,
  href: page.href,
  overviewLabel: `View ${page.title} Overview`,
  children: page.platforms.map(platform => ({
    title: platform.name,
    description: platform.description,
    href: `${page.href}#${platform.id}`,
  })),
}));

const servicesItems = [
  {
    title: "Digital Engineering Services",
    description: "End-to-end digital build and design services.",
    href: serviceCategoryPaths['digital-engineering'],
    overviewLabel: 'View Digital Engineering Overview',
    children: [
      { title: "Web Development", description: "Modern web experiences", href: `${serviceCategoryPaths['digital-engineering']}#web-development` },
      { title: "Application Development", description: "Custom app engineering", href: `${serviceCategoryPaths['digital-engineering']}#application-development` },
      { title: "UI UX Design", description: "Human-centered product design", href: `${serviceCategoryPaths['digital-engineering']}#ui-ux-design` },
      { title: "Graphic and Visual Design", description: "Brand and visual systems", href: `${serviceCategoryPaths['digital-engineering']}#graphic-design` },
      { title: "SharePoint Solutions", description: "Enterprise collaboration portals", href: `${serviceCategoryPaths['digital-engineering']}#sharepoint-solutions` },
    ],
  },
  {
    title: "Data Analytics and Intelligence",
    description: "Insights, reporting, and BI enablement.",
    href: serviceCategoryPaths['data-analytics'],
    overviewLabel: 'View Data Analytics and Intelligence Overview',
    children: [
      { title: "Power BI and Analytics", description: "Power BI dashboards and analytics", href: `${serviceCategoryPaths['data-analytics']}#power-bi` },
      { title: "Business Intelligence Solutions", description: "Enterprise BI platforms", href: `${serviceCategoryPaths['data-analytics']}#bi-solutions` },
      { title: "Data Visualization and Reporting", description: "Reports and visual storytelling", href: `${serviceCategoryPaths['data-analytics']}#data-visualization` },
    ],
  },
  {
    title: "Automation and Process Services",
    description: "Automation-led operational improvements.",
    href: serviceCategoryPaths['automation'],
    overviewLabel: 'View Automation and Process Overview',
    children: [
      { title: "Workflow Automation", description: "Streamlined process flows", href: `${serviceCategoryPaths['automation']}#workflow-automation` },
      {
        title: "RPA Robotic Process Automation",
        description: "Bot-driven task automation",
        href: `${serviceCategoryPaths['automation']}#rpa`,
      },
      {
        title: "Digital Transformation Services",
        description: "Operating model modernization",
        href: `${serviceCategoryPaths['automation']}#digital-transformation`,
      },
    ],
  },
  {
    title: "Enterprise Platforms and Implementations",
    description: "Enterprise-grade platform rollout.",
    href: serviceCategoryPaths['enterprise-platforms'],
    overviewLabel: 'View Enterprise Platforms Overview',
    children: [
      { title: "Microsoft Dynamics 365", description: "Dynamics 365 implementation", href: `${serviceCategoryPaths['enterprise-platforms']}#dynamics-365` },
      { title: "Salesforce Implementation", description: "Salesforce delivery and setup", href: `${serviceCategoryPaths['enterprise-platforms']}#salesforce` },
      { title: "ERP and CRM Enablement", description: "ERP/CRM adoption services", href: `${serviceCategoryPaths['enterprise-platforms']}#erp-crm-enablement` },
    ],
  },
  {
    title: "AI and Advanced Technologies",
    description: "Applied AI and smart systems.",
    href: serviceCategoryPaths['ai-advanced'],
    overviewLabel: 'View AI and Advanced Technologies Overview',
    children: [
      { title: "Artificial Intelligence Services", description: "AI strategy and delivery", href: `${serviceCategoryPaths['ai-advanced']}#ai-services` },
      { title: "AI Solutions and Enablement", description: "Production AI enablement", href: `${serviceCategoryPaths['ai-advanced']}#ai-solutions` },
      { title: "Industry 4.0 and Smart Systems", description: "Smart manufacturing systems", href: `${serviceCategoryPaths['ai-advanced']}#industry-4` },
    ],
  },
  {
    title: "Cloud and Infrastructure Services",
    description: "Cloud strategy and migration.",
    href: serviceCategoryPaths['cloud'],
    overviewLabel: 'View Cloud and Infrastructure Overview',
    children: [
      { title: "Cloud Consulting", description: "Cloud readiness and strategy", href: `${serviceCategoryPaths['cloud']}#cloud-consulting` },
      {
        title: "Cloud Architecture and Migration",
        description: "Architect and migrate workloads",
        href: `${serviceCategoryPaths['cloud']}#cloud-migration`,
      },
      {
        title: "Hybrid and Multi-Cloud Enablement",
        description: "Flexible cloud operating models",
        href: `${serviceCategoryPaths['cloud']}#hybrid-multicloud`,
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
        { label: "Enterprise Business Systems", href: "/enterprise-systems" },
        { label: "Automation & Cloud", href: "/automation-cloud" },
        { label: "Digital Experience", href: "/digital-experience" },
        { label: "Sustainability & Compliance", href: "/sustainability-compliance" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Insights", href: "#" },
        { label: "Contact", href: "/contact" },
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
