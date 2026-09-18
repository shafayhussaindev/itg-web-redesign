import { servicesCta } from '@/content/services.js';
import CtaLabel from '../CtaLabel.jsx';

/**
 * Closing statement: image -> navy overlay -> glass content layer -> CTA.
 * Deeper than the Solutions CtaBand, which puts the copy straight onto the
 * scrim; here the copy sits in its own glass panel so the architecture stays
 * legible around it.
 */
export default function ServicesCta() {

  return (
    <section className="svc-cta">
      <div className="svc-cta-bg" style={{ backgroundImage: `url('${servicesCta.background}')` }}>
        <div className="svc-cta-overlay" />
        <div className="svc-cta-glow" aria-hidden="true" />
        <div className="svc-cta-glass">
          <h2>{servicesCta.title}</h2>
          <p>{servicesCta.body}</p>
          <div className="cta-row svc-cta-row">
            <button className="btn-cyan svc-btn-glow"><CtaLabel>{servicesCta.primary}</CtaLabel></button>
            <button className="btn-glass glass"><CtaLabel>{servicesCta.secondary}</CtaLabel></button>
          </div>
        </div>
      </div>
    </section>
  );
}
