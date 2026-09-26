import { platformPages } from './tier2/platform-detail.js';
import { serviceCategoryPaths } from './tier2/service-detail.js';
import { industryPaths } from './tier2/industry-detail.js';

/* ============================================================================
 * SITE-WIDE CONTENT
 * =================
 * Shown on EVERY page: the top navigation menu and the footer.
 *
 * Change the text between the quote marks and save. See content/README.md if
 * anything here is unclear.
 *
 * WHAT'S IN THIS FILE (top to bottom)
 *   1. How the menu is built       (read this first)
 *   2. Solutions menu
 *   3. Industries menu
 *   4. Platforms menu              (built from platform-detail.js, not here)
 *   5. Services menu
 *   6. Menu bar: menus + plain links + Contact button
 *   7. Footer
 * ========================================================================= */


/* ============================================================================
 * 1. HOW THE MENU IS BUILT
 * ============================================================================
 *
 *   Menu bar         Solutions ▾   Industries ▾   Platforms ▾   Services ▾
 *                        │
 *   TIER 2  ─────►   Artificial Intelligence       ← a whole page  (/artificial-intelligence)
 *   (a page)         Enterprise Solutions
 *                    ...    │
 *                           │  (hover a Tier 2 row to see its Tier 3 list)
 *                           ▼
 *   TIER 3  ─────►   AI Strategy & Advisory        ← its own page
 *   (a page)         Applied AI & Machine Learning   (/artificial-intelligence/ai-strategy)
 *
 * TIER 2 fields
 *     title          the words the visitor reads
 *     description    the small grey line underneath
 *     href           the page it opens, e.g. "/artificial-intelligence"
 *     overviewLabel  the "View … Overview" link at the top of its Tier 3 list
 *     tier3          the list of Tier 3 pages under it (below)
 *
 * TIER 3 fields (one line per page)
 *     title          the words the visitor reads
 *     description    the small grey line underneath
 *     id             the item's id. The link is built for you as
 *                    <Tier 2 href>/<id>
 *                    The id MUST match the item's id in its Tier 2 content
 *                    file, or the link will open a "page not found".
 *                    (The Tier 3 pages themselves are built from those
 *                    content files — see content/tier3/tier3-detail.js.)
 *
 * To remove a row, delete its whole { ... } block including the trailing comma.
 * To add one, copy an existing block and change the words.
 * ========================================================================= */

// Turns a Tier 2 entry into the shape the menu (Header.tsx) reads.
// You never need to edit this.
// A Tier 3 row may give its own `href` instead of an `id` (used by a platform
// with no products yet, whose one row points at its overview section).
function tier2Page({ tier3, ...page }) {
  return {
    ...page,
    children: tier3.map(({ id, href, ...section }) => ({
      ...section,
      href: href ?? `${page.href}/${id}`,
    })),
  };
}


/* ============================================================================
 * 2. SOLUTIONS MENU
 * ========================================================================= */

const solutionsMenu = [

  /* ── Tier 2: Artificial Intelligence ───────────────────────────────────── */
  tier2Page({
    title:         "Artificial Intelligence",
    description:   "Data-driven insights and intelligent automation at scale.",
    href:          "/artificial-intelligence",
    overviewLabel: "View Artificial Intelligence Overview",
    tier3: [
      { title: "AI Strategy & Advisory",                       description: "Vision, roadmap, and responsible AI adoption",   id: "ai-strategy" },
      { title: "Applied AI & Machine Learning",                description: "Production-grade ML for real business impact",   id: "applied-ai-ml" },
      { title: "Enterprise Analytics & Business Intelligence", description: "Insight-driven decisions across the enterprise", id: "enterprise-analytics" },
      { title: "Data Platforms & Insights",                    description: "Modern data stacks and actionable insights",     id: "data-platforms" },
      { title: "AI Document Intelligence",                     description: "Automated extraction and document workflows",    id: "ai-document-intel" },
      { title: "Industry 4.0 & Smart Systems",                 description: "Connected operations and intelligent automation", id: "industry-4-0" },
      { title: "Digital Product Passport (AI-enabled)",        description: "AI-accelerated compliance and traceability",     id: "dpp-ai" },
    ],
  }),

  /* ── Tier 2: Enterprise Solutions ──────────────────────────────────────── */
  tier2Page({
    title:         "Enterprise Solutions",
    description:   "Unified platforms for finance, operations, and core processes.",
    href:          "/enterprise-solutions",
    overviewLabel: "View Enterprise Solutions Overview",
    tier3: [
      { title: "Enterprise ERP Solutions",              description: "End-to-end ERP modernization",               id: "erp-solutions" },
      { title: "Financial & Operational Systems",       description: "Scalable finance and ops platforms",         id: "financial-ops" },
      { title: "CRM & Customer Engagement",             description: "Unified customer lifecycle systems",         id: "crm-engagement" },
      { title: "Procurement & Vendor Management",       description: "Strategic sourcing and supplier ecosystems", id: "procurement-vendor" },
      { title: "Manufacturing & Industry-Specific ERP", description: "Industry-tailored ERP for production",       id: "manufacturing-erp" },
      { title: "Corporate & Multi-Entity Systems",      description: "Group-level governance and consolidation",   id: "multi-entity-systems" },
    ],
  }),

  /* ── Tier 2: ESG Solutions ─────────────────────────────────────────────── */
  tier2Page({
    title:         "ESG Solutions",
    description:   "Traceability, ESG readiness, and regulatory compliance.",
    href:          "/esg-solutions",
    overviewLabel: "View ESG Solutions Overview",
    tier3: [
      { title: "Sustainability & ESG Solutions",      description: "ESG performance and governance",     id: "esg-solutions" },
      { title: "CSRD Readiness & Reporting",          description: "EU CSRD compliance readiness",       id: "csrd" },
      { title: "Digital Product Passport (EU)",       description: "EU DPP implementation",              id: "dpp-eu" },
      { title: "Traceability & Transparency Systems", description: "End-to-end supply visibility",       id: "traceability" },
      { title: "Compliance & Audit Enablement",       description: "Audit readiness and assurance",      id: "compliance-audit" },
      { title: "Carbon & Circularity Intelligence",   description: "Emissions and circularity insights", id: "carbon-circularity" },
    ],
  }),

  /* ── Tier 2: Custom Solutions ──────────────────────────────────────────── */
  tier2Page({
    title:         "Custom Solutions",
    description:   "User-centric enterprise platforms and experiences.",
    href:          "/custom-solutions",
    overviewLabel: "View Custom Solutions Overview",
    tier3: [
      { title: "Enterprise Web Engineering",             description: "Scalable web platforms for business",     id: "enterprise-web" },
      { title: "Mobile Application Development",         description: "Native and cross-platform apps",          id: "mobile-apps" },
      { title: "UI/UX & Product Design Systems",         description: "Unified UX and design systems",           id: "ui-ux-design" },
      { title: "Digital Portals & Experience Platforms", description: "Customer, partner, and employee portals", id: "digital-portals" },
      { title: "Branding & Digital Design Systems",      description: "Brand-consistent digital experiences",    id: "branding-design" },
    ],
  }),

  /* ── Tier 2: Industrial Solutions ──────────────────────────────────────── */
  tier2Page({
    title:         "Industrial Solutions",
    description:   "Industry-specific software solutions designed to address unique business challenges",
    href:          "/industrial-solutions",
    overviewLabel: "View Industrial Solutions Overview",
    tier3: [
      { title: "Workflow Automation",                description: "Streamlined operations and approvals",    id: "workflow-automation" },
      { title: "Robotic Process Automation (RPA)",   description: "Automate repetitive tasks at scale",      id: "rpa" },
      { title: "Cloud Architecture & Modernization", description: "Cloud-native design and migration",       id: "cloud-modernization" },
      { title: "Hybrid & Multi-Cloud Solutions",     description: "Flexible cloud operating models",         id: "hybrid-multi-cloud" },
      { title: "System & API Integration",           description: "Connected systems and data flows",        id: "system-api" },
      { title: "Document & Records Management",      description: "Secure document governance and lifecycle", id: "document-records" },
      { title: "Asset & RFID-Based Automation",      description: "Asset intelligence and RFID tracking",    id: "asset-rfid" },
    ],
  }),

  /* ── Tier 2: Data Privacy Solutions ────────────────────────────────────── */
  tier2Page({
    title:         "Data Privacy Solutions",
    description:   "Discover, protect and govern personal data across the enterprise.",
    href:          "/data-privacy-solutions",
    overviewLabel: "View Data Privacy Solutions Overview",
    tier3: [
      { title: "Privacy Governance & Program Management", description: "Policies, registers and accountable owners", id: "privacy-governance" },
      { title: "Data Discovery & Classification",         description: "Find and classify personal data",         id: "data-discovery" },
      { title: "Consent & Preference Management",         description: "Capture and honour individual choices",   id: "consent-management" },
      { title: "Data Subject Rights Automation",          description: "Access and deletion requests on time",    id: "data-subject-rights" },
      { title: "Data Protection & Access Control",        description: "Encryption, masking and least access",    id: "data-protection" },
      { title: "Incident & Breach Response",              description: "Playbooks for personal data incidents",   id: "breach-response" },
    ],
  }),
];


/* ============================================================================
 * 3. INDUSTRIES MENU
 *
 * Tier 2 page addresses come from `industryPaths` in industry-detail.js, so a
 * page's address only has to be changed in one place. Tier 3 ids must match
 * the segment ids in that same file.
 * ========================================================================= */

const industriesMenu = [

  /* ── Tier 2: Consumer Goods ────────────────────────────────────────────────────── */
  tier2Page({
    title:         "Consumer Goods",
    description:   "Omnichannel operations and data-driven retail management.",
    href:          industryPaths['consumer-goods'],
    overviewLabel: "View Consumer Goods Overview",
    tier3: [
      { title: "Retail & Omni-Channel Businesses", description: "Unified retail channels",  id: "omnichannel" },
      { title: "Consumer Goods & FMCG",            description: "FMCG operations",          id: "fmcg" },
      { title: "E-Commerce & Marketplaces",        description: "Marketplace ecosystems",   id: "ecommerce" },
      { title: "Brand Owners & Distributors",      description: "Brand and distribution",   id: "brand-distributors" },
      { title: "Private Label Manufacturers",      description: "Private label operations", id: "private-label" },
    ],
  }),

  /* ── Tier 2: Manufacturing & Industries ────────────────────────────────────────── */
  tier2Page({
    title:         "Manufacturing & Industries",
    description:   "Digital platforms for production, compliance and smart factories.",
    href:          industryPaths['manufacturing-industries'],
    overviewLabel: "View Manufacturing & Industries Overview",
    tier3: [
      { title: "Manufacturing Operations",            description: "End-to-end operations",          id: "manufacturing-ops" },
      { title: "Textile & Apparel Manufacturing",     description: "Textile and apparel operations", id: "textile-apparel" },
      { title: "Spinning Mills & Processing Units",   description: "Spinning and processing units",  id: "spinning-mills" },
      { title: "Industry 4.0 & Smart Factories",      description: "Connected factory systems",      id: "industry-4-0-factories" },
      { title: "Heavy & Light Industrial Enterprises", description: "Industrial enterprises",        id: "heavy-light" },
    ],
  }),

  /* ── Tier 2: Logistics & Supply Chain Operations ───────────────────────────────── */
  tier2Page({
    title:         "Logistics & Supply Chain Operations",
    description:   "End-to-end visibility and operational efficiency.",
    href:          industryPaths['logistics-supply-chain'],
    overviewLabel: "View Logistics & Supply Chain Operations Overview",
    tier3: [
      { title: "Logistics & Warehousing",            description: "Warehouse operations",   id: "warehousing" },
      { title: "Transportation & Fleet Operations",  description: "Fleet operations",       id: "transportation-fleet" },
      { title: "Distribution & Fulfillment Centers", description: "Distribution networks",  id: "distribution-fulfillment" },
      { title: "Last-Mile Delivery",                 description: "Last-mile logistics",    id: "last-mile" },
      { title: "Supply Chain Operations",            description: "Supply chain execution", id: "supply-chain-ops" },
    ],
  }),

  /* ── Tier 2: Real Estate, Construction & Facilities ────────────────────── */
  tier2Page({
    title:         "Real Estate, Construction & Facilities",
    description:   "Integrated platforms for assets and projects.",
    href:          industryPaths['real-estate-construction'],
    overviewLabel: "View Real Estate & Construction Overview",
    tier3: [
      { title: "Real Estate Developers",           description: "Development operations",    id: "real-estate-dev" },
      { title: "Property & Facilities Management", description: "Facilities operations",     id: "facilities" },
      { title: "Construction & Project Controls",  description: "Project delivery",          id: "construction-controls" },
      { title: "Infrastructure & Utilities",       description: "Infrastructure operations", id: "infrastructure" },
      { title: "Asset-Intensive Organizations",    description: "Asset-heavy enterprises",   id: "asset-intensive" },
    ],
  }),

  /* ── Tier 2: Professional Services ─────────────────────────────────────── */
  tier2Page({
    title:         "Professional Services",
    description:   "Structured systems for consulting, legal and financial firms.",
    href:          industryPaths['professional-services'],
    overviewLabel: "View Professional Services Overview",
    tier3: [
      { title: "Consulting Firms",                description: "Advisory operations",      id: "consulting" },
      { title: "Financial Advisory",              description: "Financial advisory firms", id: "financial-advisory" },
      { title: "Legal & Compliance Firms",        description: "Legal operations",         id: "legal-compliance" },
      { title: "Accounting & Audit Firms",        description: "Accounting and audit",     id: "accounting-audit" },
      { title: "IT & Managed Services Providers", description: "Managed services",         id: "managed-services" },
    ],
  }),
];


/* ============================================================================
 * 4. PLATFORMS MENU  (was "Products")
 *
 * Nothing to edit here. This menu is filled in automatically, so the menu and
 * the platform pages always agree:
 *     Tier 2 = each platform page        (from content/tier1/platforms.js)
 *     Tier 3 = the products on that page (from content/tier2/platform-detail.js)
 * To change the Platforms menu, edit those two files.
 *
 * A platform with no products yet gets a single link to its overview
 * section, so its fly-out is never empty.
 * ========================================================================= */

const platformsMenu = platformPages.map(page => tier2Page({
  title:         page.title,
  description:   page.body,
  href:          page.href,
  overviewLabel: `View ${page.title} Overview`,
  tier3: page.products.length > 0
    ? page.products.map(product => ({
        title:       product.name,
        description: product.description,
        id:          product.id,
      }))
    : [{ title: `About ${page.title}`, description: page.lead, href: `${page.href}#overview` }],
}));


/* ============================================================================
 * 5. SERVICES MENU
 *
 * Tier 2 page addresses come from `serviceCategoryPaths` in service-detail.js.
 * Tier 3 ids must match the service ids in that same file.
 * ========================================================================= */

const servicesMenu = [

  /* ── Tier 2: Engineering Services ──────────────────────────────────────── */
  tier2Page({
    title:         "Engineering Services",
    description:   "End-to-end digital build and design services.",
    href:          serviceCategoryPaths['engineering'],
    overviewLabel: "View Engineering Services Overview",
    tier3: [
      { title: "Web Development",           description: "Modern web experiences",           id: "web-development" },
      { title: "Application Development",   description: "Custom app engineering",           id: "application-development" },
      { title: "UI UX Design",              description: "Human-centered product design",    id: "ui-ux-design" },
      { title: "Graphic and Visual Design", description: "Brand and visual systems",         id: "graphic-design" },
      { title: "SharePoint Solutions",      description: "Enterprise collaboration portals", id: "sharepoint-solutions" },
    ],
  }),

  /* ── Tier 2: Data Management Services ──────────────────────────────────── */
  tier2Page({
    title:         "Data Management Services",
    description:   "Insights, reporting, and BI enablement.",
    href:          serviceCategoryPaths['data-management'],
    overviewLabel: "View Data Management Services Overview",
    tier3: [
      { title: "Power BI and Analytics",           description: "Power BI dashboards and analytics", id: "power-bi" },
      { title: "Business Intelligence Solutions",  description: "Enterprise BI platforms",           id: "bi-solutions" },
      { title: "Data Visualization and Reporting", description: "Reports and visual storytelling",   id: "data-visualization" },
    ],
  }),

  /* ── Tier 2: ESG Services ──────────────────────────────────────────────── */
  tier2Page({
    title:         "ESG Services",
    description:   "ESG data, reporting and supplier due diligence.",
    href:          serviceCategoryPaths['esg'],
    overviewLabel: "View ESG Services Overview",
    tier3: [
      { title: "ESG Data and Reporting",             description: "Indicators, data collection and reports", id: "esg-data-reporting" },
      { title: "CSRD Readiness Assessment",          description: "Gap analysis and roadmap",               id: "csrd-readiness" },
      { title: "Carbon Accounting and Footprinting", description: "Scope 1, 2 and 3 emissions",             id: "carbon-accounting" },
      { title: "Supplier ESG Due Diligence",         description: "Supply-chain risk and evidence",         id: "supplier-due-diligence" },
    ],
  }),

  /* ── Tier 2: Cloud & Infrastructure Services ───────────────────────────── */
  tier2Page({
    title:         "Cloud & Infrastructure Services",
    description:   "Cloud strategy and migration.",
    href:          serviceCategoryPaths['cloud'],
    overviewLabel: "View Cloud & Infrastructure Services Overview",
    tier3: [
      { title: "Cloud Consulting",                  description: "Cloud readiness and strategy",    id: "cloud-consulting" },
      { title: "Cloud Architecture and Migration",  description: "Architect and migrate workloads", id: "cloud-migration" },
      { title: "Hybrid and Multi-Cloud Enablement", description: "Flexible cloud operating models", id: "hybrid-multicloud" },
    ],
  }),

  /* ── Tier 2: BPO Services ──────────────────────────────────────────────── */
  tier2Page({
    title:         "BPO Services",
    description:   "Business processes, run and automated for you.",
    href:          serviceCategoryPaths['bpo'],
    overviewLabel: "View BPO Services Overview",
    tier3: [
      { title: "Workflow Automation",             description: "Streamlined process flows",     id: "workflow-automation" },
      { title: "RPA Robotic Process Automation",  description: "Bot-driven task automation",    id: "rpa" },
      { title: "Digital Transformation Services", description: "Operating model modernization", id: "digital-transformation" },
    ],
  }),
];


/* ============================================================================
 * 6. MENU BAR — puts the four menus above together, left to right
 * ========================================================================= */

export const mainNav = {
  // The drop-down menus.
  solutions:  solutionsMenu,
  industries: industriesMenu,
  platforms:  platformsMenu,
  services:   servicesMenu,

  // Plain links with no drop-down, shown after the menus above.
  extraLinks: [
    { label: "Company", href: "/company" },
  ],

  // The button on the right of the bar.
  cta: { label: "Contact us", href: "/contact" },
};


/* ============================================================================
 * 7. FOOTER (the dark band at the bottom of every page)
 * ========================================================================= */

export const footer = {
  tagline: "Engineering intelligent digital platforms for modern enterprises.",

  // The link columns, left to right. (The Solutions column was removed on
  // request, Sept 2026 — the Solutions menu in the header covers it.)
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers",  href: "#" },
        { label: "Insights", href: "#" },
        { label: "Contact",  href: "/contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Case Studies", href: "#" },
        { label: "Research",     href: "#" },
        { label: "Blog",         href: "#" },
        { label: "Events",       href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy",       href: "/privacy" },
        { label: "Terms and Conditions", href: "/terms" },
        { label: "Cookie Policy",        href: "#" },
      ],
    },
  ],

  // The bottom strip. The year is filled in automatically, so it is not here.
  copyrightHolder: "ITG Technologies Co. All rights reserved.",
  bottomLinks: [
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy",       href: "/privacy" },
  ],
  linkedin: "https://www.linkedin.com/company/itgtechnologiescompany/posts/?feedView=all",
};


/* ============================================================================
 * 8. COOKIE SETTINGS (the popup on a visitor's first visit)
 * ========================================================================= */

export const cookieBar = {
  title: "We value your privacy",
  body: "We use cookies that are needed for the site to work and, with your permission, analytics cookies to understand how the site is used.",
  policyLink: { label: "Read our Privacy Policy", href: "/privacy" },
  acceptAll: "Accept all",
  necessaryOnly: "Necessary only",
  savePreferences: "Save preferences",
  close: "Close cookie settings",
  essentialTitle: "Essential",
  essentialDescription: "Required for basic site functionality and saved preferences.",
  alwaysActive: "Always active",
  analyticsTitle: "Analytics",
  analyticsDescription: "Help us understand aggregate site usage when analytics is enabled.",
  // The footer link that lets a visitor change their choice later.
  settingsLink: "Cookie settings",
};
