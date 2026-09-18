import { companyCta } from '@/content/company.js';
import { useFrostClip } from '../../hooks/useFrostClip.js';
import CtaLabel from '../CtaLabel.jsx';

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
            <button className="btn-cyan co-btn-glow"><CtaLabel>{companyCta.primary}</CtaLabel></button>
            <button className="btn-glass glass"><CtaLabel>{companyCta.secondary}</CtaLabel></button>
          </div>
        </div>
      </div>
    </section>
  );
}
