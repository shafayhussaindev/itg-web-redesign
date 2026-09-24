import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { RedirectTo } from "@/components/RedirectTo";
import { oldAddresses } from "@/lib/old-addresses";

// Page lists for the tier-2 routes (one route per page in each list).
import { solutionPages } from "@/pages/tier2/solutions/solutionPages";
import { platformPages } from "@/content/tier2/platform-detail.js";
import { servicePages } from "@/content/tier2/service-detail.js";
import { industryPages } from "@/content/tier2/industry-detail.js";

// Home — loaded up front, it's the landing page.
import HomePage from "@/pages/home/HomePage";

// Tier 1 — the five top-level pages.
const SolutionsPage = lazy(() => import("@/pages/tier1/solutions/SolutionsPage.jsx"));
const PlatformsPage = lazy(() => import("@/pages/tier1/platforms/PlatformsPage.jsx"));
const ServicesPage = lazy(() => import("@/pages/tier1/services/ServicesPage.jsx"));
const IndustriesPage = lazy(() => import("@/pages/tier1/industries/IndustriesPage.jsx"));
const CompanyPage = lazy(() => import("@/pages/tier1/company/CompanyPage.jsx"));

// Tier 2 — one shared template per family, filled from its page list.
const AIIntelligence = lazy(() => import("@/pages/tier2/solutions/AIIntelligence"));
const SolutionDetail = lazy(() => import("@/pages/tier2/solutions/SolutionDetail"));
const PlatformDetail = lazy(() => import("@/pages/tier2/platforms/PlatformDetail"));
const ServiceCategory = lazy(() => import("@/pages/tier2/services/ServiceCategory"));
const IndustryDetail = lazy(() => import("@/pages/tier2/industries/IndustryDetail"));

// Everything else.
const Contact = lazy(() => import("@/pages/contact/Contact"));
const Terms = lazy(() => import("@/pages/legal/Terms"));
const Privacy = lazy(() => import("@/pages/legal/Privacy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div role="status" className="min-h-screen grid place-items-center">Loading…</div>}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Tier 1 */}
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/platforms" element={<PlatformsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/company" element={<CompanyPage />} />

              {/* Tier 2 — Solutions (AI has its own wrapper, the rest share SolutionDetail) */}
              <Route path="/artificial-intelligence" element={<AIIntelligence />} />
              {solutionPages.filter(page => page.id !== 'artificial-intelligence').map(page => (
                <Route key={page.id} path={`/${page.id}`} element={<SolutionDetail key={page.id} page={page} />} />
              ))}

              {/* Tier 2 — Platforms */}
              {platformPages.map(page => (
                <Route key={page.id} path={page.href} element={<PlatformDetail key={page.id} page={page} />} />
              ))}

              {/* Tier 2 — Services */}
              {servicePages.map(page => (
                <Route key={page.id} path={page.href} element={<ServiceCategory key={page.id} page={page} />} />
              ))}

              {/* Tier 2 — Industries */}
              {industryPages.map(page => (
                <Route key={page.id} path={page.href} element={<IndustryDetail key={page.id} page={page} />} />
              ))}

              {/* Old addresses → their new ones (see lib/old-addresses.ts) */}
              {Object.entries(oldAddresses).map(([from, to]) => (
                <Route key={from} path={from} element={<RedirectTo to={to} />} />
              ))}

              {/* Contact + legal */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
