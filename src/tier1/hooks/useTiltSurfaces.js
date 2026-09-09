import { useEffect } from 'react';

/**
 * One delegated cursor-tilt controller for every tilting surface on a page.
 *
 * Mounted once (see Tier1Route). A single pointermove listener on the document
 * finds whichever surface is under the cursor with closest(), rather than each
 * card wiring up its own hook — the alternative meant a component per card just
 * to hold a ref, since hooks cannot be called in a loop. Adding a new tilting
 * surface is now a line in TILT_SELECTOR plus the matching CSS.
 *
 * closest() also settles nesting for free: panels that contain their own item
 * blocks resolve to the panel, so the whole card tilts as one object rather
 * than each item tilting inside it.
 *
 * Writes the same six custom properties as before and leaves all drawing to
 * CSS:  --tilt-x / --tilt-y (rotation), --mx / --my (highlight position),
 * --sx / --sy (shadow offset, opposite the tilt).
 */
export const TILT_SELECTOR = [
  '.svc-pillar-panel',
  '.ind-feature-panel',
  '.co-about-panel',
  '.co-mod-panel',
  '.co-vmv-card',
  '.co-global-card',
  '.co-news-card',
  '.why-card',
].join(', ');

export function useTiltSurfaces({ max = 5.5, shadow = 26, selector = TILT_SELECTOR } = {}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduced || !finePointer) return;

    let active = null;
    let frame = 0;
    let pending = null;

    const reset = (el) => {
      if (!el) return;
      el.classList.remove('is-tilting');
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
      el.style.setProperty('--sx', '0px');
      el.style.setProperty('--sy', '0px');
    };

    const apply = () => {
      frame = 0;
      if (!pending || !active) return;
      const { px, py } = pending;
      active.style.setProperty('--tilt-x', `${(0.5 - py) * 2 * max}deg`);
      active.style.setProperty('--tilt-y', `${(px - 0.5) * 2 * max}deg`);
      active.style.setProperty('--mx', `${(px * 100).toFixed(2)}%`);
      active.style.setProperty('--my', `${(py * 100).toFixed(2)}%`);
      active.style.setProperty('--sx', `${((0.5 - px) * shadow).toFixed(1)}px`);
      active.style.setProperty('--sy', `${((0.5 - py) * shadow).toFixed(1)}px`);
    };

    const onMove = (e) => {
      const el = e.target instanceof Element ? e.target.closest(selector) : null;

      if (el !== active) {
        reset(active);
        active = el;
        if (active) active.classList.add('is-tilting');
      }
      if (!active) return;

      const r = active.getBoundingClientRect();
      if (!r.width || !r.height) return;
      pending = {
        px: Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1),
        py: Math.min(Math.max((e.clientY - r.top) / r.height, 0), 1),
      };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    // The pointer can leave the window without ever crossing a surface's edge,
    // which would strand the last card mid-tilt.
    const onOut = (e) => {
      if (e.relatedTarget === null) {
        reset(active);
        active = null;
      }
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });
    window.addEventListener('blur', () => { reset(active); active = null; });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      reset(active);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerout', onOut);
    };
  }, [max, shadow, selector]);
}
