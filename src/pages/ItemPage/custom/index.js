import LawIntoActionContent from './LawIntoActionContent';
import ConsumerGoodsIntelligenceContent from './ConsumerGoodsIntelligenceContent';
import HomeTextileContent from './HomeTextileContent';
import SvitchContent from './SvitchContent';
import DigitalShowroomContent from './DigitalShowroomContent';
import RilitsContent from './RilitsContent';
import TracemeContent from './TracemeContent';

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
};
