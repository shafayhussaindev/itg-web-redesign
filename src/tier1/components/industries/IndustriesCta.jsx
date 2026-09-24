import { industriesCta } from '@/content/industries.js';
import { useFrostClip } from '../../hooks/useFrostClip.js';
import CtaLabel from '../CtaLabel.jsx';

/**
 * Closing CTA: architectural photograph -> navy overlay -> glass panel.
 *
 * The supplied image is a symmetrical dusk elevation that is already navy, so
 * the overlay is lighter than the Services CTA's (which sits on a bright
 * daytime skyline) and is shaped as a centre-weighted vignette — the building
 * stays readable behind the glass instead of being flattened to a texture.
 */
export default function IndustriesCta() {
  const [bgRef, panelRef] = useFrostClip();

  return (
    <section className="ind-cta">
      <div ref={bgRef} className="ind-cta-bg" style={{ backgroundImage: `url('${industriesCta.background}')` }}>
        {/* Frosted backdrop for the panel, blurred once and cached rather than
            recomputed every frame the way backdrop-filter is. It sits first so
            the overlay and glow paint over it, which is the same stack the live
            blur used to sample. See hooks/useFrostClip. */}
        <div className="ind-cta-frost" aria-hidden="true" />
        <div className="ind-cta-overlay" />
        <div className="ind-cta-glow" aria-hidden="true" />
        <div ref={panelRef} className="ind-cta-glass">
          <h2>{industriesCta.title}</h2>
          <p>{industriesCta.body}</p>
          <div className="cta-row ind-cta-row">
            <a className="btn-cyan ind-btn-glow" href={industriesCta.primary.href}><CtaLabel>{industriesCta.primary.label}</CtaLabel></a>
          </div>
        </div>
      </div>
    </section>
  );
}
