import { servicesHero } from '../../data/services.js';
import Icon from './icons.jsx';

/**
 * Full-bleed photograph, gradient, glass panel, floating capability chips.
 *
 * The supplied hero photo puts its subject (the office floor) hard right and
 * leaves an empty wall on the left, so the glass panel sits left and the
 * gradient is angled to darken that side only — the photograph stays readable
 * where it actually has content.
 */
export default function ServicesHero() {
  return (
    <section className="svc-hero" data-dark-hero>
      <div className="svc-hero-media" aria-hidden="true">
        <div className="svc-hero-img" />
        <div className="svc-hero-grad" />
        {/* Soft radial light behind the panel — photographic, not neon. */}
        <div className="svc-hero-glow" />
        <SvcHeroLines />
      </div>

      <div className="svc-hero-inner">
        <div className="svc-hero-glass">
          <span className="eyebrow">{servicesHero.eyebrow}</span>
          <h1>
            {servicesHero.titleLine1}
            <br />
            <span className="accent">{servicesHero.titleAccent}</span>
          </h1>
          <p>{servicesHero.body}</p>
          <div className="cta-row">
            <button className="btn-cyan svc-btn-glow">{servicesHero.primaryCta}</button>
            <button className="btn-glass glass">{servicesHero.secondaryCta}</button>
          </div>
        </div>

        <ul className="svc-hero-chips">
          {servicesHero.chips.map((chip, i) => (
            <li key={chip.id} className="svc-chip" style={{ '--chip-delay': `${0.7 + i * 0.11}s` }}>
              <span className="svc-chip-icon">
                <Icon name={chip.icon} size={18} />
              </span>
              <span className="svc-chip-label">{chip.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * Thin architectural vector overlay — a restrained node/connector lattice that
 * reads as enterprise schematic rather than sci-fi network. Sits above the
 * photo and below the glass, at low opacity.
 */
function SvcHeroLines() {
  return (
    <svg className="svc-hero-lines" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="svcHeroLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FA9DC" stopOpacity="0" />
          <stop offset="50%" stopColor="#7FA9DC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7FA9DC" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#svcHeroLine)" strokeWidth="1" fill="none">
        <path d="M980 120 L1180 210 L1180 430 L980 520" />
        <path d="M1180 210 L1360 150" />
        <path d="M1180 430 L1360 500" />
        <path d="M980 120 L980 520" />
      </g>
      <g fill="#7FA9DC">
        <circle cx="1180" cy="210" r="3.5" opacity="0.75" />
        <circle cx="1180" cy="430" r="3.5" opacity="0.6" />
        <circle cx="980" cy="120" r="2.5" opacity="0.5" />
        <circle cx="980" cy="520" r="2.5" opacity="0.5" />
      </g>
      {/* One travelling pulse, slow enough to register as light not motion. */}
      <circle className="svc-hero-pulse" r="3" fill="#A8C6EA">
        <animateMotion dur="7s" repeatCount="indefinite" path="M980 120 L1180 210 L1180 430 L980 520" />
      </circle>
    </svg>
  );
}
