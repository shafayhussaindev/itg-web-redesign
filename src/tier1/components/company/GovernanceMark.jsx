/**
 * Governance / trust animation — the second of the page's three.
 *
 * A shield outline that draws itself, three oversight rings that settle into
 * place around it, and a check that strokes in last. It sits in the corner of
 * the Leadership photograph, over the darkened edge the glass panel does not
 * cover, so it reads as a quiet seal on the section rather than a graphic
 * demanding attention.
 *
 * Everything is stroke-drawing and opacity — no glow stacking, no particles.
 * The whole sequence runs once, over about two and a half seconds, then holds.
 */
export default function GovernanceMark() {
  return (
    <svg
      className="co-gov"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      {/* Oversight rings — concentric, drawn from the outside in. */}
      <circle className="co-gov-ring" cx="100" cy="100" r="88" pathLength="1" style={{ '--d': '0s' }} />
      <circle className="co-gov-ring" cx="100" cy="100" r="72" pathLength="1" style={{ '--d': '0.18s' }} />

      {/* Tick marks around the outer ring — accountability points. */}
      <g className="co-gov-ticks">
        {TICKS.map((deg, i) => (
          <line
            key={deg}
            x1="100"
            y1="6"
            x2="100"
            y2="16"
            transform={`rotate(${deg} 100 100)`}
            style={{ '--d': `${0.5 + i * 0.07}s` }}
          />
        ))}
      </g>

      {/* Shield. */}
      <path
        className="co-gov-shield"
        pathLength="1"
        style={{ '--d': '0.4s' }}
        d="M100 40 L146 58 v40 c0 30-19 54-46 63 -27-9-46-33-46-63 V58 z"
      />

      {/* Check, last. */}
      <path
        className="co-gov-check"
        pathLength="1"
        style={{ '--d': '1.35s' }}
        d="M80 100 l14 15 28-33"
      />
    </svg>
  );
}

const TICKS = [0, 45, 90, 135, 180, 225, 270, 315];
