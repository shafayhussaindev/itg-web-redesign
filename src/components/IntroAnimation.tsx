import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "@/assets/logo.png";

interface IntroAnimationProps {
  onComplete: () => void;
  theme: "light" | "dark";
}

export function IntroAnimation({ onComplete, theme }: IntroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const shutterRef = useRef<HTMLDivElement>(null);
  const [showSkip, setShowSkip] = useState(true);

  // Derive dark mode from theme prop
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // Initial state
      gsap.set([text1Ref.current, text2Ref.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(shutterRef.current, { yPercent: 0 });

      // Animation sequence
      tl
        // First text appears - "Who we are" (no logo)
        .to(
          text1Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          0.3,
        )
        // First text fades out
        .to(
          text1Ref.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
          },
          "+=0.6",
        )
        // Second text appears - "We are [logo] Innovators"
        .to(
          text2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2",
        )
        // Hold for a moment
        .to({}, { duration: 0.8 })
        // Shutter slides up to reveal the site
        .to(shutterRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
        });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const handleSkip = () => {
    setShowSkip(false);

    gsap.to(shutterRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: onComplete,
    });
  };

  // Theme-based styles
  const bgColor = isDarkMode ? "hsl(220, 25%, 6%)" : "hsl(0, 0%, 98%)";
  const textColor = isDarkMode ? "rgba(255, 255, 255, 0.9)" : "rgba(15, 23, 42, 0.9)";
  const textColorFull = isDarkMode ? "rgb(255, 255, 255)" : "rgb(15, 23, 42)";
  const skipColor = isDarkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(15, 23, 42, 0.6)";
  const skipHoverColor = isDarkMode ? "rgb(255, 255, 255)" : "rgb(15, 23, 42)";
  const gridOpacity = isDarkMode ? 0.1 : 0.05;
  const orbOpacity = isDarkMode ? 0.2 : 0.1;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100]">
      {/* Main shutter panel */}
      <div
        ref={shutterRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            opacity: gridOpacity,
            backgroundImage: `
              linear-gradient(to right, hsl(215 86% 19% / 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(215 86% 19% / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Animated gradient orb */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            opacity: orbOpacity,
            background: "radial-gradient(circle, hsl(215 86% 19%) 0%, transparent 70%)",
          }}
        />

        {/* Text container */}
        <div className="relative text-center flex flex-col items-center justify-center min-h-[160px] py-3 overflow-visible">
          {/* First text - Who we are (no logo) */}
          <div ref={text1Ref} className="text-3xl md:text-5xl font-light tracking-wide" style={{ color: textColor }}>
            Who we are
          </div>

          {/* Second text - We are [logo] Innovators (single line) */}
          <div
            ref={text2Ref}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-3xl md:text-5xl font-semibold tracking-wide leading-[1.15] overflow-visible pb-1"
            style={{ color: textColorFull }}
          >
            <span className="inline-flex items-center gap-3">
              <span>We are</span>
              <img
                src={logo}
                alt="ITG"
                className="h-10 md:h-14 w-auto inline-block align-middle relative -top-[1px]"
              />
              <span className="text-gradient-primary">Technologies</span>
            </span>
          </div>
        </div>

        {/* Skip button */}
        {showSkip && (
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-2 focus-enterprise"
            style={{ color: skipColor }}
            onMouseEnter={(e) => (e.currentTarget.style.color = skipHoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = skipColor)}
          >
            Skip
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(215 86% 19%), transparent)",
          }}
        />
      </div>
    </div>
  );
}
