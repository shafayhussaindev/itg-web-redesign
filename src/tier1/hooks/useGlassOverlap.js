import { useEffect, useRef } from 'react';

/**
 * Clips a glass panel's cached frost to the part of the photograph the panel
 * actually sits over.
 *
 * The four photo modules show, through the panel's white fill, a blurred copy
 * of their own photograph (`.glass-frost`, tier1/styles/index.css). That copy
 * lives inside the media box, so it has to be clipped to the panel's
 * rectangle or it would frost the whole photograph. This hook measures the
 * panel/media intersection and writes it to the media box as --glass-clip.
 *
 * Geometry uses offsetLeft/offsetTop, which ignore transforms, so the parallax
 * drift cannot skew it. It re-measures only when either box resizes.
 *
 * Usage:  const [mediaRef, panelRef] = useGlassOverlap();
 */
export function useGlassOverlap() {
  const mediaRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const media = mediaRef.current;
    const panel = panelRef.current;
    if (!media || !panel || typeof ResizeObserver === 'undefined') return;

    const measure = () => {
      // Different offset parents would put the two boxes in different
      // coordinate spaces; keep the full-panel blur rather than guess.
      if (media.offsetParent !== panel.offsetParent) {
        // Without reliable geometry the frost would sit misaligned, which
        // reads far worse than no glass at all. Hide it.
        media.style.setProperty('--glass-clip', 'inset(50%)');
        return;
      }

      // The intersection, expressed in the MEDIA's coordinate space. The panel
      // overhangs the photo on one side, so these clamp at 0 there.
      const cTop = Math.max(0, panel.offsetTop - media.offsetTop);
      const cLeft = Math.max(0, panel.offsetLeft - media.offsetLeft);
      const cRight = Math.max(0, (media.offsetLeft + media.offsetWidth) - (panel.offsetLeft + panel.offsetWidth));
      const cBottom = Math.max(0, (media.offsetTop + media.offsetHeight) - (panel.offsetTop + panel.offsetHeight));
      const overlaps = cTop + cBottom < media.offsetHeight && cLeft + cRight < media.offsetWidth;
      media.style.setProperty(
        '--glass-clip',
        overlaps
          ? `inset(${cTop}px ${cRight}px ${cBottom}px ${cLeft}px round var(--glass-radius, 22px))`
          : 'inset(50%)'
      );
    };

    // Measure once up front. The observer alone is not enough: these sections
    // carry `content-visibility: auto`, and Chromium does not deliver resize
    // observations for a subtree whose rendering is being skipped — so a
    // section still below the fold would never get measured, and its glass
    // would stay at the "not measured yet" fallback. offsetLeft/offsetTop are
    // still correct for skipped content, so measuring directly works.
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(media);
    observer.observe(panel);

    // ...and again as the section approaches the viewport. The first measure
    // above runs at mount, when the panel's height can still change as fonts
    // and images settle — and because the section's rendering is skipped until
    // then, the ResizeObserver never sees those changes to correct them. By the
    // time this fires the section is laid out for real, so the geometry is
    // final before the visitor can see it.
    const onView = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          entries => { if (entries.some(e => e.isIntersecting)) measure(); },
          { rootMargin: '300px' }
        )
      : null;
    onView?.observe(media);

    // Text reflow after a late webfont changes the panel's height too.
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      observer.disconnect();
      onView?.disconnect();
      media.style.removeProperty('--glass-clip');
    };
  }, []);

  return [mediaRef, panelRef];
}
