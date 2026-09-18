import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
const Solutions = lazy(() => import("./pages/Solutions"));
const Products = lazy(() => import("./pages/Products"));
const ProductCategory = lazy(() => import("./pages/ProductCategory"));
import { productPages } from "@/content/product-detail.js";
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const Company = lazy(() => import("./pages/Company"));
const AIIntelligence = lazy(() => import("./pages/AIIntelligence"));
const SolutionDetail = lazy(() => import("./pages/SolutionDetail"));
import { solutionPages } from "./pages/solutionPages";
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/products" element={<Products />} />
              {productPages.map(page => (
                <Route key={page.id} path={page.href} element={<ProductCategory key={page.id} page={page} />} />
              ))}
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/company" element={<Company />} />
              <Route path="/ai-intelligence" element={<AIIntelligence />} />
              {solutionPages.filter(page => page.id !== 'ai-intelligence').map(page => (
                <Route key={page.id} path={`/${page.id}`} element={<SolutionDetail key={page.id} page={page} />} />
              ))}
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
