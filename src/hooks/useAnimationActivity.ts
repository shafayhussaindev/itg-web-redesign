import { useEffect, useRef, useState } from 'react';

/** Keep animation timelines mounted, but pause work outside the viewport. */
export function useAnimationActivity<T extends HTMLElement | SVGSVGElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const active = inView && pageVisible;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
          setInView(entry.isIntersecting);
          if (entry.isIntersecting) setHasEntered(true);
        }, { rootMargin: '100px' })
      : null;
    if (observer) observer.observe(node);
    else { setInView(true); setHasEntered(true); }
    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  // Also resync after a responsive diagram replaces its SVG tree.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.toggleAttribute('data-animation-paused', !active);
    const svgs = Array.from(node.querySelectorAll<SVGSVGElement>('svg'));
    if (node instanceof SVGSVGElement) svgs.push(node);
    svgs.forEach(svg => {
      if (!svg.querySelector('animate, animateMotion, animateTransform')) return;
      if (active) svg.unpauseAnimations?.();
      else svg.pauseAnimations?.();
    });
    node.querySelectorAll<HTMLVideoElement>('video[autoplay]').forEach(video => {
      if (active) { if (video.paused) void video.play().catch(() => {}); }
      else video.pause();
    });
  });

  return { ref, active, hasEntered };
}
