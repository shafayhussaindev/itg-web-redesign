import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { COOKIE_CONSENT_CHANGED, getCookieConsent,} from "@/lib/cookie-consent";
import { syncAnalyticsConsent, trackPageView } from "@/lib/measurement";

export function MeasurementManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const applyChoice = (choice) => {
      syncAnalyticsConsent(choice);
      if (choice === "all") trackPageView(pathname);
    };
    const onConsentChanged = (event) => {
      applyChoice(event.detail);
    };

    applyChoice(getCookieConsent());
    window.addEventListener(COOKIE_CONSENT_CHANGED, onConsentChanged);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED, onConsentChanged);
  }, [pathname]);

  return null;
}
