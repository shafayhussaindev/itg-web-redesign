import Lottie from 'lottie-react';
import { useEffect, useRef } from 'react';
import ecosystemAnimation from '../lottie/itg-solutions-ecosystem.json';

/**
 * The player and the 1.1MB animation JSON, split into their own chunk so the
 * Products page — which has its own native-SVG animations and never renders
 * this — does not download them. Loaded by HowItWorks.jsx.
 */
export default function HowItWorksLottie({ active }) {
  const player = useRef(null);
  useEffect(() => {
    if (active) player.current?.play();
    else player.current?.pause();
  }, [active]);
  return <Lottie lottieRef={player} animationData={ecosystemAnimation} loop autoplay={false}
    onDOMLoaded={() => { if (active) player.current?.play(); else player.current?.pause(); }} />;
}
