import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "@/components/modals/CookieBanner";
import { AnalyticsManager } from "./AnalyticsManager";
import { BackToTop } from "@/components/common/BackToTop";

export default function Layout() {
  const { pathname } = useLocation();
  const topLevelPaths = ["/", "/solutions", "/platforms", "/services", "/industries", "/company", "/terms", "/privacy"];
  const contactHref = pathname === "/contact"
    ? "#contact-form"
    : topLevelPaths.includes(pathname) ? "/contact" : "#contact";

  return (
    <>
      <Navbar contactHref={contactHref} />
      <Outlet />
      <Footer />
      <BackToTop />
      <CookieBanner />
      <AnalyticsManager />
    </>
  );
}
