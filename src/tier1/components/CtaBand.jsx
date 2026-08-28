import { ctaBand } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';

export default function CtaBand() {
  const [contentRef, contentIn] = useReveal({ threshold: 0.2 });

  return (
    <section className="cta-section">
      <div className="cta-bg" style={{ backgroundImage: `url('${ctaBand.background}')` }}>
        <div ref={contentRef} className={`cta-content reveal${contentIn ? ' is-in' : ''}`}>
          <h2>{ctaBand.title}</h2>
          <p>{ctaBand.body}</p>
          <div className="cta-btns">
            <button className="btn-cyan">{ctaBand.primary}</button>
            <button className="btn-glass glass">{ctaBand.secondary}</button>
            <button className="btn-ghost-white">{ctaBand.tertiary}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
