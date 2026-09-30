import { tier2Navbar } from './tier2.js';
import { tier3Navbar } from './tier3.js';
import { solutionPages } from '@/data/solutions/solution-pages.js';
import { platformPages } from '@/data/platforms/platform-detail.js';
import { servicePages } from '@/data/services/service-detail.js';
import { industryPages } from '@/data/industries/industry-detail.js';

/* THE MENU BAR
 *
 *   Tier 1  the four menus below (label, landing page, "View All" link)
 *   Tier 2  tier2.js — which pages appear in each menu, in what order
 *   Tier 3  tier3.js — which items appear under each of those pages
 *
 * Names are read from the pages themselves, so the menu and the page can
 * never disagree. A menu row's own `description` wins over the page's. */

const families = {
  solutions:  { pages: solutionPages.map(page => ({ ...page, href: `/${page.id}` })), name: 'name', items: 'capabilities', itemName: 'title', itemLine: 'subtitle' },
  platforms:  { pages: platformPages, name: 'title', items: 'products', itemName: 'name', itemLine: 'description' },
  services:   { pages: servicePages, name: 'name', items: 'services', itemName: 'name', itemLine: 'description' },
  industries: { pages: industryPages, name: 'name', items: 'segments', itemName: 'name', itemLine: 'description' },
};

// Tier 2 rows for one menu, each with its Tier 3 children.
function menuItems(family) {
  const f = families[family];
  return tier2Navbar[family].map(row => {
    const page = f.pages.find(p => p.href === row.href);
    return {
      title: page[f.name],
      ...row,
      children: (tier3Navbar[family][row.href] ?? []).map(({ id, href, ...menuRow }) => {
        const item = page[f.items].find(i => i.id === id);
        return {
          ...(item && { title: item[f.itemName], description: item[f.itemLine] }),
          ...menuRow,
          href: href ?? `${row.href}/${id}`,
        };
      }),
    };
  });
}

// Tier 1: the drop-down menus, left to right.
export const menus = [
  { key: 'solutions',  label: 'Solutions',  href: '/solutions',  viewAllLabel: 'View All Solutions',  items: menuItems('solutions') },
  { key: 'platforms',  label: 'Platforms',  href: '/platforms',  viewAllLabel: 'View All Platforms',  items: menuItems('platforms') },
  { key: 'services',   label: 'Services',   href: '/services',   viewAllLabel: 'View All Services',   items: menuItems('services') },
  { key: 'industries', label: 'Industries', href: '/industries', viewAllLabel: 'View All Industries', items: menuItems('industries') },
];

// Plain links with no drop-down, shown after the menus.
export const extraLinks = [
  { label: 'Company', href: '/company' },
];

// The button on the right of the bar.
export const navCta = { label: 'Contact us', href: '/contact' };
