import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';

/**
 * Scrolls to `location.hash` on a tier-2 page, and keeps it there while the
 * page is still growing.
 *
 * This is the shared version of the effect that SolutionDetail, ProductCategory,
 * ServiceCategory and IndustryDetail each used to carry a copy of. The three
 * parts that matter:
 *
 * - `lenis.resize()` first. Lenis caches the scroll height; without this it
 *   clamps the jump to the height it last measured.
 * - `behavior: 'instant'`. A deep link should arrive already there rather than
 *   animate past several sections. This also keeps `scroll-margin-top` (112px
 *   in solution-detail.css, to clear the fixed header) doing the work, which a
 *   Lenis `scrollTo` would bypass.
 * - Re-alignment while the page grows. At mount none of the section
 *   photography has loaded and none of it carries width/height, so the
 *   document can still be close to hero-height and the jump lands short. A
 *   ResizeObserver on `body` fires as each image resolves; re-aligning on it
 *   keeps the target under the header instead of drifting below the fold.
 *
 * Re-alignment stops at the first of: the page settling, a hard ceiling, or
 * the visitor scrolling for themselves, so it never fights a real user.
 */
export function useHashScroll(key: unknown) {
  const lenis = useLenis();

  useEffect(() => {
    let frame = 0;
    let observer: ResizeObserver | undefined;
    let ceiling = 0;
    let stopped = true;

    const stop = () => {
      if (stopped) return;
      stopped = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      observer = undefined;
      window.clearTimeout(ceiling);
      for (const event of USER_SCROLL) window.removeEventListener(event, stop);
    };

    const align = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let id: string;
        try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
        const target = id && document.getElementById(id);
        if (!target) return;
        lenis.current?.resize();
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
      });
    };

    const start = () => {
      stop();
      if (!window.location.hash) return;
      stopped = false;
      align();
      if (typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(align);
        observer.observe(document.body);
      }
      // Nothing should still be shifting the page after this.
      ceiling = window.setTimeout(stop, 5000);
      for (const event of USER_SCROLL) window.addEventListener(event, stop, { passive: true });
    };

    start();
    window.addEventListener('hashchange', start);
    return () => {
      stop();
      window.removeEventListener('hashchange', start);
    };
  }, [key, lenis]);
}

// A deliberate scroll by the visitor ends the re-alignment immediately.
// `scroll` is not in this list: the re-alignment itself fires it.
const USER_SCROLL = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
