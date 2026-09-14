import { solutionPage as ai } from '@/content/ai-intelligence.js';
import { solutionPage as enterprise } from '@/content/enterprise-systems.js';
import { solutionPage as automation } from '@/content/automation-cloud.js';
import { solutionPage as digital } from '@/content/digital-experience.js';
import { solutionPage as sustainability } from '@/content/sustainability-compliance.js';

export type SolutionPageContent = {
  id: string; name: string; shortName: string; icon: string; image: string;
  headline: string; accent: string; description: string; tags: string[];
  overview: { eyebrow: string; title: string; body: string; note: string };
  outcomes: { icon: string; title: string; body: string }[];
  capabilitiesIntro: string;
  capabilities: { id: string; icon: string; title: string; subtitle: string; description: string; focus: string[]; outcome: string[] }[];
  applications: { icon: string; title: string; body: string }[];
  feature: { eyebrow: string; title: string; body: string; points: string[]; image: string; imageAlt: string };
  cta: { title: string; body: string; label: string };
};

export const solutionPages: SolutionPageContent[] = [ai, enterprise, automation, digital, sustainability];
