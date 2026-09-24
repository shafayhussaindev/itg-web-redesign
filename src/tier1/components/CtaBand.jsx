import { ctaBand } from '@/content/solutions.js';
import CtaLabel from './CtaLabel.jsx';

export default function CtaBand() {

  return (
    <section className="cta-section">
      <div className="cta-bg" style={{ backgroundImage: `url('${ctaBand.background}')` }}>
        <div className="cta-content">
          <h2>{ctaBand.title}</h2>
          <p>{ctaBand.body}</p>
          <div className="cta-btns">
            <a className="btn-cyan" href={ctaBand.primary.href}><CtaLabel>{ctaBand.primary.label}</CtaLabel></a>
            <a className="btn-glass glass" href={ctaBand.secondary.href}><CtaLabel>{ctaBand.secondary.label}</CtaLabel></a>
            <a className="btn-ghost-white" href={ctaBand.tertiary.href}><CtaLabel>{ctaBand.tertiary.label}</CtaLabel></a>
          </div>
        </div>
      </div>
    </section>
  );
}
