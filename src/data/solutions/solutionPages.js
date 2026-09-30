import { solutionPage as ai } from '@/data/solutions/artificial-intelligence.js';
import { solutionPage as enterprise } from '@/data/solutions/enterprise-solutions.js';
import { solutionPage as sustainability } from '@/data/solutions/esg-solutions.js';
import { solutionPage as digital } from '@/data/solutions/custom-solutions.js';
import { solutionPage as automation } from '@/data/solutions/industrial-solutions.js';
import { solutionPage as dataPrivacy } from '@/data/solutions/data-privacy-solutions.js';

// Order matters: it is the order of the "related solutions" cards on each page,
// and matches the Solutions menu in data/site/site.js. Every page here gets the
// route /<id> automatically (see routes/AppRoutes.jsx).
export const solutionPages = [ai, enterprise, sustainability, digital, automation, dataPrivacy]
  // An item with `coreCapabilities` lists their titles as its bullet points.
  .map(page => ({
    ...page,
    capabilities: page.capabilities.map(item => item.coreCapabilities
      ? { ...item, focus: item.coreCapabilities.map(core => core.title) }
      : item),
  }));
