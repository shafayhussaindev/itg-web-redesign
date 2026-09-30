import { MSym } from '@/components/common/Icons';

const pad = (n) => String(n + 1).padStart(2, '0');

/* One layout shared by several custom item pages (listed in ./index.jsx):
   challenge + sidebar, capability cards, comparison table, delivery steps,
   outcomes and case studies. Each page passes its own data file as `content`. */
export default function CapabilityPageContent({ content }) {
  const { challenge, capabilities, comparison, delivery, outcomes, cases } = content;
  const [challengeLabel, solutionLabel, impactLabel] = cases.labels ?? ['Challenge', 'Solution', 'Impact'];
  return <>
    <section id="challenge" className="sd-section" aria-labelledby="cap-challenge-title">
      <div className="section-container t3-included">
        <div>
          <p className="sd-eyebrow">{challenge.eyebrow}</p>
          <h2 id="cap-challenge-title">{challenge.title}</h2>
          <div className="sd-prose t3-prose"><p>{challenge.body}</p></div>
        </div>
        <aside className="t3-outcomes" aria-labelledby="cap-drivers-title">
          <h3 id="cap-drivers-title">{challenge.driversTitle}</h3>
          <ul>{challenge.drivers.map(item => (
            <li key={item.title}><MSym name="check_circle" size={20} /><span><strong>{item.title}:</strong> {item.body}</span></li>
          ))}</ul>
        </aside>
      </div>
    </section>

    <section id="capabilities" className="sd-section" aria-labelledby="cap-capabilities-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{capabilities.eyebrow}</p>
          <h2 id="cap-capabilities-title">{capabilities.title}</h2>
        </div>
        <div className="sd-outcomes">{capabilities.items.map(item => (
          <article key={item.title} className="sd-outcome">
            <span className="sd-icon"><MSym name={item.icon} size={26} /></span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.useCases && <><p className="t3-use-cases-label">Use cases</p><p>{item.useCases}</p></>}
          </article>
        ))}</div>
      </div>
    </section>

    <section id="comparison" className="sd-section" aria-labelledby="cap-comparison-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{comparison.eyebrow}</p>
          <h2 id="cap-comparison-title">{comparison.title}</h2>
        </div>
        <div className="t3-compare-wrap" role="region" aria-labelledby="cap-comparison-title" tabIndex={0}>
          <table className="t3-compare">
            <thead><tr><th scope="col"><span className="sr-only">Dimension</span></th>{comparison.columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead>
            <tbody>{comparison.rows.map(([dimension, ...cells]) => (
              <tr key={dimension}><th scope="row">{dimension}</th>{cells.map(cell => <td key={cell}>{cell}</td>)}</tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="delivery" className="sd-section" aria-labelledby="cap-delivery-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{delivery.eyebrow}</p>
          <h2 id="cap-delivery-title">{delivery.title}</h2>
        </div>
        <ol className="sd-steps t3-steps-five">{delivery.steps.map((step, index) => (
          <li key={step.title}><span className="sd-step-number">{pad(index)}</span><h3>{step.title}</h3><p>{step.body}</p></li>
        ))}</ol>
      </div>
    </section>

    <section id="outcomes" className="sd-section" aria-labelledby="cap-outcomes-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{outcomes.eyebrow}</p>
          <h2 id="cap-outcomes-title">{outcomes.title}</h2>
        </div>
        <div className="t3-applied">{outcomes.items.map(item => (
          <article key={item.title}><MSym name={item.icon} size={28} /><h3>{item.title}</h3><p>{item.body}</p></article>
        ))}</div>
      </div>
    </section>

    <section id="case-study" className="sd-section" aria-labelledby="cap-case-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{cases.eyebrow}</p>
          <h2 id="cap-case-title">{cases.title}</h2>
        </div>
        <div className="t3-cases">{cases.items.map(item => (
          <article key={item.title} className="t3-case">
            <h3>{item.title}</h3>
            <dl>
              <div><dt>{challengeLabel}</dt><dd>{item.challenge}</dd></div>
              <div><dt>{solutionLabel}</dt><dd>{item.solution}</dd></div>
              <div className="t3-case-impact"><dt>{impactLabel}</dt><dd>{item.impact}</dd></div>
            </dl>
          </article>
        ))}</div>
      </div>
    </section>
  </>;
}
