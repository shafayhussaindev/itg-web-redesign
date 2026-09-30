import { enterpriseAppDevelopment } from '@/data/solutions/enterprise-app-development';
import { mobileAppDevelopment } from '@/data/solutions/mobile-app-development';
/* Tier 2: /custom-solutions. Keep capability ids aligned with data/navigation/tier3.js. */
export const solutionPage = {
  id: 'custom-solutions', name: 'Custom Solutions', shortName: 'Custom Solutions', icon: 'devices',
  image: '/images/solutions/cat-digital.jpg',
  headline: 'Built around people.', accent: 'Connected to your business.',
  description: 'Design and build applications, commerce experiences, improved processes and generative media workflows for your business.',
  overview: { eyebrow: 'Designed for your operating model', title: 'Make custom work solve a defined business need.', body: 'Custom solutions begin with the process and the audience. ITG designs the workflow, experience and integration around those needs, then delivers in reviewable stages.', note: 'The goal is a solution your teams can operate, maintain and extend.' },
  outcomes: [
    { icon: 'groups', title: 'Easier user journeys', body: 'Help customers and employees complete the tasks that matter with less friction.' },
    { icon: 'palette', title: 'Consistency at scale', body: 'Give teams reusable patterns that bring coherence across products and channels.' },
    { icon: 'code', title: 'A lasting foundation', body: 'Connect interface design to maintainable engineering and enterprise systems.' },
  ],
  capabilitiesIntro: 'Bring strategy, design and engineering together across the digital touchpoints your organization depends on.',
  capabilities: [
    { id: 'desktop-and-web-app-development', icon: 'language', title: 'Desktop & Web App Development', subtitle: enterpriseAppDevelopment.tagline, description: enterpriseAppDevelopment.body, focus: enterpriseAppDevelopment.focus, outcome: enterpriseAppDevelopment.outcome },
    { id: 'mobile-app-development', icon: 'devices', title: 'Mobile App Development', subtitle: mobileAppDevelopment.tagline, description: 'Design and engineer mobile applications around the context, devices and connectivity needs of your users.', focus: mobileAppDevelopment.focus, outcome: mobileAppDevelopment.outcome },
    { id: 'business-process-re-engineering', icon: 'grid_view', title: 'Business Process Re-engineering', subtitle: 'Redesign processes around measurable outcomes.', description: 'Document the current workflow, identify delays and unnecessary handoffs, and design a simpler process with clear roles and controls before automating it.', focus: ['Process discovery and measurement', 'Future-state workflow design', 'Roles, controls and adoption planning'], outcome: ['Fewer avoidable handoffs', 'A process ready for responsible automation'] },
    { id: 'e-commerce-and-marketplaces', icon: 'domain', title: 'E-Commerce & Marketplaces', subtitle: 'Build commerce experiences that connect to operations.', description: 'Create storefronts and marketplaces with product data, ordering, payment and fulfilment workflows that stay connected to the systems behind the sale.', focus: ['Catalog and checkout experiences', 'Marketplace and payment integrations', 'Order, inventory and fulfilment workflows'], outcome: ['A coherent buying experience', 'Orders visible across channels and operations'] },
    { id: 'generative-media-production', icon: 'palette', title: 'Generative Media Production', subtitle: 'Produce governed media at scale.', description: 'Use generative workflows to create visual and written assets while keeping brand standards, review and rights management in the production process.', focus: ['Creative direction and prompt systems', 'Brand and quality review workflows', 'Asset management and production handoff'], outcome: ['Faster production of approved assets', 'More consistent content across channels'] },
  ],
  applications: [
    { icon: 'shopping_bag', title: 'Customer experiences', body: 'Bring account information, service requests and useful content into a coherent customer journey.' },
    { icon: 'handshake', title: 'Partner ecosystems', body: 'Make onboarding, collaboration and access to shared information easier for business partners.' },
    { icon: 'work', title: 'Employee platforms', body: 'Simplify internal workflows and put everyday tools closer to the people who need them.' },
  ],
  feature: { eyebrow: 'From first idea to everyday use', title: 'Good design carries through to delivery.', body: 'We connect research, prototypes and design systems to application engineering, so the experience you define is the experience your users receive.', points: ['User needs shape the roadmap', 'Accessible, responsive interface patterns', 'Design and engineering working together'], image: '/images/services/pillar-design.jpg', imageAlt: 'Digital product design and interface planning' },
  cta: { title: 'Build an experience people want to use.', body: 'Share your audience, your challenge and your ambition. We will help turn them into a clear digital direction.', label: 'Talk to a Digital Experience Expert' },
};
