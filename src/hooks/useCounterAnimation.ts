import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterOptions {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function useCounterAnimation({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals,
}: CounterOptions) {
  const initialValue =
    decimals !== undefined ? Number(0).toFixed(decimals) : '0';
  const [displayValue, setDisplayValue] = useState(`${prefix}${initialValue}${suffix}`);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!elementRef.current || hasAnimated.current) return;

    const counter = { value: 0 };

    ScrollTrigger.create({
      trigger: elementRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        hasAnimated.current = true;
        gsap.to(counter, {
          value: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            const formatted =
              decimals !== undefined
                ? counter.value.toFixed(decimals)
                : Math.round(counter.value).toString();
            setDisplayValue(`${prefix}${formatted}${suffix}`);
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, [end, duration, suffix, prefix, decimals]);

  return { ref: elementRef, displayValue };
}
