import { Suspense, lazy } from 'react';
import { useAnimationActivity } from '@/hooks/useAnimationActivity';

const HowItWorksLottie = lazy(() => import('./HowItWorksLottie.jsx'));

/**
 * The Lottie file already contains its own heading and the three step cards,
 * so this section intentionally renders nothing but the animation.
 *
 * The animation is code-split (see HowItWorksLottie.jsx): it is below the fold
 * here and unused on the Products page. `.lottie-stage` holds its aspect ratio
 * whether or not the chunk has arrived, so the fallback causes no layout shift.
 */
export default function HowItWorks() {
  const { ref, active, hasEntered } = useAnimationActivity();

  return (
    <section ref={ref}>
      <div className="tablet-wrap">
        <div className="tablet-frame">
          <div className="tablet-screen">
            <div className="lottie-stage">
              <Suspense fallback={null}>
                {hasEntered && <HowItWorksLottie active={active} />}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
