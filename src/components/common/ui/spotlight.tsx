import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  color?: string;
};

export function Spotlight({ className, size = 520, color = "hsl(var(--brand-secondary) / 0.35)" }: SpotlightProps) {
  return (
    <div
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 65%)`,
      }}
    />
  );
}
