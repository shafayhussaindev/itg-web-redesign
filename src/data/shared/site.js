import { tier2Navbar } from './navbar-tier2.js';
import { tier3Navbar } from './navbar-tier3.js';
import { pageContent } from './page-content.js';

/* The top navigation is edited in two files: navbar-tier2.js and navbar-tier3.js.
 * Footer and cookie settings remain in this file. */

function withChildren(family) {
  return tier2Navbar[family].map(page => ({
    ...page,
    children: (tier3Navbar[family][page.href] ?? []).map(({ id, href, ...item }) => ({
      ...item,
      description: pageContent[family]?.[page.href]?.children?.[id]?.summary ?? item.description,
      href: href ?? `${page.href}/${id}`,
    })),
  }));
}

/* MENU BAR */
export const mainNav = {
  // The drop-down menus.
  solutions:  withChildren('solutions'),
  industries: withChildren('industries'),
  platforms:  withChildren('platforms'),
  services:   withChildren('services'),

  // Plain links with no drop-down, shown after the menus above.
  extraLinks: [
    { label: "Company", href: "/company" },
  ],

  // The button on the right of the bar.
  cta: { label: "Contact us", href: "/contact" },
};


/* ============================================================================
 * 7. FOOTER (the dark band at the bottom of every page)
 * ========================================================================= */

export const footer = {
  tagline: "Engineering intelligent digital platforms for modern enterprises.",

  // The link columns, left to right. (The Solutions column was removed on
  // request, Sept 2026 — the Solutions menu in the header covers it.)
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers",  href: "#" },
        { label: "Insights", href: "#" },
        { label: "Contact",  href: "/contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Case Studies", href: "#" },
        { label: "Research",     href: "#" },
        { label: "Blog",         href: "#" },
        { label: "Events",       href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy",       href: "/privacy" },
        { label: "Terms and Conditions", href: "/terms" },
        { label: "Cookie Policy",        href: "/privacy" },
      ],
    },
  ],

  // The bottom strip. The year is filled in automatically, so it is not here.
  copyrightHolder: "ITG Technologies Co. All rights reserved.",
  bottomLinks: [
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy",       href: "/privacy" },
  ],
  linkedin: "https://www.linkedin.com/company/itgtechnologiescompany/posts/?feedView=all",
};


/* ============================================================================
 * 8. COOKIE SETTINGS (the popup on a visitor's first visit)
 * ========================================================================= */

export const cookieBar = {
  title: "We value your privacy",
  body: "We save your privacy choice on this device. With your permission, Google Analytics measures page visits to help us improve the site.",
  policyLink: { label: "Read our Privacy Policy", href: "/privacy" },
  acceptAll: "Accept all",
  necessaryOnly: "Necessary only",
  savePreferences: "Save preferences",
  close: "Close cookie settings",
  essentialTitle: "Essential",
  essentialDescription: "Stores your privacy choice and site preferences.",
  alwaysActive: "Always active",
  analyticsTitle: "Analytics",
  analyticsDescription: "Allow Google Analytics to measure page visits. You can change this choice later.",
  // The footer link that lets a visitor change their choice later.
  settingsLink: "Cookie settings",
};
