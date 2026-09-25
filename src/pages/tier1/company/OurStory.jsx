import { ourStory } from '@/content/tier1/company.js';

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
 * The spine is drawn in CSS (company.css, .co-story-mark::before): each mark
 * draws the segment down to the next dot, so it always meets the dots exactly.
 */
export default function OurStory() {

  return (
    <section className="co-story" id="story">
      <div className="co-story-inner">
        <div className="co-story-lede">
          <h2>{ourStory.title}</h2>
          <span className="co-rule" aria-hidden="true" />
          <p>{ourStory.body}</p>
        </div>

        <div className="co-story-track">
          <h3 className="co-story-track-title">{ourStory.standForTitle}</h3>

          <ol className="co-story-marks">
            {ourStory.standFor.map((entry, i) => (
              <li key={entry} className="co-story-mark">
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
