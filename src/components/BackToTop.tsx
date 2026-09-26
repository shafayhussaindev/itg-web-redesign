import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/icons/material";
import { getActiveLenis } from "@/hooks/useLenis";
import { cn } from "@/lib/utils";

// How far down the page (px) before the button appears.
const SHOW_AFTER = 600;

// A small floating button, bottom right, that returns the reader to the top of
// the page. Mounted once in App.tsx so every route gets it. White with a navy
// icon so it reads on both the light page body and the navy footer.
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    // Pages with Lenis smooth scroll must scroll through it; a native smooth
    // scroll gets overridden and jumps.
    const lenis = getActiveLenis();
    if (lenis) return lenis.scrollTo(0);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-40",
        "grid place-items-center w-11 h-11 rounded-md",
        "bg-background text-[color:var(--navy)] dark:text-foreground border border-border shadow-md",
        "hover:bg-[color:var(--navy)] hover:text-white hover:border-[color:var(--navy)]",
        "transition-[opacity,transform,background-color,color,border-color] duration-200",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
        // Out of the way while the cookie bar covers the bottom edge.
        "[[data-cookie-bar]_&]:hidden",
      )}
    >
      <ArrowUp className="w-5 h-5" aria-hidden />
    </button>
  );
}
