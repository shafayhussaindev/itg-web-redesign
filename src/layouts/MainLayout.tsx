import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CookieBanner } from "@/components/common/CookieBanner";
import { AnalyticsManager } from "@/components/common/AnalyticsManager";
import { BackToTop } from "@/components/navigation/BackToTop";

export default function MainLayout() {
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
