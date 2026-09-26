// The visitor's cookie choice, kept in localStorage. The site loads no
// analytics yet; when it does, gate the script on `getCookieConsent() === "all"`.

export type CookieConsent = "all" | "necessary";

const STORAGE_KEY = "itg-cookie-consent";

// Fired by the footer's "Cookie settings" link to reopen the dialog.
export const OPEN_COOKIE_SETTINGS = "itg:open-cookie-settings";

export function getCookieConsent(): CookieConsent | null {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    return saved?.choice === "all" || saved?.choice === "necessary" ? saved.choice : null;
  } catch {
    // Storage blocked (private mode, site data disabled): ask again next visit.
    return null;
  }
}

export function setCookieConsent(choice: CookieConsent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, date: new Date().toISOString() }));
  } catch {
    // Nothing to do — the bar still closes for this visit.
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS));
}
