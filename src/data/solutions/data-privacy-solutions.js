/* Tier 2: /data-privacy-solutions. Capability copy describes technology support, not
 * legal advice or a guarantee of compliance with any privacy law.
 *
 * NEEDS ARTWORK: this page has no photography of its own yet. It borrows the
 * security-operations photo from the Company page (hero, feature, and the card
 * on /solutions). Drop a proper image into public/images/solutions/ and change `image`
 * and `feature.image` below, and `image` for 'data-privacy-solutions' in
 * data/solutions/landing-page.js.
 *
 * The capability `id`s are also the Tier 3 links in the Solutions menu
 * (data/site/site.js). Change one, change the other. */
export const solutionPage = {
  id: 'data-privacy-solutions', name: 'Data Privacy Solutions', shortName: 'Data Privacy', icon: 'privacy_tip',
  image: '/images/company/security.jpg',
  headline: 'From scattered personal data', accent: 'to privacy by design.',
  description: 'Know where personal data lives, control how it is used and respond to individuals with confidence, built into the systems your teams already run.',
  overview: { eyebrow: 'A foundation for trust', title: 'Make privacy part of how your systems work.', body: 'Personal data spreads across applications, documents, suppliers and cloud services faster than policies can keep up. ITG connects that landscape with the controls, workflows and evidence privacy teams need to govern it.', note: 'Privacy requirements differ by market and keep changing. We build these capabilities alongside your legal and compliance advisers, not in place of them.' },
  outcomes: [
    { icon: 'manage_search', title: 'Visible personal data', body: 'Know which systems hold personal data, what kind, and who is responsible for it.' },
    { icon: 'how_to_reg', title: 'Respected choices', body: 'Record consent and preferences once and apply them consistently across channels.' },
    { icon: 'verified_user', title: 'Evidence on hand', body: 'Keep decisions, requests and controls documented and ready for review.' },
  ],
  capabilitiesIntro: 'Build the systems that help teams find, protect and account for the personal data your organization handles.',
  capabilities: [
    { id: 'privacy-governance', icon: 'policy', title: 'GDPR/PDPL Management', subtitle: 'Give your privacy program a working backbone.', description: 'Turn privacy policies into registers, owners and workflows, so responsibilities are clear and the program can be run and reviewed rather than rebuilt each year.', focus: ['Records of processing activities', 'Privacy impact assessment workflows', 'Policy, ownership and review cycles'], outcome: ['Clear accountability for personal data', 'A program that can be evidenced, not just described'] },
    { id: 'data-discovery', icon: 'manage_search', title: 'Data Discovery & Classification', subtitle: 'Find personal data wherever it lives.', description: 'Scan and map structured and unstructured sources to identify personal and sensitive data, classify it, and keep the inventory current as systems change.', focus: ['Discovery across databases, files and cloud stores', 'Sensitivity classification and tagging', 'Data maps and lineage between systems'], outcome: ['An up-to-date inventory of personal data', 'Fewer unknown copies and shadow datasets'] },
    { id: 'consent-management', icon: 'how_to_reg', title: 'RoPA Automation', subtitle: 'Keep processing records current.', description: 'Automate the collection and maintenance of records of processing activities, with named owners, purposes, data categories and review dates.', focus: ['Processing activity inventory', 'Owner review and approval workflows', 'Change tracking and reporting'], outcome: ['A more current RoPA', 'Less manual effort preparing privacy reviews'] },
    { id: 'data-subject-rights', icon: 'person_search', title: 'Consent & Preference Management', subtitle: 'Honor choices across connected channels.', description: 'Capture consent and preferences with clear purpose and provenance, then distribute changes to the systems that act on them.', focus: ['Consent and preference capture', 'Purpose and evidence records', 'Synchronization across systems'], outcome: ['More consistent treatment of user choices', 'Evidence of how preferences were recorded'] },
    { id: 'data-protection', icon: 'encrypted', title: 'Data Protection & Access Control', subtitle: 'Limit who can see what, by design.', description: 'Apply encryption, masking and role-based access to personal data, and use retention rules so information is kept only as long as it is needed.', focus: ['Encryption, masking and pseudonymisation', 'Role-based access and privileged-access review', 'Retention schedules and secure deletion'], outcome: ['Reduced exposure of sensitive data', 'Access that matches actual business need'] },
    { id: 'breach-response', icon: 'shield', title: 'Zero Data Retention', subtitle: 'Minimize retention of sensitive data.', description: 'Design workflows that avoid storing personal data where it is unnecessary and apply deletion, expiry and access rules to what must be retained.', focus: ['Data minimization and retention mapping', 'Expiry and deletion automation', 'Access and exception controls'], outcome: ['Reduced unnecessary data exposure', 'Retention rules that can be demonstrated'] },
  ],
  applications: [
    { icon: 'account_balance', title: 'Financial services & fintech', body: 'Govern customer and transaction data across core banking, onboarding and analytics platforms.' },
    { icon: 'health_and_safety', title: 'Healthcare & life sciences', body: 'Protect patient and research information while keeping it available to the people who need it.' },
    { icon: 'shopping_bag', title: 'Customer-facing digital businesses', body: 'Manage consent, profiles and requests across e-commerce, apps and marketing channels.' },
  ],
  feature: { eyebrow: 'Privacy by design', title: 'You cannot protect data you cannot find.', body: 'Good privacy starts with knowing what you hold. We connect discovery, classification and ownership so every control, request and decision rests on an accurate picture of your personal data.', points: ['Personal data mapped to systems and owners', 'Controls applied where the data actually lives', 'Requests and decisions recorded for review'], image: '/images/company/security.jpg', imageAlt: 'Security operations team monitoring systems in a control room' },
  cta: { title: 'Build privacy into the way you operate.', body: 'Let us look at your data landscape, current controls and privacy obligations together.', label: 'Talk to a Privacy Expert' },
};
