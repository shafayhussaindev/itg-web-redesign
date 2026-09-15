import { useEffect, useRef, useState } from 'react';
import { registerParallax } from '@/lib/parallax';

const REDUCED = '(prefers-reduced-motion: reduce)';

/**
 * Adds `.is-in` to an element once it enters the viewport, so CSS can run the
 * entry transition. Reveal is one-way: the observer disconnects on first hit,
 * because re-animating on scroll-back reads as fidgety rather than premium.
 *
 * Under prefers-reduced-motion the element starts revealed and no observer is
 * created at all — the CSS also neutralises the transform, so this is belt and
 * braces for users who toggle the setting mid-session.
 *
 * Usage:  const [ref, shown] = useReveal();
 *         <div ref={ref} className={`reveal${shown ? ' is-in' : ''}`} />
 */
export function useReveal({ threshold = 0.18, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(() =>
    typeof window === 'undefined' ? true : window.matchMedia(REDUCED).matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    // No IntersectionObserver (older Safari): show everything rather than
    // leaving the page permanently blank.
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [shown, threshold, rootMargin]);

  return [ref, shown];
}

/**
 * Updates a CSS variable without re-rendering the surrounding content.
 * All visible layers share one animation frame and scroll listener.
 *
 * `strength` is the fraction of the element's travel applied as counter-scroll
 * — 0.12 moves the image about 12% slower than the page, which is the range
 * the brief calls for (noticeable as depth, not as animation).
 */
export function useParallax(strength = 0.12, percent = false) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === 'undefined') return;
    const media = window.matchMedia(REDUCED);
    let cleanup;
    const sync = () => {
      cleanup?.();
      cleanup = undefined;
      if (!media.matches) cleanup = registerParallax(node, strength, percent);
    };
    sync();
    media.addEventListener('change', sync);
    return () => {
      cleanup?.();
      media.removeEventListener('change', sync);
    };
  }, [strength, percent]);

  return ref;
}
