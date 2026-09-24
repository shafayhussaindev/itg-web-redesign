import { hero } from '@/content/tier1/solutions.js';
import CtaLabel from '@/pages/tier1/shared/CtaLabel.jsx';

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
            <a className="btn-cyan" href={hero.primaryCta.href}><CtaLabel>{hero.primaryCta.label}</CtaLabel></a>
            <a className="btn-glass glass" href={hero.secondaryCta.href}><CtaLabel>{hero.secondaryCta.label}</CtaLabel></a>
          </div>
        </div>
      </div>
    </section>
  );
}
