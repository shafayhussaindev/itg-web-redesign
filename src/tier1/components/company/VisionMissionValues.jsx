import { visionMissionValues as vmv } from '../../data/company.js';
import { useReveal } from '../../hooks/useReveal.js';
import Icon from './icons.jsx';

/**
 * Navy band — the page's first dark beat, and the one section where the copy
 * is short enough to carry a section on its own without photography.
 *
 * Three glass panels on navy. The Values panel holds a list where the other
 * two hold a sentence, so the panels are deliberately equal-height and top
 * aligned rather than sized to their content.
 */
export default function VisionMissionValues() {
  const [headRef, headIn] = useReveal();

  return (
    <section className="co-vmv">
      <div className="co-vmv-glow" aria-hidden="true" />

      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>{vmv.title}</h2>
        <span className="co-rule co-rule--light" aria-hidden="true" />
        <p>{vmv.intro}</p>
      </div>

      <div className="co-vmv-grid">
        {vmv.items.map((item, i) => (
          <Panel key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function Panel({ item, index }) {
  const [ref, shown] = useReveal({ threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`co-vmv-card reveal${shown ? ' is-in' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="co-vmv-icon">
        <Icon name={item.icon} size={22} />
      </span>
      <h3>{item.title}</h3>
      {item.body && <p>{item.body}</p>}
      {item.list && (
        <ul className="co-vmv-list">
          {item.list.map((entry) => (
            <li key={entry}>
              <Icon name="check" size={17} />
              <span>{entry}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
