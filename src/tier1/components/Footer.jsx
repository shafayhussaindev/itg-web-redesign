import { footer } from '../data/content.js';

export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <img src="/assets/logo-white.png" alt="ITG Technologies" style={{ height: 28 }} />
          <p>{footer.tagline}</p>
        </div>
        {footer.columns.map((col) => (
          <div className="foot-col" key={col.heading}>
            <h5>{col.heading}</h5>
            {col.links.map((link) => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="foot-bottom">
        <span>{footer.copyright}</span>
        <div className="foot-social">
          <span>in</span>
          <span>x</span>
        </div>
      </div>
    </footer>
  );
}
