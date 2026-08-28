import Lottie from 'lottie-react';
import ecosystemAnimation from '../lottie/itg-solutions-ecosystem.json';

/**
 * The player and the 1.1MB animation JSON, split into their own chunk so the
 * Products page — which has its own native-SVG animations and never renders
 * this — does not download them. Loaded by HowItWorks.jsx.
 */
export default function HowItWorksLottie() {
  return <Lottie animationData={ecosystemAnimation} loop autoplay />;
}
