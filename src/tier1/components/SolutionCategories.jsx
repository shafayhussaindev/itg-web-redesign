import { useEffect, useRef, useState } from 'react';
import { solutionCategories } from '@/content/solutions.js';

/**
 * Default state shows only the category title plus a glass button.
 * Desktop: hovering the button reveals the detail (CSS :has).
 * Keyboard focus reveals the detail; clicking opens the tier-2 solution page.
 */
export default function SolutionCategories() {
  const [openId, setOpenId] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (gridRef.current && !gridRef.current.contains(e.target)) setOpenId(null);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <section className="ice-bg">
      <div className="section-head">
        <h2>Solution Categories</h2>
      </div>
      <div
        className="cat-grid"
        ref={gridRef}
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
              <a
                className="cat-btn"
                href={`/${cat.id}`}
                onFocus={() => setOpenId(cat.id)}
                onBlur={() => setOpenId(null)}
              >
                View Full Details <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
