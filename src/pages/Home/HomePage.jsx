import { HeroSection } from './sections/HeroSection';
import { TrustSection } from './sections/TrustSection';
import { WhoWeAreSection } from './sections/WhoWeAreSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { PlatformsSection } from './sections/PlatformsSection';
import { IndustriesSection } from './sections/IndustriesSection';
import { HowWeWorkSection } from './sections/HowWeWorkSection';
import { WhyITGSection } from './sections/WhyITGSection';
import { InsightsSection } from './sections/InsightsSection';
import { FinalCTASection } from './sections/FinalCTASection';

const HomePage = () => {

  return (
    <>


      <main>
        <HeroSection />
        <TrustSection />
        <WhoWeAreSection />
        <SolutionsSection />
        <PlatformsSection />
        <IndustriesSection />
        <HowWeWorkSection />
        <WhyITGSection />
        <InsightsSection />
        <FinalCTASection />
      </main>

    </>
  );
};

export default HomePage;
