import { useEffect, useRef, useState } from 'react';
import { observeInView } from './scrollfx.js';

const REDUCED = '(prefers-reduced-motion: reduce)';

/**
 * Reports whether an element has entered the viewport yet, once.
 *
 * This used to drive the site's scroll reveals; those were removed on request.
 * What is left is an ACTIVITY GATE: the three components that run a continuous
 * animation (the Company world map and the two ecosystem diagrams) use it to
 * avoid animating while they are off-screen. Nothing here hides content.
 *
 * One-way — the element is unobserved on first hit. The observer itself is
 * POOLED by its options in tier1/shared/scrollfx.js, so several gates on a page
 * share one observer.
 *
 * Note: under prefers-reduced-motion this returns true immediately and never
 * observes. That was the right default when it gated visibility; as an
 * activity gate it means those animations are treated as always on-screen,
 * and it is their own CSS that must respect the preference.
 *
 * Usage:  const [ref, inView] = useInView();
 *         <div ref={ref}><Thing active={inView} /></div>
 */
export function useInView({ threshold = 0.18, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() =>
    typeof window === 'undefined' ? true : window.matchMedia(REDUCED).matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    return observeInView(node, () => setInView(true), { threshold, rootMargin });
  }, [inView, threshold, rootMargin]);

  return [ref, inView];
}

