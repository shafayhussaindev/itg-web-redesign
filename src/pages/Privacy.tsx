import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";

/**
 * Baseline privacy policy for a corporate marketing site. Starting draft —
 * the bracketed values, the retention periods and the lawful-basis wording
 * must be confirmed by counsel, and the disclosures must be checked against
 * what the site actually collects before publication.
 */
const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      "ITG Technologies (“ITG”, “we”, “us”) operates this website. This policy explains what personal data we collect through it, why we collect it, how we use it, and the rights you have over it.",
      "For the purposes of applicable data protection law, ITG Technologies is the controller of the personal data described here. Our registered address is published on our Company page.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect only what we need to respond to enquiries and to understand how the site is used.",
    ],
    bullets: [
      "Information you give us — your name, company, email address, telephone number and the content of your message when you contact us or request a consultation.",
      "Technical information — IP address, browser type and version, device type, operating system, and the pages you visit, collected automatically when you browse.",
      "Correspondence — records of communications between you and ITG, kept so we can follow up accurately.",
    ],
  },
  {
    heading: "How we use it",
    body: ["We use personal data for the following purposes, and no others without telling you first:"],
    bullets: [
      "To respond to your enquiry and to provide the information or consultation you asked for.",
      "To maintain and improve the website, including diagnosing technical problems.",
      "To send you material you have specifically asked to receive, which you can stop at any time.",
      "To meet legal, regulatory and record-keeping obligations that apply to us.",
    ],
  },
  {
    heading: "Lawful basis",
    body: [
      "Where data protection law requires a lawful basis, we rely on your consent for optional communications, on the performance of a contract where you are engaging our services, on our legitimate interest in operating and improving our website and responding to business enquiries, and on legal obligation where retention or disclosure is required of us.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "The site uses cookies that are strictly necessary for it to function. Where we use analytics to understand aggregate usage, that information is used to improve the site and is not used to identify individual visitors.",
      "Most browsers let you refuse or delete cookies through their settings. Blocking strictly necessary cookies may affect how parts of the site behave.",
    ],
  },
  {
    heading: "Sharing your information",
    body: [
      "We do not sell personal data. We share it only with service providers who host, maintain or support this website and our business systems, and who are bound to process it on our instructions; with professional advisers where necessary; and with authorities where we are legally required to do so.",
    ],
  },
  {
    heading: "International transfers",
    body: [
      "ITG operates across multiple regions, and personal data may be processed in a country other than the one in which it was collected. Where that happens, we take steps to ensure it remains protected to the standard required by applicable law, including through appropriate contractual safeguards.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "We keep personal data only for as long as it is needed for the purpose it was collected for, and for as long as we are required to keep it for legal or regulatory reasons. Enquiry correspondence is ordinarily retained for [RETENTION PERIOD] unless a business relationship follows.",
    ],
  },
  {
    heading: "Your rights",
    body: ["Subject to applicable law, you may have the right to:"],
    bullets: [
      "Ask what personal data we hold about you and request a copy of it.",
      "Ask us to correct information that is inaccurate or incomplete.",
      "Ask us to delete personal data where there is no continuing reason for us to hold it.",
      "Object to, or ask us to restrict, certain processing.",
      "Withdraw consent at any time where our processing relies on it.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We maintain technical and organisational measures appropriate to the risk, including access controls, encryption in transit, and restrictions on who within ITG can access enquiry data. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy to reflect changes in our practices or in applicable law. The effective date above records when the current version took effect.",
    ],
  },
  {
    heading: "Contact and complaints",
    body: [
      "To exercise any of the rights above, or to raise a concern about how we handle personal data, contact zahid@itginnovators.com. If you are not satisfied with our response, you may have the right to complain to the data protection authority in your jurisdiction.",
    ],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How ITG Technologies collects, uses and protects personal data gathered through this website, and the rights you have over that data."
      effective="[DD Month YYYY]"
      sections={SECTIONS}
    >
      <div className="mt-8 rounded-xl border border-[color:var(--teal)]/30 bg-[color:var(--teal)]/[0.06] p-4">
        <p className="text-sm leading-relaxed text-foreground">
          <span className="font-semibold">Draft for review.</span> This document is a starting
          template, not legal advice. Before publication the disclosures must be checked against
          what the site actually collects, and the bracketed values confirmed by qualified counsel.
        </p>
      </div>
    </LegalPage>
  );
}
