import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const supportingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states for text content
      gsap.set([headlineRef.current, subheadlineRef.current, supportingRef.current, ctaRef.current], {
        opacity: 0,
        x: -40,
      });

      // Staggered entrance animation
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(headlineRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(
          subheadlineRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .to(
          supportingRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      data-dark-hero
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/background-image.png"
        aria-hidden="true"
      >
        {/* Optimized H.264: audio stripped, CRF 28, +faststart for progressive playback (~8MB). */}
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility scrim - darker on the left where the copy sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/15" />

      <Spotlight className="-top-24 -left-24 opacity-80" size={620} />
      <Spotlight className="bottom-10 right-8 opacity-70" size={520} color="hsl(var(--brand-secondary) / 0.22)" />

      {/* Content Container - Left Side */}
      <div className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="section-container">
          <div className="flex justify-start">
            <div className="max-w-2xl">
              {/* Text Content - Left Aligned */}
              <h1
                ref={headlineRef}
                className="mb-6 lg:mb-8 text-left text-white"
              >
                Building Intelligent Enterprise Platforms for a Regulated, AI-Driven World
              </h1>

              <p
                ref={subheadlineRef}
                className="text-base md:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 text-left lg:w-[83%]"
              >
                ITG engineers AI-powered enterprise software, automation, sustainability intelligence and digital experience platforms for organizations that need speed, control, resilience and measurable transformation.
              </p>

              {/* <p
                ref={supportingRef}
                className="text-sm md:text-base text-white/70 mb-8 lg:mb-10 text-left"
              >
                Trusted by enterprises and institutions across the Middle East, Europe and Asia.
              </p> */}

              <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <a href="/solutions" className="btn-modern group w-full sm:w-auto h-12">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="btn-modern-ghost w-full sm:w-auto h-12"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - positioned at bottom of section */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 z-10">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-24 gradient-fade-bottom" /> */}
    </section>
  );
}
