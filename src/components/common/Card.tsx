import type { HTMLAttributes } from "react";

/** A small reusable card shell for new sections. */
export function Card({ className = "", ...props }: HTMLAttributes<HTMLElement>) {
  return <article className={`rounded-xl border bg-white p-6 shadow-sm ${className}`} {...props} />;
}
