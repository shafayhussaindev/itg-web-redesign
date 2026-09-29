import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { RedirectTo } from "@/components/common/RedirectTo";
import { oldAddresses } from "./oldAddresses";
import { solutionPages } from "@/data/solutions/solutionPages";
import { platformPages } from "@/data/platforms/platform-detail.js";
import { servicePages } from "@/data/services/service-detail.js";
import { industryPages } from "@/data/industries/industry-detail.js";
import { itemPages } from "@/data/itemPages";
import HomePage from "@/pages/Home/HomePage";

/* EVERY URL ON THE SITE
 *
 *   URL                                   Page file (src/pages/…)               Words (src/data/…)
 *   /                                     Home/HomePage.tsx                     site/home.js
 *   /solutions  /platforms  /services     Solutions/SolutionsPage.jsx …         solutions/landing-page.js …
 *   /industries  /company                 Industries/… Company/CompanyPage.jsx  industries/… company/…
 *   /esg-solutions (one per solution)     Solutions/SolutionDetailPage.tsx      solutions/esg-solutions.js
 *   /supply-chain (one per platform)      Platforms/PlatformDetailPage.tsx      platforms/platform-detail.js
 *   /esg-services (one per service area)  Services/ServiceDetailPage.tsx        services/service-detail.js
 *   /consumer-goods (one per industry)    Industries/IndustryDetailPage.tsx     industries/industry-detail.js
 *   /esg-solutions/carbon-circularity     ItemPage/ItemPage.tsx (ALL 90 item    the item's entry in its parent's
 *     (parent URL + item id)                pages share this one template)        file above (e.g. esg-solutions.js)
 *   /contact  /terms  /privacy            Contact/ Legal/
 *   old URLs                              forwarded, see ./oldAddresses.ts (+ vercel.json)
 *
 * The detail and item URLs are generated from the data files, so adding an
 * entry there adds its page — no edit here needed.
 */

const SolutionsPage = lazy(() => import("@/pages/Solutions/SolutionsPage"));
const PlatformsPage = lazy(() => import("@/pages/Platforms/PlatformsPage"));
const ServicesPage = lazy(() => import("@/pages/Services/ServicesPage"));
const IndustriesPage = lazy(() => import("@/pages/Industries/IndustriesPage"));
const CompanyPage = lazy(() => import("@/pages/Company/CompanyPage"));
const SolutionDetailPage = lazy(() => import("@/pages/Solutions/SolutionDetailPage"));
const PlatformDetailPage = lazy(() => import("@/pages/Platforms/PlatformDetailPage"));
const ServiceDetailPage = lazy(() => import("@/pages/Services/ServiceDetailPage"));
const IndustryDetailPage = lazy(() => import("@/pages/Industries/IndustryDetailPage"));
const ItemPage = lazy(() => import("@/pages/ItemPage/ItemPage"));
const ContactPage = lazy(() => import("@/pages/Contact/ContactPage"));
const TermsAndConditions = lazy(() => import("@/pages/Legal/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("@/pages/Legal/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/company" element={<CompanyPage />} />
        {solutionPages.map(page => <Route key={page.id} path={`/${page.id}`} element={<SolutionDetailPage page={page} />} />)}
        {platformPages.map(page => <Route key={page.id} path={page.href} element={<PlatformDetailPage page={page} />} />)}
        {servicePages.map(page => <Route key={page.id} path={page.href} element={<ServiceDetailPage page={page} />} />)}
        {industryPages.map(page => <Route key={page.id} path={page.href} element={<IndustryDetailPage page={page} />} />)}
        {itemPages.map(page => <Route key={page.path} path={page.path} element={<ItemPage page={page} />} />)}
        {Object.entries(oldAddresses).map(([from, to]) => <Route key={from} path={from} element={<RedirectTo to={to} />} />)}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
