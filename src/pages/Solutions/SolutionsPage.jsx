import LandingPageLayout from "@/layouts/LandingPageLayout";
import Hero from './sections/Hero.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import SolutionCategories from './sections/SolutionCategories.jsx';
import WhyITG from '@/components/sections/WhyITG.jsx';
import CtaBand from './sections/CtaBand.jsx';

export default function SolutionsPage() {
  return (
    <LandingPageLayout title="Solutions">
      <main className="sol-page">
        <Hero />
        <HowItWorks />
        <SolutionCategories />
        <WhyITG />
        <CtaBand />
      </main>
    </LandingPageLayout>
  );
}
