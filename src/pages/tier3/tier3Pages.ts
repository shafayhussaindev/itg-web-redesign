import { tier3Detail, tier3Families, pageExtras } from '@/content/tier3/tier3-detail.js';
import { solutionDetail } from '@/content/tier2/solutions/solution-detail.js';
import { platformPages, platformDetail } from '@/content/tier2/platform-detail.js';
import { servicePages, serviceDetail } from '@/content/tier2/service-detail.js';
import { industryPages, industryDetail } from '@/content/tier2/industry-detail.js';
import { solutionPages } from '@/pages/tier2/solutions/solutionPages';
import { contactLink } from '@/lib/contact-link';

/* Every Tier 3 page, built from the item's entry on its Tier 2 page so the two
   can't disagree. App.tsx turns each entry into a route at `path`. */

type Card = { icon: string; title: string; body: string };
type Step = { title: string; body: string };
type Family = keyof typeof tier3Families;

export type Tier3Page = {
  path: string;
  family: Family;
  id: string;
  title: string;
  tagline: string;
  body: string;
  icon: string;
  image: string;
  imagePosition?: string;
  parent: { name: string; shortName: string; href: string; icon: string };
  focus: string[];
  outcomes: string[];
  why: Card[];
  applied?: { title: string; intro?: string; items: Card[] };
  steps: { eyebrow: string; title: string; intro?: string; items: Step[] };
  siblings: { title: string; description: string; icon: string; href: string }[];
  overview?: { title: string; body: string[] };
  contactHref: string;
};

type Item = { id: string; title: string; tagline: string; body: string; icon: string; focus: string[]; outcomes?: string[] };
type Parent = {
  family: Family; name: string; shortName: string; href: string; icon: string;
  image: string; imagePosition?: string; items: Item[]; why: Card[];
  applied?: Tier3Page['applied']; steps: Tier3Page['steps'];
  contact: { contactEmail: string; contactFallback: { href: string } };
};

const solutionParents: Parent[] = solutionPages.map(page => ({
  family: 'solutions', name: page.name, shortName: page.shortName, href: `/${page.id}`, icon: page.icon,
  image: page.image,
  items: page.capabilities.map(cap => ({ id: cap.id, title: cap.title, tagline: cap.subtitle, body: cap.description, icon: cap.icon, focus: cap.focus, outcomes: cap.outcome })),
  why: page.outcomes,
  applied: { title: solutionDetail.applicationsTitle, intro: solutionDetail.applicationsIntro, items: page.applications },
  steps: { eyebrow: solutionDetail.approachEyebrow, title: solutionDetail.approachTitle, intro: solutionDetail.approachIntro, items: solutionDetail.steps },
  contact: solutionDetail,
}));

// Data Privacy has no products yet, so it contributes no Tier 3 pages.
const platformParents: Parent[] = platformPages.map(page => ({
  family: 'platforms', name: page.title, shortName: page.shortName, href: page.href, icon: page.icon,
  image: page.image, imagePosition: page.focus,
  items: page.products.map(product => ({ id: product.id, title: product.name, tagline: product.description, body: product.body, icon: product.icon, focus: product.focus })),
  why: platformDetail.integrationPoints,
  steps: { eyebrow: serviceDetail.deliveryEyebrow, title: serviceDetail.deliveryTitle, intro: serviceDetail.deliveryIntro, items: serviceDetail.steps },
  contact: platformDetail,
}));

const serviceParents: Parent[] = servicePages.map(page => ({
  family: 'services', name: page.name, shortName: page.shortName, href: page.href, icon: page.icon,
  image: page.image, imagePosition: page.focus,
  items: page.services.map(service => ({ id: service.id, title: service.name, tagline: service.description, body: service.body, icon: service.icon, focus: service.focus })),
  why: page.outcomes,
  steps: { eyebrow: serviceDetail.deliveryEyebrow, title: serviceDetail.deliveryTitle, intro: serviceDetail.deliveryIntro, items: serviceDetail.steps },
  contact: serviceDetail,
}));

const industryParents: Parent[] = industryPages.map(page => ({
  family: 'industries', name: page.name, shortName: page.shortName, href: page.href, icon: page.icon,
  image: page.image, imagePosition: page.focus,
  items: page.segments.map(segment => ({ id: segment.id, title: segment.name, tagline: segment.description, body: segment.body, icon: segment.icon, focus: segment.focus })),
  why: page.outcomes,
  applied: { title: industryDetail.capabilitiesTitle, items: page.capabilities },
  steps: { eyebrow: industryDetail.approachEyebrow, title: industryDetail.approachTitle, intro: industryDetail.approachIntro, items: industryDetail.steps },
  contact: industryDetail,
}));

export const tier3Path = (parentHref: string, id: string) => `${parentHref}/${id}`;

export const tier3Pages: Tier3Page[] = [...solutionParents, ...platformParents, ...serviceParents, ...industryParents]
  .flatMap(parent => parent.items.map(item => {
    const path = tier3Path(parent.href, item.id);
    const extras = pageExtras[path] ?? {};
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
      why: parent.why, applied: parent.applied, steps: parent.steps,
      siblings: parent.items.filter(other => other.id !== item.id).map(other => ({
        title: other.title, description: other.tagline, icon: other.icon, href: tier3Path(parent.href, other.id),
      })),
      overview: extras.overview,
      contactHref,
    };
  }));

// Fills {kind}, {kinds}, {parent} and {title} in a label from tier3-detail.js.
export function tier3Label(key: keyof typeof tier3Detail, page: Tier3Page) {
  const family = tier3Families[page.family];
  return tier3Detail[key]
    .replaceAll('{kinds}', family.kinds)
    .replaceAll('{kind}', family.kind)
    .replaceAll('{parent}', page.parent.name)
    .replaceAll('{title}', page.title);
}
