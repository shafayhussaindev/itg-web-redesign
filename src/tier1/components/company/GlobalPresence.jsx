import { globalPresence } from '../../data/company.js';
import { useReveal } from '../../hooks/useReveal.js';
import Icon from './icons.jsx';
import WorldMap from './WorldMap.jsx';

/**
 * Global Presence — navy band, the page's second dark beat.
 *
 * The supplied photograph sits full-bleed behind a deep navy wash and carries
 * the section's texture; the animated map sits above it and does the actual
 * communicating; the four items sit in glass beneath. That layering is why
 * this section does not use `PhotoModule` — the photograph is a ground here,
 * not a subject.
 *
 * The map deliberately carries no place names. The approved copy names no
 * regions, and labelling the markers would be inventing content.
 */
export default function GlobalPresence() {
  const [headRef, headIn] = useReveal();
  const [mapRef, mapIn] = useReveal({ threshold: 0.2 });

  return (
    <section className="co-global" id="global">
      <div className="co-global-bg" aria-hidden="true">
        <div
          className="co-global-img"
          style={{ backgroundImage: `url('${globalPresence.image}')` }}
        />
        <div className="co-global-wash" />
      </div>

      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>{globalPresence.title}</h2>
        <span className="co-rule co-rule--light" aria-hidden="true" />
        <p>{globalPresence.intro}</p>
      </div>

      <div ref={mapRef} className={`co-global-map reveal${mapIn ? ' is-in' : ''}`}>
        <WorldMap active={mapIn} />
      </div>

      <ul className="co-global-grid">
        {globalPresence.items.map((item, i) => (
          <Card key={item.id} item={item} index={i} />
        ))}
      </ul>
    </section>
  );
}

function Card({ item, index }) {
  const [ref, shown] = useReveal({ threshold: 0.2 });

  return (
    <li
      ref={ref}
      className={`co-global-card reveal${shown ? ' is-in' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className="co-global-icon">
        <Icon name={item.icon} size={20} />
      </span>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </li>
  );
}
