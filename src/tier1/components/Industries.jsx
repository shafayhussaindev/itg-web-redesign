import { useEffect, useRef, useState } from 'react';
import { industries } from '@/content/solutions.js';
import { useReveal } from '../hooks/useReveal.js';

/**
 * Industry cards, built on the same .cat-* pattern as Solution Categories:
 * a tall photograph, the title at the foot, and a glass button that reveals
 * the description. Sharing those classes rather than duplicating them means
 * the two grids cannot drift apart.
 *
 * Desktop reveals on button hover (CSS :has); touch toggles .is-open, since
 * hover is unavailable there.
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
        className={`cat-grid reveal reveal--late${gridIn ? ' is-in' : ''}`}
        ref={(node) => {
          gridRef.current = node;
          gridRevealRef.current = node;
        }}
      >
        {industries.map((ind) => (
          <article key={ind.id} className={`cat-card${openId === ind.id ? ' is-open' : ''}`}>
            <div className="cat-card-bg" style={{ backgroundImage: `url('${ind.image}')` }} />
            <div className="cat-body">
              <h3 className="cat-title">{ind.title}</h3>
              <div className="cat-reveal">
                <p>{ind.body}</p>
              </div>
              <button
                className="cat-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenId((cur) => (cur === ind.id ? null : ind.id));
                }}
              >
                View Full Details <span className="btn-arrow" aria-hidden="true">→</span>
              </button>
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
