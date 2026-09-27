import Tier1Route from "@/components/common/tier1/Tier1Route";
import Hero from './Hero.jsx';
import HowItWorks from './HowItWorks.jsx';
import SolutionCategories from './SolutionCategories.jsx';
import WhyITG from '@/components/common/tier1/WhyITG.jsx';
import CtaBand from './CtaBand.jsx';

export default function SolutionsPage() {
  return (
    <Tier1Route title="Solutions">
      <main className="sol-page">
        <Hero />
        <HowItWorks />
        <SolutionCategories />
        <WhyITG />
        <CtaBand />
      </main>
    </Tier1Route>
  );
}
