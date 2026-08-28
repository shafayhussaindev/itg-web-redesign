import { companyHero } from '../../data/company.js';

/**
 * Full-bleed headquarters photograph, angled gradient, glass panel left,
 * enterprise network animation over the building.
 *
 * The supplied hero is a dusk elevation with the building hard right and an
 * empty park and skyline on the left, so the panel sits left and the gradient
 * darkens only that side — the architecture stays on show. The photograph
 * already carries cyan accent lighting along the facade, which is why the
 * network overlay is kept to hairlines: the building is doing most of the
 * work and a heavier graphic would fight it.
 */
export default function CompanyHero() {
  return (
    <section className="co-hero" data-dark-hero>
      <div className="co-hero-media" aria-hidden="true">
        <div
          className="co-hero-img"
          style={{ backgroundImage: `url('${companyHero.image}')` }}
        />
        <div className="co-hero-grad" />
        <div className="co-hero-glow" />
        <EnterpriseNetwork />
      </div>

      <div className="co-hero-inner">
        <div className="co-hero-glass">
          <span className="eyebrow">{companyHero.eyebrow}</span>
          <h1>{companyHero.title}</h1>
          {companyHero.body.map((para, i) => (
            <p key={para} className={i === 0 ? 'co-hero-lead' : undefined}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Enterprise network — the page's first of three animations.
 *
 * A small mesh of nodes over the building's upper floors, connected by
 * hairlines, with two slow pulses travelling the longest paths. It reads as
 * an organisation's systems quietly running, not as a sci-fi HUD: no glow
 * stacking, no particle field, nothing faster than an 11-second cycle.
 *
 * Sits above the photograph and below the glass panel, positioned over the
 * right half of the frame so it never competes with the copy.
 */
function EnterpriseNetwork() {
  return (
    <svg className="co-hero-net" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="coNetLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FA9DC" stopOpacity="0" />
          <stop offset="50%" stopColor="#7FA9DC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7FA9DC" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g stroke="url(#coNetLine)" strokeWidth="1" fill="none">
        {NET_LINKS.map((d, i) => (
          <path
            key={d}
            className="co-net-link"
            pathLength="1"
            style={{ '--link-delay': `${0.6 + i * 0.22}s` }}
            d={d}
          />
        ))}
      </g>

      <g fill="#7FA9DC">
        {NET_NODES.map(([cx, cy, r, o]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} opacity={o} />
        ))}
      </g>

      {/* Two travelling pulses, offset so they never fire together. */}
      <circle className="co-net-pulse" r="2.8" fill="#A8C6EA">
        <animateMotion dur="11s" repeatCount="indefinite" path={NET_LINKS[0]} />
      </circle>
      <circle className="co-net-pulse" r="2.4" fill="#A8C6EA">
        <animateMotion dur="13s" begin="4s" repeatCount="indefinite" path={NET_LINKS[2]} />
      </circle>
    </svg>
  );
}

const NET_LINKS = [
  'M846 236 L1004 178 L1178 244 L1178 420',
  'M1004 178 L1004 352',
  'M846 236 L846 430 L1004 352',
  'M1178 244 L1330 200',
  'M1004 352 L1178 420',
];

const NET_NODES = [
  [846, 236, 3.2, 0.7],
  [1004, 178, 3.6, 0.78],
  [1178, 244, 3.2, 0.66],
  [1004, 352, 3, 0.6],
  [846, 430, 2.4, 0.5],
  [1178, 420, 2.6, 0.55],
  [1330, 200, 2.2, 0.42],
];
