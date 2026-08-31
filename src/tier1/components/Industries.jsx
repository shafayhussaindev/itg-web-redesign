import { useEffect, useRef, useState } from 'react';
import { industries } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';

/**
 * Desktop: hover reveals the description + Explore link.
 * Touch/keyboard: tap or focus toggles .is-open for the same reveal.
 */
export default function Industries() {
  const [openId, setOpenId] = useState(null);
  const gridRef = useRef(null);
  const [headRef, headIn] = useReveal();
  const [gridRevealRef, gridIn] = useReveal({ threshold: 0.08 });

  useEffect(() => {
    const onDocClick = (e) => {
      if (gridRef.current && !gridRef.current.contains(e.target)) setOpenId(null);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <section>
      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>Industry-Aligned Delivery</h2>
        <p>Our solutions are tailored for:</p>
      </div>

      <div
        className={`ind-grid reveal reveal--late${gridIn ? ' is-in' : ''}`}
        ref={(node) => {
          gridRef.current = node;
          gridRevealRef.current = node;
        }}
      >
        {industries.map((ind) => (
          <article
            key={ind.id}
            className={`ind-card${openId === ind.id ? ' is-open' : ''}`}
            tabIndex={0}
            onClick={() => setOpenId((cur) => (cur === ind.id ? null : ind.id))}
            onFocus={() => setOpenId(ind.id)}
            onBlur={() => setOpenId((cur) => (cur === ind.id ? null : cur))}
          >
            <img src={ind.image} alt={ind.title} loading="lazy" decoding="async" />
            <div className="ind-scrim" />
            <div className="ind-body">
              <div className="ind-title">{ind.title}</div>
              <div className="ind-detail">
                <p>{ind.body}</p>
                <span className="ind-explore">Explore →</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="ind-center">
        <button className="btn-outline-navy">
          Explore Industry-Specific Solutions<span className="btn-arrow">→</span>
        </button>
      </div>
    </section>
  );
}
