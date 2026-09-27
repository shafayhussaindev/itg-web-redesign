import { tier2Navbar } from './navbar-tier2.js';
import { tier3Navbar } from './navbar-tier3.js';
import { pageContent } from './page-content.js';

// The navigation is the source of truth for page names. Supporting copy lives
// beside the route below so a renamed offering cannot retain unrelated copy.
export function alignPageContent(family, href, page, options) {
  const { childrenKey, pageTitleKey, childTitleKey, childSummaryKey, childBodyKey } = options;
  const menuPage = tier2Navbar[family].find(item => item.href === href);
  const menuChildren = tier3Navbar[family][href] ?? [];
  const updates = pageContent[family]?.[href] ?? {};

  return {
    ...page,
    [pageTitleKey]: menuPage?.title ?? page[pageTitleKey],
    ...updates.page,
    [childrenKey]: page[childrenKey].map(child => {
      const menuChild = menuChildren.find(item => item.id === child.id);
      const update = updates.children?.[child.id] ?? {};
      const { summary, body, ...other } = update;
      return {
        ...child,
        [childTitleKey]: menuChild?.title ?? child[childTitleKey],
        [childSummaryKey]: summary ?? child[childSummaryKey],
        [childBodyKey]: body ?? child[childBodyKey],
        ...other,
      };
    }),
  };
}
