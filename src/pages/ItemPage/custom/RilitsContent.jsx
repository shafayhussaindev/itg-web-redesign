import { rilits as content } from '@/data/platforms/rilits';
import { MSym } from '@/components/common/Icons';

export default function RilitsContent() {
  const { overview, solutions, pillars, offices } = content;
  const { labels } = solutions;

  return <>
    <section id="overview" className="sd-section" aria-labelledby="rl-overview-title">
      <div className="section-container sd-intro-grid">
        <div><p className="sd-eyebrow">{overview.eyebrow}</p><h2 id="rl-overview-title">{overview.title}</h2></div>
        <div className="sd-prose">{overview.body.map(p => <p key={p}>{p}</p>)}</div>
      </div>
    </section>

    <section id="solutions" className="sd-section" aria-labelledby="t3-cards-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">{solutions.eyebrow}</p><h2 id="t3-cards-title">{solutions.title}</h2></div>
        <div className="t3-cards">{solutions.items.map(item => (
          <article key={item.title} className="t3-card">
            <h3><span className="sd-icon"><MSym name={item.icon} size={24} /></span>{item.title}</h3>
            <dl>
              <dt>{labels.challenge}</dt><dd>{item.challenge}</dd>
              <dt>{labels.does}</dt><dd>{item.does}</dd>
              <dt>{labels.impact}</dt><dd className="rl-impact">{item.impact}</dd>
            </dl>
          </article>
        ))}</div>
      </div>
    </section>

    <section id="why-rilits" className="sd-section" aria-labelledby="rl-pillars-title">
      <div className="section-container">
        <div className="sd-section-heading"><p className="sd-eyebrow">{pillars.eyebrow}</p><h2 id="rl-pillars-title">{pillars.title}</h2></div>
        <div className="t3-applied">{pillars.items.map(item => (
          <article key={item.title}><MSym name={item.icon} size={28} /><h3>{item.title}</h3><p>{item.body}</p></article>
        ))}</div>
      </div>
    </section>

    <section id="offices" className="sd-section" aria-labelledby="rl-offices-title">
      <div className="section-container">
        <div className="sd-section-heading">
          <p className="sd-eyebrow">{offices.eyebrow}</p><h2 id="rl-offices-title">{offices.title}</h2>
          <p><a className="sd-text-link" href={`mailto:${offices.email}`}><MSym name="mail" size={18} />{offices.email}</a></p>
        </div>
        <div className="rl-offices">{offices.items.map(office => (
          <address key={office.region} className="rl-office">
            <p className="rl-office-region">{office.region}</p>
            <strong>{office.company}</strong>
            <span>{office.address}</span>
            <a href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}><MSym name="call" size={18} />{office.phone}</a>
          </address>
        ))}</div>
      </div>
    </section>
  </>;
}
