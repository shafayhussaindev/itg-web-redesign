import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { useAnimationActivity } from './useAnimationActivity';

let intersect: IntersectionObserverCallback;
const disconnect = vi.fn();
const play = vi.fn().mockResolvedValue(undefined);
const pause = vi.fn();
const pauseSVG = vi.fn();
const resumeSVG = vi.fn();

function Demo() {
  const { ref, hasEntered } = useAnimationActivity();
  return <div ref={ref} data-testid="stage">
    <video autoPlay />
    <svg><animate attributeName="opacity" /></svg>
    {hasEntered && <span>Loaded</span>}
  </div>;
}

beforeEach(() => {
  play.mockResolvedValue(undefined);
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback: IntersectionObserverCallback) { intersect = callback; }
    observe = vi.fn();
    disconnect = disconnect;
  });
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(play);
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(pause);
  Object.defineProperty(SVGSVGElement.prototype, 'pauseAnimations', { configurable: true, value: pauseSVG });
  Object.defineProperty(SVGSVGElement.prototype, 'unpauseAnimations', { configurable: true, value: resumeSVG });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

function visibility(isIntersecting: boolean) {
  act(() => intersect([{ isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver));
}

it('defers loading, resumes visible media, and retains mounted content off-screen', () => {
  const { unmount } = render(<Demo />);
  expect(screen.getByTestId('stage')).toHaveAttribute('data-animation-paused');
  expect(screen.queryByText('Loaded')).toBeNull();
  visibility(true);
  expect(screen.getByText('Loaded')).toBeInTheDocument();
  expect(screen.getByTestId('stage')).not.toHaveAttribute('data-animation-paused');
  expect(play).toHaveBeenCalled();
  expect(resumeSVG).toHaveBeenCalled();
  visibility(false);
  expect(screen.getByText('Loaded')).toBeInTheDocument();
  expect(screen.getByTestId('stage')).toHaveAttribute('data-animation-paused');
  expect(pause).toHaveBeenCalled();
  expect(pauseSVG).toHaveBeenCalled();
  unmount();
  expect(disconnect).toHaveBeenCalledOnce();
});

it('pauses a hidden tab and resumes only when the stage is also in view', () => {
  render(<Demo />);
  visibility(true);
  const hidden = vi.spyOn(document, 'hidden', 'get').mockReturnValue(true);
  act(() => document.dispatchEvent(new Event('visibilitychange')));
  expect(screen.getByTestId('stage')).toHaveAttribute('data-animation-paused');
  hidden.mockReturnValue(false);
  act(() => document.dispatchEvent(new Event('visibilitychange')));
  expect(screen.getByTestId('stage')).not.toHaveAttribute('data-animation-paused');
  visibility(false);
  act(() => document.dispatchEvent(new Event('visibilitychange')));
  expect(screen.getByTestId('stage')).toHaveAttribute('data-animation-paused');
});
