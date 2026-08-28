import { platformAlignment } from '../../data/services.js';
import { useReveal } from '../../hooks/useReveal.js';

/**
 * Navy section — the dark beat in the page rhythm, between the white pillars
 * and the white industries grid.
 *
 * Layered ecosystem: SERVICES feeds a central navy glass platform, which fans
 * out to the three alignment nodes. Built as a responsive SVG so the
 * connectors stay geometrically correct at any width; under 760px the CSS
 * swaps in a stacked vertical layout instead (see services.css).
 */
export default function PlatformAlignment() {
  const [headRef, headIn] = useReveal();
  const [figRef, figIn] = useReveal({ threshold: 0.25 });

  return (
    <section className="svc-align" id="alignment">
      <div className="svc-align-glow" aria-hidden="true" />

      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>{platformAlignment.title}</h2>
        <span className="svc-rule svc-rule--light" aria-hidden="true" />
        <p>{platformAlignment.intro}</p>
      </div>

      <div ref={figRef} className={`svc-align-stage reveal${figIn ? ' is-in' : ''}`}>
        <EcosystemDiagram active={figIn} />
      </div>

      {/* Phone fallback for the diagram above: the three-across fan-out is
          illegible under ~760px, so CSS hides the SVG and shows this instead.
          Same content, stacked, with the connectors as vertical rules. */}
      <ol className="svc-align-stack" aria-hidden="true">
        <li className="svc-align-step svc-align-step--src">
          <span>SERVICES</span>
        </li>
        <li className="svc-align-step svc-align-step--hub">
          <span>{platformAlignment.hub}</span>
        </li>
        {platformAlignment.nodes.map((node) => (
          <li key={node.id} className="svc-align-step svc-align-step--leaf">
            <span>{node.label}</span>
          </li>
        ))}
      </ol>

      <blockquote className="svc-statement svc-statement--dark">
        <strong>{platformAlignment.statement}</strong>
      </blockquote>
    </section>
  );
}

function EcosystemDiagram({ active }) {
  const { hub, nodes } = platformAlignment;
  // Fan-out x positions for the three lower nodes, evenly spread under the hub.
  const leafX = [150, 470, 790];
  const leafY = 450;
  const hubX = 470;
  const hubY = 240;

  // Hub bottom edge -> node top edge, and the midpoint both control points
  // share. Putting each control point on that midline gives a clean S-curve;
  // a control point above the end point makes the branch hook back on itself.
  const branchTop = hubY + 56;
  const branchBottom = leafY - 42;
  const branchMid = (branchTop + branchBottom) / 2;
  const branch = (x) => `M${hubX} ${branchTop} C ${hubX} ${branchMid}, ${x} ${branchMid}, ${x} ${branchBottom}`;

  return (
    <svg
      className={`svc-eco${active ? ' is-active' : ''}`}
      viewBox="0 0 940 540"
      role="img"
      aria-label={`Services feed ${hub}, which aligns to ${nodes.map((n) => n.label).join(', ')}`}
    >
      <defs>
        {/* userSpaceOnUse, not the default objectBoundingBox: the straight
            SERVICES-to-hub drop and the centre branch are perfectly vertical,
            so their bounding boxes have zero width and a proportional
            gradient collapses to nothing. Absolute coordinates span the whole
            diagram, which also keeps the fade consistent across all branches
            rather than restarting per path. */}
        <linearGradient id="svcEcoDown" gradientUnits="userSpaceOnUse" x1="0" y1="108" x2="0" y2="450">
          <stop offset="0%" stopColor="#7FA9DC" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7FA9DC" stopOpacity="0.18" />
        </linearGradient>
        <radialGradient id="svcEcoHubGlow">
          <stop offset="0%" stopColor="#7FA9DC" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#7FA9DC" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* SERVICES -> hub.
          pathLength="1" on every link normalises the draw-in: the CSS uses a
          dash of 1 regardless of how long the path actually is. With a fixed
          pixel dasharray the long outer branches were being clipped at the
          dash length and stopped short of their nodes. */}
      <path
        className="svc-eco-link"
        pathLength="1"
        style={{ '--eco-delay': '0.1s' }}
        d={`M${hubX} 108 L${hubX} ${hubY - 56}`}
      />

      {/* hub -> three alignment nodes */}
      {leafX.map((x, i) => (
        <path
          key={x}
          className="svc-eco-link"
          pathLength="1"
          style={{ '--eco-delay': `${0.5 + i * 0.15}s` }}
          d={branch(x)}
        />
      ))}

      {/* Travelling pulses down each branch */}
      {leafX.map((x, i) => (
        <circle key={`p${x}`} r="3.2" fill="#A8C6EA" className="svc-eco-pulse">
          <animateMotion
            dur="4s"
            begin={`${i * 1.1}s`}
            repeatCount="indefinite"
            path={branch(x)}
          />
        </circle>
      ))}

      {/* SERVICES source chip */}
      <g className="svc-eco-item" style={{ '--eco-delay': '0s' }}>
        <rect x={hubX - 96} y="52" width="192" height="56" rx="16" className="svc-eco-chip" />
        <text x={hubX} y="86" textAnchor="middle" className="svc-eco-chip-label">
          SERVICES
        </text>
      </g>

      {/* Central navy glass platform */}
      <g className="svc-eco-item" style={{ '--eco-delay': '0.35s' }}>
        <circle cx={hubX} cy={hubY} r="132" fill="url(#svcEcoHubGlow)" />
        <rect x={hubX - 150} y={hubY - 56} width="300" height="112" rx="22" className="svc-eco-hub" />
        <rect x={hubX - 150} y={hubY - 56} width="300" height="112" rx="22" className="svc-eco-hub-ring" />
        <text x={hubX} y={hubY + 8} textAnchor="middle" className="svc-eco-hub-label">
          {hub}
        </text>
      </g>

      {/* Alignment nodes */}
      {nodes.map((node, i) => (
        <g key={node.id} className="svc-eco-item" style={{ '--eco-delay': `${0.85 + i * 0.15}s` }}>
          <rect x={leafX[i] - 130} y={leafY - 42} width="260" height="84" rx="18" className="svc-eco-node" />
          <rect x={leafX[i] - 130} y={leafY - 42} width="260" height="84" rx="18" className="svc-eco-node-ring" />
          <circle cx={leafX[i]} cy={leafY - 10} r="5" className="svc-eco-dot" />
          <text x={leafX[i]} y={leafY + 26} textAnchor="middle" className="svc-eco-node-label">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
