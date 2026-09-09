import { deliveryPillars } from '@/content/services.js';
import { useReveal, useParallax } from '../../hooks/useReveal.js';
import Icon from './icons.jsx';

export default function DeliveryPillars() {
  const [headRef, headIn] = useReveal();

  return (
    <section className="svc-pillars" id="pillars">
      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
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
 * The image carries a slow counter-scroll so it moves fractionally slower than
 * the page. Both the reveal and the parallax no-op under
 * prefers-reduced-motion (see useReveal.js).
 */
function Pillar({ pillar }) {
  const [ref, shown] = useReveal({ threshold: 0.12 });
  const [imgRef, offset] = useParallax(0.055);

  return (
    <article
      ref={ref}
      className={`svc-pillar svc-pillar--${pillar.side} reveal${shown ? ' is-in' : ''}`}
    >
      <div className="svc-pillar-media">
        <div
          ref={imgRef}
          className="svc-pillar-img"
          style={{
            backgroundImage: `url('${pillar.image}')`,
            transform: `translate3d(0, ${offset}px, 0) scale(1.12)`,
          }}
        />
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
