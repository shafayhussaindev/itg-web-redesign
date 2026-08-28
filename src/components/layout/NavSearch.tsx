import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const LABEL = "Search";

/** Widest the capsule may ever open, before the room actually available caps it. */
const CAPSULE_MAX = 200;
/** Clearance kept between the open capsule and whatever sits to its left. */
const GUTTER = 16;
/** Below this the placeholder would run into the trailing icon, so it stays out. */
const PLACEHOLDER_MIN = 110;
/** How long the magnifier takes to cross the whole word. */
const SWEEP = 0.2;
/** The gap the magnifier sits behind the word at rest, per the button's gap-2. */
const GAP = 8;

type NavSearchProps = {
  /** Opens the command palette — unchanged from the plain button this replaces. */
  onOpen: () => void;
  /** True while the header sits over a dark hero, so the control inverts. */
  onDark: boolean;
};

/**
 * The magnifier walks left to right through the word, and each letter it
 * reaches is gone — not faded, cut — so the glass reads as consuming the
 * label. Once it lands at the right-hand end, a capsule opens leftwards
 * behind it with its own placeholder, leaving the magnifier as the field's
 * trailing icon. Leaving the control reverses the same timeline, so the way
 * out is exactly the way in, played backwards.
 */
export function NavSearch({ onOpen, onDark }: NavSearchProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const capsuleRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLSpanElement>(null);

  const ctxRef = useRef<gsap.Context | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    ctxRef.current = gsap.context(() => {}, rootRef);

    // The available width is measured, so a resize invalidates the timeline;
    // the next hover rebuilds it against the new layout.
    const onResize = () => {
      tlRef.current?.revert();
      tlRef.current = null;
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctxRef.current?.revert();
      tlRef.current = null;
    };
  }, []);

  /**
   * Built on first hover rather than on mount: the travel distance is the
   * rendered width of the word, which is only trustworthy once the webfont
   * has actually landed.
   */
  const timeline = () => {
    if (tlRef.current) return tlRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

    ctxRef.current?.add(() => {
      const label = labelRef.current;
      const chars = label?.querySelectorAll<HTMLElement>("[data-char]");
      if (!label || !chars?.length) return;

      // The magnifier stops where the last letter was: the width of the word
      // plus the gap it used to sit behind. Letter timings are derived from
      // that same measurement rather than a fixed step, so each letter goes
      // exactly as the glass arrives over it whatever the font renders at.
      const wordWidth = label.offsetWidth;
      const travel = wordWidth + GAP;
      const charWidth = wordWidth / chars.length;
      const charStart = SWEEP * (GAP / travel);
      const charStagger = SWEEP * (charWidth / travel);

      // The header's right-hand column begins exactly where the last nav link
      // ends, so keeping the capsule inside that column is what keeps it off
      // "Company". At the lg breakpoint the column is barely wider than this
      // control, hence measuring rather than assuming a width.
      const root = rootRef.current!;
      const column = root.parentElement ?? root;
      const available =
        root.getBoundingClientRect().right - column.getBoundingClientRect().left - GUTTER;
      const capsuleWidth = Math.max(0, Math.min(CAPSULE_MAX, Math.round(available)));

      gsap.set(capsuleRef.current, { width: 0, autoAlpha: 0 });

      const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });

      tl.to(chars, { autoAlpha: 0, duration: 0.001, stagger: charStagger }, charStart)
        .to(iconRef.current, { x: travel, duration: SWEEP }, 0)
        .to(
          capsuleRef.current,
          { width: capsuleWidth, autoAlpha: 1, duration: 0.24, ease: "power3.out" },
          SWEEP - 0.04,
        );

      // Too narrow for the word to clear the trailing icon: the capsule still
      // opens, it just stays empty rather than showing clipped text.
      if (capsuleWidth >= PLACEHOLDER_MIN) {
        tl.fromTo(
          placeholderRef.current,
          { autoAlpha: 0, x: -8 },
          { autoAlpha: 1, x: 0, duration: 0.16, ease: "power2.out" },
          SWEEP + 0.04,
        );
      }

      tlRef.current = tl;
    });

    return tlRef.current;
  };

  const expand = () => timeline()?.play();
  const collapse = () => timeline()?.reverse();

  return (
    <div
      ref={rootRef}
      className="relative hidden lg:flex items-center justify-end"
      onMouseEnter={expand}
      onMouseLeave={collapse}
      onFocus={expand}
      onBlur={collapse}
    >
      {/* Opens leftwards from the control's right edge, so nothing else in the
          header is pushed around while it is open. */}
      <div
        ref={capsuleRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 h-10 w-0 -translate-y-1/2 overflow-hidden rounded-full border opacity-0",
          onDark
            ? "border-white/35 bg-white/[0.12]"
            : "border-[hsl(var(--foreground))]/15 bg-[hsl(var(--foreground))]/[0.05]",
        )}
      >
        <span
          ref={placeholderRef}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm opacity-0",
            onDark ? "text-white/70" : "text-[hsl(var(--foreground))]/55",
          )}
        >
          Search
        </span>
      </div>

      <button
        type="button"
        onClick={onOpen}
        aria-label="Search navigation"
        className={cn(
          "relative z-10 flex h-10 items-center gap-2 rounded-full px-3 text-sm font-medium",
          "transition-colors duration-200",
          onDark ? "text-white" : "text-[hsl(var(--foreground))]",
        )}
      >
        <span ref={iconRef} className="relative flex will-change-transform">
          <Search className="h-4 w-4" />
        </span>
        {/* Split for the letter-by-letter cut; the button's aria-label carries
            the accessible name, so the pieces stay out of the a11y tree. */}
        <span ref={labelRef} aria-hidden="true" className="flex">
          {LABEL.split("").map((char, i) => (
            <span key={`${char}-${i}`} data-char className="inline-block">
              {char}
            </span>
          ))}
        </span>
      </button>
    </div>
  );
}
