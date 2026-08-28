import React, { useEffect, useState } from 'react';

/**
 * HowItWorks — supplied component, retuned only where integration required.
 *
 * Kept from the supplied version: one particle on a single connector via
 * native <animateMotion>, node activation synced with the negative
 * animation-delay trick (no per-frame JS, no drift), reduced-motion handling.
 *
 * Changed for integration (invited by the supplied file's own header):
 *   - ITG tokens from the approved Solutions page replace the #0B2545/#3E6FB0
 *     approximations; typography is Sora.
 *   - Teal is the activation accent (decorative/diagram use only — never cyan,
 *     which is reserved for actions).
 *   - Added a vertical layout under 720px so the four steps read as a sequence
 *     on mobile instead of four tiny nodes squeezed onto one line.
 *   - Desktop geometry rescaled from the supplied 1120-unit viewBox to 720.
 *     The supplied file assumed a full-bleed slot; here the animation sits in
 *     the right column of a two-column section (~640-720px), so a 1120-unit
 *     box scaled its 15px labels down to 9.7px on screen. Same composition,
 *     units chosen so the type renders at its intended size. Sub-labels wrap
 *     to two lines (same words) because the tighter node pitch cannot hold
 *     them on one.
 */

const COLORS = {
  navy: '#0D2140',
  charcoal: '#4A5568',
  teal: '#B03A42',
  line: '#C4D3E4',
  glassFill: 'rgba(255,255,255,0.72)',
  glassBorder: 'rgba(255,255,255,0.9)',
  shadow: 'rgba(13,33,64,0.10)',
  glow: 'rgba(176, 58, 66,0.32)',
  particle: '#B03A42',
};

const DURATION = 6.2;

/* `sub` is kept whole for the vertical layout and for the aria description;
   `subLines` is the same wording broken across two lines for the horizontal
   one, where the node pitch is 180 units. */
const NODES = [
  { id: 'integration', step: '01', label: 'Integration',  sub: 'Connect systems and sources',  subLines: ['Connect systems', 'and sources'],   icon: 'integration', x: 90,  fraction: 0.02 },
  { id: 'data',        step: '02', label: 'Unified Data', sub: 'One consistent data layer',    subLines: ['One consistent', 'data layer'],     icon: 'data',        x: 270, fraction: 0.335 },
  { id: 'governance',  step: '03', label: 'Governance',   sub: 'Policy, security and control', subLines: ['Policy, security', 'and control'],  icon: 'governance',  x: 450, fraction: 0.665 },
  { id: 'scale',       step: '04', label: 'Scale',        sub: 'Grow across the enterprise',   subLines: ['Grow across', 'the enterprise'],    icon: 'scale',       x: 630, fraction: 0.97 },
];

const NODE_Y = 148;
const PATH_ID = 'itg-how-path';

/* vertical geometry for < 720px */
const V = { width: 360, x: 62, firstY: 62, gap: 116 };
const V_HEIGHT = V.firstY + (NODES.length - 1) * V.gap + 62;
const V_PATH_ID = 'itg-how-path-v';

function Icon({ type, size = 24 }) {
  const common = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (type) {
    case 'integration':
      return (<svg {...common}><circle cx="9" cy="12" r="5" /><circle cx="15" cy="12" r="5" /></svg>);
    case 'data':
      return (<svg {...common}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>);
    case 'governance':
      return (<svg {...common}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" /><path d="M9 12l2 2 4-4" /></svg>);
    case 'scale':
      return (<svg {...common}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>);
    default:
      return null;
  }
}

function useIsNarrow(breakpoint = 720) {
  const [narrow, setNarrow] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(`(max-width:${breakpoint}px)`).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${breakpoint}px)`);
    const on = (e) => setNarrow(e.matches);
    mq.addEventListener('change', on);
    setNarrow(mq.matches);
    return () => mq.removeEventListener('change', on);
  }, [breakpoint]);
  return narrow;
}

const STYLE = `
  /* Caps the SVG near 1:1 with its 720-unit viewBox. Without this the type
     scales up past its intended size when the section stacks to one column. */
  .itg-how-wrap { width:100%; max-width:760px; margin:0 auto; box-sizing:border-box; }
  .itg-how-svg { width:100%; height:auto; display:block; overflow:visible; }
  .itg-how-line { stroke:${COLORS.line}; stroke-width:1.25; fill:none; }
  .itg-how-particle { fill:${COLORS.particle}; }
  .itg-how-step { fill:${COLORS.teal}; font-family:'Sora',sans-serif; font-size:11px;
    font-weight:700; letter-spacing:1.6px; }
  .itg-how-label { fill:${COLORS.navy}; font-family:'Sora',sans-serif; font-size:15px; font-weight:700; }
  .itg-how-sub { fill:${COLORS.charcoal}; font-family:'Sora',sans-serif; font-size:11.5px; font-weight:400; }
  .itg-how-node-glass { fill:${COLORS.glassFill}; stroke:${COLORS.glassBorder}; stroke-width:1;
    transform-box:fill-box; transform-origin:center;
    animation-name:itg-how-pulse-glass; animation-timing-function:ease-out; animation-iteration-count:infinite; }
  .itg-how-icon { color:${COLORS.navy}; transform-box:fill-box; transform-origin:center;
    animation-name:itg-how-pulse-icon; animation-timing-function:ease-out; animation-iteration-count:infinite; }
  @keyframes itg-how-pulse-glass {
    0%   { filter:drop-shadow(0 0 0px ${COLORS.glow}); stroke:${COLORS.teal}; }
    22%  { filter:drop-shadow(0 0 14px ${COLORS.glow}); stroke:${COLORS.teal}; }
    55%  { filter:drop-shadow(0 0 0px rgba(176, 58, 66,0)); stroke:${COLORS.glassBorder}; }
    100% { filter:drop-shadow(0 0 0px rgba(176, 58, 66,0)); stroke:${COLORS.glassBorder}; }
  }
  @keyframes itg-how-pulse-icon {
    0%   { color:${COLORS.teal}; transform:scale(1.08); }
    22%  { color:${COLORS.teal}; transform:scale(1.08); }
    55%  { color:${COLORS.navy}; transform:scale(1); }
    100% { color:${COLORS.navy}; transform:scale(1); }
  }
  @media (prefers-reduced-motion: reduce) {
    .itg-how-node-glass, .itg-how-icon { animation:none; }
    .itg-how-particle { display:none; }
  }
`;

const ARIA =
  'How ITG products work together: Integration, then Unified Data, then Governance, then Scale.';

export default function HowItWorks() {
  const narrow = useIsNarrow();

  const defs = (
    <defs>
      <filter id="itg-how-soft-shadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="6" stdDeviation="9" floodColor={COLORS.shadow} />
      </filter>
    </defs>
  );

  /* ---------------- vertical (mobile) ---------------- */
  if (narrow) {
    const lastY = V.firstY + (NODES.length - 1) * V.gap;
    return (
      <div className="itg-how-wrap">
        <style>{STYLE}</style>
        <svg className="itg-how-svg" viewBox={`0 0 ${V.width} ${V_HEIGHT}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label={ARIA}>
          {defs}
          <path id={V_PATH_ID} d={`M${V.x},${V.firstY} L${V.x},${lastY}`} className="itg-how-line" />
          <circle r="3" className="itg-how-particle" opacity="0">
            <animateMotion dur={`${DURATION}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#${V_PATH_ID}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.04;0.92;0.98;1" dur={`${DURATION}s`} repeatCount="indefinite" />
          </circle>

          {NODES.map((n, i) => {
            const y = V.firstY + i * V.gap;
            const delay = `${-(n.fraction * DURATION).toFixed(3)}s`;
            return (
              <g key={n.id}>
                <circle cx={V.x} cy={y} r="32" className="itg-how-node-glass" filter="url(#itg-how-soft-shadow)"
                  style={{ animationDuration: `${DURATION}s`, animationDelay: delay }} />
                <g className="itg-how-icon" style={{ animationDuration: `${DURATION}s`, animationDelay: delay }}
                  transform={`translate(${V.x - 11}, ${y - 11})`}>
                  <Icon type={n.icon} size={22} />
                </g>
                <text x={V.x + 56} y={y - 12} className="itg-how-step">{n.step}</text>
                <text x={V.x + 56} y={y + 6} className="itg-how-label">{n.label}</text>
                <text x={V.x + 56} y={y + 24} className="itg-how-sub">{n.sub}</text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  /* ---------------- horizontal (desktop) ---------------- */
  return (
    <div className="itg-how-wrap">
      <style>{STYLE}</style>
      <svg className="itg-how-svg" viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={ARIA}>
        {defs}
        <path id={PATH_ID} d={`M${NODES[0].x},${NODE_Y} L${NODES[NODES.length - 1].x},${NODE_Y}`} className="itg-how-line" />
        <circle r="3" className="itg-how-particle" opacity="0">
          <animateMotion dur={`${DURATION}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href={`#${PATH_ID}`} />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.04;0.92;0.98;1" dur={`${DURATION}s`} repeatCount="indefinite" />
        </circle>

        {NODES.map((n) => {
          const delay = `${-(n.fraction * DURATION).toFixed(3)}s`;
          return (
            <g key={n.id}>
              <text x={n.x} y={NODE_Y - 68} className="itg-how-step" textAnchor="middle">{n.step}</text>
              <circle cx={n.x} cy={NODE_Y} r="46" className="itg-how-node-glass" filter="url(#itg-how-soft-shadow)"
                style={{ animationDuration: `${DURATION}s`, animationDelay: delay }} />
              <g className="itg-how-icon" style={{ animationDuration: `${DURATION}s`, animationDelay: delay }}
                transform={`translate(${n.x - 12}, ${NODE_Y - 12})`}>
                <Icon type={n.icon} />
              </g>
              <text x={n.x} y={NODE_Y + 76} className="itg-how-label" textAnchor="middle">{n.label}</text>
              <text x={n.x} y={NODE_Y + 96} className="itg-how-sub" textAnchor="middle">
                {n.subLines.map((line, i) => (
                  <tspan key={line} x={n.x} dy={i === 0 ? 0 : 15}>{line}</tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
