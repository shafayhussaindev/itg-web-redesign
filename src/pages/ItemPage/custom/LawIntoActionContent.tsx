import { lawIntoAction as content } from '@/data/platforms/law-into-action';
import './law-into-action.css';

type Entry = { title: string; body: string };
function Cards({ items }: { items: Entry[] }) {
  return <div className="lia-cards">{items.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>;
}

export default function LawIntoActionContent() {
  return <>
    <section className="sd-section" aria-label="Regulatory coverage">
      <div className="section-container">
        <p className="sd-eyebrow">Regulatory intelligence</p>
        <div className="lia-stats">{content.stats.map(stat => <article key={stat.title}><strong>{stat.value}</strong><h2>{stat.title}</h2><p>{stat.body}</p></article>)}</div>
      </div>
    </section>

    <section className="sd-section" aria-labelledby="lia-risks">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Market & legal exposure</p><h2 id="lia-risks">The cost of the status quo.</h2><p>Global compliance is deeply fragmented across disconnected official gazettes and legal databases. Operating without dedicated in-house counsel exposes international businesses to acute commercial vulnerabilities.</p></div>
        <Cards items={content.risks} />
        <h3 className="lia-subheading">Operational shift: traditional method vs. the LIA platform</h3>
        <div className="lia-table-wrap"><table className="lia-table"><caption className="sr-only">Comparison of traditional compliance work and the LIA platform</caption><thead><tr><th scope="col">Traditional legal approach</th><th scope="col">The LIA platform advantage</th></tr></thead><tbody>{content.comparison.map(([before, after]) => <tr key={before}><td>{before}</td><td>{after}</td></tr>)}</tbody></table></div>
      </div>
    </section>

    <section className="sd-section" aria-labelledby="lia-wizard">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Platform capabilities / 01</p><h2 id="lia-wizard">The compliance check wizard.</h2><p>A four-step funnel eliminates guesswork for companies entering new territories by translating business parameters into mandatory statutory actions.</p></div>
        <ol className="lia-wizard">{content.wizard.map((step, i) => <li key={step.title}><span className="sd-step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
      </div>
    </section>

    <section className="sd-section" aria-labelledby="lia-products">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Platform capabilities / 02</p><h2 id="lia-products">Product-level precision & HS code matching.</h2><p>Supply chain teams can verify market entry regulations before shipments leave port.</p></div>
        <Cards items={[
          { title: 'Global regulatory checker', body: 'Cross-reference requirements across 17 jurisdictions, from the European Union to Asia-Pacific and the Americas.' },
          { title: 'Harmonized System (HS) search', body: 'Query directly via HS codes, such as HS 8507 for batteries, or product keywords like “cotton” to establish exact environmental, customs, and packaging mandates.' },
        ]} />
        <h3 className="lia-subheading">Covered jurisdictions</h3><ul className="lia-tags">{content.jurisdictions.map(name => <li key={name}>{name}</li>)}</ul>
      </div>
    </section>

    <section className="sd-section" aria-labelledby="lia-ai">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Platform capabilities / 03</p><h2 id="lia-ai">Conversational AI legal intelligence.</h2><p>Internal operations, procurement, and sustainability teams can query natural-language questions directly without costly legal consultation delays.</p></div>
        <h3>Example questions</h3><ul className="lia-prompts">{content.prompts.map(prompt => <li key={prompt}><q>{prompt}</q></li>)}</ul>
      </div>
    </section>

    <section className="sd-section" aria-labelledby="lia-governance">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Platform capabilities / 04</p><h2 id="lia-governance">Deep-dive regulatory views & governance mapping.</h2><p>Every law is standardized into structured views, with governance duties mapped directly to responsible officers.</p></div>
        <ul className="lia-tags lia-views" aria-label="Regulatory views">{content.tabs.map(tab => <li key={tab}>{tab}</li>)}</ul>
        <Cards items={content.governance} />
      </div>
    </section>

    <section className="sd-section" aria-labelledby="lia-carbon">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Financial forecasting</p><h2 id="lia-carbon">CBAM carbon cost estimator.</h2><p>Quantify EU carbon border adjustments ahead of shipping, factoring tariffs into procurement contracts and pricing strategies.</p></div>
        <div className="lia-carbon"><div><h3>Input parameters</h3><dl>{content.carbonInputs.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></div><aside className="lia-benchmark" aria-label="Reference benchmark"><p className="sd-eyebrow">Benchmark price engine</p><strong>€75.36 <span>/ tCO₂e</span></strong><p>Certificate valuation applying EU phase-in schedules.</p><p className="lia-note">Reference benchmark for the 2026 example. Certificate prices and applicable schedules may vary.</p></aside></div>
      </div>
    </section>

    <section className="sd-section" aria-labelledby="lia-architecture">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Integrated engine</p><h2 id="lia-architecture">Three layers of regulatory intelligence.</h2><p>From continuous legal surveillance to curated regulatory data and practical user actions.</p></div>
        <ol className="lia-architecture">{content.architecture.map((layer, i) => <li key={layer.title}><span className="sd-number">0{i + 1}</span><div><h3>{layer.title}</h3><p>{layer.body}</p></div></li>)}</ol>
      </div>
    </section>

    <section className="sd-section" aria-labelledby="lia-api">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Partner API</p><h2 id="lia-api">Embed LIA in your ecosystem.</h2><p>Industry bodies, trade associations, and enterprise ERP providers can embed native compliance statuses directly into external portals.</p></div>
        <div className="lia-api"><ul className="t3-focus">{content.apiBenefits.map((benefit, i) => <li key={benefit}><span className="sd-number">0{i + 1}</span><span>{benefit}</span></li>)}</ul><div><h3>Example API response</h3><pre aria-label="Example regulatory metadata"><code>{content.apiExample}</code></pre></div></div>
      </div>
    </section>
  </>;
}
