type Layer = { node: HTMLElement; media: HTMLElement; strength: number; percent: boolean };

const layers = new Set<Layer>();
const visible = new Set<Layer>();
let observer: IntersectionObserver | undefined;
let frame = 0;

function update() {
  frame = 0;
  // Read all geometry before writing styles to avoid repeated forced layouts.
  const updates = Array.from(visible, layer => {
    // The untransformed media frame gives stable geometry: measuring the moving
    // layer itself feeds its previous transform back into the next frame.
    const rect = layer.media.getBoundingClientRect();
    const offset = -(rect.top + rect.height / 2 - window.innerHeight / 2) * layer.strength;
    const shift = layer.percent ? Math.max(-6, Math.min(6, offset / 6)) : offset;
    return { layer, value: `${shift.toFixed(3)}${layer.percent ? '%' : 'px'}` };
  });
  updates.forEach(({ layer, value }) => layer.node.style.setProperty('--parallax-offset', value));
}

function schedule() {
  if (!frame && visible.size && !document.hidden) frame = requestAnimationFrame(update);
}

function onVisibility() {
  if (document.hidden) {
    cancelAnimationFrame(frame);
    frame = 0;
  } else schedule();
}

/** One scroll listener and frame for all visible parallax layers on the page. */
export function registerParallax(node: HTMLElement, strength: number, percent: boolean) {
  const media = node.parentElement;
  if (!media) return () => {};
  const layer = { node, media, strength, percent };
  if (!layers.size) {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          for (const item of layers) {
            if (item.media !== entry.target) continue;
            if (entry.isIntersecting) visible.add(item);
            else visible.delete(item);
          }
        }
        schedule();
      }, { rootMargin: '150px' });
    }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
  }
  layers.add(layer);
  if (observer) observer.observe(media);
  else { visible.add(layer); schedule(); }

  return () => {
    observer?.unobserve(media);
    layers.delete(layer);
    visible.delete(layer);
    node.style.removeProperty('--parallax-offset');
    if (!layers.size) {
      observer?.disconnect();
      observer = undefined;
      cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('visibilitychange', onVisibility);
    }
  };
}
