import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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
// @ts-expect-error - plain JS content file, no types alongside it
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
  /** Tier-2 laid out in two columns (Industries has eleven entries). */
  twoColumnCategories?: boolean;
  /** Column count for the tier-3 grid. */
  childColumns?: 1 | 2 | 3;
  /** Tier-3 entries show their description under the title. */
  showChildDescriptions?: boolean;
  /** Tier-2 rows navigate on click instead of acting as hover targets only. */
  categoriesAreLinks?: boolean;
};

/**
 * Tier-2 list with the tier-3 items in a flyout that hangs off whichever row is
 * hovered, so the pointer reaches tier 3 by moving straight across rather than
 * cutting diagonally over its neighbours. Two guards keep a stray pass from
 * swapping the panel out from under the pointer: switching to a different row
 * waits out a short intent delay, and hovering the flyout locks the selection.
 */
function MegaMenu({
  items,
  categoryWidth,
  panelWidth,
  twoColumnCategories = false,
  childColumns = 1,
  showChildDescriptions = true,
  categoriesAreLinks = false,
}: MegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const switchTimer = useRef<number>();
  const pointerInPanel = useRef(false);
  const lastPointerX = useRef<number | null>(null);
  const headingForPanel = useRef(false);

  const active = items[activeIndex];

  useEffect(() => () => window.clearTimeout(switchTimer.current), []);

  const openFor = useCallback(
    (index: number, immediate: boolean) => {
      window.clearTimeout(switchTimer.current);
      if (pointerInPanel.current) return;
      const apply = () => setActiveIndex(index);
      // Keyboard focus lands instantly. A pointer waits out a brush-past, and
      // waits considerably longer when it is travelling towards the flyout —
      // that run crosses the second category column on the wider menus.
      if (immediate) apply();
      else switchTimer.current = window.setTimeout(apply, headingForPanel.current ? 260 : 90);
    },
    [],
  );

  const releaseHoverGuards = () => {
    window.clearTimeout(switchTimer.current);
    pointerInPanel.current = false;
    lastPointerX.current = null;
    headingForPanel.current = false;
  };

  // The flyout is always to the right, so rightward travel reads as "on the way
  // to tier 3" rather than "picking a different tier-2 row".
  const trackPointerDirection = (event: React.MouseEvent) => {
    const previous = lastPointerX.current;
    if (previous !== null && Math.abs(event.clientX - previous) > 2) {
      headingForPanel.current = event.clientX > previous;
    }
    lastPointerX.current = event.clientX;
  };

  const rowClass = (index: number) =>
    cn(
      "w-full text-left flex items-center justify-between select-none rounded-md leading-none outline-none transition-all duration-200",
      twoColumnCategories ? "p-2.5" : "p-3",
      activeIndex === index
        ? "bg-accent text-accent-foreground shadow-sm"
        : "hover:bg-accent/50 hover:text-accent-foreground",
    );

  const renderRow = (item: CategoryItem, index: number) => {
    const body = (
      <>
        <div className="flex-1">
          <div className="text-sm font-medium leading-none">{item.title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">{item.description}</p>
        </div>
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 ml-2 transition-all duration-200",
            activeIndex === index ? "text-primary translate-x-0.5" : "text-muted-foreground",
          )}
        />
      </>
    );

    return (
      <li key={item.title}>
        {categoriesAreLinks ? (
          <NavigationMenuLink asChild>
            <a
              href={item.href}
              className={rowClass(index)}
              onMouseEnter={() => openFor(index, false)}
              onFocus={() => openFor(index, true)}
            >
              {body}
            </a>
          </NavigationMenuLink>
        ) : (
          <button
            type="button"
            className={rowClass(index)}
            onMouseEnter={() => openFor(index, false)}
            onFocus={() => openFor(index, true)}
          >
            {body}
          </button>
        )}
      </li>
    );
  };

  const splitAt = twoColumnCategories ? Math.ceil(items.length / 2) : items.length;

  return (
    <div className="flex w-max" onMouseMove={trackPointerDirection} onMouseLeave={releaseHoverGuards}>
      <div className={cn("shrink-0 border-r border-border p-4 flex gap-3", categoryWidth)}>
        <ul className="flex-1 space-y-1">{items.slice(0, splitAt).map((item, index) => renderRow(item, index))}</ul>
        {twoColumnCategories && (
          <ul className="flex-1 space-y-1">
            {items.slice(splitAt).map((item, index) => renderRow(item, index + splitAt))}
          </ul>
        )}
      </div>

      {/* Tier-3 flyout — collapsed to nothing until a tier-2 row is hovered. */}
      <div
        className={cn("relative shrink-0 overflow-hidden", panelWidth)}
        onMouseEnter={() => {
          pointerInPanel.current = true;
          window.clearTimeout(switchTimer.current);
        }}
        onMouseLeave={() => {
          pointerInPanel.current = false;
        }}
      >
        {/* Pinned to the top of the dropdown: the tier-3 list always starts
            level with the first category, whichever row is hovered. */}
        <div className={cn(panelWidth, "p-4")}>
          {active && (
            <>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {active.title}
              </div>
              <ul
                className={cn(
                  "gap-x-2",
                  childColumns === 1 && "space-y-1",
                  childColumns === 2 && "grid grid-cols-2 gap-y-1",
                  childColumns === 3 && "grid grid-cols-3 gap-y-0.5",
                )}
              >
                {active.children?.map((child) => (
                  <li key={child.title}>
                    <NavigationMenuLink asChild>
                      <a
                        href={child.href}
                        className={cn(
                          "block select-none rounded-md leading-none no-underline outline-none transition-colors",
                          showChildDescriptions ? "p-3" : "px-2.5 py-2",
                          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        )}
                      >
                        <div className="text-sm font-medium leading-tight">{child.title}</div>
                        {showChildDescriptions && (
                          <p className="text-xs leading-snug text-muted-foreground mt-1">{child.description}</p>
                        )}
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [darkHeroDepth, setDarkHeroDepth] = useState(0);
  const isScrolled = scrollY > 20;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSections, setOpenMobileSections] = useState<Record<string, boolean>>({});
  const [openMobileProducts, setOpenMobileProducts] = useState<Record<string, boolean>>({});
  const [openMobileSolutions, setOpenMobileSolutions] = useState<Record<string, boolean>>({});
  const [openMobileServices, setOpenMobileServices] = useState<Record<string, boolean>>({});
  const [openMobileIndustries, setOpenMobileIndustries] = useState<Record<string, boolean>>({});

  // The bar is transparent only at rest at the very top. The first scroll brings
  // the white background in — over the hero as much as anywhere else — and
  // coming back to the top takes it away again.
  const showSolidBar = isScrolled;
  // White mark and white type belong to that transparent state, and only over a
  // hero dark enough to carry them. Pages mark such a hero with data-dark-hero;
  // one without it (the light Products hero, the policy pages) gets navy type
  // from the start. darkHeroDepth is measured below; here only its presence
  // matters, since at rest at the top the hero is necessarily behind the bar.
  const isDarkHero = !isScrolled && darkHeroDepth > 0;
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
      setScrollY(window.scrollY);
    };
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-2 lg:py-3" : "py-3 lg:py-4",
          showSolidBar ? "nav-glass" : "bg-transparent",
        )}
      >
        <div className="section-container grid grid-cols-[1fr_auto_1fr] items-center">
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
                  onClick={() => window.location.href = '/solutions'}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    items={solutionsItems}
                    categoryWidth="w-[300px]"
                    panelWidth="w-[460px]"
                    childColumns={2}
                    categoriesAreLinks
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => window.location.href = '/products'}
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
                  onClick={() => window.location.href = '/services'}
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
                  onClick={() => window.location.href = '/industries'}
                >
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    items={industriesItems}
                    categoryWidth="w-[380px]"
                    panelWidth="w-[520px]"
                    twoColumnCategories
                    childColumns={3}
                    showChildDescriptions={false}
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

            <a href={navCta.href} className="btn-nav-cta hidden md:inline-flex">
              {/* Two copies of the label: the second is the face that rolls in,
                  and is hidden from assistive tech so it is not read twice. */}
              <span className="btn-roll">
                <span className="btn-roll__out">{navCta.label}</span>
                <span className="btn-roll__in" aria-hidden="true">{navCta.label}</span>
              </span>
              <MSym name="arrow_forward" size={17} weight={500} className="cta-arrow" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={cn(
                "tap-target lg:hidden p-2 rounded-lg transition-all duration-200 focus-enterprise",
                isDarkHero
                  ? "text-white/90 hover:text-white [filter:drop-shadow(0_1px_6px_rgba(3,12,28,0.55))]"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <nav className="section-container py-4 flex flex-col gap-1">
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
                <a href={navCta.href}>{navCta.label}</a>
              </Button>
            </nav>
          </div>
        )}
      </header >
    </>
  );
}
