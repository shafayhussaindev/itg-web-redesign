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
            <button className="btn-cyan"><CtaLabel>{ctaBand.primary}</CtaLabel></button>
            <button className="btn-glass glass"><CtaLabel>{ctaBand.secondary}</CtaLabel></button>
            <button className="btn-ghost-white"><CtaLabel>{ctaBand.tertiary}</CtaLabel></button>
          </div>
        </div>
      </div>
    </section>
  );
}
