import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { registerParallax } from './parallax';

describe('parallax scheduling', () => {
  let intersect: IntersectionObserverCallback;
  let nextFrame: FrameRequestCallback;
  let cleanups: (() => void)[];
  const unobserve = vi.fn();

  beforeEach(() => {
    cleanups = [];
    vi.stubGlobal('IntersectionObserver', class {
      constructor(callback: IntersectionObserverCallback) { intersect = callback; }
      observe = vi.fn();
      unobserve = unobserve;
      disconnect = vi.fn();
    });
    vi.stubGlobal('requestAnimationFrame', vi.fn(callback => { nextFrame = callback; return 1; }));
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
  });
  afterEach(() => {
    cleanups.forEach(cleanup => cleanup());
    document.body.innerHTML = '';
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  function addLayer() {
    const media = document.createElement('div');
    const node = document.createElement('div');
    media.append(node);
    document.body.append(media);
    const read = vi.spyOn(media, 'getBoundingClientRect').mockReturnValue({ top: 900, height: 500 } as DOMRect);
    cleanups.push(registerParallax(node, 0.05, true));
    return { media, node, read };
  }

  function visibility(target: Element, isIntersecting: boolean) {
    intersect([{ target, isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver);
  }

  it('batches rapid scrolling into one frame and skips off-screen layers', () => {
    const a = addLayer();
    const b = addLayer();
    visibility(a.media, true);
    window.dispatchEvent(new Event('scroll'));
    window.dispatchEvent(new Event('scroll'));
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    nextFrame(16);
    expect(a.read).toHaveBeenCalledTimes(1);
    expect(b.read).not.toHaveBeenCalled();
    expect(a.node.style.getPropertyValue('--parallax-offset')).toBe('-6.000%');
    visibility(a.media, false);
    window.dispatchEvent(new Event('scroll'));
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    visibility(b.media, true);
    nextFrame(32);
    expect(b.read).toHaveBeenCalledTimes(1);
  });

  it('cleans up detached nodes and cancels pending work on route changes', () => {
    const a = addLayer();
    visibility(a.media, true);
    a.node.remove();
    cleanups.pop()!();
    expect(unobserve).toHaveBeenCalledWith(a.media);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(1);
    vi.mocked(requestAnimationFrame).mockClear();
    window.dispatchEvent(new Event('scroll'));
    expect(requestAnimationFrame).not.toHaveBeenCalled();
  });
});
