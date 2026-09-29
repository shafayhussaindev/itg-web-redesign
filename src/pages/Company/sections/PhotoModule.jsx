import Icon from './icons.jsx';

/**
 * The Company page's editorial workhorse: a centred section head, then a large
 * photograph with a solid panel overlapping it from one side, the section's
 * items laid out inside the panel.
 *
 * Construction follows the approved Services delivery pillar and the Industries
 * feature — a 12-column grid where media and panel share a row and their spans
 * intersect, so the panel sits ON the photograph rather than beside it.
 *
 * Used four times (Leadership, Security, People, Responsibility) with `side`
 * alternating, and with `columns` dropping to 1 for the two-item Responsibility
 * section so its panel does not sit half empty.
 *
 * `figure` is an optional render slot for a section's animation — Leadership
 * passes its governance graphic through it.
 *
 * The photograph is static: no parallax drift, no hover zoom, no panel lift
 * (all removed on request).
 */
export default function PhotoModule({
  id,
  data,
  side = 'right',
  columns = 2,
  tone = 'light',
  figure = null,
}) {

  return (
    <section className={`co-module co-module--${tone}`} id={id}>
      <article
       
        className={`co-mod co-mod--${side}${columns === 1 ? ' co-mod--narrow' : ''}`}
      >
        <div className="co-mod-media">
          <div className="co-mod-img">
            <img src={data.image} alt="" loading="lazy" decoding="async" />
          </div>

          <div className="co-mod-scrim" />
          {figure}
        </div>

        <div className="co-mod-panel">
          {/* The module's title and intro sit INSIDE the panel, the same way
              the Services delivery pillar carries its own heading. They used to
              be a centred section head above the photograph; moving them here
              is what makes this card read as the same component as the Services
              and Industries ones. */}
          <header className="co-mod-head">
            <span className="co-mod-head-icon">
              <Icon name={data.icon} size={22} />
            </span>
            <h2>{data.title}</h2>
          </header>
          {data.intro && <p className="co-mod-intro">{data.intro}</p>}

          <ul className={`co-mod-grid co-mod-grid--${columns}`}>
            {data.items.map((item) => (
              <li key={item.id} className="co-mod-item">
                <span className="co-mod-icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div className="co-mod-item-body">
                  <h3>{item.title}</h3>
                  {item.body && <p>{item.body}</p>}
                  {item.listIntro && <p className="co-mod-list-intro">{item.listIntro}</p>}
                  {item.list && (
                    <ul className="co-mod-list">
                      {item.list.map((entry) => (
                        <li key={entry}>
                          <Icon name="check" size={16} />
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
