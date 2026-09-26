import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cookieBar } from "@/content/site.js";
import { Cookie, X } from "@/components/icons/material";
import {
  getCookieConsent,
  setCookieConsent,
  OPEN_COOKIE_SETTINGS,
  type CookieConsent,
} from "@/lib/cookie-consent";
import "./cookie-settings.css";

// Mounted once in App.tsx. First-time visitors see the dialog, and the footer
// can reopen it so they can update their saved preference at any time.
export function CookieBar() {
  const [open, setOpen] = useState(() => getCookieConsent() === null);
  const [allowAnalytics, setAllowAnalytics] = useState(() => getCookieConsent() === "all");

  useEffect(() => {
    const reopen = () => {
      setAllowAnalytics(getCookieConsent() === "all");
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  const choose = (choice: CookieConsent) => {
    setCookieConsent(choice);
    setAllowAnalytics(choice === "all");
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="cookie-settings-overlay" />
        <Dialog.Content className="cookie-settings-dialog">
          <div className="cookie-settings-head">
            <span className="cookie-settings-icon" aria-hidden="true"><Cookie size={24} /></span>
            <Dialog.Close className="cookie-settings-close" aria-label={cookieBar.close}>
              <X size={20} />
            </Dialog.Close>
          </div>

          <Dialog.Title className="cookie-settings-title">{cookieBar.title}</Dialog.Title>
          <Dialog.Description className="cookie-settings-description">
            {cookieBar.body}{" "}
            <a href={cookieBar.policyLink.href}>{cookieBar.policyLink.label}</a>
          </Dialog.Description>

          <div className="cookie-settings-options">
            <div className="cookie-settings-option">
              <div>
                <h3>{cookieBar.essentialTitle}</h3>
                <p>{cookieBar.essentialDescription}</p>
              </div>
              <span className="cookie-settings-required">{cookieBar.alwaysActive}</span>
            </div>

            <label className="cookie-settings-option cookie-settings-analytics">
              <span>
                <strong>{cookieBar.analyticsTitle}</strong>
                <span className="cookie-settings-option-description">{cookieBar.analyticsDescription}</span>
              </span>
              <input
                type="checkbox"
                checked={allowAnalytics}
                onChange={event => setAllowAnalytics(event.target.checked)}
                aria-label={cookieBar.analyticsTitle}
              />
              <span className="cookie-settings-switch" aria-hidden="true" />
            </label>
          </div>

          <div className="cookie-settings-actions">
            <button type="button" className="cookie-settings-outline" onClick={() => choose("necessary")}>{cookieBar.necessaryOnly}</button>
            <button type="button" className="cookie-settings-outline" onClick={() => choose(allowAnalytics ? "all" : "necessary")}>{cookieBar.savePreferences}</button>
            <button type="button" className="cookie-settings-primary" onClick={() => choose("all")}>{cookieBar.acceptAll}</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
