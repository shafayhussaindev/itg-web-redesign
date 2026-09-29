// Product definition and workflow supplied by the user. Keep the published route stable.
export const aullect = {
  tagline: 'AI-powered address intelligence for GCC deliveries.',
  body: 'Aullect turns unstructured customer addresses into structured location data and optimized delivery sequences. Built for the Gulf Cooperation Council (GCC) market, it connects customer checkout inputs with fleet routing engines through an independent logistics intelligence layer.',
  focus: ['Arabic, transliterated English and mixed-language address parsing', 'District, street, building and coordinates with confidence scores', 'Route sequencing around fleet capacity, time windows and priorities', 'Location refinement using delivery outcomes and driver corrections'],
  overview: {
    title: 'From a checkout address to a delivery-ready location.',
    body: [
      'Customer addresses arrive as free text in Arabic script, Arabized English transliterations or a mixture of languages. Aullect parses those inputs into district, street, building and coordinates, with confidence scoring to support routing decisions.',
      'Designed as software infrastructure between checkout inputs and fleet routing engines, Aullect supports e-commerce and logistics teams that need usable address data, constraint-aware delivery sequencing and a location record that improves with completed deliveries.',
      'Aullect operates as a neutral, independent software provider. Per-customer data isolation and an optional shared-learning model give enterprises a choice in how learning is applied while avoiding competitive conflicts associated with carrier-owned solutions.',
    ],
  },
  why: [
    { icon: 'location_on', title: 'More usable address data', body: 'Normalize multilingual checkout text into consistent address components and coordinates, with confidence scores that make the quality of each result visible.' },
    { icon: 'route', title: 'Routes that reflect operations', body: 'Sequence deliveries using high-confidence coordinates while accounting for vehicle capacity, fleet availability, delivery windows and priorities.' },
    { icon: 'trending_up', title: 'Locations that improve over time', body: 'Use delivery confirmations, driver corrections and completed outcomes to refine stored geographic coordinates for future deliveries.' },
  ],
  applied: {
    title: 'Connect Aullect to your existing delivery stack.',
    intro: 'Deployed as an infrastructure layer ready for API integration with the systems your teams already use.',
    items: [
      { icon: 'shopping_cart', title: 'E-commerce checkout', body: 'Connect unstructured customer address inputs to AI parsing and normalization.' },
      { icon: 'local_shipping', title: 'Transport Management Systems', body: 'Integrate structured address and location data into existing TMS workflows.' },
      { icon: 'hub', title: 'Enterprise resource planning', body: 'Connect Aullect through APIs to existing ERP systems.' },
      { icon: 'route', title: 'Fleet routing stacks', body: 'Bridge normalized addresses and high-confidence coordinates with existing fleet routing engines.' },
    ],
  },
  steps: {
    eyebrow: 'Understand → Route → Learn',
    title: 'A continuous address-to-delivery workflow.',
    intro: 'Turn customer inputs into delivery plans, then use real delivery outcomes to improve the next cycle.',
    items: [
      { title: 'Understand', body: 'AI address parsing handles Arabic script, Arabized English transliterations and mixed-language inputs. It produces district, street, building and coordinates with confidence scoring.' },
      { title: 'Route', body: 'Convert high-confidence coordinates into optimized route sequences that factor in vehicle capacities, fleet availability, delivery time windows and priorities.' },
      { title: 'Learn', body: 'Refine stored geographic coordinates over time using delivery confirmations, driver corrections and completed delivery outcomes.' },
    ],
  },
};
