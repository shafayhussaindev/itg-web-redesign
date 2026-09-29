import { svitch as content } from '@/data/platforms/svitch';
import { MSym } from '@/components/common/Icons';

export default function SvitchContent() {
  return <>
    <section id="overview" className="sd-section" aria-labelledby="svitch-overview-title">
      <div className="section-container sd-intro-grid">
        <div><p className="sd-eyebrow">Developed by ITG Technologies</p><h2 id="svitch-overview-title">Sustainability across the full supply network.</h2></div>
        <div className="sd-prose"><p>{content.category}</p><p>Bring end-to-end traceability and ESG governance into daily operations, with visibility into environmental and human labor impacts across multiple supplier tiers.</p></div>
      </div>
    </section>
    <section id="value-propositions" className="sd-section" aria-labelledby="svitch-values-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Why SVITCH</p><h2 id="svitch-values-title">Make supply chain responsibility actionable.</h2></div>
        <div className="sd-outcomes">{content.values.map(item => <article key={item.title} className="sd-outcome"><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </div>
    </section>
    {content.modules.map((module, index) => (
      <section key={module.id} id={module.id} className="sd-section" aria-labelledby={`${module.id}-title`}>
        <div className="section-container">
          <div className="sd-section-heading"><p className="sd-eyebrow">Platform module / {String(index + 1).padStart(2, '0')}</p><h2 id={`${module.id}-title`}>{module.title}</h2><p>{module.body}</p></div>
          <div className="t3-applied">{module.features.map(feature => (
            <article key={feature.title}><MSym name="check_circle" size={28} /><h3>{feature.title}</h3><p>{feature.body}</p></article>
          ))}</div>
        </div>
      </section>
    ))}
  </>;
}
