import { hero } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero" data-dark-hero>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-glass">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>
            {hero.titleLine1}
            <br />
            <span className="accent">{hero.titleAccent}</span>
          </h1>
          <p>{hero.body}</p>
          <div className="cta-row">
            <button className="btn-cyan">{hero.primaryCta}</button>
            <button className="btn-glass glass">{hero.secondaryCta}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
