import LandingPageLayout from "@/layouts/LandingPageLayout";
import IndustriesHero from './sections/IndustriesHero.jsx';
import IndustriesIntro from './sections/IndustriesIntro.jsx';
import IndustryFeatures from './sections/IndustryFeatures.jsx';
import IndustryEcosystem from './sections/IndustryEcosystem.jsx';
import IndustriesCta from './sections/IndustriesCta.jsx';
import IndustriesGrid from './sections/IndustriesGrid.jsx';
import './industries.css';

/**
 * Section order is the page's visual rhythm, and follows the same rule as
 * Services: glass alternates with non-glass, or the page reads as generic.
 * Reading down:
 *
 *   hero        full-bleed photo + glass panel + ambient lattice
 *   intro       ice-blue, flat, one pale glass panel over line geometry
 *   features    white, eight photographs with overlapping glass panels
 *   ecosystem   dark navy, vector only — the page's one dark beat
 *   grid        white, six photo cards that reveal on hover (moved here from
 *               the Solutions page, where it read as off-topic)
 *   cta         full-bleed photo + navy + glass
 *
 * The features block is deliberately long and uniform in construction; the
 * navy ecosystem exists partly to break it before the CTA. Do not add another
 * glass-on-photo section between the hero and the features.
 *
 * The site's shared header and footer both come from LandingPageLayout.
 */
export default function IndustriesPage() {
  return (
    <LandingPageLayout title="Industries">
      <main className="ind-page">
        <IndustriesHero />
        <IndustriesIntro />
        <IndustryFeatures />
        <IndustryEcosystem />
        <IndustriesGrid />
        <IndustriesCta />
      </main>
    </LandingPageLayout>
  );
}
