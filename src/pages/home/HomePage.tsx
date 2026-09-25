import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { TrustSection } from './sections/TrustSection';
import { WhoWeAreSection } from './sections/WhoWeAreSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { PlatformsSection } from './sections/PlatformsSection';
import { IndustriesSection } from './sections/IndustriesSection';
import { HowWeWorkSection } from './sections/HowWeWorkSection';
import { WhyITGSection } from './sections/WhyITGSection';
import { InsightsSection } from './sections/InsightsSection';
import { GlobalPresenceSection } from './sections/GlobalPresenceSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { useLenis } from '@/hooks/useLenis';

const HomePage = () => {
  // Inertial smooth scrolling, shared with the tier-1 pages.
  useLenis();

  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
};

export default HomePage;
