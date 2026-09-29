// Product content supplied in LIA.pdf. Keep the published route stable.
export const lawIntoAction = {
  tagline: 'Navigating Global Compliance: The New Standard for SMEs',
  body: 'Law Into Action (LIA) transforms fragmented regulatory complexity into actionable business intelligence. Engineered specifically for small and medium-sized enterprises (SMEs), LIA eliminates traditional reliance on manual legal hunting, delivering product-level compliance checks and real-time operational guidance across international borders.',
  stats: [
    { value: '63', title: 'Global regulations', body: 'Curated frameworks across sustainability, trade, and corporate accountability.' },
    { value: '17', title: 'Jurisdictions', body: 'Coverage spans the European Union, UK, US, Asia-Pacific, and Americas.' },
    { value: 'Weekly', title: 'AI web scanning', body: 'Continuous automated legal surveillance replacing static manual updates.' },
  ],
  risks: [
    { title: 'Financial penalties', body: 'Regulatory non-compliance with major EU and global directives can trigger punitive fines reaching up to 5% of annual turnover.' },
    { title: 'Market access denial', body: 'Immediate product bans and customs impoundments across European Union single-market borders and key trade corridors.' },
    { title: 'Commercial viability', body: 'Client delisting, partner breach of warranty claims, and outright exclusion from tier-one international supply chains.' },
    { title: 'Operational drain', body: 'SMEs lose weeks deciphering dense, unstandardized legal texts across multiple government websites instead of driving growth.' },
  ],
  comparison: [
    ['Manual searches across scattered government sites', 'Centralized global regulatory catalog across 17 jurisdictions'],
    ['Dense, generic, and impenetrable statutory texts', 'AI-powered, plain-language answers and structured obligations'],
    ['Guessing applicability across product lines and roles', 'Personalized 4-step wizard matching company size and trade role'],
    ['Reactive, periodic panic during audits and customs stops', 'Continuous weekly AI Radar surveillance and proactive updates'],
  ],
  wizard: [
    { title: 'Location', body: 'Target country or continent: Europe, Americas, Asia, or Australia.' },
    { title: 'Product type', body: 'Industry category, such as Electronics, Fashion, Textiles, or Footwear.' },
    { title: 'Business role', body: 'Entity standing: Importer, Manufacturer, or Retailer.' },
    { title: 'Company size', body: 'Turnover thresholds and headcount classifications.' },
  ],
  jurisdictions: ['European Union', 'Germany', 'France', 'Netherlands', 'Sweden', 'Norway', 'Switzerland', 'United Kingdom', 'USA', 'Canada', 'Mexico', 'Chile', 'China', 'Hong Kong SAR', 'Japan', 'India', 'Australia'],
  prompts: [
    'What is CSRD and does it apply to non-EU holding entities?',
    'Explain EUDR (Deforestation Regulation) deadlines and traceability obligations.',
    'Who must comply with LkSG (German Supply Chain Due Diligence Act)?',
  ],
  tabs: ['Overview', 'Applicability', 'Summary', 'Obligations', 'Documents'],
  governance: [
    { title: 'Board of Directors', body: 'Mandatory review and strategic risk approvals.' },
    { title: 'CEO / Director', body: 'Statutory signing authority and compliance warranties.' },
    { title: 'Compliance / ESG', body: 'Daily execution, audits, and reporting oversight.' },
  ],
  carbonInputs: [
    ['Supply chain', 'Non-EU Supplier to EU Importer'],
    ['Target sector', 'CBAM Industrial Sector Classification'],
    ['Country of origin', 'Exporting nation emission baseline'],
    ['Export volume', 'Metric Tonnes (tCO₂e)'],
    ['Compliance year', '2026 (Phase-in start)'],
  ],
  architecture: [
    { title: 'User action', body: 'AI Conversational Assistant, 4-Step Compliance Check Wizard, and CBAM Carbon Estimator.' },
    { title: 'Storage & curation', body: 'Global Regulatory Taxonomy, 17 Jurisdictions Registry, Data Verification, and API Engine.' },
    { title: 'Continuous ingestion', body: 'AI Radar: automated global crawling across official gazettes and statutory amendments.' },
  ],
  apiBenefits: [
    'Direct integration with ERP, TMS, and CRM platforms',
    'Real-time metadata delivery for active regulations, such as EUTR',
    'Turnkey value-added regulatory services without hosting infrastructure',
  ],
  apiExample: JSON.stringify({ regulation: 'EUTR', status: 'Active', jurisdiction: 'EU', obligations: ['Due Diligence', 'Traceability'] }, null, 2),
};
