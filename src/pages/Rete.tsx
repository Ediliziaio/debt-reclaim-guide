import { Helmet } from "react-helmet-async";
import ReteHeader from "@/components/ReteHeader";
import ReteHeroSection from "@/components/ReteHeroSection";
import ReteProblemSection from "@/components/ReteProblemSection";
import ReteSolutionSection from "@/components/ReteSolutionSection";
import ReteFoundersSection from "@/components/ReteFoundersSection";
import ReteMarketStatsSection from "@/components/ReteMarketStatsSection";
import ReteBenefitsSection from "@/components/ReteBenefitsSection";
import ReteGrowthPathSection from "@/components/ReteGrowthPathSection";
import ReteComparisonSection from "@/components/ReteComparisonSection";
import ReteUrgencySection from "@/components/ReteUrgencySection";
import ReteProcessSection from "@/components/ReteProcessSection";
import ReteFAQSection from "@/components/ReteFAQSection";
import ReteMapSection from "@/components/ReteMapSection";
import ReteContactFormSection from "@/components/ReteContactFormSection";
import ReteFinalCTASection from "@/components/ReteFinalCTASection";
import Footer from "@/components/Footer";

const Rete = () => {
  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Rete Professionisti | RF Ristrutturazioni Debiti - Per Avvocati, Commercialisti e Consulenti del Lavoro</title>
        <meta name="description" content="Entra nella prima rete nazionale specializzata in esdebitazione e crisi d'impresa. Formazione, lead qualificati e supporto costante per avvocati, commercialisti e consulenti del lavoro." />
      </Helmet>
      
      <ReteHeader onOpenContact={scrollToContact} />
      <main>
        <ReteHeroSection onOpenContact={scrollToContact} />
        <ReteProblemSection />
        <ReteSolutionSection />
        <ReteFoundersSection />
        <ReteMarketStatsSection />
        <ReteBenefitsSection />
        <ReteGrowthPathSection />
        <ReteComparisonSection onOpenContact={scrollToContact} />
        <ReteUrgencySection />
        <ReteProcessSection />
        <ReteFAQSection />
        <ReteMapSection />
        <ReteContactFormSection />
        <ReteFinalCTASection onOpenContact={scrollToContact} />
      </main>
      <Footer />
    </>
  );
};

export default Rete;
