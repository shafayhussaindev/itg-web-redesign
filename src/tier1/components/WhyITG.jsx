import { whyItg } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';

const icons = {
  building: (
    <path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6" />
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
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
            <svg
              className="why-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {icons[card.icon]}
            </svg>
            <h4>{card.title}</h4>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
