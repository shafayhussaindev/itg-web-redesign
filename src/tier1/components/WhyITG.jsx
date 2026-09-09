import { whyItg } from '@/content/solutions.js';
import { useReveal } from '../hooks/useReveal.js';

/* Material Symbols glyph per card icon key from content.js. */
const GLYPHS = {
  building: 'apartment',
  grid: 'grid_view',
  shield: 'verified_user',
  lock: 'lock',
};

export default function WhyITG() {
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal({ threshold: 0.08 });

  return (
    <section className="why-band">
      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>Why ITG</h2>
      </div>
      <div ref={gridRef} className={`why-grid reveal reveal--late${gridIn ? ' is-in' : ''}`}>
        {whyItg.map((card) => (
          <div key={card.id} className="why-card glass-dark">
            <span
              className="why-icon msym"
              aria-hidden="true"
              style={{ '--msym': '30px', fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 30" }}
            >
              {GLYPHS[card.icon] ?? 'circle'}
            </span>
            <h4>{card.title}</h4>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
