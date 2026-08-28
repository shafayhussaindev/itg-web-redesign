import { serviceIndustries } from '../../data/services.js';
import { useReveal } from '../../hooks/useReveal.js';
import Icon from './icons.jsx';

/**
 * Photography + gradient + glass label bar. Deliberately simpler than the
 * Solutions industry cards: those reveal a paragraph on hover, but the
 * Services copy carries titles only, so a reveal here would have nothing to
 * show. Hover does what the brief asks instead — image zoom, glass opacity
 * shift, border highlight, arrow travel.
 */
export default function ServiceIndustries() {
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal({ threshold: 0.08 });

  return (
    <section className="svc-ind" id="industries">
      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>{serviceIndustries.title}</h2>
        <span className="svc-rule" aria-hidden="true" />
        <p>{serviceIndustries.intro}</p>
      </div>

      <div ref={gridRef} className={`svc-ind-grid reveal${gridIn ? ' is-in' : ''}`}>
        {serviceIndustries.items.map((item, i) => (
          <article
            key={item.id}
            className="svc-ind-card"
            style={{ '--card-delay': `${i * 0.07}s` }}
            tabIndex={0}
          >
            <img src={item.image} alt="" loading="lazy" decoding="async" />
            <div className="svc-ind-scrim" />
            <div className="svc-ind-bar">
              <h3>{item.title}</h3>
              <Icon name="arrow" className="svc-ind-arrow" size={18} />
            </div>
          </article>
        ))}
      </div>

      <blockquote className="svc-statement">
        <strong>{serviceIndustries.statement}</strong>
      </blockquote>
    </section>
  );
}
