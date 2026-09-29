import Lottie from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import ecosystemAnimation from './itg-solutions-ecosystem.json';

// Draw at most ~60 times a second. The file is authored at 30fps and every
// drawn frame is interpolated between keyframes, so 60 is already twice the
// motion detail in the source — but lottie's own player redraws the whole SVG
// on every display refresh: 144 full redraws a second on a 144Hz screen, and
// that was most of the Solutions page's scroll cost. 0.8 lets a refresh that
// lands a little early still count, so a 120/144Hz screen draws every second
// refresh (60/72fps) rather than every third.
const MIN_FRAME_MS = (1000 / 60) * 0.8;

/**
 * The player and the 1.1MB animation JSON, split into their own chunk so the
 * Products page — which has its own native-SVG animations and never renders
 * this — does not download them. Loaded by HowItWorks.jsx.
 *
 * Playback is driven here rather than by lottie's built-in player, so the draw
 * rate can be capped (above). `active` pauses it while off-screen.
 */
export default function HowItWorksLottie({ active }) {
  const player = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const anim = player.current?.animationItem;
    if (!active || !loaded || !anim) return;

    const { frameRate, totalFrames } = anim;
    // Resume from wherever the animation was paused.
    const resumeFrom = anim.currentRawFrame || 0;
    let start = -1;
    let lastDraw = -Infinity;
    let frame = requestAnimationFrame(function tick(now) {
      frame = requestAnimationFrame(tick);
      if (now - lastDraw < MIN_FRAME_MS) return;
      lastDraw = now;
      if (start < 0) start = now - (resumeFrom / frameRate) * 1000;
      anim.goToAndStop((((now - start) / 1000) * frameRate) % totalFrames, true);
    });
    return () => cancelAnimationFrame(frame);
  }, [active, loaded]);

  return (
    <Lottie
      lottieRef={player}
      animationData={ecosystemAnimation}
      loop
      autoplay={false}
      onDOMLoaded={() => setLoaded(true)}
    />
  );
}
