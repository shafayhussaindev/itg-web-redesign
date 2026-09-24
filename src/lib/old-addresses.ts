// Addresses that pages used to live at, and where they live now. Each old
// address forwards to its new one, keeping any ?query and #section, so links
// that were shared or bookmarked keep working (see App.tsx).
//
// vercel.json has the same list as permanent (301) redirects, so search
// engines move their listings too. KEEP THE TWO LISTS IN STEP.
export const oldAddresses: Record<string, string> = {
  // Solutions, renamed Sept 2026.
  '/ai-intelligence': '/artificial-intelligence',
  '/enterprise-systems': '/enterprise-solutions',
  '/sustainability-compliance': '/esg-solutions',
  '/digital-experience': '/custom-solutions',
  '/automation-cloud': '/industrial-solutions',

  // Products became Platforms, Sept 2026. The five old category pages were
  // replaced by six platforms that don't line up one-to-one, so they all
  // forward to the Platforms overview.
  '/products': '/platforms',
  '/enterprise-business-platforms': '/platforms',
  '/sustainability-compliance-platforms': '/platforms',
  '/asset-operations-platforms': '/platforms',
  '/ai-intelligence-platforms': '/platforms',
  '/digital-experience-platforms': '/platforms',

  // Services went from six categories to four, Sept 2026. The two removed
  // categories (Enterprise Platforms, AI & Advanced) forward to /services.
  '/digital-engineering-services': '/engineering-services',
  '/data-analytics-intelligence': '/data-management-services',
  '/automation-process-services': '/bpo-services',
  '/enterprise-platform-services': '/services',
  '/ai-advanced-technology-services': '/services',

  // Industries went from eleven sectors to five, Sept 2026. The six removed
  // sectors forward to /industries.
  '/retail-consumer-goods': '/consumer-goods',
  '/manufacturing-industrial': '/manufacturing-industries',
  '/logistics-supply-chain': '/logistics-supply-chain-operations',
  '/real-estate-construction': '/real-estate-construction-facilities',
  '/enterprise-corporate': '/industries',
  '/healthcare-life-sciences': '/industries',
  '/government-public-sector': '/industries',
  '/energy-sustainability-esg': '/industries',
  '/education-research': '/industries',
  '/travel-hospitality': '/industries',
};
