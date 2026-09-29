// The visitor's cookie choice, kept in localStorage. Version 2 asks visitors
// again before enabling the newly added Google Analytics integration.


const STORAGE_KEY = "itg-cookie-consent";
const CONSENT_VERSION = 2;

// Fired by the footer's "Cookie settings" link to reopen the dialog.
export const OPEN_COOKIE_SETTINGS = "itg:open-cookie-settings";
export const COOKIE_CONSENT_CHANGED = "itg:cookie-consent-changed";

export function getCookieConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    return saved?.version === CONSENT_VERSION &&
      (saved.choice === "all" || saved.choice === "necessary") ? saved.choice : null;
  } catch {
    // Storage blocked (private mode, site data disabled): ask again next visit.
    return null;
  }
}

export function setCookieConsent(choice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: CONSENT_VERSION, choice, date: new Date().toISOString() }));
  } catch {
    // Nothing to do — the bar still closes for this visit.
  }
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED, { detail: choice }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS));
}
