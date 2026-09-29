// Product content from the Amanah Privacy Suite deck (2026) supplied by the user.
export const amaanah = {
  tagline: 'PDPL compliance intelligence for Saudi Arabia.',
  body: 'Amaanah turns scattered policies, vendor contracts and consent records into one auditable compliance score. Built for the Saudi Personal Data Protection Law (PDPL), it scores every vendor, transfer and processing activity as it enters the business.',
  focus: ['Record of Processing Activities with automatic DPIA triggering', 'Data subject requests tracked against an internal SLA', 'Cross-border transfer risk scored across 249 countries', 'Vendor and sub-processor registry from Tier 1 to Tier 3', 'Incident register with a 72-hour notification clock', 'Evidence reports for SDAIA submission'],
  overview: {
    title: 'Every PDPL obligation. One system.',
    body: [
      'PDPL applies to every entity, inside or outside the Kingdom, that processes the personal data of individuals in Saudi Arabia. Amaanah brings the registers, assessments and evidence that obligation requires into one platform with a full English and Arabic interface.',
      'Scoring is algorithm-driven, not AI-guessed. Deterministic, published formulas move each case from inherent risk, through safeguard reductions, to a residual score and a decision band, so an auditor can reproduce any number.',
      'Amaanah is SDAIA-aligned. It is not certified or endorsed by SDAIA.',
    ],
  },
  why: [
    { icon: 'fact_check', title: 'One auditable score', body: 'A Compliance Strength view across RoPA, country risk, vendors, DPIA, transfer risk and data subject requests, with every score traceable to its inputs.' },
    { icon: 'rule', title: 'Consistent decisions', body: 'Configurable decision bands map each residual score to Allow, Allow with Conditions, Escalate or Reject / Block. The same input always produces the same logged decision.' },
    { icon: 'schedule', title: 'Deadlines surfaced early', body: 'Data subject requests are enforced at a 14-day internal SLA against the 30-day statutory window, and breaches start a 72-hour SDAIA notification clock when logged.' },
  ],
  applied: {
    title: 'Where your data actually goes.',
    intro: 'In-Kingdom and cross-border processing follow two different assessment paths.',
    items: [
      { icon: 'home_pin', title: 'In-Kingdom processing', body: 'A RoPA entry is created and scored. With no cross-border flag, the Transfer Risk Assessment is not triggered and region-locked safeguards reduce the score.' },
      { icon: 'public', title: 'Cross-border transfer', body: 'A Transfer Risk Assessment opens, combining country risk, the legal transfer mechanism, vendor and sub-processor risk, and evidenced safeguards.' },
      { icon: 'handshake', title: 'Vendor onboarding', body: 'Score vendors before contracts are signed. Register them individually or bulk-import 300–400 at once, with automated invitations tracked end to end.' },
      { icon: 'gavel', title: 'Consent and lawful basis', body: 'Each processing purpose carries a scored legal comfort level, with Legitimate Interest Assessments where consent is not the lawful basis.' },
    ],
  },
  steps: {
    eyebrow: 'Create → Score → Trigger DPIA → DPO Approve',
    title: 'How a risk becomes a decision.',
    intro: 'Every processing activity is logged with its data segment, vendor linkage, destination country and cross-border indicator. The register scores itself as it is completed.',
    items: [
      { title: 'Create', body: 'Log the processing activity in the Article 31 register with its vendors, sub-processors and destination.' },
      { title: 'Score', body: 'Weighted factors produce an inherent score; six safeguard families (access, governance, contractual, regional, encryption and monitoring) reduce it to a residual score.' },
      { title: 'Trigger DPIA', body: 'High-risk activities trigger a DPIA automatically. Critical processing is blocked until the DPIA is complete and the risk mitigated.' },
      { title: 'DPO Approve', body: 'The Data Protection Officer approves, adjusts or escalates, and the decision is logged with the score that produced it.' },
    ],
  },
};
