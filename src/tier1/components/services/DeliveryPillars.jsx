import { deliveryPillars } from '@/content/services.js';
import { useGlassOverlap } from '../../hooks/useGlassOverlap.js';
import Icon from './icons.jsx';

export default function DeliveryPillars() {
  return (
    <section className="svc-pillars" id="pillars">
      <div className="section-head">
        <h2>Delivery Pillars</h2>
        <span className="svc-rule" aria-hidden="true" />
      </div>

      <div className="svc-pillar-list">
        {deliveryPillars.map((pillar) => (
          <Pillar key={pillar.id} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}

/**
 * One pillar module: full-bleed photograph with a glass content panel
 * overlapping it from the left or right (`pillar.side`), alternating down the
 * page. The panel overlaps rather than sitting beside the image, and the image
 * stays visible behind it — the composition the brief asks for in section 4.
 *
 * Construction is identical to the Industries feature and the Company photo
 * modules, so the three pages present one module rather than three near-misses:
 *
 *   .parallax-frame (the clipping media box)
 *     .parallax-layer  -> the sharp photograph, drifting against the scroll
 *     .glass-frost     -> a blurred COPY of it, clipped to the panel's
 *       .parallax-layer   rectangle (--glass-clip) and drifting in lockstep
 *     scrim, number
 *   .glass-card.glass-overlap -> the panel: white translucent fill
 *
 * The drift is a CSS scroll-driven animation, so it runs on the compositor
 * rather than on a scroll handler. The glass is NOT a backdrop-filter — that
 * re-blurs its backdrop on every frame and made scrolling choppy. The blurred
 * copy is rasterised once and only moved; see .glass-frost in
 * tier1/styles/index.css.
 */
function Pillar({ pillar }) {
  const [mediaRef, panelRef] = useGlassOverlap();

  return (
    <article
     
      className={`svc-pillar svc-pillar--${pillar.side}`}
    >
      <div ref={mediaRef} className="svc-pillar-media parallax-frame">
        <div className="svc-pillar-img parallax-layer">
          <img src={pillar.image} alt="" loading="lazy" decoding="async" />
        </div>


        {/* Cached blurred copy of the photograph for the glass panel — see
            .glass-frost in tier1/styles/index.css. Sits under the scrim, like the
            sharp photo, and drifts with it. */}
        <div className="glass-frost" aria-hidden="true">
          <div className="glass-frost-layer parallax-layer">
            <img src={pillar.image} alt="" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="svc-pillar-scrim" />
        <span className="svc-pillar-number" aria-hidden="true">
          {pillar.number}
        </span>
      </div>

      <div
        ref={panelRef}
        className="svc-pillar-panel glass-overlap glass-card"
      >
        <header className="svc-pillar-head">
          <span className="svc-pillar-icon">
            <Icon name={pillar.icon} size={22} />
          </span>
          <div>
            {/* pillar.sub is intentionally not rendered: on all five cards it
                restated the title as a gerund phrase and carried no
                information of its own. The field is left in the data so the
                line can be put back by restoring this one element. */}
            <h3>{pillar.title}</h3>
          </div>
        </header>

        <p className="svc-pillar-body">{pillar.body}</p>

        <div className="svc-pillar-cols">
          <div className="svc-pillar-col">
            <h4>What This Enables</h4>
            <ul className="svc-pillar-enables">
              {pillar.enables.map((item) => (
                <li key={item}>
                  <Icon name="check" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="svc-pillar-col">
            <h4>Includes</h4>
            <ul className="svc-pillar-includes">
              {pillar.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
