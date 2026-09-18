/**
 * scrollfx — pooled viewport observation for the tier-1 pages.
 *
 * This file used to be the whole scroll pipeline: section reveals, a glass-card
 * settle, and parallax. The reveals and the card settle were removed on
 * request, so what remains is:
 *
 *   User scrolls
 *      |
 *      +-- Parallax       -> transform only   (pure CSS scroll-driven
 *      |                                       animation, on the compositor;
 *      |                                       nothing in this file)
 *      +-- Activity gates -> one-shot in-view  (this file, via useInView)
 *
 * Nothing here runs per scrolled frame. The gate fires once per element, from
 * an IntersectionObserver callback, and is only used to stop the world map and
 * the ecosystem diagrams animating while they are off-screen.
 *
 * Observers are pooled by their options rather than created per element.
 */

/** Pooled observers, keyed by their options. */
const pool = new Map();

/** node -> callback, so one observer can serve many elements. */
const callbacks = new WeakMap();

function getObserver(threshold, rootMargin) {
  const key = `${threshold}|${rootMargin}`;
  let io = pool.get(key);
  if (io) return io;

  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const fire = callbacks.get(entry.target);
        // One-way: the gate latches on first entry and is then dropped.
        io.unobserve(entry.target);
        callbacks.delete(entry.target);
        fire?.();
      }
    },
    { threshold, rootMargin }
  );
  pool.set(key, io);
  return io;
}

/**
 * Calls `onEnter` the first time `node` enters the viewport, then forgets it.
 * Returns an unsubscribe function.
 */
export function observeInView(node, onEnter, { threshold, rootMargin }) {
  // No IntersectionObserver (older Safari): show everything rather than
  // leaving the page permanently blank.
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    onEnter();
    return () => {};
  }

  const io = getObserver(threshold, rootMargin);
  callbacks.set(node, onEnter);
  io.observe(node);

  return () => {
    io.unobserve(node);
    callbacks.delete(node);
  };
}
