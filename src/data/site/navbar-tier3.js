// Tier 3 menu labels and order follow ITG Website Menu Review.xlsx (Site Map).
// An id becomes <parent href>/<id>; keep it aligned with page content.
export const tier3Navbar = {
  solutions: {
    "/artificial-intelligence": [
      { id: "ai-strategy" },
      { id: "applied-ai-ml" },
      { id: "data-platforms" },
      { id: "ai-document-intel" },
      { id: "industry-4-0" },
      { id: "dpp-ai" },
    ],
    "/enterprise-solutions": [
      { id: "procurement-vendor" },
      { id: "multi-entity-systems" },
      { id: "erp-solutions" },
      { id: "manufacturing-erp" },
      { id: "crm-engagement" },
      { id: "financial-ops" },
    ],
    "/esg-solutions": [
      { id: "esg-solutions" },
      { id: "csrd" },
      { id: "dpp-eu" },
      { id: "traceability" },
      { id: "compliance-audit" },
      { id: "carbon-circularity" },
    ],
    "/custom-solutions": [
      { id: "enterprise-web" },
      { id: "mobile-apps" },
      { id: "ui-ux-design" },
      { id: "digital-portals" },
      { id: "branding-design" },
    ],
    "/industrial-solutions": [
      { id: "workflow-automation" },
      { id: "rpa" },
      { id: "cloud-modernization" },
      { id: "hybrid-multi-cloud" },
      { id: "system-api" },
      { id: "document-records" },
      { id: "asset-rfid" },
    ],
    "/data-privacy-solutions": [
      { description: "Manage privacy obligations and records.", id: "privacy-governance" },
      { description: "Find and classify personal data.", id: "data-discovery" },
      { id: "consent-management" },
      { id: "data-subject-rights" },
      { description: "Control access to sensitive data.", id: "data-protection" },
      { id: "breach-response" },
    ],
  },
  industries: {
    "/consumer-goods": [
      { id: "omnichannel" },
      { id: "fmcg" },
      { id: "ecommerce" },
      { id: "brand-distributors" },
      { id: "private-label" },
    ],
    "/manufacturing-industries": [
      { id: "manufacturing-ops" },
      { id: "textile-apparel" },
      { id: "spinning-mills" },
      { id: "industry-4-0-factories" },
      { id: "heavy-light" },
    ],
    "/logistics-supply-chain-operations": [
      { id: "warehousing" },
      { id: "transportation-fleet" },
      { id: "distribution-fulfillment" },
      { id: "last-mile" },
      { id: "supply-chain-ops" },
    ],
    "/real-estate-construction-facilities": [
      { id: "real-estate-dev" },
      { id: "facilities" },
      { id: "construction-controls" },
    ],
    "/professional-services": [
      { id: "consulting" },
      { id: "financial-advisory" },
      { id: "legal-compliance" },
      { id: "accounting-audit" },
    ],
  },
  platforms: {
    "/sourcing": [
      { id: "integra-erp" },
      { id: "integra-crm" },
    ],
    "/supply-chain": [
      { id: "aullect" },
      { id: "astaric" },
      { id: "cyclo-erp" },
    ],
    "/contract-lifecycle": [
      { id: "documax" },
      { id: "zeito" },
    ],
    "/supplier-info-risk-management": [
      { description: "Supplier information and risk visibility.", id: "ecomagnet" },
    ],
    "/product-lifecycle-management": [
      { description: "Digital product passport and traceability.", id: "dpp-platform" },
      { description: "Product catalogs and digital branding.", id: "style-lab" },
    ],
    "/data-privacy": [
      { description: "Govern personal data across systems.", id: "amaanah" },
    ],
  },
  services: {
    "/engineering-services": [
      { id: "web-development" },
      { id: "application-development" },
      { id: "ui-ux-design" },
      { id: "graphic-design" },
    ],
    "/data-management-services": [
      { id: "power-bi" },
      { id: "bi-solutions" },
      { id: "data-visualization" },
    ],
    "/esg-services": [
      { id: "esg-data-reporting" },
      { id: "csrd-readiness" },
      { id: "carbon-accounting" },
      { id: "supplier-due-diligence" },
    ],
    "/cloud-infrastructure-services": [
      { id: "cloud-consulting" },
      { id: "cloud-migration" },
      { id: "hybrid-multicloud" },
      { description: "Put risk and compliance controls in place.", id: "grc-implementation" },
    ],
    "/bpo-services": [
      { id: "workflow-automation" },
      { id: "rpa" },
      { id: "digital-transformation" },
      { description: "Support finance and accounting processes.", id: "finance-accounting-outsourcing" },
    ],
  },
};
