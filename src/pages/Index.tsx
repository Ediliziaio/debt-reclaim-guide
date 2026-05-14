import { useState } from "react";
import { Helmet } from "react-helmet-async";
import TDHeader from "@/components/TDHeader";
import TDHero from "@/components/TDHero";
import TDTrustStrip from "@/components/TDTrustStrip";
import TDDebtTypes from "@/components/TDDebtTypes";
import TDNumbers from "@/components/TDNumbers";
import TDProblemSolution from "@/components/TDProblemSolution";
import TDProcessFlow from "@/components/TDProcessFlow";
import TDServicesCards from "@/components/TDServicesCards";
import TDCases from "@/components/TDCases";
import TDStatsChart from "@/components/TDStatsChart";
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
      <Helmet>
        <title>Tutela Debito | Esdebitazione, Crisi d'Impresa, Contenzioso Tributario</title>
        <meta
          name="description"
          content="Studio legale e fiscale per esdebitazione, sovraindebitamento, crisi d'impresa e contenzioso tributario. Prima diagnosi gratuita e riservata."
        />
        <link rel="canonical" href="https://tuteladebito.it/" />
      </Helmet>

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
          <TDStatsChart />
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
