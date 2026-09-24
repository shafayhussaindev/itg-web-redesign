import { useEffect, useRef } from 'react';

/**
 * Clips a cached-blur "frost" layer to the glass panel sitting over it.
 *
 * The closing CTAs are a photograph, a navy overlay, and a translucent panel.
 * The panel used to frost its backdrop with `backdrop-filter`, which the
 * browser recomputes on every frame it is on screen — a live blur for the whole
 * time the section is in view.
 *
 * Instead the photograph is drawn a second time, blurred once and cached, and
 * clipped to the panel's rectangle. The alignment is free: the frost layer is
 * `inset: 0` inside the same element that carries the photograph and takes
 * `background: inherit`, so it resolves the identical image, `cover` size and
 * `center` position against an identical box. The only thing that needs
 * measuring is where the panel sits, which is what this hook provides as
 * --frost-clip.
 *
 * Geometry uses offsetTop/offsetLeft, which ignore transforms, so the panel's
 * reveal slide-in cannot skew it. It re-measures only when either box resizes.
 *
 * Usage:  const [bgRef, panelRef] = useFrostClip();
 */
export function useFrostClip() {
  const bgRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const panel = panelRef.current;
    if (!bg || !panel || typeof ResizeObserver === 'undefined') return;

    const measure = () => {
      // The panel must be positioned against the photo box for its offsets to
      // mean anything. If it is not, show no frost rather than a misplaced one.
      if (panel.offsetParent !== bg) {
        bg.style.setProperty('--frost-clip', 'inset(50%)');
        return;
      }
      const top = panel.offsetTop;
      const left = panel.offsetLeft;
      const right = Math.max(0, bg.offsetWidth - (panel.offsetLeft + panel.offsetWidth));
      const bottom = Math.max(0, bg.offsetHeight - (panel.offsetTop + panel.offsetHeight));
      // Match the panel's own corner radius so the frost stops exactly where
      // the glass does.
      const radius = getComputedStyle(panel).borderTopLeftRadius || '26px';
      bg.style.setProperty(
        '--frost-clip',
        `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius})`
      );
    };

    const observer = new ResizeObserver(measure);
    observer.observe(bg);
    observer.observe(panel);
    measure();
    return () => {
      observer.disconnect();
      bg.style.removeProperty('--frost-clip');
    };
  }, []);

  return [bgRef, panelRef];
}
