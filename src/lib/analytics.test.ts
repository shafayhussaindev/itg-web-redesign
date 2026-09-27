import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";

type DataLayer = unknown[][];

beforeEach(() => {
  vi.resetModules();
  vi.stubEnv("VITE_GA_MEASUREMENT_ID", "G-TEST123");
  localStorage.clear();
  document.querySelectorAll('script[data-itg-analytics="true"]').forEach(script => script.remove());
  delete (window as Window & { dataLayer?: DataLayer }).dataLayer;
  document.cookie = "_ga=test-client; Path=/";
});

afterEach(() => {
  vi.unstubAllEnvs();
  document.querySelectorAll('script[data-itg-analytics="true"]').forEach(script => script.remove());
});

describe("consent-gated analytics", () => {
  it("does not load a tag without a configured measurement ID", async () => {
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "");
    const { syncAnalyticsConsent, trackPageView } = await import("./analytics");
    syncAnalyticsConsent("all");
    trackPageView("/");
    expect(document.querySelector('script[data-itg-analytics="true"]')).toBeNull();
  });

  it("does not load before consent, then sends one page view per route", async () => {
    const { syncAnalyticsConsent, trackPageView } = await import("./analytics");
    syncAnalyticsConsent(null);
    trackPageView("/");
    expect(document.querySelector('script[data-itg-analytics="true"]')).toBeNull();

    syncAnalyticsConsent("all");
    const script = document.querySelector<HTMLScriptElement>('script[data-itg-analytics="true"]');
    expect(script?.src).toBe("https://www.googletagmanager.com/gtag/js?id=G-TEST123");
    trackPageView("/");
    trackPageView("/");
    trackPageView("/solutions");

    const dataLayer = (window as Window & { dataLayer: DataLayer }).dataLayer;
    const pageViews = dataLayer.filter(entry => entry[0] === "event" && entry[1] === "page_view");
    expect(pageViews).toHaveLength(2);
    expect(pageViews.map(entry => (entry[2] as { page_location: string }).page_location)).toEqual([
      `${window.location.origin}/`,
      `${window.location.origin}/solutions`,
    ]);
    expect(dataLayer.find(entry => entry[0] === "config")?.[2]).toMatchObject({ send_page_view: false });
    expect(dataLayer.find(entry => entry[0] === "consent" && entry[1] === "default")?.[2]).toMatchObject({
      analytics_storage: "denied", ad_storage: "denied",
    });
  });

  it("stops tracking and removes accessible GA cookies after withdrawal", async () => {
    const { syncAnalyticsConsent, trackPageView } = await import("./analytics");
    syncAnalyticsConsent("all");
    trackPageView("/");
    document.cookie = "_ga=test-client; Path=/";
    syncAnalyticsConsent("necessary");
    trackPageView("/solutions");

    const dataLayer = (window as Window & { dataLayer: DataLayer }).dataLayer;
    expect(dataLayer.filter(entry => entry[0] === "event" && entry[1] === "page_view")).toHaveLength(1);
    expect((window as unknown as Record<string, unknown>)["ga-disable-G-TEST123"]).toBe(true);
    expect(document.cookie).not.toContain("_ga=");

    syncAnalyticsConsent("all");
    trackPageView("/solutions");
    expect(dataLayer.filter(entry => entry[0] === "event" && entry[1] === "page_view")).toHaveLength(2);
    expect(document.querySelectorAll('script[data-itg-analytics="true"]')).toHaveLength(1);
  });

  it("asks again when the saved choice predates GA4", async () => {
    const { getCookieConsent, setCookieConsent, COOKIE_CONSENT_CHANGED } = await import("./cookie-consent");
    localStorage.setItem("itg-cookie-consent", JSON.stringify({ choice: "all" }));
    expect(getCookieConsent()).toBeNull();

    const choices: string[] = [];
    window.addEventListener(COOKIE_CONSENT_CHANGED, event => choices.push((event as CustomEvent<string>).detail), { once: true });
    setCookieConsent("necessary");
    expect(getCookieConsent()).toBe("necessary");
    expect(choices).toEqual(["necessary"]);
  });
});
