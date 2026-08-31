/**
 * ITG Technologies — Company page copy.
 *
 * EVERY STRING BELOW IS VERBATIM from the approved live Company page
 * (source of truth: `company page/current company page.png`). The redesign is
 * visual only. Do not rewrite, shorten, expand or reorder this copy — if it
 * does not fit a layout, change the layout.
 *
 * Three strings are flagged NEEDS CONFIRMATION and one section carries a
 * completeness warning. All four are the same defect: the source screenshot
 * was captured mid scroll-animation, so some elements had not faded in. The
 * same fault left strings flagged on the Services and Industries pages.
 */

export const companyHero = {
  eyebrow: 'COMPANY',
  title: 'Building Enterprise Platforms with Purpose, Discipline, and Accountability',
  body: [
    'ITG is a global technology company focused on designing and delivering enterprise platforms that support scale, governance, and long-term impact.',
    'We work with organizations operating in complex, regulated, and multi-entity environments, helping them navigate transformation through structured systems, disciplined engineering, and responsible innovation.',
  ],
  image: '/assets/company/closed_grey_roller_blind.jpg',
};

/* ---------------------------------------------------------------
   WHO WE ARE — editorial: photograph + overlapping glass, then the
   four pillars as a compact row beneath.
   --------------------------------------------------------------- */
export const whoWeAre = {
  eyebrow: 'ABOUT ITG',
  title: 'Who We Are and Why We Exist',
  subtitle: 'Company Overview',
  body: 'ITG is a technology and digital platforms company delivering enterprise-grade solutions across business systems, AI, automation, sustainability, and digital experience. Our work is centered on structure, integration, and long-term reliability, not short-term technology implementation.',
  image: '/assets/company/about-people.jpg',
  pillars: [
    {
      id: 'platforms',
      icon: 'building',
      title: 'Enterprise Platforms',
      body: 'Built for complex operations, scale, and multi-entity governance.',
    },
    {
      id: 'reliability',
      icon: 'shield',
      title: 'Structured Reliability',
      body: 'Systems engineered for stability, audit readiness, and compliance.',
    },
    {
      id: 'impact',
      icon: 'target',
      title: 'Long-Term Impact',
      body: 'Platforms that endure, evolve, and support enterprise longevity.',
    },
    {
      id: 'integration',
      icon: 'nodes',
      title: 'Integration First',
      body: 'Architecture that connects business systems with clarity and control.',
    },
  ],
};

/* ---------------------------------------------------------------
   VISION, MISSION, VALUES — navy band, three glass panels.
   --------------------------------------------------------------- */
export const visionMissionValues = {
  title: 'Vision, Mission, and Values',
  intro: 'Guiding principles that shape how we design, build, and govern enterprise platforms.',
  items: [
    {
      id: 'vision',
      icon: 'target',
      title: 'Vision',
      body: 'To enable organizations to build systems that endure and adapt.',
    },
    {
      id: 'mission',
      icon: 'institution',
      title: 'Mission',
      body: 'To design and deliver enterprise platforms that integrate business intelligence, automation, and compliance with clarity and discipline.',
    },
    {
      id: 'values',
      icon: 'shield',
      title: 'Values',
      list: [
        'Accountability in execution',
        'Integrity in data and systems',
        'Long-term partnership mindset',
        'Responsibility in innovation',
      ],
    },
  ],
};

/* ---------------------------------------------------------------
   OUR STORY — animated SVG/CSS timeline. The four "What We Stand For"
   entries become the timeline's four marks; they are the only content
   the section has, and they keep their heading and their order.
   --------------------------------------------------------------- */
export const ourStory = {
  title: 'Our Story',
  body: 'ITG was established to address the growing gap between technology ambition and operational reality. From the beginning, our focus has been on building systems that align with how enterprises actually operate, grow, and govern.',
  standForTitle: 'What We Stand For',
  standFor: [
    'Platform-led transformation',
    'Enterprise-first design',
    'Responsible and explainable technology',
    'Systems built for longevity',
  ],
};

/* ---------------------------------------------------------------
   LEADERSHIP AND GOVERNANCE — photograph + overlapping glass, with
   the governance/trust animation behind the panel.
   --------------------------------------------------------------- */
export const leadership = {
  title: 'Leadership and Governance',
  intro: 'Decision-making with accountability and oversight.',
  image: '/assets/company/leadership.jpg',
  items: [
    {
      id: 'team',
      icon: 'people',
      title: 'Leadership Team',
      body: 'ITG is led by professionals with experience across enterprise systems, regulated industries, and large-scale digital transformation. Leadership at ITG emphasizes clarity, ownership, and execution discipline.',
    },
    {
      id: 'board',
      icon: 'book',
      title: 'Board and Advisors',
      body: 'Our advisors bring strategic oversight across technology governance, compliance, and global operations.',
    },
    {
      id: 'structure',
      icon: 'scales',
      title: 'Governance Structure',
      list: [
        'Accountability in decision-making',
        'Transparency in operations',
        'Risk management and compliance',
      ],
    },
    {
      id: 'philosophy',
      icon: 'institution',
      title: 'Management Philosophy',
      body: 'We believe strong systems require strong governance. Decisions at ITG are guided by long-term value creation, operational responsibility, and stakeholder trust.',
    },
  ],
};

/* ---------------------------------------------------------------
   GLOBAL PRESENCE — animated world map, photograph, glass panels.
   --------------------------------------------------------------- */
export const globalPresence = {
  title: 'Global Presence',
  intro: 'Scale delivery and regional understanding.',
  image: '/assets/company/global-presence.jpg',
  items: [
    {
      id: 'offices',
      icon: 'globe',
      title: 'Regional Offices',
      body: 'ITG operates across multiple regions supporting enterprise and public-sector clients with local understanding and global standards.',
    },
    {
      id: 'delivery',
      icon: 'nodes',
      title: 'Global Delivery Model',
      body: 'Our delivery model combines centralized platform expertise with regional execution, ensuring consistency, scalability, and responsiveness.',
    },
    {
      id: 'crossborder',
      icon: 'route',
      // NEEDS CONFIRMATION — this card's icon and title had not faded in when
      // the source screenshot was captured; only its body text rendered. The
      // two cards before it were fully legible. Placeholder below is derived
      // from this card's own body text, NOT read from the page. Confirm it.
      title: 'Cross-Border Delivery',
      titleNeedsConfirmation: true,
      body: 'ITG supports cross-border implementations, multi-entity organizations, and global compliance requirements.',
    },
    {
      id: 'partners',
      icon: 'handshake',
      // NEEDS CONFIRMATION — same defect as the card above: icon and title
      // never rendered in the source screenshot. Placeholder derived from the
      // body text. Confirm against the live page.
      title: 'Partner Ecosystem',
      titleNeedsConfirmation: true,
      body: 'We collaborate with technology partners and ecosystem providers to extend platform capability while maintaining architectural control.',
    },
  ],
};

/* ---------------------------------------------------------------
   SECURITY AND COMPLIANCE — photograph + glass, ice band.
   --------------------------------------------------------------- */
export const security = {
  title: 'Security and Compliance',
  intro: 'Enterprise confidence through standards and controls.',
  image: '/assets/company/security.jpg',
  items: [
    {
      id: 'certifications',
      icon: 'shield',
      title: 'Certifications and Standards',
      body: 'ITG aligns with recognized enterprise and information security standards to support regulated environments.',
    },
    {
      id: 'protection',
      icon: 'lock',
      title: 'Security and Data Protection',
      list: [
        'Data protection controls',
        'Access and identity management',
        'Audit and monitoring frameworks',
      ],
    },
    {
      id: 'quality',
      icon: 'briefcase',
      title: 'Quality Assurance Framework',
      body: 'Our quality framework ensures reliability, performance, and consistency across all platforms and services.',
    },
    {
      id: 'compliance',
      icon: 'scales',
      title: 'Compliance and Governance',
      body: 'ITG supports compliance across financial, operational, sustainability, and data regulations through structured systems and reporting readiness.',
    },
  ],
};

/* ---------------------------------------------------------------
   PEOPLE AND CAREERS — photograph + glass.
   --------------------------------------------------------------- */
export const people = {
  title: 'People and Careers',
  // NEEDS CONFIRMATION — the section's one-line intro was overlapped by the
  // heading above it mid-animation in the source screenshot; only the bottom
  // few pixels of the glyphs survive and no upscaling recovers them. The
  // string below is a placeholder shaped to the visible glyph pattern, NOT a
  // reading of the page. Confirm it, or delete it if there is no intro line.
  intro: 'Talent, culture, and professional growth.',
  introNeedsConfirmation: true,
  image: '/assets/company/people-careers.jpg',
  items: [
    {
      id: 'life',
      icon: 'people',
      title: 'Life at ITG',
      body: 'ITG fosters a culture of discipline, collaboration, and continuous learning.',
    },
    {
      id: 'careers',
      icon: 'briefcase',
      title: 'Careers and Opportunities',
      listIntro: 'We seek professionals who value:',
      list: ['Structured thinking', 'Accountability', 'Enterprise-scale problem solving'],
    },
    {
      id: 'graduate',
      icon: 'book',
      title: 'Graduate and Internship Programs',
      body: 'Our programs support early-career professionals through exposure to real enterprise platforms and projects.',
    },
    {
      id: 'diversity',
      icon: 'globe',
      title: 'Diversity and Inclusion',
      body: 'ITG is committed to inclusive teams, diverse perspectives, and equitable opportunity.',
    },
  ],
};

/* ---------------------------------------------------------------
   CORPORATE RESPONSIBILITY — photograph + glass.

   COMPLETENESS WARNING: only these two cards rendered in the source
   screenshot. They sit in columns 1 and 2 of what appears to be the same
   four-column grid the other sections use, so a third and fourth card may
   exist and simply never faded in — at 14x contrast the right half of that
   band is completely blank, which cannot distinguish "no cards" from "cards
   not yet animated". Confirm against the live page before sign-off.
   --------------------------------------------------------------- */
export const responsibility = {
  title: 'Corporate Responsibility',
  intro: 'Long-term impact beyond technology.',
  image: '/assets/company/responsibility.jpg',
  itemsMayBeIncomplete: true,
  items: [
    {
      id: 'sustainability',
      icon: 'leaf',
      title: 'Sustainability and ESG',
      body: 'ITG treats sustainability as enterprise infrastructure, embedding ESG and compliance into platform design and operations.',
    },
    {
      id: 'ethics',
      icon: 'scales',
      title: 'Ethical Business Practices',
      body: 'We operate with integrity, transparency, and respect across all engagements.',
    },
  ],
};

/* ---------------------------------------------------------------
   NEWS AND ANNOUNCEMENTS — no photograph supplied; stays a card row,
   restyled as glass on ice.
   --------------------------------------------------------------- */
export const news = {
  title: 'News and Announcements',
  intro: 'Official corporate communications.',
  items: [
    {
      id: 'company-news',
      icon: 'news',
      title: 'Company News',
      body: 'Updates on company milestones, partnerships, and strategic initiatives.',
    },
    {
      id: 'press',
      icon: 'megaphone',
      title: 'Press Releases',
      body: 'Official announcements intended for media and public communication.',
    },
    {
      id: 'media',
      icon: 'book',
      title: 'Media Resources',
      body: 'Approved company information, logos, and reference materials.',
    },
    {
      id: 'official',
      icon: 'briefcase',
      title: 'Official Announcements',
      body: 'Formal communications related to governance, leadership, and organizational updates.',
    },
  ],
};

export const companyCta = {
  title: 'Ready to Partner with a Long-Term Technology Provider?',
  primary: 'Explore ITG Solutions →',
  secondary: 'View Industry Expertise →',
  background: '/assets/company/cta-partnership.jpg',
};
