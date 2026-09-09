import { hero } from '@/content/solutions.js';
import CtaLabel from './CtaLabel.jsx';

export default function Hero() {
  return (
    <section className="hero" data-dark-hero>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-glass">
          <h1>
            {hero.titleLine1}
            <br />
            <span className="accent">{hero.titleAccent}</span>
          </h1>
          <p>{hero.body}</p>
          <div className="cta-row">
            <button className="btn-cyan"><CtaLabel>{hero.primaryCta}</CtaLabel></button>
            <button className="btn-glass glass"><CtaLabel>{hero.secondaryCta}</CtaLabel></button>
          </div>
        </div>
      </div>
    </section>
  );
}
