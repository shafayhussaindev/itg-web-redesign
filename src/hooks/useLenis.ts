import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Smooth scroll is motion. Under prefers-reduced-motion the browser's own
    // scrolling is what the reader asked for, so Lenis never starts.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // The frame loop only runs while Lenis is easing a scroll. A permanent loop
    // woke the main thread on every display refresh (144 times a second on a
    // 144Hz screen) even with the page at rest.
    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      // 'smooth' is set as an ease starts and cleared when it lands.
      frame = lenis.isScrolling === 'smooth' ? requestAnimationFrame(raf) : 0;
    }
    function wake() {
      if (frame) return;
      // Lenis advances by the time since its previous frame. After an idle gap
      // that would be seconds and the scroll would jump straight to its target,
      // so restart its clock from the current frame.
      lenis.time = Number(document.timeline.currentTime ?? performance.now());
      frame = requestAnimationFrame(raf);
    }

    // Wheel input: Lenis emits this just before it starts easing.
    const offWheel = lenis.on('virtual-scroll', wake);
    // Programmatic scrolls (anchor jumps via lenisRef) need the loop too.
    const scrollTo = lenis.scrollTo.bind(lenis);
    lenis.scrollTo = (...args: Parameters<Lenis['scrollTo']>) => {
      scrollTo(...args);
      wake();
    };

    // The frame id is held so the loop can be cancelled on unmount. Without
    // this it keeps recursing against a destroyed instance after every route
    // change, stacking one dead loop per navigation.
    return () => {
      offWheel();
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
