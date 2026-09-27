import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { RedirectTo } from "@/components/common/RedirectTo";
import { oldAddresses } from "@/lib/old-addresses";
import { solutionPages } from "@/data/solutionsData";
import { platformPages } from "@/data/platformsData";
import { servicePages } from "@/data/servicesData";
import { industryPages } from "@/data/industriesData";
import { tier3Pages } from "@/data/shared/tier3Pages";
import HomePage from "@/pages/home/HomePage";

const SolutionsIndex = lazy(() => import("@/pages/Solutions/SolutionsIndex"));
const PlatformsIndex = lazy(() => import("@/pages/Platforms/PlatformsIndex"));
const ServicesIndex = lazy(() => import("@/pages/Services/ServicesIndex"));
const IndustriesIndex = lazy(() => import("@/pages/Industries/IndustriesIndex"));
const CompanyPage = lazy(() => import("@/pages/Company/CompanyPage"));
const SolutionDetail = lazy(() => import("@/pages/Solutions/SolutionDetail"));
const PlatformDetail = lazy(() => import("@/pages/Platforms/PlatformDetail"));
const ServiceDetail = lazy(() => import("@/pages/Services/ServiceDetail"));
const IndustryDetail = lazy(() => import("@/pages/Industries/IndustryDetail"));
const SolutionSubDetail = lazy(() => import("@/pages/Solutions/SolutionSubDetail"));
const PlatformSubDetail = lazy(() => import("@/pages/Platforms/PlatformSubDetail"));
const ServiceSubDetail = lazy(() => import("@/pages/Services/ServiceSubDetail"));
const IndustrySubDetail = lazy(() => import("@/pages/Industries/IndustrySubDetail"));
const ContactPage = lazy(() => import("@/pages/contact/ContactPage"));
const TermsAndConditions = lazy(() => import("@/pages/legal/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("@/pages/legal/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsIndex />} />
        <Route path="/platforms" element={<PlatformsIndex />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/industries" element={<IndustriesIndex />} />
        <Route path="/company" element={<CompanyPage />} />
        {solutionPages.map(page => <Route key={page.id} path={`/${page.id}`} element={<SolutionDetail page={page} />} />)}
        {platformPages.map(page => <Route key={page.id} path={page.href} element={<PlatformDetail page={page} />} />)}
        {servicePages.map(page => <Route key={page.id} path={page.href} element={<ServiceDetail page={page} />} />)}
        {industryPages.map(page => <Route key={page.id} path={page.href} element={<IndustryDetail page={page} />} />)}
        {tier3Pages.map(page => {
          const Page = {
            solutions: SolutionSubDetail,
            platforms: PlatformSubDetail,
            services: ServiceSubDetail,
            industries: IndustrySubDetail,
          }[page.family];
          return <Route key={page.path} path={page.path} element={<Page page={page} />} />;
        })}
        {Object.entries(oldAddresses).map(([from, to]) => <Route key={from} path={from} element={<RedirectTo to={to} />} />)}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
