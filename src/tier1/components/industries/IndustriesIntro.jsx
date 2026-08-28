import { industriesIntro } from '../../data/industries.js';
import { useReveal } from '../../hooks/useReveal.js';

/**
 * Introduction — ice-blue band, the three approved paragraphs in a single
 * pale glass panel, over an abstract line-and-node lattice.
 *
 * The current page runs this copy as bare centred text on a flat tint and
 * reads as empty. The fix here is architecture, not words: the panel gives the
 * paragraphs an edge to sit against, and the lattice behind it carries the
 * industries -> technology -> enablement idea as geometry. The lattice is
 * unlabelled on purpose — captioning it would mean inventing copy.
 *
 * First paragraph is set larger than the other two. That is typographic
 * hierarchy applied to existing copy in its existing order, not an edit.
 */
export default function IndustriesIntro() {
  const [ref, shown] = useReveal({ threshold: 0.2 });

  return (
    <section className="ind-intro">
      <IntroLattice />
      <div ref={ref} className={`ind-intro-glass reveal${shown ? ' is-in' : ''}`}>
        <span className="ind-intro-rule" aria-hidden="true" />
        {industriesIntro.map((para, i) => (
          <p key={para} className={i === 0 ? 'ind-intro-lead' : 'ind-intro-body'}>
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}

/**
 * Background geometry: a spread of source nodes converging through a central
 * spine and fanning back out. Hairline strokes at low opacity — it should
 * register as structure behind the panel, never as a diagram in front of it.
 */
function IntroLattice() {
  return (
    <svg
      className="ind-intro-lattice"
      viewBox="0 0 1440 620"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="indIntroIn" gradientUnits="userSpaceOnUse" x1="120" y1="0" x2="720" y2="0">
          <stop offset="0%" stopColor="#0D2140" stopOpacity="0" />
          <stop offset="100%" stopColor="#0D2140" stopOpacity="0.34" />
        </linearGradient>
        <linearGradient id="indIntroOut" gradientUnits="userSpaceOnUse" x1="720" y1="0" x2="1320" y2="0">
          <stop offset="0%" stopColor="#B03A42" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#B03A42" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g fill="none" strokeWidth="1.25">
        <g stroke="url(#indIntroIn)">
          <path d="M120 120 C 380 120, 460 310, 720 310" />
          <path d="M120 310 L720 310" />
          <path d="M120 500 C 380 500, 460 310, 720 310" />
        </g>
        <g stroke="url(#indIntroOut)">
          <path d="M720 310 C 980 310, 1060 130, 1320 130" />
          <path d="M720 310 L1320 310" />
          <path d="M720 310 C 980 310, 1060 490, 1320 490" />
        </g>
      </g>

      <g fill="#0D2140" opacity="0.24">
        <circle cx="120" cy="120" r="4" />
        <circle cx="120" cy="310" r="4" />
        <circle cx="120" cy="500" r="4" />
      </g>
      <g fill="#B03A42" opacity="0.42">
        <circle cx="1320" cy="130" r="4" />
        <circle cx="1320" cy="310" r="4" />
        <circle cx="1320" cy="490" r="4" />
      </g>
      <circle cx="720" cy="310" r="34" fill="none" stroke="#0D2140" strokeWidth="1.25" opacity="0.22" />
      <circle cx="720" cy="310" r="7" fill="#0D2140" opacity="0.3" />
    </svg>
  );
}
