import { companyCta } from '@/content/tier1/company.js';
import { useFrostClip } from '@/pages/tier1/shared/useFrostClip.js';
import CtaLabel from '@/pages/tier1/shared/CtaLabel.jsx';

/**
 * Closing CTA: partnership photograph -> navy vignette -> navy glass panel.
 *
 * Same construction as the Industries CTA, and for the same reason — the
 * supplied image is already dark, so the overlay stays light enough for the
 * photograph to read and the panel carries its own contrast.
 *
 * The approved copy here is a heading and two buttons with no body paragraph,
 * so the panel is sized tight to that rather than padded out to match the
 * other pages' CTAs.
 */
export default function CompanyCta() {
  const [bgRef, panelRef] = useFrostClip();

  return (
    <section className="co-cta">
      <div ref={bgRef} className="co-cta-bg" style={{ backgroundImage: `url('${companyCta.background}')` }}>
        {/* Cached frosted backdrop — see the note in IndustriesCta. */}
        <div className="co-cta-frost" aria-hidden="true" />
        <div className="co-cta-overlay" />
        <div className="co-cta-glow" aria-hidden="true" />
        <div ref={panelRef} className="co-cta-glass">
          <h2>{companyCta.title}</h2>
          <div className="cta-row co-cta-row">
            <a className="btn-cyan co-btn-glow" href={companyCta.primary.href}><CtaLabel>{companyCta.primary.label}</CtaLabel></a>
            <a className="btn-glass glass" href={companyCta.secondary.href}><CtaLabel>{companyCta.secondary.label}</CtaLabel></a>
          </div>
        </div>
      </div>
    </section>
  );
}
