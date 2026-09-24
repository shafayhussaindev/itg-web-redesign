/**
 * Splits a trailing arrow out of a CTA label.
 *
 * Several CTA strings carry their arrow inside the copy itself — "Talk to an
 * Expert →" — which means the arrow arrives as the last character of a text
 * node. A text node cannot be targeted by CSS, so those arrows could never be
 * animated. This lifts the arrow into the .btn-arrow span the stylesheet
 * already styles, without changing a word of the copy.
 *
 * Labels with no trailing arrow pass straight through, so it is safe to wrap
 * every CTA regardless.
 */
export default function CtaLabel({ children }) {
  if (typeof children !== 'string') return <>{children}</>;

  const match = children.match(/^([\s\S]*?)\s*([→↗➜])\s*$/);
  if (!match) return <>{children}</>;

  return (
    <>
      {match[1]}
      <span className="btn-arrow" aria-hidden="true">
        {match[2]}
      </span>
    </>
  );
}
