import { useEffect, useState } from "react";
import { cookieBar } from "@/content/site.js";
import { Cookie } from "@/components/icons/material";
import {
  getCookieConsent,
  setCookieConsent,
  OPEN_COOKIE_SETTINGS,
  type CookieConsent,
} from "@/lib/cookie-consent";

// The strip along the bottom on a visitor's first visit. Mounted once in
// App.tsx. Light surface, navy actions, teal only on the icon chip — per the
// brand system in index.css. While it is open, html carries
// data-cookie-bar so the back-to-top button steps out of its way.
export function CookieBar() {
  const [open, setOpen] = useState(() => getCookieConsent() === null);

  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.dataset.cookieBar = "open";
    else delete root.dataset.cookieBar;
  }, [open]);

  if (!open) return null;

  const choose = (choice: CookieConsent) => {
    setCookieConsent(choice);
    setOpen(false);
  };

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 bg-background border-t border-border
                 shadow-[0_-12px_32px_-16px_rgba(13,33,64,0.28)]
                 motion-safe:animate-in motion-safe:slide-in-from-bottom-4 motion-safe:fade-in motion-safe:duration-300"
    >
      <div className="section-container py-4 lg:py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex items-start gap-3.5">
          <span
            aria-hidden="true"
            className="hidden sm:grid shrink-0 place-items-center w-10 h-10 rounded-[10px] bg-[color:var(--ice)] dark:bg-muted text-[color:var(--teal)]"
          >
            <Cookie className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[15px] font-semibold text-foreground">{cookieBar.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground max-w-[680px]">
              {cookieBar.body}{" "}
              <a
                href={cookieBar.policyLink.href}
                className="font-medium text-[color:var(--brand-accent)] underline underline-offset-2 hover:text-foreground transition-colors"
              >
                {cookieBar.policyLink.label}
              </a>
            </p>
          </div>
        </div>

        <div className="flex gap-3 shrink-0 md:ml-auto">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="btn-outline-brand flex-1 md:flex-none min-h-[44px] px-4 sm:px-5 whitespace-nowrap hover:bg-[color:var(--ice)]
                       dark:text-foreground dark:border-foreground/40 dark:hover:bg-muted"
          >
            {cookieBar.necessaryOnly}
          </button>
          <button type="button" onClick={() => choose("all")} className="btn-nav-cta flex-1 md:flex-none px-4 sm:px-6">
            {cookieBar.acceptAll}
          </button>
        </div>
      </div>
    </section>
  );
}
