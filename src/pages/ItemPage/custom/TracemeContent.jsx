import { traceme as content } from '@/data/platforms/traceme';
import { MSym } from '@/components/common/Icons';

const pad = (n) => String(n + 1).padStart(2, '0');

export default function TracemeContent() {
  const { overview, drivers, capabilities, architecture } = content;

  return <>
    <section id="overview" className="sd-section" aria-labelledby="tm-overview-title">
      <div className="section-container sd-intro-grid">
        <div><p className="sd-eyebrow">{overview.eyebrow}</p><h2 id="tm-overview-title">{overview.title}</h2></div>
        <div className="sd-prose">{overview.body.map(p => <p key={p}>{p}</p>)}</div>
      </div>
    </section>

    <section id="regulation" className="sd-section" aria-labelledby="tm-drivers-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">{drivers.eyebrow}</p><h2 id="tm-drivers-title">{drivers.title}</h2></div>
        <div className="t3-applied">{drivers.items.map(item => (
          <article key={item.title}><MSym name={item.icon} size={28} /><h3>{item.title}</h3><p>{item.body}</p></article>
        ))}</div>
      </div>
    </section>

    <section id="capabilities" className="sd-section" aria-labelledby="tm-capabilities-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">{capabilities.eyebrow}</p><h2 id="tm-capabilities-title">{capabilities.title}</h2></div>
        <div className="t3-cards">{capabilities.items.map(item => (
          <article key={item.title} className="t3-card">
            <h3><span className="sd-icon"><MSym name={item.icon} size={24} /></span>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}</div>
      </div>
    </section>

    <section id="architecture" className="sd-section" aria-labelledby="tm-architecture-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{architecture.eyebrow}</p><h2 id="tm-architecture-title">{architecture.title}</h2>
          <p>{architecture.intro}</p>
        </div>
        <ol className="t3-flow">{architecture.steps.map((step, index) => (
          <li key={step.title}>
            <span className="t3-flow-icon"><MSym name={step.icon} size={26} /></span>
            <span className="sd-step-number">{pad(index)}</span>
            <h3>{step.title}</h3><p>{step.body}</p>
          </li>
        ))}</ol>
      </div>
    </section>
  </>;
}
