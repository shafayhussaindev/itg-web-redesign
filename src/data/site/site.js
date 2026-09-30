/* The footer and the cookie popup, shown on every page.
 * The menu bar is in src/data/navigation/. */

/* ============================================================================
 * FOOTER (the dark band at the bottom of every page)
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
 * COOKIE SETTINGS (the popup on a visitor's first visit)
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
