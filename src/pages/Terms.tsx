import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";

/**
 * Baseline terms for a corporate marketing site. This is a starting draft —
 * the bracketed values and the governing-law clause must be confirmed by
 * counsel before launch. See the note rendered at the top of the page.
 */
const SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    body: [
      "These Terms and Conditions govern your access to and use of the ITG Technologies website and any content, functionality or services offered through it. By accessing or using this website you agree to be bound by these terms. If you do not agree to them, please do not use the site.",
      "We may revise these terms from time to time. The version published on this page is the version in force, and your continued use of the site after a revision constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "Use of the website",
    body: [
      "You may use this website for lawful purposes only, and in a manner that does not infringe the rights of, restrict or inhibit the use and enjoyment of the site by any third party.",
    ],
    bullets: [
      "Do not attempt to gain unauthorised access to the site, its servers, or any connected system or database.",
      "Do not introduce malicious code, or otherwise attempt to disrupt or impair the availability of the site.",
      "Do not use automated systems to extract data from the site beyond ordinary search-engine indexing.",
      "Do not reproduce, duplicate or resell any part of the site except as permitted under these terms.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on this website — including text, graphics, logos, icons, illustrations, diagrams, page layouts and software — is the property of ITG Technologies or its licensors and is protected by applicable intellectual property law. The ITG name and logo are trademarks of ITG Technologies.",
      "You may view, download and print pages from the site for your own internal reference. You may not otherwise reproduce, modify, distribute or commercially exploit any part of it without our prior written consent.",
    ],
  },
  {
    heading: "Information on this site",
    body: [
      "The content on this website is provided for general information about our platforms, services and capabilities. It does not constitute professional, technical or commercial advice, and it should not be relied upon as the sole basis for any decision.",
      "Descriptions of products, services and outcomes are indicative. The scope, deliverables and service levels applicable to any engagement are governed exclusively by the separate written agreement entered into for that engagement.",
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "This site may contain links to third-party websites and resources. Those links are provided for convenience only, and we have no control over the content or availability of external sites. A link does not imply endorsement, and we accept no responsibility for any loss arising from your use of a third-party site.",
    ],
  },
  {
    heading: "Availability and changes",
    body: [
      "We aim to keep the site available and up to date, but we do not warrant uninterrupted or error-free access. We may suspend, withdraw or amend all or any part of the site without notice, and we will not be liable if the site is unavailable at any time or for any period.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the fullest extent permitted by applicable law, ITG Technologies excludes all conditions, warranties and representations that would otherwise be implied in relation to this website and its content.",
      "We will not be liable for any indirect, incidental or consequential loss, or for any loss of profit, revenue, data, business or anticipated savings, arising out of or in connection with the use of this website. Nothing in these terms limits liability for fraud, or for any other liability that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms, their subject matter and their formation are governed by the laws of [JURISDICTION]. The courts of [JURISDICTION] have exclusive jurisdiction over any dispute arising out of or in connection with them.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about these terms can be directed to zahid@itginnovators.com, or to ITG Technologies at the registered address published on our Company page.",
    ],
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="The terms on which you may use the ITG Technologies website, and the basis on which we publish the information it contains."
      effective="[DD Month YYYY]"
      sections={SECTIONS}
    >
      <div className="mt-8 rounded-xl border border-[color:var(--teal)]/30 bg-[color:var(--teal)]/[0.06] p-4">
        <p className="text-sm leading-relaxed text-foreground">
          <span className="font-semibold">Draft for review.</span> This document is a starting
          template, not legal advice. The bracketed values and the governing-law clause must be
          confirmed by qualified counsel in your jurisdiction before publication.
        </p>
      </div>
    </LegalPage>
  );
}
