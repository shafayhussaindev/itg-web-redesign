import { industryFeatures, focusHeading } from '../../data/industries.js';
import { useReveal, useParallax } from '../../hooks/useReveal.js';
import Icon from './icons.jsx';

/**
 * The eight industry features.
 *
 * No section heading — the live page has none here, and adding one would be
 * new copy. The rhythm comes from the alternating compositions instead.
 */
export default function IndustryFeatures() {
  return (
    <section className="ind-features" id="industries">
      <div className="ind-feature-list">
        {industryFeatures.map((item) => (
          <Feature key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

/**
 * One editorial module: a large 16:9 photograph with a glass content panel
 * overlapping it from one side, alternating down the page.
 *
 * Construction follows the approved Services delivery pillar exactly — a
 * 12-column grid where media and panel share a row and their column spans
 * intersect, so the panel sits ON the photograph rather than beside it. What
 * differs is proportion: the photography carries more of the composition here,
 * because Industries is the photographic page of the three. The media block
 * spans 9 of the 12 columns against the pillars' 8, and the panel sits 3
 * columns deep into it rather than 2 — a bigger photograph, held down harder.
 *
 * The image counter-scrolls fractionally slower than the page. Both the
 * reveal and the parallax no-op under prefers-reduced-motion — see
 * `hooks/useReveal.js`.
 *
 * `loading="lazy"` on every image: all eight are below the fold.
 */
function Feature({ item }) {
  const [ref, shown] = useReveal({ threshold: 0.1 });
  const [imgRef, offset] = useParallax(0.05);

  // The hook returns pixels, which is what opens a gap: the travel is fixed
  // while the bleed hiding it (`inset: -8%` plus the scale) is a percentage of
  // a media box that is 540px tall on desktop and 250px on a phone. Mapping to
  // a percentage of the image's own height — clamped to ±6%, against ~13.8% of
  // available bleed — keeps the counter-scroll proportional and makes an
  // uncovered edge geometrically impossible at any viewport.
  const shift = Math.max(-6, Math.min(6, offset / 6));

  return (
    <article
      ref={ref}
      id={item.id}
      className={`ind-feature ind-feature--${item.side} reveal${shown ? ' is-in' : ''}`}
      aria-labelledby={`ind-${item.id}-name`}
    >
      <div className="ind-feature-media">
        <div
          ref={imgRef}
          className="ind-feature-img"
          style={{ transform: `translate3d(0, ${shift}%, 0) scale(1.1)` }}
        >
          <img src={item.image} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="ind-feature-scrim" />
        <span className="ind-feature-number" aria-hidden="true">
          {item.number}
        </span>
      </div>

      <div className="ind-feature-panel">
        <header className="ind-feature-head">
          <span className="ind-feature-icon">
            <Icon name={item.icon} size={22} />
          </span>
          <h2 id={`ind-${item.id}-name`}>{item.name}</h2>
        </header>

        <h3 className="ind-feature-sub">{item.sub}</h3>
        <p className="ind-feature-body">{item.body}</p>

        <h4 className="ind-feature-focus-head">{focusHeading}</h4>
        <ul className="ind-feature-focus">
          {item.focus.map((entry) => (
            <li key={entry}>
              <Icon name="check" size={17} />
              <span>{entry}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
