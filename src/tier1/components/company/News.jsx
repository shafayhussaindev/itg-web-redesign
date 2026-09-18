import { news } from '@/content/company.js';
import Icon from './icons.jsx';

/**
 * News and Announcements — the one section with no supplied photograph, so it
 * stays a card row. It is placed second-to-last deliberately: after nine
 * photographic and vector sections, a clean light band of four small cards
 * gives the eye somewhere to rest before the closing CTA.
 *
 * Restyled as glass on ice with a cyan hairline that draws across on hover,
 * so it belongs to the page without pretending to be an editorial module.
 */
export default function News() {

  return (
    <section className="co-news" id="news">
      <div className="section-head">
        <h2>{news.title}</h2>
        <span className="co-rule" aria-hidden="true" />
        <p>{news.intro}</p>
      </div>

      <ul className="co-news-grid">
        {news.items.map((item, i) => (
          <Card key={item.id} item={item} index={i} />
        ))}
      </ul>
    </section>
  );
}

function Card({ item, index }) {

  return (
    <li
     
      className="co-news-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className="co-news-icon">
        <Icon name={item.icon} size={20} />
      </span>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <span className="co-news-rule" aria-hidden="true" />
    </li>
  );
}
