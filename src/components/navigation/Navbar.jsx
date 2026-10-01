import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X, MSym } from "@/components/common/Icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { menus, extraLinks, navCta } from "@/data/navigation/navigation.js";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

// Header logos. The white one is the colour mark with its ink turned white, so
// the two share an identical outline and box — swapping them reads as a
// recolour, not a resize.
const logoOnDark = "/images/company/logo-trimmed-white.png";
const logoOnLight = "/images/company/logo-trimmed.png";

// Width of each drop-down's two columns (Tier 2 list, Tier 3 panel).
const MEGA_MENU_WIDTHS = {
  solutions:  { categoryWidth: "w-[300px]", panelWidth: "w-[460px]" },
  platforms:  { categoryWidth: "w-[280px]", panelWidth: "w-[420px]" },
  services:   { categoryWidth: "w-[300px]", panelWidth: "w-[440px]" },
  industries: { categoryWidth: "w-[320px]", panelWidth: "w-[440px]" },
};

// Shared shape + motion for every top-level nav item. The scale is what makes the
// label grow under the cursor; the colour/shadow half depends on what is behind the bar.
// No chip at rest — the hover glow is a radial gradient on a pseudo-element that
// fades in, so it reads as light spilling behind the label rather than a pill.
const NAV_ITEM_BASE =
  // focus:bg-transparent cancels the shadcn trigger's focus box, which showed
  // after a click.
  "relative bg-transparent focus:bg-transparent shadow-none rounded-none text-[15px] font-medium tracking-[0.005em] px-3.5 py-2 h-10 " +
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

export function Navbar({ contactHref = navCta.href } = {}) {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);
  const [darkHeroDepth, setDarkHeroDepth] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButton = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event) => {
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
  const [openMobile, setOpenMobile] = useState({});

  // The bar is transparent only at rest at the very top. The first scroll brings
  // the white background in — over the hero as much as anywhere else — and
  // coming back to the top takes it away again.
  const showSolidBar = isScrolled || isMobileMenuOpen;
  // White mark and white type belong to that transparent state, and only over a
  // hero dark enough to carry them. Pages mark such a hero with data-dark-hero;
  // one without it (the light Platforms hero, the policy pages) gets navy type
  // from the start. darkHeroDepth is measured below; here only its presence
  // matters, since at rest at the top the hero is necessarily behind the bar.
  const isDarkHero = !isScrolled && !isMobileMenuOpen && darkHeroDepth > 0;
  const navItemClass = cn(NAV_ITEM_BASE, isDarkHero ? NAV_ITEM_ON_DARK : NAV_ITEM_ON_LIGHT);

  // Layout effect, not a plain effect: the hero has to be measured before the
  // first paint or the nav renders dark and then fades to white over the hero.
  useLayoutEffect(() => {
    const hero = document.querySelector("[data-dark-hero]");
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
    setOpenMobile({});
  };

  const toggleMobile = (key) => {
    setOpenMobile((prev) => ({ ...prev, [key]: !prev[key] }));
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
              {menus.map((menu) => (
                <NavigationMenuItem key={menu.key}>
                  <NavigationMenuTrigger
                    className={cn(navItemClass, "cursor-pointer")}
                    onClick={() => { window.location.href = menu.href; }}
                  >
                    {menu.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenu items={menu.items} {...MEGA_MENU_WIDTHS[menu.key]} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              {extraLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink href={link.href} className={cn(navItemClass, "inline-flex items-center")}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center justify-end gap-2 lg:gap-3">

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
          <MobileMenu
            menus={menus}
            extraLinks={extraLinks}
            cta={navCta}
            contactHref={contactHref}
            open={openMobile}
            onToggle={toggleMobile}
            onClose={closeMobileMenu}
          />
        )}
      </header>
    </>
  );
}
