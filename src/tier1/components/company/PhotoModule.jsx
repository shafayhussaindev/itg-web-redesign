import { useReveal, useParallax } from '../../hooks/useReveal.js';
import Icon from './icons.jsx';

/**
 * The Company page's editorial workhorse: a centred section head, then a large
 * photograph with a glass panel overlapping it from one side, the section's
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
 * The parallax offset is mapped to a percentage of the image's own height
 * rather than the hook's raw pixels; see the note in `IndustryFeatures.jsx`.
 */
export default function PhotoModule({
  id,
  data,
  side = 'right',
  columns = 2,
  tone = 'light',
  figure = null,
}) {
  const [headRef, headIn] = useReveal();
  const [ref, shown] = useReveal({ threshold: 0.1 });
  const [imgRef, offset] = useParallax(0.05);
  const shift = Math.max(-6, Math.min(6, offset / 6));

  return (
    <section className={`co-module co-module--${tone}`} id={id}>
      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>{data.title}</h2>
        <span
          className={`co-rule${tone === 'dark' ? ' co-rule--light' : ''}`}
          aria-hidden="true"
        />
        {data.intro && <p>{data.intro}</p>}
      </div>

      <article
        ref={ref}
        className={`co-mod co-mod--${side}${columns === 1 ? ' co-mod--narrow' : ''} reveal${shown ? ' is-in' : ''}`}
      >
        <div className="co-mod-media">
          <div
            ref={imgRef}
            className="co-mod-img"
            style={{ transform: `translate3d(0, ${shift}%, 0) scale(1.1)` }}
          >
            <img src={data.image} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="co-mod-scrim" />
          {figure}
        </div>

        <div className="co-mod-panel">
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
