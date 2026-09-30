import { itemPageLabels, itemFamilies, pageExtras } from './item-page.js';
import { solutionDetail } from '@/data/solutions/solution-detail.js';
import { platformPages, platformDetail } from '@/data/platforms/platform-detail.js';
import { servicePages, serviceDetail } from '@/data/services/service-detail.js';
import { industryPages, industryDetail } from '@/data/industries/industry-detail.js';
import { solutionPages } from '@/data/solutions/solution-pages.js';
import { contactLink } from '@/lib/contact-link';

/* Every Tier 3 page, built from the item's entry on its Tier 2 page so the two
   can't disagree. routes/AppRoutes.jsx turns each entry into a route at `path`. */

const solutionParents = solutionPages.map(page => ({
  family: 'solutions', name: page.name, shortName: page.shortName, href: `/${page.id}`, icon: page.icon,
  image: page.image,
  items: page.capabilities.map(cap => ({
    id: cap.id, title: cap.title, tagline: cap.subtitle, body: cap.description, icon: cap.icon, focus: cap.focus, outcomes: cap.outcome,
    // Items with core capabilities get the fuller item page: overview, cards and steps.
    extras: cap.coreCapabilities && {
      overview: { title: 'Overview', body: [cap.description] },
      why: cap.outcome.map((title, index) => ({ icon: page.itemPage.whyIcons[index], title, body: cap.subtitle })),
      applied: { title: 'Core capabilities', items: cap.coreCapabilities },
      steps: page.itemPage.steps,
    },
  })),
  why: page.outcomes,
  applied: { title: solutionDetail.applicationsTitle, intro: solutionDetail.applicationsIntro, items: page.applications },
  steps: { eyebrow: solutionDetail.approachEyebrow, title: solutionDetail.approachTitle, intro: solutionDetail.approachIntro, items: solutionDetail.steps },
  contact: solutionDetail,
}));

// Data Privacy has no products yet, so it contributes no Tier 3 pages.
const platformParents = platformPages.map(page => ({
  family: 'platforms', name: page.title, shortName: page.shortName, href: page.href, icon: page.icon,
  image: page.image, imagePosition: page.focus,
  items: page.products.map(product => ({ id: product.id, title: product.name, tagline: product.description, body: product.body, icon: product.icon, focus: product.focus })),
  why: platformDetail.integrationPoints,
  steps: { eyebrow: serviceDetail.deliveryEyebrow, title: serviceDetail.deliveryTitle, intro: serviceDetail.deliveryIntro, items: serviceDetail.steps },
  contact: platformDetail,
}));

const serviceParents = servicePages.map(page => ({
  family: 'services', name: page.name, shortName: page.shortName, href: page.href, icon: page.icon,
  image: page.image, imagePosition: page.focus,
  items: page.services.map(service => ({ id: service.id, title: service.name, tagline: service.description, body: service.body, icon: service.icon, focus: service.focus })),
  why: page.outcomes,
  steps: { eyebrow: serviceDetail.deliveryEyebrow, title: serviceDetail.deliveryTitle, intro: serviceDetail.deliveryIntro, items: serviceDetail.steps },
  contact: serviceDetail,
}));

const industryParents = industryPages.map(page => ({
  family: 'industries', name: page.name, shortName: page.shortName, href: page.href, icon: page.icon,
  image: page.image, imagePosition: page.focus,
  items: page.segments.map(segment => ({ id: segment.id, title: segment.name, tagline: segment.description, body: segment.body, icon: segment.icon, focus: segment.focus })),
  why: page.outcomes,
  applied: { title: industryDetail.capabilitiesTitle, items: page.capabilities },
  steps: { eyebrow: industryDetail.approachEyebrow, title: industryDetail.approachTitle, intro: industryDetail.approachIntro, items: industryDetail.steps },
  contact: industryDetail,
}));

export const itemPath = (parentHref, id) => `${parentHref}/${id}`;

export const itemPages = [...solutionParents, ...platformParents, ...serviceParents, ...industryParents]
  .flatMap(parent => parent.items.map(item => {
    const path = itemPath(parent.href, item.id);
    const extras = pageExtras[path] ?? item.extras ?? {};
    const contactHref = parent.contact.contactEmail
      ? `mailto:${parent.contact.contactEmail}?subject=${encodeURIComponent(`${item.title} enquiry`)}`
      : contactLink(parent.contact.contactFallback.href, item.title);
    return {
      path, family: parent.family, id: item.id,
      title: item.title, tagline: item.tagline, body: item.body, icon: item.icon,
      image: extras.image ?? parent.image,
      imagePosition: extras.image ? undefined : parent.imagePosition,
      parent: { name: parent.name, shortName: parent.shortName, href: parent.href, icon: parent.icon },
      focus: item.focus, outcomes: item.outcomes ?? [],
      why: extras.why ?? parent.why, applied: extras.applied ?? parent.applied, steps: extras.steps ?? parent.steps,
      siblings: parent.items.filter(other => other.id !== item.id).map(other => ({
        title: other.title, description: other.tagline, icon: other.icon, href: itemPath(parent.href, other.id),
      })),
      overview: extras.overview,
      metrics: extras.metrics,
      hero: extras.hero,
      contact: extras.contact,
      contactHref,
    };
  }));

// Fills {kind}, {kinds}, {parent} and {title} in a label from items/item-page.js.
export function itemLabel(key, page) {
  const family = itemFamilies[page.family];
  return itemPageLabels[key]
    .replaceAll('{kinds}', family.kinds)
    .replaceAll('{kind}', family.kind)
    .replaceAll('{parent}', page.parent.name)
    .replaceAll('{title}', page.title);
}
