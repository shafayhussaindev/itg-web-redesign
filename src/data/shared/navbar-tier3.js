// Tier 3 menu labels and order follow ITG Website Menu Review.xlsx (Site Map).
// An id becomes <parent href>/<id>; keep it aligned with page content.
export const tier3Navbar = {
  solutions: {
    "/artificial-intelligence": [
      { title: "AI Compliance & Risk Advisory", description: "Guidance on AI governance and risk.", id: "ai-strategy" },
      { title: "Applied AI", description: "AI for practical business workflows.", id: "applied-ai-ml" },
      { title: "AI Enabled SaaS Platforms", description: "Software platforms with embedded AI.", id: "data-platforms" },
      { title: "Document AI", description: "Extract and process document information.", id: "ai-document-intel" },
      { title: "Industrial AI", description: "AI for connected industrial operations.", id: "industry-4-0" },
      { title: "AI Based Audit", description: "Use AI to support audit review.", id: "dpp-ai" },
    ],
    "/enterprise-solutions": [
      { title: "Vendor Info & Risk Management", description: "Track vendor records and risk.", id: "procurement-vendor" },
      { title: "Contract Management", description: "Manage agreements and obligations.", id: "multi-entity-systems" },
      { title: "Digital Transformation", description: "Modernize systems and business processes.", id: "erp-solutions" },
      { title: "Product Lifecycle Management", description: "Connect product data across its lifecycle.", id: "manufacturing-erp" },
      { title: "Customer Relationship Management", description: "Organize customer data and engagement.", id: "crm-engagement" },
      { title: "Supply Chain Management", description: "Coordinate sourcing, inventory and delivery.", id: "financial-ops" },
    ],
    "/esg-solutions": [
      { title: "Sustainability Reporting & Management", description: "Collect and report sustainability data.", id: "esg-solutions" },
      { title: "SBTi Management", description: "Track science-based climate targets.", id: "csrd" },
      { title: "ESG Risk Management", description: "Identify and monitor ESG risks.", id: "dpp-eu" },
      { title: "Circularity Management", description: "Track materials and circular use.", id: "traceability" },
      { title: "Compliance & Audit Management", description: "Manage evidence and audit readiness.", id: "compliance-audit" },
      { title: "Data Privacy & Information Security", description: "Protect data and manage security controls.", id: "carbon-circularity" },
    ],
    "/custom-solutions": [
      { title: "Desktop & Web App Development", description: "Build applications for desktop and web.", id: "enterprise-web" },
      { title: "Mobile App Development", description: "Build mobile applications for your users.", id: "mobile-apps" },
      { title: "Business Process Re-engineering", description: "Redesign workflows and handoffs.", id: "ui-ux-design" },
      { title: "E-Commerce & Marketplaces", description: "Build digital commerce and marketplace tools.", id: "digital-portals" },
      { title: "Generative Media Production", description: "Create media with generative tools.", id: "branding-design" },
    ],
    "/industrial-solutions": [
      { title: "BOM Management", description: "Control bills of materials and revisions.", id: "workflow-automation" },
      { title: "Process Management", description: "Map and improve industrial workflows.", id: "rpa" },
      { title: "Quality Management", description: "Track quality checks and issues.", id: "cloud-modernization" },
      { title: "Industry 4.0", description: "Connect production data and systems.", id: "hybrid-multi-cloud" },
      { title: "Traceability & Tracking Management", description: "Track materials, assets and movement.", id: "system-api" },
      { title: "ERP", description: "Connect planning and core operations.", id: "document-records" },
      { title: "Industrial Audit", description: "Review controls and operational evidence.", id: "asset-rfid" },
    ],
    "/data-privacy-solutions": [
      { title: "GDPR/PDPL Management", description: "Manage privacy obligations and records.", id: "privacy-governance" },
      { title: "Data Discovery & Classification", description: "Find and classify personal data.", id: "data-discovery" },
      { title: "RoPA Automation", description: "Maintain records of processing activities.", id: "consent-management" },
      { title: "Consent & Preference Management", description: "Record and honor individual choices.", id: "data-subject-rights" },
      { title: "Data Protection & Access Control", description: "Control access to sensitive data.", id: "data-protection" },
      { title: "Zero Data Retention", description: "Limit storage of personal data.", id: "breach-response" },
    ],
  },
  industries: {
    "/consumer-goods": [
      { title: "Electronics", description: "Connect stores, online sales and inventory.", id: "omnichannel" },
      { title: "Fashion & Apparel", description: "Support fast-moving product operations.", id: "fmcg" },
      { title: "Household & Décor", description: "Manage online sales and marketplace channels.", id: "ecommerce" },
      { title: "Food & Beverages", description: "Coordinate brands, partners and distribution.", id: "brand-distributors" },
      { title: "Footwear", description: "Manage private label production workflows.", id: "private-label" },
    ],
    "/manufacturing-industries": [
      { title: "Spinning Mills", description: "Plan, run and monitor production.", id: "manufacturing-ops" },
      { title: "Home Textile", description: "Manage textile and apparel workflows.", id: "textile-apparel" },
      { title: "Garments", description: "Coordinate spinning and processing operations.", id: "spinning-mills" },
      { title: "Fertilizers", description: "Connect machines, data and factory teams.", id: "industry-4-0-factories" },
      { title: "Food Packaging", description: "Support diverse industrial operating models.", id: "heavy-light" },
    ],
    "/logistics-supply-chain-operations": [
      { title: "Warehouse Automation", description: "Track storage, stock and movement.", id: "warehousing" },
      { title: "Last-Mile Delivery", description: "Coordinate vehicles, routes and deliveries.", id: "transportation-fleet" },
      { title: "Shipment Management Automation", description: "Manage orders through fulfillment.", id: "distribution-fulfillment" },
      { title: "Ocean Logistics Intelligence", description: "Track vessel and container movement.", id: "last-mile" },
      { title: "Courier Integration", description: "Connect planning with execution.", id: "supply-chain-ops" },
    ],
    "/real-estate-construction-facilities": [
      { title: "Project Management", description: "Manage projects and property portfolios.", id: "real-estate-dev" },
      { title: "Facility Management", description: "Coordinate property and facility services.", id: "facilities" },
      { title: "Asset Management", description: "Track assets across their lifecycle.", id: "construction-controls" },
    ],
    "/professional-services": [
      { title: "Agency Automation", description: "Organize client work and delivery.", id: "consulting" },
      { title: "Test & Audit Automation", description: "Support audit workflows and reporting.", id: "financial-advisory" },
      { title: "Legal & Compliance Automation", description: "Manage cases, records and obligations.", id: "legal-compliance" },
      { title: "ESG & Audit Automation", description: "Coordinate accounting and audit work.", id: "accounting-audit" },
    ],
  },
  platforms: {
    "/sourcing": [
      { title: "Consumer Goods Intelligence", description: "Insights for consumer goods operations.", id: "integra-erp" },
      { title: "Law Into Action", description: "Turn legal requirements into workflows.", id: "integra-crm" },
    ],
    "/supply-chain": [
      { title: "CGI Industrial ERP", description: "ERP for industrial planning and operations.", id: "aullect" },
      { title: "RILITS", description: "Visibility across logistics and industrial assets.", id: "astaric" },
      { title: "Aullect", description: "Intelligence for logistics and operations.", id: "cyclo-erp" },
    ],
    "/contract-lifecycle": [
      { title: "Enterprise Procurement", description: "Manage purchasing across the enterprise.", id: "documax" },
      { title: "Human Resource", description: "Support workforce and HR processes.", id: "zeito" },
    ],
    "/supplier-info-risk-management": [
      { title: "Svitch", description: "Supplier information and risk visibility.", id: "ecomagnet" },
    ],
    "/product-lifecycle-management": [
      { title: "TraceMe -DPP", description: "Digital product passport and traceability.", id: "dpp-platform" },
      { title: "StyleLab", description: "Product catalogs and digital branding.", id: "style-lab" },
    ],
    "/data-privacy": [
      { title: "Amaanah", description: "Govern personal data across systems.", id: "amaanah" },
    ],
  },
  services: {
    "/engineering-services": [
      { title: "AI & Agentic Systems Integration", description: "Connect AI agents with business systems.", id: "web-development" },
      { title: "Embedded / IoT & Edge Computing", description: "Build connected devices and edge systems.", id: "application-development" },
      { title: "Cloud & Platform Modernization", description: "Update cloud architecture and platforms.", id: "ui-ux-design" },
      { title: "Dedicated Product Engineering (PODs)", description: "Focused teams for product delivery.", id: "graphic-design" },
    ],
    "/data-management-services": [
      { title: "Data Cleansing, Validation & Hygiene", description: "Improve data quality and consistency.", id: "power-bi" },
      { title: "Data Migration & ETL Pipeline Services", description: "Move and transform data reliably.", id: "bi-solutions" },
      { title: "Data Warehousing", description: "Organize data for analysis and reporting.", id: "data-visualization" },
    ],
    "/esg-services": [
      { title: "Carbon Accounting & ESG Dashboards", description: "Measure emissions and view ESG data.", id: "esg-data-reporting" },
      { title: "Supply Chain ESG & Vendor Sustainability", description: "Track supplier sustainability information.", id: "csrd-readiness" },
      { title: "Green IT & Carbon Footprint Optimization", description: "Review technology-related emissions.", id: "carbon-accounting" },
      { title: "Automated Regulatory Disclosure Engines", description: "Prepare recurring regulatory disclosures.", id: "supplier-due-diligence" },
    ],
    "/cloud-infrastructure-services": [
      { title: "Cloud & Infrastructure Security", description: "Protect cloud services and infrastructure.", id: "cloud-consulting" },
      { title: "Security Assessment and Testing", description: "Identify and test security weaknesses.", id: "cloud-migration" },
      { title: "SOC Maturity Assessment", description: "Review security operations capability.", id: "hybrid-multicloud" },
      { title: "GRC Implementation", description: "Put risk and compliance controls in place.", id: "grc-implementation" },
    ],
    "/bpo-services": [
      { title: "Technical Support & IT Help Desk", description: "Resolve user issues and support requests.", id: "workflow-automation" },
      { title: "AI Training Data Operations", description: "Prepare and manage AI training data.", id: "rpa" },
      { title: "B2B SDR Support", description: "Support prospecting and sales outreach.", id: "digital-transformation" },
      { title: "Finance & Accounting Outsourcing (FAO)", description: "Support finance and accounting processes.", id: "finance-accounting-outsourcing" },
    ],
  },
};
