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
            <a className="btn-cyan svc-btn-glow" href={servicesCta.primary.href}><CtaLabel>{servicesCta.primary.label}</CtaLabel></a>
            <a className="btn-glass glass" href={servicesCta.secondary.href}><CtaLabel>{servicesCta.secondary.label}</CtaLabel></a>
          </div>
        </div>
      </div>
    </section>
  );
}
