import React, { useEffect, useState } from 'react';

/**
 * HowItWorks — supplied component, retuned only where integration required.
 *
 * Kept from the supplied version: one particle on a single connector and
 * reduced-motion handling. The particle is CSS-driven (originally SMIL), so
 * the dot and the circle lighting share one animation clock and cannot drift.
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
  teal: '#0D9488',
  line: '#C4D3E4',
  glassFill: 'rgba(255,255,255,0.72)',
  glassBorder: 'rgba(255,255,255,0.9)',
  shadow: 'rgba(13,33,64,0.10)',
  glow: 'rgba(13, 148, 136,0.32)',
  litFill: 'rgba(13, 148, 136, 0.10)',
  particle: '#0D9488',
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

/* Touch lighting: a circle is lit only while the travelling dot is inside
   it. The dot moves linearly from the first node's centre to the last, so a
   node's lit window is its centre fraction ± the circle radius as a fraction
   of the journey (desktop: 46/540 units; the vertical layout's 32/348 lands
   within half a percent, close enough to share). Windows are absolute cycle
   positions, so every node runs at delay 0 on the same clock as the dot.
   Generated per node because the ends are special: the dot STARTS inside the
   first circle and evaporates inside the last (its own opacity ramps 0→4%
   and fades 92→98%), so neither has a normal rim crossing. */
const TOUCH_R = 0.085;   /* circle radius as a fraction of the dot's journey */
const RAMP = 0.017;      /* light-up as the rim is crossed (≈ 0.1s)          */
const FADE = 0.05;       /* turn-off once the dot has left (≈ 0.3s)          */

const NODE_KEYFRAMES = NODES.map((n, i) => {
  const c = i / (NODES.length - 1);
  const first = i === 0;
  const last = i === NODES.length - 1;
  const rampStart = ((c - TOUCH_R) * 100).toFixed(1);
  const litFrom = (Math.max(c - TOUCH_R + RAMP, RAMP) * 100).toFixed(1);
  const litTo = last ? '96.0' : ((c + TOUCH_R) * 100).toFixed(1);
  const off = last ? '100' : ((c + TOUCH_R + FADE) * 100).toFixed(1);
  const lit = `filter:drop-shadow(0 0 16px ${COLORS.glow}); stroke:${COLORS.teal}; fill:${COLORS.litFill};`;
  const dark = `filter:drop-shadow(0 0 0px rgba(13, 148, 136,0)); stroke:${COLORS.glassBorder}; fill:${COLORS.glassFill};`;
  const litIcon = `color:${COLORS.teal}; transform:scale(1.12);`;
  const darkIcon = `color:${COLORS.navy}; transform:scale(1);`;
  const head = first ? `0%` : `0%, ${rampStart}%`;
  const tail = last ? `${off}%` : `${off}%, 100%`;
  return `
  @keyframes itg-how-glass-${i} {
    ${head} { ${dark} }
    ${litFrom}%, ${litTo}% { ${lit} }
    ${tail} { ${dark} }
  }
  @keyframes itg-how-icon-${i} {
    ${head} { ${darkIcon} }
    ${litFrom}%, ${litTo}% { ${litIcon} }
    ${tail} { ${darkIcon} }
  }`;
}).join('\n');

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
  /* The dot rides the SAME CSS clock as the circle keyframes. It was a SMIL
     motion before, and that timeline starts independently of CSS animations,
     so the lighting could trail the dot by a constant lag. One clock, no lag.
     Opacity stops reproduce the old fade: in by 4%, out 92→98%. */
  .itg-how-particle { fill:${COLORS.particle};
    animation-timing-function:linear; animation-iteration-count:infinite; }
  @keyframes itg-how-dot-h {
    0%   { transform:translateX(0); opacity:0; }
    4%   { opacity:1; }
    92%  { opacity:1; }
    98%  { opacity:0; }
    100% { transform:translateX(${NODES[NODES.length - 1].x - NODES[0].x}px); opacity:0; }
  }
  @keyframes itg-how-dot-v {
    0%   { transform:translateY(0); opacity:0; }
    4%   { opacity:1; }
    92%  { opacity:1; }
    98%  { opacity:0; }
    100% { transform:translateY(${(NODES.length - 1) * V.gap}px); opacity:0; }
  }
  .itg-how-step { fill:${COLORS.teal}; font-family:'Sora',sans-serif; font-size:11px;
    font-weight:700; letter-spacing:1.6px; }
  .itg-how-label { fill:${COLORS.navy}; font-family:'Sora',sans-serif; font-size:15px; font-weight:700; }
  .itg-how-sub { fill:${COLORS.charcoal}; font-family:'Sora',sans-serif; font-size:11.5px; font-weight:400; }
  .itg-how-node-glass { fill:${COLORS.glassFill}; stroke:${COLORS.glassBorder}; stroke-width:1;
    transform-box:fill-box; transform-origin:center;
    animation-timing-function:ease-out; animation-iteration-count:infinite; }
  .itg-how-icon { color:${COLORS.navy}; transform-box:fill-box; transform-origin:center;
    animation-timing-function:ease-in-out; animation-iteration-count:infinite; }
  ${NODE_KEYFRAMES}
  @media (prefers-reduced-motion: reduce) {
    /* !important because the per-node animation-name is set inline. */
    .itg-how-node-glass, .itg-how-icon { animation:none !important; }
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
          <circle r="3" cx={V.x} cy={V.firstY} className="itg-how-particle" opacity="0"
            style={{ animationName: 'itg-how-dot-v', animationDuration: `${DURATION}s` }} />

          {NODES.map((n, i) => {
            const y = V.firstY + i * V.gap;
            return (
              <g key={n.id}>
                <circle cx={V.x} cy={y} r="32" className="itg-how-node-glass" filter="url(#itg-how-soft-shadow)"
                  style={{ animationName: `itg-how-glass-${i}`, animationDuration: `${DURATION}s` }} />
                {/* The translate lives on its own wrapper: the lighting
                    animation sets `transform`, and a CSS transform replaces
                    the transform ATTRIBUTE outright — with both on one group
                    every icon collapsed to the SVG origin. */}
                <g transform={`translate(${V.x - 11}, ${y - 11})`}>
                  <g className="itg-how-icon"
                    style={{ animationName: `itg-how-icon-${i}`, animationDuration: `${DURATION}s` }}>
                    <Icon type={n.icon} size={22} />
                  </g>
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
        <circle r="3" cx={NODES[0].x} cy={NODE_Y} className="itg-how-particle" opacity="0"
          style={{ animationName: 'itg-how-dot-h', animationDuration: `${DURATION}s` }} />

        {NODES.map((n, i) => {
          return (
            <g key={n.id}>
              <text x={n.x} y={NODE_Y - 68} className="itg-how-step" textAnchor="middle">{n.step}</text>
              <circle cx={n.x} cy={NODE_Y} r="46" className="itg-how-node-glass" filter="url(#itg-how-soft-shadow)"
                style={{ animationName: `itg-how-glass-${i}`, animationDuration: `${DURATION}s` }} />
              <g transform={`translate(${n.x - 12}, ${NODE_Y - 12})`}>
                <g className="itg-how-icon"
                  style={{ animationName: `itg-how-icon-${i}`, animationDuration: `${DURATION}s` }}>
                  <Icon type={n.icon} />
                </g>
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
