import { useState, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import TDHeader from "@/components/TDHeader";
import TDHero from "@/components/TDHero";
import TDTrustStrip from "@/components/TDTrustStrip";
import TDDebtTypes from "@/components/TDDebtTypes";
import TDNumbers from "@/components/TDNumbers";
import TDProblemSolution from "@/components/TDProblemSolution";
import TDProcessFlow from "@/components/TDProcessFlow";
import TDServicesCards from "@/components/TDServicesCards";
import TDCases from "@/components/TDCases";
// Lazy-loaded: recharts (~500 kB) stays out of the homepage's initial bundle.
const TDStatsChart = lazy(() => import("@/components/TDStatsChart"));
import TDTestimonials from "@/components/TDTestimonials";
import TDWhyUs from "@/components/TDWhyUs";
import TDFAQ from "@/components/TDFAQ";
import TDCoverage from "@/components/TDCoverage";
import TDFinalCTA from "@/components/TDFinalCTA";
import TDFooter from "@/components/TDFooter";
import TDContactModal from "@/components/TDContactModal";
import TDStickyCTA from "@/components/TDStickyCTA";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <SEO
        title="Tutela Debito | Esdebitazione, Crisi d'Impresa, Contenzioso Tributario"
        description="Studio legale e fiscale per esdebitazione, sovraindebitamento, crisi d'impresa e contenzioso tributario. Prima diagnosi riservata. Sedi a Napoli, Milano e Torino."
        keywords="esdebitazione, sovraindebitamento, crisi d'impresa, cartella esattoriale, pignoramento, studio legale debiti, avvocato debiti, composizione negoziata, piano del consumatore, rottamazione"
        robots="index, follow, max-image-preview:large, max-snippet:-1"
        canonical="https://tuteladebito.it/"
        ogTitle="Tutela Debito | Esdebitazione e Crisi d'Impresa"
        ogDescription="Studio legale specializzato in esdebitazione, sovraindebitamento e crisi d'impresa. Sedi a Napoli, Milano e Torino."
      />

      <div className="min-h-screen bg-background flex flex-col">
        <TDHeader onOpenContact={openContact} />

        <main className="flex-1">
          <TDHero onOpenContact={openContact} />
          <TDTrustStrip />
          <TDDebtTypes />
          <TDNumbers />
          <TDProblemSolution />
          <TDServicesCards />
          <TDProcessFlow />
          <TDCases />
          <Suspense fallback={<div className="min-h-[400px]" aria-hidden="true" />}>
            <TDStatsChart />
          </Suspense>
          <TDTestimonials />
          <TDWhyUs />
          <TDFAQ />
          <TDCoverage />
          <TDFinalCTA onOpenContact={openContact} />
        </main>

        <TDFooter />
        <TDContactModal isOpen={isContactOpen} onClose={closeContact} />
        <TDStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Index;
