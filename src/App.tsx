import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Metodo from "./pages/Metodo";
import Servizi from "./pages/Servizi";
import CasiRisolti from "./pages/CasiRisolti";
import Risorse from "./pages/Risorse";
import Articolo from "./pages/Articolo";
import Contatti from "./pages/Contatti";
import Quiz from "./pages/Quiz";
import PostConsulenza from "./pages/PostConsulenza";
import PreDiagnosi from "./pages/PreDiagnosi";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import NoteLegali from "./pages/NoteLegali";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
