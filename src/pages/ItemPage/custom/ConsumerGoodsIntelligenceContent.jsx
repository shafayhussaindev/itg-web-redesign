import { consumerGoodsIntelligence as content } from '@/data/platforms/consumer-goods-intelligence';

export default function ConsumerGoodsIntelligenceContent() {
  return <>
    {content.sections.map(section => (
      <section key={section.id} id={section.id} className="sd-section" aria-labelledby={`${section.id}-title`}>
        <div className="section-container">
          <div className="sd-section-heading">
            <p className="sd-eyebrow">{section.eyebrow}</p>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <p>{section.intro}</p>
          </div>
          {section.ordered ? (
            <ol className="sd-steps">{section.items.map((item, index) => (
              <li key={item.title}><span className="sd-step-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.body}</p></li>
            ))}</ol>
          ) : (
            <div className="sd-outcomes">{section.items.map(item => (
              <article key={item.title} className="sd-outcome"><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}</div>
          )}
        </div>
      </section>
    ))}
    <section className="sd-section" aria-labelledby="cgi-partners-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">CSI Ltd. & ITG LLC</p><h2 id="cgi-partners-title">Enterprise contacts & inquiries.</h2><p>Platform architecture and capability brief, Issue No. 63, July 2026.</p></div>
        <div className="sd-intro-grid sd-prose">
          <div><h3>CSI Ltd. headquarters</h3><p>43/F, AIA Building, 183 Electric Road, North Point, Hong Kong SAR</p><p><a className="sd-text-link" href="mailto:info@applied-csr.com">info@applied-csr.com</a></p><p><a className="sd-text-link" href="tel:+85223631019">+852 23631019</a></p></div>
          <div><h3>ITG LLC</h3><p>Bungalow No. 322, 1st Floor, Street No. 19, BMCHS, Karachi, Pakistan</p><p><a className="sd-text-link" href="mailto:info@itginnovators.com">info@itginnovators.com</a></p><p><a className="sd-text-link" href="tel:+14697573737">+1 (469) 757-3737</a></p></div>
        </div>
      </div>
    </section>
  </>;
}
