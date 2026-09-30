import LawIntoActionContent from './LawIntoActionContent';
import ConsumerGoodsIntelligenceContent from './ConsumerGoodsIntelligenceContent';
import HomeTextileContent from './HomeTextileContent';
import SvitchContent from './SvitchContent';
import DigitalShowroomContent from './DigitalShowroomContent';
import RilitsContent from './RilitsContent';
import TracemeContent from './TracemeContent';
import BusinessProcessReengineeringContent from './BusinessProcessReengineeringContent';
import CapabilityPageContent from './CapabilityPageContent';
import { eCommerceAndMarketplaces } from '@/data/solutions/e-commerce-and-marketplaces';
import { generativeMediaProduction } from '@/data/solutions/generative-media-production';

/* Item pages with a custom middle section. Every other item page uses the
 * standard sections in ItemPage.jsx. The hero, related items and contact band
 * stay the same on all of them. */
export const customContent = {
  '/sourcing/law-into-action': LawIntoActionContent,
  '/sourcing/consumer-goods-intelligence': ConsumerGoodsIntelligenceContent,
  '/manufacturing-industries/home-textile': HomeTextileContent,
  '/supplier-info-risk-management/svitch': SvitchContent,
  '/product-lifecycle-management/digital-showroom': DigitalShowroomContent,
  '/supply-chain/rilits': RilitsContent,
  '/product-lifecycle-management/traceme-dpp': TracemeContent,
  '/custom-solutions/business-process-re-engineering': BusinessProcessReengineeringContent,
  // These two share one layout and differ only in their data.
  '/custom-solutions/e-commerce-and-marketplaces': () => <CapabilityPageContent content={eCommerceAndMarketplaces} />,
  '/custom-solutions/generative-media-production': () => <CapabilityPageContent content={generativeMediaProduction} />,
};
