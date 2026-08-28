import { useEffect, useRef, useState } from 'react';

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
 * Scroll offset in pixels for parallax layers, throttled to one write per
 * animation frame. Returns 0 permanently under prefers-reduced-motion.
 *
 * `strength` is the fraction of the element's travel applied as counter-scroll
 * — 0.12 moves the image about 12% slower than the page, which is the range
 * the brief calls for (noticeable as depth, not as animation).
 */
export function useParallax(strength = 0.12) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === 'undefined') return;
    if (window.matchMedia(REDUCED).matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      // Distance of the element's centre from the viewport centre, so the
      // offset is 0 when the section is centred and symmetrical either side.
      const fromCentre = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(-fromCentre * strength);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [strength]);

  return [ref, offset];
}
