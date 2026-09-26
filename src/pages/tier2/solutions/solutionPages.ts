import { solutionPage as ai } from '@/content/tier2/solutions/artificial-intelligence.js';
import { solutionPage as enterprise } from '@/content/tier2/solutions/enterprise-solutions.js';
import { solutionPage as sustainability } from '@/content/tier2/solutions/esg-solutions.js';
import { solutionPage as digital } from '@/content/tier2/solutions/custom-solutions.js';
import { solutionPage as automation } from '@/content/tier2/solutions/industrial-solutions.js';
import { solutionPage as dataPrivacy } from '@/content/tier2/solutions/data-privacy-solutions.js';

export type SolutionPageContent = {
  id: string; name: string; shortName: string; icon: string; image: string;
  headline: string; accent: string; description: string;
  overview: { eyebrow: string; title: string; body: string; note: string };
  outcomes: { icon: string; title: string; body: string }[];
  capabilitiesIntro: string;
  capabilities: { id: string; icon: string; title: string; subtitle: string; description: string; focus: string[]; outcome: string[] }[];
  applications: { icon: string; title: string; body: string }[];
  feature: { eyebrow: string; title: string; body: string; points: string[]; image: string; imageAlt: string };
  cta: { title: string; body: string; label: string };
};

// Order matters: it is the order of the "related solutions" cards on each page,
// and matches the Solutions menu in content/site.js. Every page here gets the
// route /<id> automatically (see App.tsx).
export const solutionPages: SolutionPageContent[] = [ai, enterprise, sustainability, digital, automation, dataPrivacy];
// The addresses these pages had before they were renamed are forwarded by
// src/lib/old-addresses.ts.
