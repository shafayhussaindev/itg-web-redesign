import { useEffect, useState } from 'react';

/**
 * ProductEcosystem — ITG Platform Core and its five connected capabilities.
 *
 * Pure vector: SVG shapes, CSS keyframes and SMIL motion. No animation
 * library, no raster, no filters beyond one drop shadow. Every duration is a
 * divisor of the 10s master cycle, so the whole illustration is seamless and
 * exports cleanly to Lottie at 10s / 60fps.
 *
 * The 10s cycle: each of the five nodes activates in turn for 2s — glow up,
 * icon forward, its pathway turns cyan and carries a light pulse — then eases
 * back. Start and end states are identical, so the loop has no seam.
 *
 * Accent: cyan, per the ecosystem brief. Teal is deliberately absent so this
 * block carries a single accent, matching the philosophy and category
 * sections. Nothing here is clickable-as-navigation; hover is a highlight.
 */

const COLORS = {
  navy: '#0D2140',
  navyMid: '#1A3A6B',
  charcoal: '#4A5568',
  accent: '#3D6FB4',
  sky: '#D0E2F4',
  line: '#C4D3E4',
  glassFill: 'rgba(255,255,255,0.74)',
  glassBorder: 'rgba(255,255,255,0.92)',
  shadow: 'rgba(13,33,64,0.10)',
};

/* Positions are unchanged from the reference composition. */
const NODES = [
  {
    id: 'ebp',
    label: 'Enterprise Business\nPlatforms',
    x: 400, y: 140,
    lineStart: { x: 400, y: 314 }, lineEnd: { x: 400, y: 194 },
    labelAnchor: { x: 400, y: 66, align: 'middle' },
    icon: 'layers',
  },
  {
    id: 'sc',
    label: 'Sustainability and\nCompliance',
    x: 647, y: 320,
    lineStart: { x: 481.8, y: 373.4 }, lineEnd: { x: 595.6, y: 336.7 },
    labelAnchor: { x: 706, y: 300, align: 'start' },
    icon: 'leaf',
  },
  {
    id: 'aoa',
    label: 'Asset Operations and\nAutomation',
    x: 553, y: 610,
    lineStart: { x: 450.6, y: 469.5 }, lineEnd: { x: 521.2, y: 566.4 },
    labelAnchor: { x: 610, y: 668, align: 'start' },
    icon: 'gear',
  },
  {
    id: 'ai',
    label: 'AI and\nIntelligence',
    x: 247, y: 610,
    lineStart: { x: 349.4, y: 469.5 }, lineEnd: { x: 278.8, y: 566.4 },
    labelAnchor: { x: 190, y: 668, align: 'end' },
    icon: 'spark',
  },
  {
    id: 'de',
    label: 'Digital\nExperience',
    x: 153, y: 320,
    lineStart: { x: 318.2, y: 373.4 }, lineEnd: { x: 204.4, y: 336.7 },
    labelAnchor: { x: 94, y: 300, align: 'end' },
    icon: 'screen',
  },
];

/* Vertical arrangement used under 720px: core on top, spine down the left,
   nodes stacked with labels reading left-to-right at full size. */
const V = { width: 340, coreY: 78, spineX: 74, firstY: 224, gap: 104 };
const V_NODES = NODES.map((n, i) => ({ ...n, vy: V.firstY + i * V.gap }));
const V_HEIGHT = V.firstY + (NODES.length - 1) * V.gap + 78;

const CYCLE = 10;                 // seconds — the master loop
const SLOT = CYCLE / NODES.length; // 2s per capability

function Icon({ type, size = 22 }) {
  const common = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (type) {
    case 'layers':
      return (<svg {...common}><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="M3 12l9 5 9-5" /><path d="M3 16l9 5 9-5" /></svg>);
    case 'leaf':
      return (<svg {...common}><path d="M20 4c-9 0-14 5-14 12 0 2.2 1.8 4 4 4 7 0 12-5 12-14V4Z" /><path d="M6 20c2-4 4-7 8-10" /></svg>);
    case 'gear':
      return (<svg {...common}><circle cx="12" cy="12" r="3.2" /><path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.6 6.4l-1.7 1.7M8.1 15.9l-1.7 1.7M17.6 17.6l-1.7-1.7M8.1 8.1 6.4 6.4" /></svg>);
    case 'spark':
      return (<svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><circle cx="12" cy="12" r="3" /><path d="M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" strokeWidth="1.1" /></svg>);
    case 'screen':
      return (<svg {...common}><rect x="3.5" y="5" width="17" height="12" rx="1.5" /><path d="M9 20.5h6M12 17v3.5" /></svg>);
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
  .itg-eco-wrap { width:100%; max-width:880px; margin:0 auto; box-sizing:border-box; }
  .itg-eco-svg { width:100%; height:auto; display:block; overflow:visible; }

  /* ---- architectural ground: reads as space, not as decoration ---- */
  .itg-eco-grid { opacity:.5; }
  .itg-eco-fieldring { fill:none; stroke:${COLORS.navy}; stroke-width:.5; opacity:.05; }

  /* ---- connection pathways ---- */
  .itg-eco-line { stroke:${COLORS.line}; stroke-width:1.25; fill:none;
    transition:stroke .55s ease, stroke-width .55s ease; }
  .itg-eco-line.is-hover { stroke:${COLORS.accent}; stroke-width:1.7; }
  /* Cyan tint that rides the 10s cycle: on for this node's 2s slot only. */
  .itg-eco-line-lit { stroke:${COLORS.accent}; stroke-width:1.6; fill:none; opacity:0;
    animation:itg-eco-lit ${CYCLE}s linear infinite;
    animation-delay:calc(var(--i) * ${SLOT}s); }
  @keyframes itg-eco-lit {
    0%,100% { opacity:0; }
    5%      { opacity:.55; }
    15%     { opacity:.55; }
    22%     { opacity:0; }
  }
  /* the light that travels the pathway during activation */
  .itg-eco-pulse { stroke:${COLORS.accent}; stroke-width:1.8; fill:none; stroke-linecap:round;
    stroke-dasharray:9 100; stroke-dashoffset:9; opacity:0;
    animation:itg-eco-pulse-run ${CYCLE}s linear infinite;
    animation-delay:calc(var(--i) * ${SLOT}s); }
  @keyframes itg-eco-pulse-run {
    0%   { stroke-dashoffset:9;    opacity:0; }
    4%   { opacity:.85; }
    16%  { opacity:.85; }
    20%  { stroke-dashoffset:-100; opacity:0; }
    100% { stroke-dashoffset:-100; opacity:0; }
  }
  .itg-eco-particle { fill:${COLORS.accent}; }

  /* ---- core ---- */
  .itg-eco-core-glass { fill:${COLORS.glassFill}; stroke:${COLORS.glassBorder}; stroke-width:1; }
  .itg-eco-core-plate { fill:none; stroke:${COLORS.navy}; stroke-width:.75; opacity:.07; }
  .itg-eco-core-breathe { transform-box:fill-box; transform-origin:center;
    animation:itg-eco-breathe 5s ease-in-out infinite; }
  @keyframes itg-eco-breathe {
    0%,100% { transform:scale(1);     opacity:.85; }
    50%     { transform:scale(1.028); opacity:1; }
  }
  /* Orbits carry evenly spaced marks, so a rotation of one mark-step is
     indistinguishable from a full turn — the ring reads as barely moving and
     still lands exactly where it started at 10s. */
  .itg-eco-orbit { fill:none; stroke:${COLORS.accent}; transform-box:fill-box; transform-origin:center; }
  .itg-eco-orbit--a { stroke-width:.9; opacity:.34; stroke-dasharray:2.6 27.4;
    animation:itg-eco-orbit-a ${CYCLE}s linear infinite; }
  .itg-eco-orbit--b { stroke-width:.7; opacity:.2; stroke-dasharray:1.8 22.2;
    animation:itg-eco-orbit-b ${CYCLE}s linear infinite; }
  @keyframes itg-eco-orbit-a { from { transform:rotate(0deg); }  to { transform:rotate(30deg); } }
  @keyframes itg-eco-orbit-b { from { transform:rotate(0deg); }  to { transform:rotate(-24deg); } }
  .itg-eco-core-label { fill:${COLORS.navy}; font-family:'Sora',sans-serif;
    font-size:22px; font-weight:700; letter-spacing:.2px; text-anchor:middle; }
  .itg-eco-core-sublabel { fill:${COLORS.charcoal}; font-family:'Sora',sans-serif;
    font-size:11px; font-weight:600; letter-spacing:1.4px; text-transform:uppercase; text-anchor:middle; }

  /* ---- nodes ----
     Three nested groups so hover, float and activation each own one
     transform and never fight: an animation always beats a transition. */
  .itg-eco-node-group { cursor:default; }
  .itg-eco-hover { transform-box:fill-box; transform-origin:center;
    transition:transform .34s cubic-bezier(.2,.8,.2,1); }
  .itg-eco-node-group:hover .itg-eco-hover,
  .itg-eco-node-group:focus-visible .itg-eco-hover { transform:scale(1.045); }
  .itg-eco-float { animation:itg-eco-float 5s ease-in-out infinite;
    animation-delay:calc(var(--i) * 1s); }
  @keyframes itg-eco-float {
    0%,100% { transform:translateY(0); }
    50%     { transform:translateY(-3px); }
  }
  .itg-eco-act { transform-box:fill-box; transform-origin:center;
    animation:itg-eco-act ${CYCLE}s ease-in-out infinite;
    animation-delay:calc(var(--i) * ${SLOT}s); }
  @keyframes itg-eco-act {
    0%,100% { transform:scale(1); }
    6%      { transform:scale(1.045); }
    15%     { transform:scale(1.045); }
    24%     { transform:scale(1); }
  }
  .itg-eco-node-glass { fill:${COLORS.glassFill}; stroke:${COLORS.glassBorder}; stroke-width:1; }
  .itg-eco-node-rim { fill:none; stroke:${COLORS.accent}; stroke-width:1; opacity:0;
    animation:itg-eco-rim ${CYCLE}s ease-in-out infinite;
    animation-delay:calc(var(--i) * ${SLOT}s); }
  @keyframes itg-eco-rim {
    0%,100% { opacity:0; } 6% { opacity:.5; } 15% { opacity:.5; } 24% { opacity:0; }
  }
  .itg-eco-node-lift { opacity:0;
    animation:itg-eco-lift ${CYCLE}s ease-in-out infinite;
    animation-delay:calc(var(--i) * ${SLOT}s); }
  @keyframes itg-eco-lift {
    0%,100% { opacity:0; } 6% { opacity:1; } 15% { opacity:1; } 24% { opacity:0; }
  }
  /* separate from the activation glow so hover still reads mid-cycle */
  .itg-eco-node-hoverglow { opacity:0; transition:opacity .34s ease; }
  .itg-eco-node-group:hover .itg-eco-node-hoverglow,
  .itg-eco-node-group:focus-visible .itg-eco-node-hoverglow { opacity:1; }
  .itg-eco-icon { color:${COLORS.navy}; opacity:.76;
    animation:itg-eco-icon ${CYCLE}s ease-in-out infinite;
    animation-delay:calc(var(--i) * ${SLOT}s); }
  @keyframes itg-eco-icon {
    0%,100% { opacity:.76; } 6% { opacity:1; } 15% { opacity:1; } 24% { opacity:.76; }
  }
  .itg-eco-node-group:hover .itg-eco-icon,
  .itg-eco-node-group:focus-visible .itg-eco-icon { opacity:1; }
  .itg-eco-node-group:focus-visible { outline:2px solid ${COLORS.accent}; outline-offset:3px; border-radius:8px; }
  .itg-eco-node-label { fill:${COLORS.navy}; font-family:'Sora',sans-serif;
    font-size:13px; font-weight:600; }

  @media (prefers-reduced-motion: reduce) {
    .itg-eco-core-breathe, .itg-eco-orbit, .itg-eco-float, .itg-eco-act,
    .itg-eco-rim, .itg-eco-node-lift, .itg-eco-icon, .itg-eco-line-lit,
    .itg-eco-pulse { animation:none; }
    .itg-eco-icon { opacity:.9; }
    .itg-eco-particle { display:none; }
  }
`;

export default function ProductEcosystem() {
  const [hovered, setHovered] = useState(null);
  const narrow = useIsNarrow();

  const defs = (
    <defs>
      <radialGradient id="itg-eco-core-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={COLORS.sky} stopOpacity="0.55" />
        <stop offset="60%" stopColor={COLORS.sky} stopOpacity="0.16" />
        <stop offset="100%" stopColor={COLORS.sky} stopOpacity="0" />
      </radialGradient>
      <radialGradient id="itg-eco-node-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={COLORS.sky} stopOpacity="0.55" />
        <stop offset="100%" stopColor={COLORS.sky} stopOpacity="0" />
      </radialGradient>
      <radialGradient id="itg-eco-node-lift" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={COLORS.accent} stopOpacity="0.30" />
        <stop offset="100%" stopColor={COLORS.accent} stopOpacity="0" />
      </radialGradient>
      <linearGradient id="itg-eco-plate" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor={COLORS.sky} stopOpacity="0.5" />
      </linearGradient>
      <pattern id="itg-eco-gridpat" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" fill="none" stroke={COLORS.navy} strokeWidth="0.5" opacity="0.05" />
      </pattern>
      <radialGradient id="itg-eco-gridmask" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff" stopOpacity="1" />
        <stop offset="70%" stopColor="#fff" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <mask id="itg-eco-gridfade">
        <rect x="0" y="0" width="800" height="760" fill="url(#itg-eco-gridmask)" />
      </mask>
      <filter id="itg-eco-soft-shadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor={COLORS.shadow} />
      </filter>
    </defs>
  );

  /* ---------------- vertical (mobile) ---------------- */
  if (narrow) {
    const spineTop = V.coreY + 46;
    const spineBottom = V_NODES[V_NODES.length - 1].vy;
    return (
      <div className="itg-eco-wrap">
        <style>{STYLE}</style>
        <svg
          className="itg-eco-svg"
          viewBox={`0 0 ${V.width} ${V_HEIGHT}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="The ITG platform core connected to five product categories: Enterprise Business Platforms, Sustainability and Compliance, Asset Operations and Automation, AI and Intelligence, and Digital Experience."
        >
          {defs}
          <path id="itg-eco-spine" d={`M${V.spineX},${spineTop} L${V.spineX},${spineBottom}`} className="itg-eco-line" />
          <circle r="3" className="itg-eco-particle" opacity="0">
            <animateMotion dur="10s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#itg-eco-spine" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.12;0.88;1" dur="10s" repeatCount="indefinite" />
          </circle>

          {/* core */}
          <g>
            <circle cx={V.spineX} cy={V.coreY} r="66" fill="url(#itg-eco-core-glow)" />
            <circle className="itg-eco-orbit itg-eco-orbit--a" cx={V.spineX} cy={V.coreY} r="52" pathLength="300" />
            <g className="itg-eco-core-breathe">
              <circle cx={V.spineX} cy={V.coreY} r="42" className="itg-eco-core-glass" filter="url(#itg-eco-soft-shadow)" />
            </g>
            <text x={V.spineX} y={V.coreY - 2} className="itg-eco-core-label" style={{ fontSize: 17 }}>ITG</text>
            <text x={V.spineX} y={V.coreY + 15} className="itg-eco-core-sublabel" style={{ fontSize: 8.5, letterSpacing: '1px' }}>Platform Core</text>
          </g>

          {/* nodes */}
          {V_NODES.map((n, i) => {
            const lines = n.label.split('\n');
            return (
              <g key={n.id} className="itg-eco-node-group" style={{ '--i': i }}>
                <path d={`M${V.spineX},${n.vy} L${V.spineX + 34},${n.vy}`} className="itg-eco-line" />
                <g className="itg-eco-float">
                  <g className="itg-eco-act">
                    <circle cx={V.spineX} cy={n.vy} r="26" className="itg-eco-node-glass" filter="url(#itg-eco-soft-shadow)" />
                    <circle cx={V.spineX} cy={n.vy} r="27.5" className="itg-eco-node-rim" />
                  </g>
                  <g className="itg-eco-icon" transform={`translate(${V.spineX - 10}, ${n.vy - 10})`}>
                    <Icon type={n.icon} size={20} />
                  </g>
                </g>
                <text x={V.spineX + 48} y={n.vy - (lines.length > 1 ? 5 : -4)} className="itg-eco-node-label">
                  {lines.map((line, idx) => (
                    <tspan key={idx} x={V.spineX + 48} dy={idx === 0 ? 0 : 16}>{line}</tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  /* ---------------- radial (desktop) ---------------- */
  return (
    <div className="itg-eco-wrap">
      <style>{STYLE}</style>
      <svg
        className="itg-eco-svg"
        viewBox="0 0 800 760"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="The ITG platform core connected to five product categories: Enterprise Business Platforms, Sustainability and Compliance, Asset Operations and Automation, AI and Intelligence, and Digital Experience."
      >
        {defs}

        {/* architectural ground */}
        <g className="itg-eco-grid" mask="url(#itg-eco-gridfade)" aria-hidden="true">
          <rect x="0" y="0" width="800" height="760" fill="url(#itg-eco-gridpat)" />
        </g>
        <g aria-hidden="true">
          <circle className="itg-eco-fieldring" cx="400" cy="400" r="212" />
          <circle className="itg-eco-fieldring" cx="400" cy="400" r="288" />
        </g>

        {/* pathways */}
        {NODES.map((n, i) => {
          const pathId = `itg-eco-path-${n.id}`;
          const d = `M${n.lineStart.x},${n.lineStart.y} L${n.lineEnd.x},${n.lineEnd.y}`;
          const isHover = hovered === n.id;
          return (
            <g key={n.id} style={{ '--i': i }}>
              <path id={pathId} d={d} className={`itg-eco-line${isHover ? ' is-hover' : ''}`} />
              <path d={d} className="itg-eco-line-lit" />
              <path d={d} className="itg-eco-pulse" pathLength="100" />
              {/* two ambient points per pathway, half a cycle apart */}
              {[0, -CYCLE / 2].map((begin, k) => (
                <circle key={k} r="2.4" className="itg-eco-particle" opacity="0">
                  <animateMotion dur={`${CYCLE}s`} begin={`${begin}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.15;0.85;1" dur={`${CYCLE}s`} begin={`${begin}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          );
        })}

        {/* core — layered glass plate under two slow orbits */}
        <g>
          <circle cx="400" cy="400" r="158" fill="url(#itg-eco-core-glow)" />
          <circle className="itg-eco-orbit itg-eco-orbit--b" cx="400" cy="400" r="126" pathLength="300" />
          <circle className="itg-eco-orbit itg-eco-orbit--a" cx="400" cy="400" r="108" pathLength="300" />
          <g className="itg-eco-core-breathe">
            <circle cx="400" cy="400" r="96" fill="url(#itg-eco-plate)" opacity="0.55" />
            <circle className="itg-eco-core-plate" cx="400" cy="400" r="96" />
            <circle cx="400" cy="400" r="86" className="itg-eco-core-glass" filter="url(#itg-eco-soft-shadow)" />
            <circle className="itg-eco-core-plate" cx="400" cy="400" r="74" />
          </g>
          {/* text sits outside the breathing group so it never scales */}
          <text x="400" y="396" className="itg-eco-core-label">ITG</text>
          <text x="400" y="418" className="itg-eco-core-sublabel">Platform Core</text>
        </g>

        {/* capabilities */}
        {NODES.map((n, i) => {
          const lines = n.label.split('\n');
          const anchorX = n.labelAnchor.x;
          const textAnchor =
            n.labelAnchor.align === 'start' ? 'start' : n.labelAnchor.align === 'end' ? 'end' : 'middle';
          return (
            <g
              key={n.id}
              className="itg-eco-node-group"
              style={{ '--i': i }}
              tabIndex={0}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(n.id)}
              onBlur={() => setHovered(null)}
            >
              <g className="itg-eco-hover">
                <g className="itg-eco-float">
                  <circle cx={n.x} cy={n.y} r="76" fill="url(#itg-eco-node-glow)" opacity="0.5" />
                  <circle className="itg-eco-node-lift" cx={n.x} cy={n.y} r="82" fill="url(#itg-eco-node-lift)" />
                  <circle className="itg-eco-node-hoverglow" cx={n.x} cy={n.y} r="82" fill="url(#itg-eco-node-lift)" />
                  <g className="itg-eco-act">
                    <circle cx={n.x} cy={n.y} r="54" className="itg-eco-node-glass" filter="url(#itg-eco-soft-shadow)" />
                    <circle cx={n.x} cy={n.y} r="55.5" className="itg-eco-node-rim" />
                  </g>
                  <g className="itg-eco-icon" transform={`translate(${n.x - 11}, ${n.y - 22})`}>
                    <Icon type={n.icon} />
                  </g>
                </g>
              </g>
              <text x={anchorX} y={n.labelAnchor.y} textAnchor={textAnchor} className="itg-eco-node-label">
                {lines.map((line, idx) => (
                  <tspan key={idx} x={anchorX} dy={idx === 0 ? 0 : 16}>{line}</tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
