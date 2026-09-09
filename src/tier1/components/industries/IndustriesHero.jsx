import { industriesHero } from '@/content/industries.js';
import CtaLabel from '../CtaLabel.jsx';

/**
 * Full-bleed photograph, angled gradient, glass panel left.
 *
 * The supplied hero is an aerial of a corporate campus facing a distribution
 * park — the two halves of the frame are the subject, so the gradient darkens
 * the left third only and leaves the highway, the offices and the loading
 * bays on show. Same construction as the approved Services hero; only the
 * gradient angle and the overlay differ, because the photograph does.
 */
export default function IndustriesHero() {
  return (
    <section className="ind-hero" data-dark-hero>
      <div className="ind-hero-media" aria-hidden="true">
        <div
          className="ind-hero-img"
          style={{ backgroundImage: `url('${industriesHero.image}')` }}
        />
        <div className="ind-hero-grad" />
        <div className="ind-hero-glow" />
        <IndustryLattice />
      </div>

      <div className="ind-hero-inner">
        <div className="ind-hero-glass">
          <h1>
            {industriesHero.titleLine1}
            <br />
            <span className="accent">{industriesHero.titleLine2}</span>
          </h1>
          <p>{industriesHero.body}</p>
          <div className="cta-row">
            <button className="btn-cyan ind-btn-glow"><CtaLabel>{industriesHero.primaryCta}</CtaLabel></button>
            <button className="btn-glass glass"><CtaLabel>{industriesHero.secondaryCta}</CtaLabel></button>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Ambient network of industry nodes over the photograph.
 *
 * Deliberately almost subconscious: hairline connectors, four small nodes,
 * one slow cyan pulse per branch on a 9-11s cycle. No glow stacking, no
 * particles. It sits above the photo and below the glass at low opacity, and
 * the whole layer is hidden under prefers-reduced-motion-driven CSS (the
 * animations stop; the static lattice remains).
 *
 * The geometry is placed over the right half of the frame, clear of the glass
 * panel, so it never competes with the copy.
 */
function IndustryLattice() {
  return (
    <svg className="ind-hero-lines" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="indHeroLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FA9DC" stopOpacity="0" />
          <stop offset="50%" stopColor="#7FA9DC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7FA9DC" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Connectors. Every path carries pathLength="1" so the CSS draw-in uses
          a length-independent dash — a fixed pixel dasharray clips the longer
          runs (the defect noted in the Services ecosystem). */}
      <g stroke="url(#indHeroLine)" strokeWidth="1" fill="none">
        <path className="ind-hero-link" pathLength="1" style={{ '--link-delay': '0.5s' }} d={BRANCH_A} />
        <path className="ind-hero-link" pathLength="1" style={{ '--link-delay': '0.75s' }} d={BRANCH_B} />
        <path className="ind-hero-link" pathLength="1" style={{ '--link-delay': '1s' }} d={BRANCH_C} />
        <path className="ind-hero-link" pathLength="1" style={{ '--link-delay': '1.25s' }} d="M1042 268 L1042 556" />
      </g>

      <g fill="#7FA9DC">
        <circle cx="1042" cy="268" r="3.2" opacity="0.7" />
        <circle cx="1236" cy="352" r="3.6" opacity="0.75" />
        <circle cx="1236" cy="556" r="3.2" opacity="0.6" />
        <circle cx="1042" cy="556" r="2.4" opacity="0.5" />
        <circle cx="1392" cy="292" r="2.4" opacity="0.45" />
      </g>

      {/* One travelling pulse per branch, offset so they never fire together. */}
      <circle className="ind-hero-pulse" r="2.8" fill="#A8C6EA">
        <animateMotion dur="11s" repeatCount="indefinite" path={BRANCH_A} />
      </circle>
      <circle className="ind-hero-pulse" r="2.4" fill="#A8C6EA">
        <animateMotion dur="9s" begin="3.5s" repeatCount="indefinite" path={BRANCH_B} />
      </circle>
    </svg>
  );
}

const BRANCH_A = 'M1042 268 L1236 352 L1236 556 L1042 556';
const BRANCH_B = 'M1236 352 L1392 292';
const BRANCH_C = 'M1236 556 L1392 620';
