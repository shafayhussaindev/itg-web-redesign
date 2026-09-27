import type { CookieConsent } from "./cookie-consent";

type ConsentValue = "granted" | "denied";
type GoogleTagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

let initialized = false;
let allowed = false;
let lastPagePath: string | null = null;

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export function isAnalyticsConfigured() {
  return Boolean(measurementId && /^G-[A-Z0-9]+$/i.test(measurementId));
}

function consentSettings(analytics: ConsentValue) {
  return {
    analytics_storage: analytics,
    ad_storage: "denied" as const,
    ad_user_data: "denied" as const,
    ad_personalization: "denied" as const,
  };
}

function googleTag(...args: unknown[]) {
  const analyticsWindow = window as GoogleTagWindow;
  analyticsWindow.dataLayer ??= [];
  analyticsWindow.dataLayer.push(args);
}

function clearAnalyticsCookies() {
  const names = document.cookie.split(";").map(cookie => cookie.trim().split("=")[0]);
  const hostParts = window.location.hostname.split(".");
  const domains = ["", ...hostParts.slice(0, -1).map((_, index) => hostParts.slice(index).join("."))];
  for (const name of names) {
    if (!/^_ga(?:_|$)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}

export function syncAnalyticsConsent(choice: CookieConsent | null) {
  if (!isAnalyticsConfigured()) return;
  const analyticsWindow = window as GoogleTagWindow;
  const disableKey = `ga-disable-${measurementId}`;

  if (choice !== "all") {
    allowed = false;
    lastPagePath = null;
    (analyticsWindow as unknown as Record<string, unknown>)[disableKey] = true;
    if (initialized) googleTag("consent", "update", consentSettings("denied"));
    clearAnalyticsCookies();
    return;
  }

  if (allowed) return;
  (analyticsWindow as unknown as Record<string, unknown>)[disableKey] = false;
  if (!initialized) {
    analyticsWindow.dataLayer ??= [];
    analyticsWindow.gtag = googleTag;
    googleTag("consent", "default", consentSettings("denied"));
    googleTag("consent", "update", consentSettings("granted"));
    googleTag("js", new Date());
    googleTag("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId!)}`;
    script.dataset.itgAnalytics = "true";
    document.head.appendChild(script);
    initialized = true;
  } else {
    googleTag("consent", "update", consentSettings("granted"));
  }
  allowed = true;
}

export function trackPageView(pathname: string) {
  if (!allowed || !isAnalyticsConfigured() || pathname === lastPagePath) return;
  lastPagePath = pathname;
  googleTag("event", "page_view", {
    send_to: measurementId,
    page_location: `${window.location.origin}${pathname}`,
    page_title: document.title,
  });
}
