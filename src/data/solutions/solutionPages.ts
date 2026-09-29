import { solutionPage as ai } from '@/data/solutions/artificial-intelligence.js';
import { solutionPage as enterprise } from '@/data/solutions/enterprise-solutions.js';
import { solutionPage as sustainability } from '@/data/solutions/esg-solutions.js';
import { solutionPage as digital } from '@/data/solutions/custom-solutions.js';
import { solutionPage as automation } from '@/data/solutions/industrial-solutions.js';
import { solutionPage as dataPrivacy } from '@/data/solutions/data-privacy-solutions.js';

export type SolutionPageContent = {
  id: string; name: string; shortName: string; icon: string; image: string;
  headline: string; accent: string; description: string;
  overview: { eyebrow: string; title: string; body: string; note: string };
  outcomes: { icon: string; title: string; body: string }[];
  capabilitiesIntro: string;
  capabilities: {
    id: string; icon: string; title: string; subtitle: string; description: string; focus: string[]; outcome: string[];
    coreCapabilities?: { icon: string; title: string; body: string }[];
  }[];
  itemPage?: { whyIcons: string[]; steps: { eyebrow: string; title: string; items: { title: string; body: string }[] } };
  applications: { icon: string; title: string; body: string }[];
  feature: { eyebrow: string; title: string; body: string; points: string[]; image: string; imageAlt: string };
  cta: { title: string; body: string; label: string };
};

// Order matters: it is the order of the "related solutions" cards on each page,
// and matches the Solutions menu in data/site/site.js. Every page here gets the
// route /<id> automatically (see routes/AppRoutes.tsx).
export const solutionPages: SolutionPageContent[] = [ai, enterprise, sustainability, digital, automation, dataPrivacy]
  // An item with `coreCapabilities` lists their titles as its bullet points.
  .map(page => ({
    ...page,
    capabilities: page.capabilities.map(item => item.coreCapabilities
      ? { ...item, focus: item.coreCapabilities.map(core => core.title) }
      : item),
  }));
// The addresses these pages had before they were renamed are forwarded by
// src/routes/oldAddresses.ts.
