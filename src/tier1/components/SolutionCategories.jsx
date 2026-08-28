import { useEffect, useRef, useState } from 'react';
import { solutionCategories } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';

/**
 * Default state shows only the category title plus a glass button.
 * Desktop: hovering the button reveals the detail (CSS :has).
 * Touch: tapping the button toggles .is-open, since hover is unavailable.
 */
export default function SolutionCategories() {
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
    <section className="ice-bg">
      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>Solution Categories</h2>
      </div>
      <div
        className={`cat-grid reveal reveal--late${gridIn ? ' is-in' : ''}`}
        ref={(node) => {
          gridRef.current = node;
          gridRevealRef.current = node;
        }}
      >
        {solutionCategories.map((cat) => (
          <article key={cat.id} className={`cat-card${openId === cat.id ? ' is-open' : ''}`}>
            <div className="cat-card-bg" style={{ backgroundImage: `url('${cat.image}')` }} />
            <div className="cat-body">
              <h3 className="cat-title">{cat.title}</h3>
              <div className="cat-reveal">
                <div className="sub">{cat.sub}</div>
                <p>{cat.body}</p>
              </div>
              <button
                className="cat-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenId((cur) => (cur === cat.id ? null : cat.id));
                }}
              >
                View Full Details →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
