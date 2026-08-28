import Footer from '../Footer.jsx';
import WhyITG from '../WhyITG.jsx';
import ServicesHero from './ServicesHero.jsx';
import DeliveryApproach from './DeliveryApproach.jsx';
import DeliveryPillars from './DeliveryPillars.jsx';
import PlatformAlignment from './PlatformAlignment.jsx';
import ServiceIndustries from './ServiceIndustries.jsx';
import ServicesCta from './ServicesCta.jsx';
import '../../styles/services.css';

/**
 * Section order is the page's visual rhythm and is deliberate — the brief's
 * one hard rule is that glass must alternate with non-glass, or the page reads
 * as generic SaaS. Reading down:
 *
 *   hero          full-bleed photo + glass
 *   delivery      ice-blue, flat, one glass diagram
 *   pillars       white, full-bleed photos + glass panels
 *   alignment     dark navy, vector architecture
 *   industries    white, photo cards
 *   why           gradient band, minimal cards
 *   cta           full-bleed photo + navy + glass
 *
 * Do not insert another glass-on-photo section between hero and pillars
 * without moving something else.
 *
 * Why ITG is the approved Solutions component reused verbatim — the copy is
 * identical and duplicating it would give the two pages separate sources of
 * truth. `.svc-why` only adds the hover and cyan accent the brief asks for.
 */
export default function ServicesPage() {
  return (
    <>
      <main className="svc-page">
        <ServicesHero />
        <DeliveryApproach />
        <DeliveryPillars />
        <PlatformAlignment />
        <ServiceIndustries />
        <div className="svc-why">
          <WhyITG />
        </div>
        <ServicesCta />
      </main>
      <Footer />
    </>
  );
}
