import { whoWeAre } from '@/content/tier1/company.js';
import Icon from './icons.jsx';

/**
 * Editorial opener: a large photograph of the team with the overview copy in a
 * solid panel overlapping it, then the four pillars as a slim strip
 * beneath rather than the four separate boxes the old page used.
 *
 * The strip is the point of the section. On the current page those four items
 * are a 2x2 of identical cards competing with the paragraph beside them; here
 * they read as one supporting rail under the statement they belong to.
 */
export default function WhoWeAre() {

  return (
    <section className="co-about" id="about">
      <div className="co-about-module">
        <div className="co-about-media">
          <div className="co-about-img">
            <img src={whoWeAre.image} alt="" loading="lazy" decoding="async" />
          </div>

          <div className="co-about-scrim" />
        </div>

        <div className="co-about-panel">
          <span className="co-kicker">{whoWeAre.eyebrow}</span>
          <h2>{whoWeAre.title}</h2>
          <h3 className="co-about-sub">{whoWeAre.subtitle}</h3>
          <p className="co-about-body">{whoWeAre.body}</p>
        </div>
      </div>

      <ul className="co-pillars">
        {whoWeAre.pillars.map((p, i) => (
          <li key={p.id} className="co-pillar" style={{ '--i': i }}>
            <span className="co-pillar-icon">
              <Icon name={p.icon} size={20} />
            </span>
            <h4>{p.title}</h4>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
