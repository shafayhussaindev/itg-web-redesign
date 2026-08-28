import { deliveryApproach } from '../../data/services.js';
import { useReveal } from '../../hooks/useReveal.js';
import Icon from './icons.jsx';

/**
 * Ice-blue section. Clean by default — the only glass here is the delivery
 * visual, so it reads as the focal object rather than one card among many.
 */
export default function DeliveryApproach() {
  const [headRef, headIn] = useReveal();
  const [flowRef, flowIn] = useReveal({ threshold: 0.3 });
  const [panelRef, panelIn] = useReveal();

  return (
    <section className="ice-bg svc-approach" id="delivery">
      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>{deliveryApproach.title}</h2>
        <span className="svc-rule" aria-hidden="true" />
        <p>{deliveryApproach.intro}</p>
      </div>

      {/* Design -> Build -> Enable, inside the glass composition (brief 12). */}
      <div ref={flowRef} className={`svc-flow-stage reveal${flowIn ? ' is-in' : ''}`}>
        <div className="svc-flow-glass">
          <DeliveryFlowDiagram active={flowIn} />
          <ul className="svc-flow-legend">
            {deliveryApproach.flow.map((step) => (
              <li key={step.id}>
                <span className="svc-flow-legend-label">{step.label}</span>
                <span className="svc-flow-legend-note">{step.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div ref={panelRef} className={`svc-approach-panel reveal${panelIn ? ' is-in' : ''}`}>
        <h3>{deliveryApproach.panelHeading}</h3>
        <ul className="svc-approach-grid">
          {deliveryApproach.points.map((pt) => (
            <li key={pt.id}>
              <Icon name="check" className="svc-approach-check" size={22} />
              <div>
                <strong>{pt.title}</strong>
                <span>{pt.note}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <blockquote className="svc-statement">
        <strong>{deliveryApproach.statement}</strong>
        <span>{deliveryApproach.statementNote}</span>
      </blockquote>
    </section>
  );
}

/**
 * Native SVG rather than Lottie. The Solutions ecosystem Lottie is 1.1MB and
 * is already code-split away from every page but Solutions (see the note in
 * CLAUDE.md); this diagram is a few hundred bytes of markup and animates with
 * CSS, so the Services page ships no extra payload for it.
 *
 * `active` gates the draw-in so the connectors only trace once the section is
 * actually on screen.
 */
function DeliveryFlowDiagram({ active }) {
  const nodes = [
    { x: 150, cx: 150, label: 'DESIGN' },
    { x: 430, cx: 430, label: 'BUILD' },
    { x: 710, cx: 710, label: 'ENABLE' },
  ];

  return (
    <svg
      className={`svc-flow-svg${active ? ' is-active' : ''}`}
      viewBox="0 0 860 300"
      role="img"
      aria-label="ITG delivery model: Design, then Build, then Enable"
    >
      <defs>
        <radialGradient id="svcFlowGlow">
          <stop offset="0%" stopColor="#3D6FB4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3D6FB4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Lattice behind the spine — depth, not decoration for its own sake. */}
      <g stroke="#0D2140" strokeOpacity="0.07" strokeWidth="1">
        <path d="M150 150 L290 60 L430 150 L570 60 L710 150" fill="none" />
        <path d="M150 150 L290 240 L430 150 L570 240 L710 150" fill="none" />
      </g>

      {nodes.slice(0, -1).map((n, i) => (
        <path
          key={n.label}
          className="svc-flow-link"
          pathLength="1"
          style={{ '--link-delay': `${0.25 + i * 0.45}s` }}
          d={`M${n.cx + 62} 150 L${nodes[i + 1].cx - 62} 150`}
          /* Flat colour, not a gradient: these connectors are perfectly
             horizontal, so their bounding box has zero height and an
             objectBoundingBox gradient collapses to nothing. */
          stroke="#3D6FB4"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      ))}

      {nodes.map((n, i) => (
        <g key={n.label} className="svc-flow-node" style={{ '--node-delay': `${0.1 + i * 0.45}s` }}>
          <circle cx={n.cx} cy="150" r="74" fill="url(#svcFlowGlow)" />
          <circle cx={n.cx} cy="150" r="52" className="svc-flow-disc" />
          <circle cx={n.cx} cy="150" r="52" className="svc-flow-ring" />
          <text x={n.cx} y="156" textAnchor="middle" className="svc-flow-label">
            {n.label}
          </text>
        </g>
      ))}

      {/* Data pulses travelling the spine, staggered so the eye reads flow. */}
      {nodes.slice(0, -1).map((n, i) => (
        <circle key={`p${n.label}`} r="3.5" fill="#3D6FB4" className="svc-flow-pulse">
          <animateMotion
            dur="3.2s"
            begin={`${i * 1.6}s`}
            repeatCount="indefinite"
            path={`M${n.cx + 62} 150 L${nodes[i + 1].cx - 62} 150`}
          />
        </circle>
      ))}
    </svg>
  );
}
