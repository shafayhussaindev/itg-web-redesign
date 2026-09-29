import { useEffect, useRef, useState } from 'react';

/**
 * The tall photo-card grid used for "Solution Categories" (/solutions) and
 * "Platform Categories" (/platforms): three across on desktop, two on tablet,
 * one on phone.
 *
 * Default state shows only the title plus a glass button.
 * Desktop: hovering the button reveals the detail (CSS :has).
 * Keyboard focus reveals the detail; clicking opens the tier-2 page.
 *
 * items: [{ id, title, sub, body, image, href }]
 */
export default function CategoryCards({ title, items, id }) {
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
    <section className="ice-bg" id={id}>
      <div className="section-head">
        <h2>{title}</h2>
      </div>
      <div className="cat-grid cat-grid--three" ref={gridRef}>
        {items.map((item) => (
          <article key={item.id} className={`cat-card${openId === item.id ? ' is-open' : ''}`}>
            <div className="cat-card-bg" style={{ backgroundImage: `url('${item.image}')` }} />
            <div className="cat-body">
              <h3 className="cat-title">{item.title}</h3>
              <div className="cat-reveal">
                <div className="sub">{item.sub}</div>
                <p>{item.body}</p>
              </div>
              <a
                className="cat-btn"
                href={item.href}
                onFocus={() => setOpenId(item.id)}
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
