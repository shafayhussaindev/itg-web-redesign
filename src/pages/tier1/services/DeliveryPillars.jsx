import { deliveryPillars } from '@/content/tier1/services.js';
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
 * One pillar module: full-bleed photograph with a solid content panel
 * overlapping it from the left or right (`pillar.side`), alternating down the
 * page. The panel overlaps rather than sitting beside the image, and the image
 * stays visible behind it — the composition the brief asks for in section 4.
 *
 * Construction is identical to the Industries feature and the Company photo
 * modules, so the three pages present one module rather than three near-misses:
 *
 *   media box (the clipping frame)
 *     .svc-pillar-img  -> the photograph
 *     scrim, number
 *   .svc-pillar-panel  -> the panel: solid white (shared photo-module card
 *                         block in tier1/shared/base.css)
 *
 * Everything here is static: no parallax drift, no hover zoom, no hover lift,
 * and the panel is solid — the translucent glass (both the live
 * backdrop-filter and the cached blurred copy) was removed on request.
 */
function Pillar({ pillar }) {

  return (
    <article
     
      className={`svc-pillar svc-pillar--${pillar.side}`}
    >
      <div className="svc-pillar-media">
        <div className="svc-pillar-img">
          <img src={pillar.image} alt="" loading="lazy" decoding="async" />
        </div>

        <div className="svc-pillar-scrim" />
        <span className="svc-pillar-number" aria-hidden="true">
          {pillar.number}
        </span>
      </div>

      <div className="svc-pillar-panel">
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
