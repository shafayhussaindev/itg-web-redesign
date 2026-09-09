import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import SolutionCategories from './components/SolutionCategories.jsx';
import WhyITG from './components/WhyITG.jsx';
import CtaBand from './components/CtaBand.jsx';

export default function SolutionsPage() {
  return (
    <>
      <main className="sol-page">
        <Hero />
        <HowItWorks />
        <SolutionCategories />
        <WhyITG />
        <CtaBand />
      </main>
    </>
  );
}
