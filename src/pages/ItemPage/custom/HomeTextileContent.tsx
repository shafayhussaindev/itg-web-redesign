import { homeTextile as content } from '@/data/industries/home-textile';
import './home-textile.css';

export default function HomeTextileContent() {
  return <>
    {content.sections.map(section => (
      <section key={section.id} id={section.id} className="sd-section" aria-labelledby={`${section.id}-title`}>
        <div className="section-container">
          <div className="sd-section-heading"><p className="sd-eyebrow">{section.eyebrow}</p><h2 id={`${section.id}-title`}>{section.title}</h2><p>{section.intro}</p></div>
          <div className="t3-applied">{section.items.map(item => (
            <article key={item.title} className="ht-item"><h3>{item.title}</h3><p>{item.body}</p></article>
          ))}</div>
        </div>
      </section>
    ))}
    <section id="case-profile" className="sd-section" aria-labelledby="ht-case-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Illustrative product record</p><h2 id="ht-case-title">Satin bed linen: the “Sholet” collection.</h2><p>The brief illustrates how technical specifications connect to regulatory and commercial records. These specifications and care instructions belong to this example product.</p></div>
        <div className="ht-table-wrap" role="region" aria-label="Sholet product record" tabIndex={0}>
          <table className="ht-table"><caption className="sr-only">Sholet example: product attributes, specifications and linked evidence</caption>
            <thead><tr><th scope="col">Data attribute</th><th scope="col">Technical specification</th><th scope="col">Regulatory / commercial linkage</th></tr></thead>
            <tbody>{content.caseRecord.map(([attribute, specification, linkage]) => <tr key={attribute}><th scope="row">{attribute}</th><td>{specification}</td><td>{linkage}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
    <section id="production" className="sd-section" aria-labelledby="ht-production-title">
      <div className="section-container sd-intro-grid">
        <div><p className="sd-eyebrow">Production & order visibility</p><h2 id="ht-production-title">Follow every order through the factory.</h2></div>
        <div className="sd-prose"><p>Connect purchase orders directly to weaving, dyeing, cutting, sewing and packaging with integrated inspections and quality assurance / quality control (QA/QC) milestone tracking.</p><p>Identify deviations early to help protect retail delivery deadlines and commercial margins.</p></div>
      </div>
    </section>
    <section id="commercial-outcomes" className="sd-section" aria-labelledby="ht-outcomes-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">Commercial outcomes</p><h2 id="ht-outcomes-title">Turn verified data into commercial value.</h2><p>Capture supplier information once and reuse it across global buyers to support these intended outcomes.</p></div>
        <div className="t3-applied">{content.outcomes.map(item => <article key={item.title} className="ht-item"><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        <p className="ht-source">Based on the Consumer Goods Intelligence Home Textiles industry application brief, Issue No. 63, July 2026.</p>
      </div>
    </section>
  </>;
}
