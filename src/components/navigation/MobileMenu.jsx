import { ChevronDown, ArrowRight, MSym } from "@/components/common/Icons";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

/**
 * The menu below the bar on small screens: each Tier 1 menu is a collapsible,
 * each Tier 2 page inside it another, holding its Tier 3 links.
 * `open` is keyed "solutions" for a menu and "solutions:<page title>" for a
 * page; Navbar owns it so sections stay open if the menu is closed and reopened.
 */
export function MobileMenu({ menus, extraLinks, cta, contactHref, open, onToggle, onClose }) {
  return (
    <div id="mobile-navigation" data-lenis-prevent className="lg:hidden absolute top-full left-0 right-0 max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain bg-background border-b border-border shadow-lg">
      <nav aria-label="Mobile navigation" className="section-container py-4 pb-8 flex flex-col gap-1 [&_button]:min-h-11 [&_button]:text-left [&_a]:min-h-11 [&_a]:flex [&_a]:items-center [&_a]:leading-snug [&_button_.msym]:shrink-0">
        <div className="space-y-2">
          {menus.map((menu) => (
            <Collapsible
              key={menu.key}
              open={open[menu.key] ?? false}
              onOpenChange={() => onToggle(menu.key)}
            >
              <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                {menu.label}
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-2">
                <div className="mt-2 ml-2 flex flex-col gap-2">
                  <a
                    href={menu.href}
                    onClick={onClose}
                    className="flex items-center gap-2 text-sm font-semibold text-primary px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    {menu.viewAllLabel}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {menu.items.map((category) => (
                    <Collapsible
                      key={category.title}
                      open={open[`${menu.key}:${category.title}`] ?? false}
                      onOpenChange={() => onToggle(`${menu.key}:${category.title}`)}
                    >
                      <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                        {category.title}
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-2">
                        <div className="mt-1 ml-4 flex flex-col gap-1">
                          <a
                            href={category.href}
                            onClick={onClose}
                            className="text-sm font-semibold text-primary py-3 px-2 rounded-lg hover:bg-accent"
                          >
                            {category.overviewLabel}
                          </a>
                          {category.children?.map((child) => (
                            <a
                              key={child.title}
                              href={child.href}
                              onClick={onClose}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1.5 px-2 rounded-lg hover:bg-accent"
                            >
                              {child.title}
                            </a>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {extraLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200 py-2.5 px-2 rounded-lg hover:bg-accent"
          >
            {link.label}
          </a>
        ))}

        <Button variant="default" className="mt-3 w-full" onClick={onClose} asChild>
          <a href={contactHref} onClick={onClose}>{cta.label}<MSym name="arrow_forward" size={18} weight={500} /></a>
        </Button>
      </nav>
    </div>
  );
}
