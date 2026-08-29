import CompanyHero from './CompanyHero.jsx';
import WhoWeAre from './WhoWeAre.jsx';
import VisionMissionValues from './VisionMissionValues.jsx';
import OurStory from './OurStory.jsx';
import PhotoModule from './PhotoModule.jsx';
import GovernanceMark from './GovernanceMark.jsx';
import GlobalPresence from './GlobalPresence.jsx';
import News from './News.jsx';
import CompanyCta from './CompanyCta.jsx';
import { leadership, security, people, responsibility } from '../../data/company.js';
import '../../styles/company.css';

/**
 * Company is the last chapter of the site: Solutions is what ITG solves,
 * Services how it delivers, Industries where it applies, Company who it is.
 * So this page leans on people, governance and institution rather than on
 * product — the photography is of rooms and teams, and the three animations
 * are all about oversight and reach rather than technology.
 *
 * Section rhythm, reading down. Light alternates with dark, and the four
 * `PhotoModule` sections alternate side, so nine sections of photography do
 * not read as one long repeated block:
 *
 *   hero          photo + glass + enterprise network         dark
 *   who we are    photo + glass, pillar rail beneath         white
 *   vision        three glass panels                          NAVY
 *   our story     animated timeline, no photograph            ice
 *   leadership    photo right + glass left + governance mark  white
 *   global        photo ground + animated world map + glass   NAVY
 *   security      photo left + glass right                    ice
 *   people        photo right + glass left                    white
 *   responsibility photo left + glass right, 1-column panel    ice
 *   news          four small glass cards, no photograph       white
 *   cta           photo + navy vignette + glass               dark
 *
 * Do not make another section glass-on-photo without moving something else —
 * the contrast between treatments is the page's structure.
 */
export default function CompanyPage() {
  return (
    <>
      <main className="co-page">
        <CompanyHero />
        <WhoWeAre />
        <VisionMissionValues />
        <OurStory />

        <PhotoModule
          id="leadership"
          data={leadership}
          side="left"
          tone="light"
          figure={<GovernanceMark />}
        />

        <GlobalPresence />

        <PhotoModule id="security" data={security} side="right" tone="ice" />
        <PhotoModule id="people" data={people} side="left" tone="light" />
        {/* Two items only, so a single column keeps the panel from sitting
            half empty. See the completeness warning in data/company.js. */}
        <PhotoModule
          id="responsibility"
          data={responsibility}
          side="right"
          columns={1}
          tone="ice"
        />

        <News />
        <CompanyCta />
      </main>
    </>
  );
}
