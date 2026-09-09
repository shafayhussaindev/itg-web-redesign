import { serviceIndustries } from '@/content/services.js';
import { useReveal } from '../../hooks/useReveal.js';

/**
 * Industry cards on the same .cat-* pattern as Solution Categories and the
 * Industries grid — one tall-photograph card style shared across all three
 * rather than three near-identical sets of rules.
 *
 * These items carry a title and an image and nothing else, so there is no
 * description to reveal and therefore no reveal button: a control that opens
 * an empty panel is worse than no control. If per-industry copy is written
 * later, adding a .cat-reveal block here brings these in line with the other
 * two grids exactly.
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

      <div ref={gridRef} className={`cat-grid reveal reveal--late${gridIn ? ' is-in' : ''}`}>
        {serviceIndustries.items.map((item) => (
          <article key={item.id} className="cat-card cat-card--static">
            <div className="cat-card-bg" style={{ backgroundImage: `url('${item.image}')` }} />
            <div className="cat-body">
              <h3 className="cat-title">{item.title}</h3>
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
