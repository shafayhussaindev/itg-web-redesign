import { industriesCta } from '../../data/industries.js';
import { useReveal } from '../../hooks/useReveal.js';

/**
 * Closing CTA: architectural photograph -> navy overlay -> glass panel.
 *
 * The supplied image is a symmetrical dusk elevation that is already navy, so
 * the overlay is lighter than the Services CTA's (which sits on a bright
 * daytime skyline) and is shaped as a centre-weighted vignette — the building
 * stays readable behind the glass instead of being flattened to a texture.
 */
export default function IndustriesCta() {
  const [ref, shown] = useReveal({ threshold: 0.25 });

  return (
    <section className="ind-cta">
      <div className="ind-cta-bg" style={{ backgroundImage: `url('${industriesCta.background}')` }}>
        <div className="ind-cta-overlay" />
        <div className="ind-cta-glow" aria-hidden="true" />
        <div ref={ref} className={`ind-cta-glass reveal${shown ? ' is-in' : ''}`}>
          <h2>{industriesCta.title}</h2>
          <p>{industriesCta.body}</p>
          <div className="cta-row ind-cta-row">
            <button className="btn-cyan ind-btn-glow">{industriesCta.primary}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
