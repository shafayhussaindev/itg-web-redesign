import { whyItg } from '@/content/tier1/solutions.js';

/* Material Symbols glyph per card icon key from content.js. */
const GLYPHS = {
  building: 'apartment',
  grid: 'grid_view',
  shield: 'verified_user',
  lock: 'lock',
};

export default function WhyITG() {

  return (
    <section className="why-band">
      <div className="section-head">
        <h2>Why ITG</h2>
      </div>
      <div className="why-grid">
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
