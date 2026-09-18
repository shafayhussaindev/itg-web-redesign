import { whoWeAre } from '@/content/company.js';
import { useParallax } from '../../hooks/useInView.js';
import { useGlassOverlap } from '../../hooks/useGlassOverlap.js';
import Icon from './icons.jsx';

/**
 * Editorial opener: a large photograph of the team with the overview copy in a
 * glass panel overlapping it, then the four pillars as a slim glass strip
 * beneath rather than the four separate boxes the old page used.
 *
 * The strip is the point of the section. On the current page those four items
 * are a 2x2 of identical cards competing with the paragraph beside them; here
 * they read as one supporting rail under the statement they belong to.
 */
export default function WhoWeAre() {
  const imgRef = useParallax(0.05, true);
  const [mediaRef, panelRef] = useGlassOverlap();

  return (
    <section className="co-about" id="about">
      <div className="co-about-module">
        <div ref={mediaRef} className="co-about-media parallax-frame">
          <div ref={imgRef} className="co-about-img parallax-layer">
            <img src={whoWeAre.image} alt="" loading="lazy" decoding="async" />
          </div>

          {/* Cached blurred copy of the photograph for the glass panel — see
              .glass-frost in tier1/styles/index.css. Sits under the scrim, like the
              sharp photo, and drifts with it. */}
          <div className="glass-frost" aria-hidden="true">
            <div className="glass-frost-layer parallax-layer">
              <img src={whoWeAre.image} alt="" loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="co-about-scrim" />
        </div>

        <div
          ref={panelRef}
          className="co-about-panel glass-overlap glass-card"
        >
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
