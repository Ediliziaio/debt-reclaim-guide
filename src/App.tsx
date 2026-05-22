import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy, useEffect } from "react";

// Eager-load the homepage for fastest LCP on first paint
import Index from "./pages/Index";

// Lazy-load everything else to keep the initial bundle small
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const Metodo = lazy(() => import("./pages/Metodo"));
const Servizi = lazy(() => import("./pages/Servizi"));
const CasiRisolti = lazy(() => import("./pages/CasiRisolti"));
const Risorse = lazy(() => import("./pages/Risorse"));
const Articolo = lazy(() => import("./pages/Articolo"));
const Contatti = lazy(() => import("./pages/Contatti"));
const Quiz = lazy(() => import("./pages/Quiz"));
const PostConsulenza = lazy(() => import("./pages/PostConsulenza"));
const PreDiagnosi = lazy(() => import("./pages/PreDiagnosi"));
const Privacy = lazy(() => import("./pages/Privacy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NoteLegali = lazy(() => import("./pages/NoteLegali"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const RouteFallback = () => (
  <div
    aria-busy="true"
    aria-live="polite"
    className="min-h-screen flex items-center justify-center bg-[#fafafa]"
  >
    <div className="flex flex-col items-center gap-3">
      <div className="h-10 w-10 rounded-full border-2 border-[#2a3f5f]/20 border-t-[#2a3f5f] animate-spin" />
      <p className="text-sm text-[#2a3f5f]/70">Caricamento…</p>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/metodo" element={<Metodo />} />
              <Route path="/servizi" element={<Servizi />} />
              <Route path="/casi-risolti" element={<CasiRisolti />} />
              <Route path="/risorse" element={<Risorse />} />
              <Route path="/risorse/:slug" element={<Articolo />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/post-consulenza" element={<PostConsulenza />} />
              <Route path="/pre-diagnosi" element={<PreDiagnosi />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookie" element={<CookiePolicy />} />
              <Route path="/note-legali" element={<NoteLegali />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
