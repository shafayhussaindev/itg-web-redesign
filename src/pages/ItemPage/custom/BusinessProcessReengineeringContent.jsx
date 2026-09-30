import { businessProcessReengineering as content } from '@/data/solutions/business-process-re-engineering';
import { MSym } from '@/components/common/Icons';
import './business-process-re-engineering.css';

const pad = (n) => String(n + 1).padStart(2, '0');

export default function BusinessProcessReengineeringContent() {
  const { challenge, framework, outcomes, cases, differentiators } = content;
  return <>
    <section id="challenge" className="sd-section" aria-labelledby="bpr-challenge-title">
      <div className="section-container t3-included">
        <div>
          <p className="sd-eyebrow">{challenge.eyebrow}</p>
          <h2 id="bpr-challenge-title">{challenge.title}</h2>
          <div className="sd-prose t3-prose"><p>{challenge.body}</p></div>
        </div>
        <aside className="t3-outcomes" aria-labelledby="bpr-indicators-title">
          <h3 id="bpr-indicators-title">{challenge.indicatorsTitle}</h3>
          <ul>{challenge.indicators.map(item => <li key={item}><MSym name="check_circle" size={20} />{item}</li>)}</ul>
        </aside>
      </div>
    </section>

    <section id="framework" className="sd-section" aria-labelledby="bpr-framework-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{framework.eyebrow}</p>
          <h2 id="bpr-framework-title">{framework.title}</h2>
          <p>{framework.intro}</p>
        </div>
        <ol className="sd-steps t3-steps-five">{framework.steps.map((step, index) => (
          <li key={step.title}>
            <span className="sd-step-number">{pad(index)}</span>
            <h3>{step.title}</h3>
            <p className="t3-step-stage">{step.stage}</p>
            <p>{step.body}</p>
          </li>
        ))}</ol>
      </div>
    </section>

    <section id="outcomes" className="sd-section" aria-labelledby="bpr-outcomes-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{outcomes.eyebrow}</p>
          <h2 id="bpr-outcomes-title">{outcomes.title}</h2>
        </div>
        <div className="sd-outcomes">{outcomes.items.map(item => (
          <article key={item.title} className="sd-outcome">
            <span className="sd-icon"><MSym name={item.icon} size={26} /></span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}</div>
      </div>
    </section>

    <section id="case-studies" className="sd-section" aria-labelledby="bpr-cases-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{cases.eyebrow}</p>
          <h2 id="bpr-cases-title">{cases.title}</h2>
        </div>
        <div className="t3-cases">{cases.items.map(item => (
          <article key={item.title} className="t3-case">
            <p className="t3-case-sector">{item.sector}</p>
            <h3>{item.title}</h3>
            <dl>
              <div><dt>Challenge</dt><dd>{item.challenge}</dd></div>
              <div><dt>Solution</dt><dd>{item.solution}</dd></div>
              <div className="t3-case-impact"><dt>Impact</dt><dd>{item.impact}</dd></div>
            </dl>
          </article>
        ))}</div>
      </div>
    </section>

    <section id="why-itg" className="sd-section" aria-labelledby="bpr-why-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{differentiators.eyebrow}</p>
          <h2 id="bpr-why-title">{differentiators.title}</h2>
        </div>
        <div className="t3-applied bpr-why">{differentiators.items.map(item => (
          <article key={item.title}><MSym name={item.icon} size={28} /><h3>{item.title}</h3><p>{item.body}</p></article>
        ))}</div>
      </div>
    </section>
  </>;
}
