import { ourStory } from '@/content/company.js';
import { useReveal } from '../../hooks/useReveal.js';

/**
 * Our Story — an animated SVG/CSS timeline rather than another Lottie, and
 * rather than the paragraph-plus-bullet-box the current page uses.
 *
 * There are no dates in the approved copy and none may be invented, so this is
 * a timeline in form rather than in fact: a single drawn spine with four marks
 * carrying the four "What We Stand For" entries in their existing order, under
 * their existing heading. It gives the section the sense of progression the
 * brief asks for without asserting a single thing the copy does not say.
 *
 * The spine draws itself in on entry (pathLength="1", so the dash is
 * length-independent), then each mark fades up in sequence.
 */
export default function OurStory() {
  const [ref, shown] = useReveal({ threshold: 0.2 });

  return (
    <section className="co-story" id="story">
      <div ref={ref} className={`co-story-inner${shown ? ' is-active' : ''}`}>
        <div className="co-story-lede">
          <h2>{ourStory.title}</h2>
          <span className="co-rule" aria-hidden="true" />
          <p>{ourStory.body}</p>
        </div>

        <div className="co-story-track">
          <h3 className="co-story-track-title">{ourStory.standForTitle}</h3>

          {/* The spine. Drawn as an SVG so the line can trace itself in; the
              marks are DOM elements so the labels stay real, selectable text
              rather than <text> inside the graphic. */}
          <svg className="co-story-spine" viewBox="0 0 8 400" preserveAspectRatio="none" aria-hidden="true">
            <line className="co-story-rail" x1="4" y1="0" x2="4" y2="400" pathLength="1" />
          </svg>

          <ol className="co-story-marks">
            {ourStory.standFor.map((entry, i) => (
              <li key={entry} className="co-story-mark" style={{ '--i': i }}>
                <span className="co-story-dot" aria-hidden="true" />
                <span className="co-story-label">{entry}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
