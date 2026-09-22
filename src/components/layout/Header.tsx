import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronDown, ChevronRight, Menu, Moon, Sun, X, ArrowRight, MSym } from "@/components/icons/material";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { mainNav } from "@/content/site.js";
// Same file as the colour mark with its ink turned white, so the two share an
// identical outline and box — swapping them reads as a recolour, not a resize.
import logoOnDark from "@/assets/logo-trimmed-white.png";
import logoOnLight from "@/assets/logo-trimmed.png";

type MenuItem = {
  title: string;
  description: string;
  href: string;
};

export type CategoryItem = MenuItem & {
  children?: MenuItem[];
};

// The menu entries themselves live in content/site.js so they can be edited
// without opening this file.
const { solutions: solutionsItems, industries: industriesItems,
        products: productsItems, services: servicesItems,
        extraLinks: primaryLinks, cta: navCta } = mainNav;

// Shared shape + motion for every top-level nav item. The scale is what makes the
// label grow under the cursor; the colour/shadow half depends on what is behind the bar.
// No chip at rest — the hover glow is a radial gradient on a pseudo-element that
// fades in, so it reads as light spilling behind the label rather than a pill.
const NAV_ITEM_BASE =
  "relative bg-transparent shadow-none rounded-none text-[15px] font-medium tracking-[0.005em] px-3.5 py-2 h-10 " +
  "transition-colors duration-200 ease-out " +
  // Hairline indicator, drawn from the centre out on hover and held open while
  // the mega-menu is showing.
  "after:absolute after:left-3.5 after:right-3.5 after:bottom-[5px] after:h-[2px] after:rounded-full " +
  "after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:ease-out " +
  "hover:after:scale-x-100 data-[state=open]:after:scale-x-100";

// Over the dark hero video.
const NAV_ITEM_ON_DARK =
  "!text-white/85 [text-shadow:0_1px_10px_rgba(3,12,28,0.55)] hover:!text-white hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:!text-white " +
  "after:bg-white/85";

// Over light page content, once the hero has scrolled past.
const NAV_ITEM_ON_LIGHT =
  "text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))] hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[hsl(var(--foreground))] " +
  "after:bg-[color:var(--brand-accent)]";


type MegaMenuProps = {
  items: CategoryItem[];
  /** Width of the tier-2 column, e.g. "w-[300px]". */
  categoryWidth: string;
  /** Width of the tier-3 flyout, e.g. "w-[460px]". */
  panelWidth: string;
  /** Column count for the tier-2 category list. Two fills top-to-bottom,
   *  then left-to-right, so the list still reads in order. */
  categoryColumns?: 1 | 2;
  /** Column count for the tier-3 grid. */
  childColumns?: 1 | 2 | 3;
  /** Tier-3 entries show their description under the title. */
  showChildDescriptions?: boolean;
  /** Tier-3 panel is headed with the active category's name. */
  showPanelHeading?: boolean;
};

/**
 * Category names navigate; adjacent disclosure buttons select their children.
 * Selection stays fixed while the user moves into the child panel.
 */
function MegaMenu({
  items, categoryWidth, panelWidth, categoryColumns = 1,
  childColumns = 1, showChildDescriptions = true, showPanelHeading = false,
}: MegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelId = useId();
  const active = items[activeIndex];

  /* Selecting on plain mouseenter breaks once the category list has two
     columns: sweeping right from a first-column item crosses a second-column
     item on the way to the flyout, and that crossing stole the selection. So
     an entry made while travelling mostly RIGHTWARDS — toward the panel — is
     held for a beat instead of committed, and dropped if the pointer keeps
     going. Arriving from above or below, which is how the list is actually
     read, still commits at once. Leaving the list clears anything pending. */
  const pointer = useRef({ x: 0, y: 0 });
  const pending = useRef<number>();
  const clearPending = () => window.clearTimeout(pending.current);
  useEffect(() => clearPending, []);

  const trackPointer = (event: React.MouseEvent) => {
    pointer.current = { x: event.clientX, y: event.clientY };
  };

  const selectOnHover = (event: React.MouseEvent, index: number) => {
    // Measured against the last move inside the list, so this is the heading
    // at the moment of crossing. A wrong guess only ever costs 150ms, never a
    // wrong selection, so the test is deliberately biased toward waiting.
    const dx = event.clientX - pointer.current.x;
    const dy = event.clientY - pointer.current.y;
    clearPending();
    if (dx > Math.abs(dy)) pending.current = window.setTimeout(() => setActiveIndex(index), 150);
    else setActiveIndex(index);
  };

  const select = (index: number) => { clearPending(); setActiveIndex(index); };

  // Column-first fill needs a row count derived from the item count, which
  // Tailwind's JIT cannot see — runtime-built class names are never generated.
  const categoryGrid = categoryColumns === 2
    ? {
        gridAutoFlow: 'column' as const,
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gridTemplateRows: `repeat(${Math.ceil(items.length / 2)}, auto)`,
      }
    : undefined;

  return (
    <div className="flex w-max items-start">
      <ul
        style={categoryGrid}
        onMouseEnter={trackPointer}
        onMouseMove={trackPointer}
        onMouseLeave={clearPending}
        className={cn(
          "shrink-0 border-r border-border p-4 grid content-start",
          /* Two-up runs six rows deep, so it is tightened to keep the last
             sector above the fold on a 720px-tall viewport. */
          categoryColumns === 2 ? "gap-0.5" : "gap-2",
          categoryWidth,
        )}
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
                className={cn(
                  "min-w-0 flex-1 rounded-md px-3 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
                  categoryColumns === 2 ? "py-2" : "py-3",
                )}
              >
                <span className="block text-sm font-medium leading-snug">{item.title}</span>
                <span className="line-clamp-2 text-xs text-muted-foreground leading-snug mt-1">{item.description}</span>
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
        {showPanelHeading && (
          <p className="px-3 pb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {active.title}
          </p>
        )}
        <ul className={cn("grid gap-1", childColumns === 2 && "grid-cols-2", childColumns === 3 && "grid-cols-3")}>
          {active.children?.map(child => (
            <li key={child.href}>
              <NavigationMenuLink href={child.href} className="block min-h-11 rounded-md p-3 hover:bg-accent focus:bg-accent">
                <span className="block text-sm font-medium leading-snug">{child.title}</span>
                {showChildDescriptions && (
                  <span className="block text-xs text-muted-foreground leading-snug mt-1">{child.description}</span>
                )}
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export function Header({ contactHref = navCta.href }: { contactHref?: string } = {}) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);
  const [darkHeroDepth, setDarkHeroDepth] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        mobileMenuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsMobileMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [isMobileMenuOpen]);
  const [openMobileSections, setOpenMobileSections] = useState<Record<string, boolean>>({});
  const [openMobileProducts, setOpenMobileProducts] = useState<Record<string, boolean>>({});
  const [openMobileSolutions, setOpenMobileSolutions] = useState<Record<string, boolean>>({});
  const [openMobileServices, setOpenMobileServices] = useState<Record<string, boolean>>({});
  const [openMobileIndustries, setOpenMobileIndustries] = useState<Record<string, boolean>>({});

  // The bar is transparent only at rest at the very top. The first scroll brings
  // the white background in — over the hero as much as anywhere else — and
  // coming back to the top takes it away again.
  const showSolidBar = isScrolled || isMobileMenuOpen;
  // White mark and white type belong to that transparent state, and only over a
  // hero dark enough to carry them. Pages mark such a hero with data-dark-hero;
  // one without it (the light Products hero, the policy pages) gets navy type
  // from the start. darkHeroDepth is measured below; here only its presence
  // matters, since at rest at the top the hero is necessarily behind the bar.
  const isDarkHero = !isScrolled && !isMobileMenuOpen && darkHeroDepth > 0;
  const navItemClass = cn(NAV_ITEM_BASE, isDarkHero ? NAV_ITEM_ON_DARK : NAV_ITEM_ON_LIGHT);

  // Layout effect, not a plain effect: the hero has to be measured before the
  // first paint or the nav renders dark and then fades to white over the hero.
  useLayoutEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-dark-hero]");
    if (!hero) return;
    const measure = () => setDarkHeroDepth(hero.offsetTop + hero.offsetHeight);
    measure();
    // Hero art and web fonts land after mount, so re-measure rather than trust
    // the first read.
    const observer = new ResizeObserver(measure);
    observer.observe(hero);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSections({});
    setOpenMobileProducts({});
    setOpenMobileSolutions({});
    setOpenMobileServices({});
    setOpenMobileIndustries({});
  };

  const toggleMobileSection = (key: string) => {
    setOpenMobileSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileProduct = (key: string) => {
    setOpenMobileProducts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileSolution = (key: string) => {
    setOpenMobileSolutions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileService = (key: string) => {
    setOpenMobileServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileIndustry = (key: string) => {
    setOpenMobileIndustries((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <header
        data-chrome={isDarkHero ? "dark" : "light"}
        className={cn(
          // Named properties, not transition-all: `all` also eased the glass bar's
          // backdrop-filter in from blur(0) on every scroll past the top.
          "fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-300",
          isScrolled ? "py-2 lg:py-3" : "py-3 lg:py-4",
          showSolidBar ? "nav-glass" : "bg-transparent",
        )}
      >
        <div className="section-container grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center">
          {/* Both marks are the same artwork at the same box, so stacking them and
              crossing the opacity turns the swap into a recolour rather than a cut. */}
          <a href="/" className="relative flex items-center justify-start">
            <img src={logoOnLight} alt="ITG Innovators" className="h-11 lg:h-14 w-auto object-contain" />
            <img
              src={logoOnDark}
              alt=""
              aria-hidden="true"
              className={cn(
                "absolute left-0 top-0 h-11 lg:h-14 w-auto object-contain",
                "drop-shadow-[0_2px_10px_rgba(3,12,28,0.45)] transition-opacity duration-300 ease-out",
                isDarkHero ? "opacity-100" : "opacity-0",
              )}
            />
          </a>

          <NavigationMenu className="hidden lg:flex justify-center">
            <NavigationMenuList className="justify-center gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => { window.location.href = "/solutions"; }}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    items={solutionsItems}
                    categoryWidth="w-[300px]"
                    panelWidth="w-[460px]"
                    childColumns={2}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => { window.location.href = "/products"; }}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu items={productsItems} categoryWidth="w-[280px]" panelWidth="w-[420px]" />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => { window.location.href = "/services"; }}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu items={servicesItems} categoryWidth="w-[300px]" panelWidth="w-[440px]" />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => { window.location.href = "/industries"; }}
                >
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    items={industriesItems}
                    /* The only two-up category list. Eleven sectors stacked in
                       one column ran 978px tall, so at 1440x900 the last two
                       sat below the fold with no scroll to reach them; six
                       rows of two bring that back inside the viewport. The
                       tier-3 panel drops descriptions and takes a heading
                       instead, because 51 segments are browsed by name. */
                    categoryWidth="w-[460px]"
                    categoryColumns={2}
                    panelWidth="w-[520px]"
                    childColumns={3}
                    showChildDescriptions={false}
                    showPanelHeading
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {primaryLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink href={link.href} className={cn(navItemClass, "inline-flex items-center")}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center justify-end gap-2 lg:gap-3">

            {/* Theme toggle hidden — brand system v2.0 is light-only.
                Kept commented so the dark-mode feature can be re-enabled later.
            <button
              onClick={toggleTheme}
              className={cn("p-2 rounded-lg hover:bg-accent transition-all duration-200 focus-enterprise", isDarkHero ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground")}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4 lg:w-5 lg:h-5" /> : <Sun className="w-4 h-4 lg:w-5 lg:h-5" />}
            </button>
            */}

            <a href={contactHref} className="btn-nav-cta hidden md:inline-flex">
              <span>{navCta.label}</span>
              <MSym name="arrow_forward" size={17} weight={500} className="cta-arrow" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={cn(
                "flex min-h-11 min-w-11 items-center justify-center lg:hidden p-2 rounded-lg transition-colors duration-200 focus-enterprise",
                isDarkHero
                  ? "text-white/90 hover:text-white [filter:drop-shadow(0_1px_6px_rgba(3,12,28,0.55))]"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
              )}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              ref={mobileMenuButton}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-navigation" data-lenis-prevent className="lg:hidden absolute top-full left-0 right-0 max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain bg-background border-b border-border shadow-lg">
            <nav aria-label="Mobile navigation" className="section-container py-4 pb-8 flex flex-col gap-1 [&_button]:min-h-11 [&_button]:text-left [&_a]:min-h-11 [&_a]:flex [&_a]:items-center [&_a]:leading-snug [&_button_.msym]:shrink-0">
              <div className="space-y-2">
                <Collapsible
                  open={openMobileSections.solutions ?? false}
                  onOpenChange={() => toggleMobileSection("solutions")}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                    Solutions
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {/* View All Solutions Link */}
                      <a
                        href="/solutions"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-sm font-semibold text-primary px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        View All Solutions
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      {solutionsItems.map((category) => (
                        <Collapsible
                          key={category.title}
                          open={openMobileSolutions[category.title] ?? false}
                          onOpenChange={() => toggleMobileSolution(category.title)}
                        >
                          <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                            {category.title}
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-2">
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              <a
                                href={category.href}
                                onClick={closeMobileMenu}
                                className="text-sm font-semibold text-primary py-3 px-2 rounded-lg hover:bg-accent"
                              >
                                {category.overviewLabel}
                              </a>
                              {category.children?.map((child) => (
                                <a
                                  key={child.title}
                                  href={child.href}
                                  onClick={closeMobileMenu}
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

                <Collapsible
                  open={openMobileSections.products ?? false}
                  onOpenChange={() => toggleMobileSection("products")}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                    Products
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {/* View All Products Link */}
                      <a
                        href="/products"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-sm font-semibold text-primary px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        View All Products
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      {productsItems.map((category) => (
                        <Collapsible
                          key={category.title}
                          open={openMobileProducts[category.title] ?? false}
                          onOpenChange={() => toggleMobileProduct(category.title)}
                        >
                          <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                            {category.title}
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-2">
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              <a
                                href={category.href}
                                onClick={closeMobileMenu}
                                className="text-sm font-semibold text-primary py-3 px-2 rounded-lg hover:bg-accent"
                              >
                                {category.overviewLabel}
                              </a>
                              {category.children?.map((child) => (
                                <a
                                  key={child.title}
                                  href={child.href}
                                  onClick={closeMobileMenu}
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

                <Collapsible
                  open={openMobileSections.services ?? false}
                  onOpenChange={() => toggleMobileSection("services")}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                    Services
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {/* View All Services Link */}
                      <a
                        href="/services"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-sm font-semibold text-primary px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      {servicesItems.map((category) => (
                        <Collapsible
                          key={category.title}
                          open={openMobileServices[category.title] ?? false}
                          onOpenChange={() => toggleMobileService(category.title)}
                        >
                          <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                            {category.title}
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-2">
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              <a
                                href={category.href}
                                onClick={closeMobileMenu}
                                className="text-sm font-semibold text-primary py-3 px-2 rounded-lg hover:bg-accent"
                              >
                                {category.overviewLabel}
                              </a>
                              {category.children?.map((child) => (
                                <a
                                  key={child.title}
                                  href={child.href}
                                  onClick={closeMobileMenu}
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

                <Collapsible
                  open={openMobileSections.industries ?? false}
                  onOpenChange={() => toggleMobileSection("industries")}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                    Industries
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {/* View All Industries Link */}
                      <a
                        href="/industries"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-sm font-semibold text-primary px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        View All Industries
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      {industriesItems.map((category) => (
                        <Collapsible
                          key={category.title}
                          open={openMobileIndustries[category.title] ?? false}
                          onOpenChange={() => toggleMobileIndustry(category.title)}
                        >
                          <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                            {category.title}
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-2">
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              <a
                                href={category.href}
                                onClick={closeMobileMenu}
                                className="text-sm font-semibold text-primary py-3 px-2 rounded-lg hover:bg-accent"
                              >
                                {category.overviewLabel}
                              </a>
                              {category.children?.map((child) => (
                                <a
                                  key={child.title}
                                  href={child.href}
                                  onClick={closeMobileMenu}
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
              </div>

              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200 py-2.5 px-2 rounded-lg hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}

              <Button variant="default" className="mt-3 w-full" onClick={closeMobileMenu} asChild>
                <a href={contactHref} onClick={closeMobileMenu}>{navCta.label}</a>
              </Button>
            </nav>
          </div>
        )}
      </header >
    </>
  );
}
