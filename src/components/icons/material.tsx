/**
 * Google Material Symbols, wrapped so the rest of the site never touches the
 * font directly.
 *
 * Material Symbols is a *font*, not a set of SVGs: the glyph is sized by
 * font-size, not by width/height. Call sites across this codebase size their
 * icons with Tailwind's `w-4 h-4` / `lg:w-5 lg:h-5`, so `sizeFromClass` reads
 * that intent and converts it into font-size, exposed as CSS custom properties
 * (--msym / --msym-lg) rather than generated utility classes — Tailwind's JIT
 * only emits classes it can see in the source, so a class name built at
 * runtime would never make it into the stylesheet.
 *
 * The named exports below mirror the lucide-react names they replaced, so the
 * swap at each call site is the import line and nothing else.
 */
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type MSymProps = {
  /** Material Symbols glyph name, e.g. "arrow_forward". */
  name: string;
  /** Explicit pixel size. Overrides any size inferred from className. */
  size?: number;
  /** Filled rather than outlined. */
  fill?: boolean;
  /** 100–700. The site's line icons sit at 300; 400 is the Material default. */
  weight?: number;
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?: string;
};

const DEFAULT_SIZE = 24;

/** Tailwind spacing unit -> px. `w-4` is 1rem at the default 16px root. */
const UNIT = 4;

/**
 * Pull the base and `lg:` sizes out of a Tailwind class string.
 * "w-4 h-4 lg:w-5 lg:h-5" -> { base: 16, lg: 20 }
 */
function sizeFromClass(className?: string): { base?: number; lg?: number } {
  if (!className) return {};
  let base: number | undefined;
  let lg: number | undefined;
  for (const token of className.split(/\s+/)) {
    const m = token.match(/^(?:([a-z]+):)?w-(\d+(?:\.\d+)?)$/);
    if (!m) continue;
    const px = parseFloat(m[2]) * UNIT;
    if (!m[1]) base = px;
    else if (m[1] === "lg" || m[1] === "md") lg = px;
  }
  return { base, lg };
}

/** Strip the box-sizing utilities — a glyph is sized by font-size, not w/h. */
function stripBoxClasses(className?: string) {
  if (!className) return undefined;
  return className
    .split(/\s+/)
    .filter((t) => !/^(?:[a-z]+:)?[wh]-\d/.test(t))
    .join(" ")
    .trim() || undefined;
}

export function MSym({
  name,
  size,
  fill = false,
  weight = 300,
  className,
  style,
  ...rest
}: MSymProps) {
  const inferred = sizeFromClass(className);
  const base = size ?? inferred.base ?? DEFAULT_SIZE;
  const lg = size ? undefined : inferred.lg;

  return (
    <span
      aria-hidden={rest["aria-label"] ? undefined : true}
      {...rest}
      className={cn("msym", stripBoxClasses(className))}
      style={{
        ["--msym" as string]: `${base}px`,
        ...(lg ? { ["--msym-lg" as string]: `${lg}px` } : null),
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${base}`,
        ...style,
      }}
    >
      {name}
    </span>
  );
}

/* ── Drop-in replacements for the lucide-react names previously imported ──
   Only the import path changes at each call site; props stay identical. */
type IconProps = Omit<MSymProps, "name">;
const icon = (glyph: string) => {
  const C = (props: IconProps) => <MSym name={glyph} {...props} />;
  C.displayName = `MSym(${glyph})`;
  return C;
};

export const ArrowRight = icon("arrow_forward");
export const ArrowUpRight = icon("arrow_outward");
export const Brain = icon("neurology");
export const Briefcase = icon("work");
export const Building = icon("apartment");
export const Building2 = icon("domain");
export const Check = icon("check");
export const CheckCircle2 = icon("check_circle");
export const ChevronDown = icon("keyboard_arrow_down");
export const ChevronRight = icon("chevron_right");
export const Cloud = icon("cloud");
export const DraftingCompass = icon("architecture");
export const Factory = icon("factory");
export const Globe = icon("language");
export const GraduationCap = icon("school");
export const Hammer = icon("construction");
/** Healthcare context on the Industries grid, not a "favourite". */
export const Heart = icon("health_and_safety");
export const Landmark = icon("account_balance");
export const Layers = icon("layers");
export const Leaf = icon("eco");
export const Menu = icon("menu");
export const Moon = icon("dark_mode");
export const Palette = icon("palette");
export const Plane = icon("flight");
export const ShieldCheck = icon("verified_user");
export const ShoppingBag = icon("shopping_bag");
export const Sun = icon("light_mode");
export const TrendingUp = icon("trending_up");
export const Truck = icon("local_shipping");
export const Wrench = icon("build");
export const X = icon("close");
