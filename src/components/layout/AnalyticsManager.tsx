import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { COOKIE_CONSENT_CHANGED, getCookieConsent, type CookieConsent } from "@/lib/cookie-consent";
import { syncAnalyticsConsent, trackPageView } from "@/lib/analytics";

export function AnalyticsManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const applyChoice = (choice: CookieConsent | null) => {
      syncAnalyticsConsent(choice);
      if (choice === "all") trackPageView(pathname);
    };
    const onConsentChanged = (event: Event) => {
      applyChoice((event as CustomEvent<CookieConsent>).detail);
    };

    applyChoice(getCookieConsent());
    window.addEventListener(COOKIE_CONSENT_CHANGED, onConsentChanged);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED, onConsentChanged);
  }, [pathname]);

  return null;
}
