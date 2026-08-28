import { useState } from 'react';
// import { IntroAnimation } from '@/components/IntroAnimation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { WhoWeAreSection } from '@/components/sections/WhoWeAreSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { PlatformsSection } from '@/components/sections/PlatformsSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { WhyITGSection } from '@/components/sections/WhyITGSection';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { GlobalPresenceSection } from '@/components/sections/GlobalPresenceSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { useLenis } from '@/hooks/useLenis';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const { theme } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Initialize Lenis smooth scrolling
  useLenis();

  const handleIntroComplete = () => {
    setShowIntro(false);
    setContentVisible(true);
  };

  return (
    <>
      {/* Intro Animation - plays on every page reload */}
      {/* {showIntro && <IntroAnimation onComplete={handleIntroComplete} theme={theme} />} */}

      {/* Main Content */}
      <div
      >
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
          <GlobalPresenceSection />
          <FinalCTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
