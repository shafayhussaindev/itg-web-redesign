import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import SolutionCategories from './components/SolutionCategories.jsx';
import Industries from './components/Industries.jsx';
import WhyITG from './components/WhyITG.jsx';
import CtaBand from './components/CtaBand.jsx';
import Footer from './components/Footer.jsx';

export default function SolutionsPage() {
  return (
    <>
      <main className="sol-page">
        <Hero />
        <HowItWorks />
        <SolutionCategories />
        <Industries />
        <WhyITG />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
