import { industryFeatures } from '@/content/industries.js';
import { useReveal } from '../../hooks/useReveal.js';

/**
 * Ecosystem band — the dark beat between the last photographic feature and
 * the closing CTA, and the page's one argument made purely as geometry: one
 * ITG platform, eight industries.
 *
 * It carries NO written content of its own. The nodes are the eight industry
 * names already on the page and the hub is the ITG mark, so nothing here is
 * invented copy — which is the condition the brief puts on this section
 * existing at all. It has no heading for the same reason.
 *
 * Same construction as the approved Services PlatformAlignment: responsive
 * SVG, connectors on pathLength="1", draw-in on reveal, a CSS-stacked
 * fallback under 900px where a two-sided fan-out stops being legible.
 */
export default function IndustryEcosystem() {
  const [ref, shown] = useReveal({ threshold: 0.2 });

  return (
    <section className="ind-eco-band" aria-hidden="true">
      <div className="ind-eco-glow" />

      <div ref={ref} className="ind-eco-stage">
        <EcosystemDiagram active={shown} />
      </div>

      {/* Phone fallback: the SVG's two-sided fan-out is unreadable under
          ~900px, so CSS hides it and shows this instead. Same eight names. */}
      <div className="ind-eco-stack">
        <div className="ind-eco-stack-hub">
          <img src="/assets/logo-white.png" alt="" />
        </div>
        <ul className="ind-eco-stack-list">
          {industryFeatures.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Geometry. Four node chips down each side of a central platform. */
const W = 1080;
const CHIP_W = 300;
const CHIP_H = 62;
const ROWS = [82, 242, 402, 562];
const LEFT_CX = 170;
const RIGHT_CX = W - 170;
const HUB_CX = W / 2;
const HUB_CY = 322;
const HUB_W = 250;
const HUB_H = 126;

/* One cycle for every pulse: travel, then a pause before the next run.
   Shared by all eight so they cannot drift apart. */
const PULSE_DUR = '4.6s';

/**
 * Connector from a chip's inner edge to the hub's near edge. Both control
 * points sit on the horizontal midline between the two, which gives a clean
 * S-curve; a control point past the end point makes the branch hook back on
 * itself (the defect noted in the Services ecosystem).
 */
function branch(fromX, fromY, toX) {
  const midX = (fromX + toX) / 2;
  return `M${fromX} ${fromY} C ${midX} ${fromY}, ${midX} ${HUB_CY}, ${toX} ${HUB_CY}`;
}

function EcosystemDiagram({ active }) {
  const left = industryFeatures.slice(0, 4);
  const right = industryFeatures.slice(4);

  const sides = [
    {
      key: 'l',
      items: left,
      cx: LEFT_CX,
      edgeX: LEFT_CX + CHIP_W / 2,
      hubX: HUB_CX - HUB_W / 2,
    },
    {
      key: 'r',
      items: right,
      cx: RIGHT_CX,
      edgeX: RIGHT_CX - CHIP_W / 2,
      hubX: HUB_CX + HUB_W / 2,
    },
  ];

  return (
    <svg className={`ind-eco${active ? ' is-active' : ''}`} viewBox={`0 0 ${W} 644`}>
      <defs>
        {/* userSpaceOnUse: the middle branches are near-horizontal, and a
            proportional gradient collapses on a zero-height bounding box. */}
        <linearGradient id="indEcoIn" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0">
          <stop offset="0%" stopColor="#7FA9DC" stopOpacity="0.16" />
          <stop offset="50%" stopColor="#7FA9DC" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7FA9DC" stopOpacity="0.16" />
        </linearGradient>
        <radialGradient id="indEcoHubGlow">
          <stop offset="0%" stopColor="#7FA9DC" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7FA9DC" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connectors */}
      {sides.map((side) =>
        side.items.map((item, i) => (
          <path
            key={`k${side.key}${item.id}`}
            className="ind-eco-link"
            pathLength="1"
            style={{ '--eco-delay': `${0.3 + i * 0.12}s` }}
            d={branch(side.edgeX, ROWS[i] + CHIP_H / 2, side.hubX)}
          />
        ))
      )}

      {/* One pulse per branch, all eight on a single clock: identical begin
          and identical dur, so they leave their chips together and reach the
          hub together.

          The branches are not the same length — 111 user units on the middle
          rows against 298 on the outer ones — so equal duration means the
          outer dots cover more ground in the same time. Departure and arrival
          are what line up; velocity cannot also, short of redrawing the
          layout so every branch measures the same.

          The radius does the appearing and vanishing, not the opacity: CSS
          already owns .ind-eco-pulse opacity for the scroll-reveal gate and
          would override a SMIL opacity animation outright. Nothing sets r, so
          it is safe to drive here, and it shares the SMIL clock with the
          motion — which a CSS animation would not. */}
      {sides.map((side) =>
        side.items.map((item, i) => (
          <circle key={`p${side.key}${item.id}`} r="0" fill="#A8C6EA" className="ind-eco-pulse">
            <animateMotion
              dur={PULSE_DUR}
              begin="0s"
              repeatCount="indefinite"
              calcMode="linear"
              keyPoints="0;1;1"
              keyTimes="0;0.52;1"
              path={branch(side.edgeX, ROWS[i] + CHIP_H / 2, side.hubX)}
            />
            <animate
              attributeName="r"
              dur={PULSE_DUR}
              begin="0s"
              repeatCount="indefinite"
              calcMode="linear"
              values="0;3;3;0;0"
              keyTimes="0;0.05;0.46;0.52;1"
            />
          </circle>
        ))
      )}

      {/* Industry nodes */}
      {sides.map((side) =>
        side.items.map((item, i) => (
          <g
            key={`n${item.id}`}
            className="ind-eco-item"
            style={{ '--eco-delay': `${0.55 + i * 0.12}s` }}
          >
            <rect
              x={side.cx - CHIP_W / 2}
              y={ROWS[i]}
              width={CHIP_W}
              height={CHIP_H}
              rx="16"
              className="ind-eco-node"
            />
            <rect
              x={side.cx - CHIP_W / 2}
              y={ROWS[i]}
              width={CHIP_W}
              height={CHIP_H}
              rx="16"
              className="ind-eco-node-ring"
            />
            <text x={side.cx} y={ROWS[i] + CHIP_H / 2 + 5} textAnchor="middle" className="ind-eco-node-label">
              {item.name}
            </text>
          </g>
        ))
      )}

      {/* Central platform — the ITG mark, no label text. */}
      <g className="ind-eco-item" style={{ '--eco-delay': '0.15s' }}>
        <circle cx={HUB_CX} cy={HUB_CY} r="150" fill="url(#indEcoHubGlow)" />
        <rect
          x={HUB_CX - HUB_W / 2}
          y={HUB_CY - HUB_H / 2}
          width={HUB_W}
          height={HUB_H}
          rx="24"
          className="ind-eco-hub"
        />
        <rect
          x={HUB_CX - HUB_W / 2}
          y={HUB_CY - HUB_H / 2}
          width={HUB_W}
          height={HUB_H}
          rx="24"
          className="ind-eco-hub-ring"
        />
        <image
          href="/assets/logo-white.png"
          x={HUB_CX - 62}
          y={HUB_CY - 26}
          width="124"
          height="52"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>
  );
}
