import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Metodo from "./pages/Metodo";
import Servizi from "./pages/Servizi";
import CasiRisolti from "./pages/CasiRisolti";
import Risorse from "./pages/Risorse";
// Articolo NON è importato staticamente: il suo modulo tira dentro il testo
// integrale di tutti gli articoli (serve sincrono al prerender), e con un
// import statico quel megabyte finisce nel bundle di ogni pagina, home
// compresa. Caricato con `lazy` resta nel chunk della sola rotta articolo.
import Contatti from "./pages/Contatti";
import Quiz from "./pages/Quiz";
import PostConsulenza from "./pages/PostConsulenza";
import PreDiagnosi from "./pages/PreDiagnosi";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import NoteLegali from "./pages/NoteLegali";
import StudioLegaleCitta from "./pages/StudioLegaleCitta";
import NotFound from "./pages/NotFound";
import CategoriaRisorse from "./pages/CategoriaRisorse";
import Glossario from "./pages/Glossario";
import { articlesMeta } from "./data/articlesMeta";
import { CATEGORY_HUBS } from "./data/categories";

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

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "chi-siamo", element: <ChiSiamo /> },
      { path: "metodo", element: <Metodo /> },
      { path: "servizi", element: <Servizi /> },
      { path: "casi-risolti", element: <CasiRisolti /> },
      { path: "risorse", element: <Risorse /> },
      {
        // Hub tematici: la pagina che compete sulle query di categoria e
        // raccoglie il cluster di articoli sotto di sé.
        path: "risorse/categoria/:slug",
        element: <CategoriaRisorse />,
        getStaticPaths: () => CATEGORY_HUBS.map((c) => `/risorse/categoria/${c.slug}`),
      },
      {
        path: "risorse/:slug",
        lazy: async () => ({ Component: (await import("./pages/Articolo")).default }),
        entry: "src/pages/Articolo.tsx",
        getStaticPaths: () => articlesMeta.map((a) => `/risorse/${a.slug}`),
      },
      { path: "glossario", element: <Glossario /> },
      { path: "contatti", element: <Contatti /> },
      { path: "quiz", element: <Quiz /> },
      { path: "post-consulenza", element: <PostConsulenza /> },
      { path: "pre-diagnosi", element: <PreDiagnosi /> },
      { path: "privacy", element: <Privacy /> },
      { path: "cookie", element: <CookiePolicy /> },
      { path: "note-legali", element: <NoteLegali /> },
      // Local SEO landing pages — one prerendered page per office city.
      { path: "studio-legale-napoli", element: <StudioLegaleCitta /> },
      { path: "studio-legale-milano", element: <StudioLegaleCitta /> },
      { path: "studio-legale-torino", element: <StudioLegaleCitta /> },
      // Rotta esplicita: serve solo a far generare dist/404.html, che Vercel
      // usa come pagina di errore del sito. Senza, un URL inesistente mostra
      // la schermata di default della piattaforma — visitatore perso e
      // nessun rimando al resto del sito.
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
