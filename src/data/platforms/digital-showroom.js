// Digital Showroom (was StyleLab). Product details supplied by the owner, Sept 2026.
// Rendered by src/pages/ItemPage/custom/DigitalShowroomContent.jsx.
export const digitalShowroom = {
  tagline: 'Live availability, buyer-ready in minutes.',
  body: 'Digital Showroom holds every lot you have on the floor, builds buyer-ready availability lists on demand, and shares them through a link.',
  focus: ['Live inventory library for every lot', 'AI-assisted availability lists', 'Per-buyer visibility and pricing control', 'Secure buyer links, PDFs and PPT decks'],
  hero: {
    primary: { label: 'Book a 20-Minute Live Demo', href: '#contact' },
    secondary: { label: 'Explore Sample Showroom', href: '#sample' },
  },

  overview: {
    eyebrow: 'For B2B wholesale and circular trade',
    title: 'From bale to buyer link.',
    body: [
      'Stop trading over scattered spreadsheets and WhatsApp photos. Digital Showroom holds every lot you have on the floor, builds buyer-ready availability lists on demand, and shares them through a link.',
      'Built for wholesale traders, textile exporters, grading facilities, circular economy brokers and vintage resellers.',
    ],
  },

  steps: {
    eyebrow: 'Data store to sale',
    title: 'Four steps from the warehouse floor to a closed sale.',
    items: [
      { icon: 'inventory_2', title: 'Data store', body: 'One unified, live inventory library holding every lot on your warehouse floor.' },
      { icon: 'playlist_add', title: 'Build', body: 'Assemble tailor-made availability lists in minutes.' },
      { icon: 'share', title: 'Share', body: 'Distribute secure buyer web links, formatted PDFs or ready-to-present PPT decks.' },
      { icon: 'sell', title: 'Sell', body: 'Remove buying friction so buyers commit and close faster.' },
    ],
  },

  copilot: {
    eyebrow: 'AI Catalogue Copilot',
    title: 'Ask for a list in plain language.',
    body: 'Type what you need. The Copilot finds matching lots, applies the filters, sets what the buyer can see and saves the list.',
    prompts: [
      'Show all Grade A ladies summer wear in stock',
      'Build an availability list for our Guatemala buyers',
      'Everything landed this week, credential and graded',
      'Show only grade, packing and quantity — no pricing',
    ],
    actions: ['Finds matching lots', 'Applies filters', 'Toggles field visibility', 'Saves the list instantly'],
  },

  features: [
    { icon: 'inventory_2', title: 'Live Inventory Library', body: 'One central record for product categories, grading tiers, packaging types, photo galleries and custom metadata.' },
    { icon: 'playlist_add', title: 'Dynamic List Builder', body: 'Cart-style curation, custom list styling, instant publishing and export options.' },
    { icon: 'visibility', title: 'Visibility & Pricing Control', body: 'Decide exactly which data fields and pricing tiers each buyer segment can see.' },
    { icon: 'link', title: 'Secure Sharing', body: 'Generate buyer-specific private links, public catalogs or downloadable collateral.' },
    { icon: 'bolt', title: 'Bulk AI Operations', body: 'Update specifications across hundreds of lots at once.' },
    { icon: 'admin_panel_settings', title: 'Enterprise Governance', body: 'Role-based access control, approval hierarchies and complete audit logging.' },
  ],

  views: {
    eyebrow: 'Dynamic buyer views',
    title: 'One live inventory. Four conversations. No rebuilding.',
    items: [
      { id: 'wholesale', label: 'Wholesale export buyer', body: 'The commercial view for volume buyers.', fields: ['Grade', 'Packing', 'Available quantity', 'Lead time', 'Price (e.g. USD/lb)'] },
      { id: 'vintage', label: 'Vintage reseller', body: 'Condition and selection come first.', fields: ['Garment condition (e.g. “Wearable, no repairs”)', 'Origin', 'Hand-picked selection'] },
      { id: 'recycler', label: 'Recycler & fibre processor', body: 'Material and volume for processing decisions.', fields: ['Material composition mix', 'Weight', 'Batch availability'] },
      { id: 'enquiry', label: 'New enquiry', body: 'A restricted first look. Pricing and sensitive data stay hidden.', fields: ['Categories', 'Grades'] },
    ],
  },

  comparison: {
    eyebrow: 'Before and after',
    title: 'What changes on day one.',
    beforeLabel: 'Today, without Digital Showroom',
    afterLabel: 'With Digital Showroom',
    rows: [
      ['Photos and prices sent one by one over WhatsApp', 'One interactive, branded link per buyer'],
      ['Availability trapped in disconnected spreadsheets', 'A single, live source of inventory truth'],
      ['Lists rebuilt from scratch for every arriving container', 'New stock loads into the existing library'],
      ['No control over which buyers see which prices or data', 'Granular, per-buyer visibility controls'],
      ['Hours lost to repetitive data entry', 'Less admin, so the sales team can trade'],
    ],
  },

  sample: {
    eyebrow: 'Sample showroom',
    title: 'What a buyer-ready list looks like.',
    note: 'Sample data for illustration. A dash means the field is hidden or not recorded for that lot.',
    columns: ['Lot', 'Category', 'Grade', 'Packing', 'Origin', 'Quantity', 'Lead time', 'Price'],
    lots: [
      ['BV-GG-1001', 'Ladies Summer Wear', 'Grade A', '100 lb bales', 'Canada', '480 bales', '14 days', '$1.35/lb'],
      ['BV-GG-1024', 'Ladies Summer Wear', 'Grade A', '100 lb bales', '—', '480 available', '—', '—'],
      ['BV-SH-4002', 'Shoes & Footwear', 'Credential', 'Capsacks', '—', '210 available', '—', '—'],
      ['BV-LN-5011', 'Mixed Linens', '—', '45 kg bales', '—', '320 available', '—', '—'],
    ],
  },

  contact: {
    title: 'Let’s build your first availability list live.',
    body: 'Twenty minutes. Your own lots. Your own buyer.',
    cta: 'Book a 20-Minute Live Demo',
    person: 'Shafaq Azad, Sales Executive – Digital Product, ITG Technologies',
    email: 'shafaq.azad@itgllc.ae',
  },
};
