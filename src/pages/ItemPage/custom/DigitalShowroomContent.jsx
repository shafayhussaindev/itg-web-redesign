import { useState } from 'react';
import { digitalShowroom as content } from '@/data/platforms/digital-showroom';
import { MSym } from '@/components/common/Icons';

const pad = (n) => String(n + 1).padStart(2, '0');

export default function DigitalShowroomContent() {
  const { overview, steps, copilot, features, views, comparison, sample } = content;
  const [viewId, setViewId] = useState(views.items[0].id);
  const view = views.items.find(item => item.id === viewId);

  return <>
    <section id="overview" className="sd-section" aria-labelledby="ds-overview-title">
      <div className="section-container sd-intro-grid">
        <div><p className="sd-eyebrow">{overview.eyebrow}</p><h2 id="ds-overview-title">{overview.title}</h2></div>
        <div className="sd-prose">{overview.body.map(p => <p key={p}>{p}</p>)}</div>
      </div>
    </section>

    <section id="process" className="sd-section" aria-labelledby="t3-flow-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">{steps.eyebrow}</p><h2 id="t3-flow-title">{steps.title}</h2></div>
        <ol className="t3-flow">{steps.items.map((step, index) => (
          <li key={step.title}>
            <span className="t3-flow-icon"><MSym name={step.icon} size={26} /></span>
            <span className="sd-step-number">{pad(index)}</span>
            <h3>{step.title}</h3><p>{step.body}</p>
          </li>
        ))}</ol>
      </div>
    </section>

    <section id="copilot" className="sd-section" aria-labelledby="ds-copilot-title">
      <div className="section-container ds-copilot">
        <div>
          <p className="sd-eyebrow"><MSym name="auto_awesome" size={20} />{copilot.eyebrow}</p>
          <h2 id="ds-copilot-title">{copilot.title}</h2>
          <p>{copilot.body}</p>
          <ul className="ds-copilot-actions">{copilot.actions.map(action => <li key={action}><MSym name="check_circle" size={20} />{action}</li>)}</ul>
        </div>
        <ul className="ds-prompts" aria-label="Example requests">{copilot.prompts.map(prompt => (
          <li key={prompt}><MSym name="chat" size={20} /><span>“{prompt}”</span></li>
        ))}</ul>
      </div>
    </section>

    <section id="features" className="sd-section" aria-labelledby="ds-features-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Core features</p><h2 id="ds-features-title">Everything between the floor and the buyer.</h2></div>
        <div className="t3-applied">{features.map(item => (
          <article key={item.title}><MSym name={item.icon} size={28} /><h3>{item.title}</h3><p>{item.body}</p></article>
        ))}</div>
      </div>
    </section>

    <section id="buyer-views" className="sd-section" aria-labelledby="ds-views-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">{views.eyebrow}</p><h2 id="ds-views-title">{views.title}</h2></div>
        <div className="ds-tabs" role="tablist" aria-label="Buyer views">{views.items.map(item => (
          <button key={item.id} type="button" role="tab" id={`ds-tab-${item.id}`} aria-controls="ds-view-panel"
            aria-selected={item.id === viewId} className="ds-tab" onClick={() => setViewId(item.id)}>{item.label}</button>
        ))}</div>
        <div className="ds-view" id="ds-view-panel" role="tabpanel" aria-labelledby={`ds-tab-${view.id}`}>
          <p>{view.body}</p>
          <h3>Fields this buyer sees</h3>
          <ul>{view.fields.map(field => <li key={field}><MSym name="visibility" size={18} />{field}</li>)}</ul>
        </div>
      </div>
    </section>

    <section id="comparison" className="sd-section" aria-labelledby="ds-compare-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">{comparison.eyebrow}</p><h2 id="ds-compare-title">{comparison.title}</h2></div>
        <table className="ds-compare">
          <thead><tr><th scope="col">{comparison.beforeLabel}</th><th scope="col">{comparison.afterLabel}</th></tr></thead>
          <tbody>{comparison.rows.map(([before, after]) => (
            <tr key={before}>
              <td><MSym name="close" size={18} />{before}</td>
              <td><MSym name="check_circle" size={18} />{after}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </section>

    <section id="sample" className="sd-section" aria-labelledby="ds-sample-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">{sample.eyebrow}</p><h2 id="ds-sample-title">{sample.title}</h2></div>
        <div className="ds-lots-scroll" tabIndex={0} role="region" aria-labelledby="ds-sample-title">
          <table className="ds-lots">
            <thead><tr>{sample.columns.map(col => <th key={col} scope="col">{col}</th>)}</tr></thead>
            <tbody>{sample.lots.map(lot => (
              <tr key={lot[0]}>{lot.map((cell, index) => index === 0 ? <th key={index} scope="row">{cell}</th> : <td key={index}>{cell}</td>)}</tr>
            ))}</tbody>
          </table>
        </div>
        <p className="ds-note">{sample.note}</p>
      </div>
    </section>
  </>;
}
