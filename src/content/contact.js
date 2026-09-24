/* ============================================================================
 * CONTACT PAGE  (/contact)
 * ========================
 * Everything on the Contact page lives here. Change the text between the quote
 * marks and save — the site picks it up on its own.
 *
 * THREE SETTINGS DECIDE HOW ENQUIRIES REACH YOU  (see `connect` below)
 *
 *   formEndpoint  A web address that accepts the form (a form service such as
 *                 Formspree or Basin, or your own API). When set, the message
 *                 is sent straight from the page and the visitor sees a
 *                 confirmation. THIS IS THE ONE TO SET.
 *   email         Your enquiries inbox. Shown on the page as a direct line.
 *                 If there is no formEndpoint, pressing Send opens the
 *                 visitor's email app with their message already written.
 *   phone         Shown on the page as a direct line. Leave blank to hide it.
 *
 * With all three blank, the page still works and validates, but Send tells
 * the visitor that online enquiries are not switched on yet and points them
 * to LinkedIn. Nothing is lost silently.
 *
 * WHERE WE WORK is not listed here. It reads the regions from the Company
 * page's `globalPresence` in `company.js`, so the two pages can never disagree.
 *
 * ICONS are Material Symbols names. A name that is not listed in the
 * `icon_names=` list in `index.html` renders as an empty box.
 * ========================================================================= */

export const contact = {
  meta: {
    title: 'Contact | ITG Technologies',
    description: 'Talk to ITG Technologies about enterprise platforms, products, delivery services and partnerships.',
  },
  skipLink: 'Skip to the contact form',
  breadcrumbHome: 'Home',
  breadcrumbHere: 'Contact',

  hero: {
    eyebrow: 'Contact',
    headline: 'Let’s talk about',
    accent: 'what you’re building.',
    body: 'Tell us about the systems, data or operations you want to change. We’ll route your message to the people who work on it every day.',
  },

  // How enquiries reach ITG. Read the note at the top of this file.
  connect: {
    formEndpoint: '',
    email: '',
    phone: '',
    // Optional. When set, shown as "We typically reply within …". Leave blank
    // rather than promise something the team cannot keep.
    responseTime: '',
  },

  directLinesTitle: 'Direct lines',
  lines: { email: 'Email', phone: 'Phone', linkedin: 'LinkedIn' },
  linkedinLabel: 'Follow ITG on LinkedIn',
  responsePrefix: 'We typically reply within',

  form: {
    title: 'Send us a message',
    intro: 'All fields are required unless marked optional.',

    // Five choices, shown as buttons. Keep `id` stable: other pages link here
    // with ?topic=<id> to preselect one.
    topicLegend: 'What can we help with?',
    topics: [
      { id: 'project', label: 'A new project' },
      { id: 'product', label: 'Our products' },
      { id: 'partnership', label: 'Partnership' },
      { id: 'careers', label: 'Careers' },
      { id: 'other', label: 'Something else' },
    ],

    // Shown when a visitor arrives from a specific page (?about=...).
    aboutLabel: 'Regarding',
    aboutRemove: 'Remove',

    fields: {
      name: { label: 'Full name' },
      email: { label: 'Work email', hint: 'We’ll only use this to reply to you.' },
      company: { label: 'Company' },
      phone: { label: 'Phone', optional: 'optional' },
      message: {
        label: 'How can we help?',
        placeholder: 'A few lines on what you’re working on, and where we could help.',
      },
      consent: {
        before: 'I agree that ITG may use these details to respond to my enquiry, as described in the ',
        linkLabel: 'Privacy Policy',
        linkHref: '/privacy',
        after: '.',
      },
    },

    // Shown next to a field, and in the summary at the top, when it needs fixing.
    errors: {
      summaryTitle: 'Please check the following',
      topic: 'Choose what you’d like to talk about',
      name: 'Enter your full name',
      emailMissing: 'Enter your work email',
      emailFormat: 'Enter an email address like name@company.com',
      company: 'Enter your company or organisation',
      phone: 'Enter a phone number using digits, spaces, + ( ) or -',
      message: 'Tell us a little about what you need',
      messageShort: 'Add a little more detail — at least 20 characters',
      consent: 'Confirm we can use your details to reply',
    },

    submit: 'Send enquiry',
    sending: 'Sending…',
  },

  // What the visitor sees after pressing Send.
  outcomes: {
    sentTitle: 'Thank you — your message is on its way.',
    sentBody: 'We’ve received your enquiry and will be in touch at the email address you gave us.',
    mailtoTitle: 'Your email app should now be open.',
    mailtoBody: 'We’ve written the message for you — just press send in your email app. If nothing opened, you can email us directly at',
    another: 'Send another message',
    failedTitle: 'Your message could not be sent.',
    failedBody: 'Something went wrong on our side. Your details are still in the form — please try again in a moment, or reach us another way.',
    offlineTitle: 'Online enquiries are not switched on yet.',
    offlineBody: 'Please contact us through LinkedIn in the meantime. Your details are still in the form.',
  },

  next: {
    eyebrow: 'What happens next',
    steps: [
      { title: 'We read every enquiry', body: 'A member of the team reviews your message and the context you’ve shared.' },
      { title: 'The right specialist replies', body: 'We route it to the people who work on that platform, service or industry.' },
      { title: 'We agree next steps', body: 'Together we decide what comes next — a conversation, a workshop or a proposal.' },
    ],
  },

  regions: {
    eyebrow: 'Where we work',
    link: { label: 'About ITG', href: '/company' },
  },
};
