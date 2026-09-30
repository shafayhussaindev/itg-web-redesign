import { useEffect, useId, useRef, useState } from "react";
import { ChevronRight } from "@/components/common/Icons";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

/**
 * Category names navigate; adjacent disclosure buttons select their children.
 * Selection stays fixed while the user moves into the child panel.
 */
export function MegaMenu({ items, categoryWidth, panelWidth }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelId = useId();

  /* Selecting on plain mouseenter breaks once the category list has two
     columns: sweeping right from a first-column item crosses a second-column
     item on the way to the flyout, and that crossing stole the selection. So
     an entry made while travelling mostly RIGHTWARDS — toward the panel — is
     held for a beat instead of committed, and dropped if the pointer keeps
     going. Arriving from above or below, which is how the list is actually
     read, still commits at once. Leaving the list clears anything pending. */
  const pointer = useRef({ x: 0, y: 0 });
  const pending = useRef();
  const clearPending = () => window.clearTimeout(pending.current);
  useEffect(() => clearPending, []);

  const trackPointer = (event) => {
    pointer.current = { x: event.clientX, y: event.clientY };
  };

  const selectOnHover = (event, index) => {
    // Measured against the last move inside the list, so this is the heading
    // at the moment of crossing. A wrong guess only ever costs 150ms, never a
    // wrong selection, so the test is deliberately biased toward waiting.
    const dx = event.clientX - pointer.current.x;
    const dy = event.clientY - pointer.current.y;
    clearPending();
    if (dx > Math.abs(dy)) pending.current = window.setTimeout(() => setActiveIndex(index), 150);
    else setActiveIndex(index);
  };

  const select = (index) => { clearPending(); setActiveIndex(index); };

  return (
    <div className="flex w-max items-start">
      <ul
        onMouseEnter={trackPointer}
        onMouseMove={trackPointer}
        onMouseLeave={clearPending}
        className={cn("shrink-0 border-r border-border p-4 grid content-start gap-2", categoryWidth)}
      >
        {items.map((item, index) => (
          <li
            key={item.href}
            onMouseEnter={(event) => selectOnHover(event, index)}
            className={cn("flex items-center rounded-md", activeIndex === index && "bg-accent")}
          >
            <NavigationMenuLink asChild>
              <a
                href={item.href}
                onFocus={() => select(index)}
                className="min-w-0 flex-1 rounded-md px-3 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary py-3"
              >
                <span className="block text-sm font-medium leading-snug">{item.title}</span>
                {item.description && <span className="line-clamp-2 text-xs text-muted-foreground leading-snug mt-1">{item.description}</span>}
              </a>
            </NavigationMenuLink>
            <button
              type="button"
              aria-label={`Show ${item.title} options`}
              aria-expanded={activeIndex === index}
              aria-controls={panelId}
              onClick={() => select(index)}
              className="flex min-h-11 w-11 shrink-0 items-center justify-center rounded-md hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            ><ChevronRight className="w-4 h-4" /></button>
          </li>
        ))}
      </ul>
      <div id={panelId} data-lenis-prevent className={cn("shrink-0 p-4 max-h-[calc(100dvh-200px)] overflow-y-auto overscroll-contain", panelWidth)}>
        {/* Keep the flyout sized to its longest list. Inactive lists still take
            up space, but are hidden from view and keyboard navigation. */}
        <div className="grid">
          {items.map((item, index) => (
            <ul
              key={item.href}
              aria-hidden={activeIndex !== index}
              className={cn(
                "col-start-1 row-start-1 grid content-start gap-1",
                activeIndex !== index && "invisible pointer-events-none",
              )}
            >
              {item.children?.map((child, childIndex) => (
                <li key={`${item.href}:${childIndex}`}>
                  <NavigationMenuLink href={child.href} className="block min-h-11 rounded-md p-3 hover:bg-accent focus:bg-accent">
                    <span className="block text-sm font-medium leading-snug">{child.title}</span>
                    {child.description && (
                      <span className="block text-xs text-muted-foreground leading-snug mt-1">{child.description}</span>
                    )}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
