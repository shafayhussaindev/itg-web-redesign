import { deliveryApproach } from '@/content/services.js';
import { useReveal } from '../../hooks/useReveal.js';
import Icon from './icons.jsx';

/**
 * Ice-blue section: heading, the four delivery points, and the closing
 * statement. The Design/Build/Enable flow card that used to sit between the
 * heading and the points has been removed.
 */
export default function DeliveryApproach() {
  const [headRef, headIn] = useReveal();
  const [panelRef, panelIn] = useReveal();

  return (
    <section className="ice-bg svc-approach" id="delivery">
      <div ref={headRef} className={`section-head reveal${headIn ? ' is-in' : ''}`}>
        <h2>{deliveryApproach.title}</h2>
        <span className="svc-rule" aria-hidden="true" />
        <p>{deliveryApproach.intro}</p>
      </div>

      <div ref={panelRef} className={`svc-approach-panel reveal${panelIn ? ' is-in' : ''}`}>
        <h3>{deliveryApproach.panelHeading}</h3>
        <ul className="svc-approach-grid">
          {deliveryApproach.points.map((pt) => (
            <li key={pt.id}>
              <Icon name="check" className="svc-approach-check" size={22} />
              <div>
                <strong>{pt.title}</strong>
                <span>{pt.note}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <blockquote className="svc-statement">
        <strong>{deliveryApproach.statement}</strong>
        <span>{deliveryApproach.statementNote}</span>
      </blockquote>
    </section>
  );
}
