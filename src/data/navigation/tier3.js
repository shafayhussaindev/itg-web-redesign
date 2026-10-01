// Tier 3 menu labels and order follow ITG Website Menu Review.xlsx (Site Map).
// An id becomes <parent href>/<id>; keep it aligned with page content.
export const tier3Navbar = {
  solutions: {
    "/artificial-intelligence": [
      { id: "ai-compliance-and-risk-advisory" },
      { id: "applied-ai" },
      { id: "ai-enabled-saas-platforms" },
      { id: "document-ai" },
      { id: "industrial-ai" },
      { id: "ai-based-audit" },
    ],
    "/enterprise-solutions": [
      { id: "vendor-info-and-risk-management" },
      { id: "contract-management" },
      { id: "digital-transformation" },
      { id: "product-lifecycle-management" },
      { id: "customer-relationship-management" },
      { id: "supply-chain-management" },
    ],
    "/esg-solutions": [
      { id: "sustainability-reporting-and-management" },
      { id: "sbti-management" },
      { id: "esg-risk-management" },
      { id: "circularity-management" },
      { id: "compliance-and-audit-management" },
    ],
    "/custom-solutions": [
      { id: "desktop-and-web-app-development" },
      { id: "mobile-app-development" },
      { id: "business-process-re-engineering" },
      { id: "e-commerce-and-marketplaces" },
      { id: "generative-media-production" },
    ],
    "/industrial-solutions": [
      { id: "bom-management" },
      { id: "process-management" },
      { id: "quality-management" },
      { id: "industry-4-0" },
      { id: "traceability-and-tracking-management" },
      { id: "erp" },
      { id: "industrial-audit" },
    ],
    "/data-privacy-solutions": [
      { id: "gdpr-pdpl-management", description: "Manage privacy obligations and records."  },
      { id: "data-discovery-and-classification", description: "Find and classify personal data." },
      { id: "ropa-automation" },
      { id: "consent-and-preference-management" },
      { id: "data-protection-and-access-control", description: "Control access to sensitive data." },
      { id: "zero-data-retention" },
      { id: "data-privacy-and-information-security" },
    ],
  },
  industries: {
    "/consumer-goods": [
      { id: "electronics" },
      { id: "fashion-and-apparel" },
      { id: "household-and-decor" },
      { id: "food-and-beverages" },
      { id: "footwear" },
    ],
    "/manufacturing-industries": [
      { id: "spinning-mills" },
      { id: "home-textile" },
      { id: "garments" },
      { id: "fertilizers" },
      { id: "food-packaging" },
    ],
    "/logistics-supply-chain-operations": [
      { id: "warehouse-automation" },
      { id: "last-mile-delivery" },
      { id: "shipment-management-automation" },
      { id: "ocean-logistics-intelligence" },
      { id: "courier-integration" },
    ],
    "/real-estate-construction-facilities": [
      { id: "project-management" },
      { id: "facility-management" },
      { id: "asset-management" },
    ],
    "/professional-services": [
      { id: "agency-automation" },
      { id: "test-and-audit-automation" },
      { id: "legal-and-compliance-automation" },
      { id: "esg-and-audit-automation" },
    ],
  },
  platforms: {
    "/sourcing": [
      { id: "consumer-goods-intelligence" },
      { id: "law-into-action" },
    ],
    "/supply-chain": [
      { id: "cgi-industrial-erp" },
      { id: "rilits" },
      { id: "aullect" },
    ],
    "/contract-lifecycle": [
      { id: "enterprise-procurement" },
      { id: "human-resource" },
    ],
    "/supplier-info-risk-management": [
      { description: "Supplier information and risk visibility.", id: "svitch" },
    ],
    "/product-lifecycle-management": [
      { description: "EU-ready Digital Product Passports.", id: "traceme-dpp" },
      { description: "Live availability lists for B2B buyers.", id: "digital-showroom" },
    ],
    "/data-privacy": [
      { description: "Govern personal data across systems.", id: "amanah" },
    ],
  },
  services: {
    "/engineering-services": [
      { id: "ai-and-agentic-systems-integration" },
      { id: "embedded-iot-and-edge-computing" },
      { id: "cloud-and-platform-modernization" },
      { id: "dedicated-product-engineering-pods" },
    ],
    "/data-management-services": [
      { id: "data-cleansing-validation-and-hygiene" },
      { id: "data-migration-and-etl-pipeline-services" },
      { id: "data-warehousing" },
    ],
    "/esg-services": [
      { id: "carbon-accounting-and-esg-dashboards" },
      { id: "supply-chain-esg-and-vendor-sustainability" },
      { id: "green-it-and-carbon-footprint-optimization" },
      { id: "automated-regulatory-disclosure-engines" },
    ],
    "/cloud-infrastructure-services": [
      { id: "cloud-and-infrastructure-security" },
      { id: "security-assessment-and-testing" },
      { id: "soc-maturity-assessment" },
      { description: "Put risk and compliance controls in place.", id: "grc-implementation" },
    ],
    "/bpo-services": [
      { id: "technical-support-and-it-help-desk" },
      { id: "ai-training-data-operations" },
      { id: "b2b-sdr-support" },
      { description: "Support finance and accounting processes.", id: "finance-and-accounting-outsourcing-fao" },
    ],
  },
};
