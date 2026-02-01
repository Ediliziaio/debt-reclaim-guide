import { Helmet } from "react-helmet-async";
import ReteHeader from "@/components/ReteHeader";
import ReteHeroSection from "@/components/ReteHeroSection";
import ReteProblemSection from "@/components/ReteProblemSection";
import ReteSolutionSection from "@/components/ReteSolutionSection";
import ReteFoundersSection from "@/components/ReteFoundersSection";
import ReteMarketStatsSection from "@/components/ReteMarketStatsSection";
import ReteBenefitsSection from "@/components/ReteBenefitsSection";
import ReteEarningsSection from "@/components/ReteEarningsSection";
import ReteROISection from "@/components/ReteROISection";
import ReteTestimonialsSection from "@/components/ReteTestimonialsSection";
import ReteComparisonSection from "@/components/ReteComparisonSection";
import ReteUrgencySection from "@/components/ReteUrgencySection";
import ReteProcessSection from "@/components/ReteProcessSection";
import ReteFAQSection from "@/components/ReteFAQSection";
import ReteAvailabilitySection from "@/components/ReteAvailabilitySection";
import ReteMapSection from "@/components/ReteMapSection";
import ReteContactFormSection from "@/components/ReteContactFormSection";
import Footer from "@/components/Footer";

const Rete = () => {
  const scrollToContact = () => {
    document.getElementById('contatto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Rete Professionisti | RF Ristrutturazione Debiti - Per Avvocati e Commercialisti</title>
        <meta name="description" content="Entra nella prima rete nazionale specializzata in esdebitazione e crisi d'impresa. Formazione, lead qualificati e supporto costante per avvocati e commercialisti." />
      </Helmet>
      
      <ReteHeader onOpenContact={scrollToContact} />
      <main>
        <ReteHeroSection onOpenContact={scrollToContact} />
        <ReteProblemSection />
        <ReteSolutionSection />
        <ReteFoundersSection />
        <ReteMarketStatsSection />
        <ReteBenefitsSection />
        <ReteEarningsSection />
        <ReteROISection />
        <ReteTestimonialsSection />
        <ReteComparisonSection onOpenContact={scrollToContact} />
        <ReteUrgencySection />
        <ReteProcessSection />
        <ReteFAQSection />
        <ReteMapSection />
        <ReteAvailabilitySection />
        <ReteContactFormSection />
      </main>
      <Footer />
    </>
  );
};

export default Rete;
