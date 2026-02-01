import { useState } from "react";
import { Helmet } from "react-helmet-async";
import RFHeader from "@/components/RFHeader";
import RFHeroSection from "@/components/RFHeroSection";
import RFEmpathySection from "@/components/RFEmpathySection";
import RFFalsePromisesSection from "@/components/RFFalsePromisesSection";
import RFGoodNewsSection from "@/components/RFGoodNewsSection";
import RFWhoWeAreSection from "@/components/RFWhoWeAreSection";
import RFTeamSection from "@/components/RFTeamSection";
import RFStatisticsSection from "@/components/RFStatisticsSection";
import RFCaseStudiesSection from "@/components/RFCaseStudiesSection";
import RFMethodSection from "@/components/RFMethodSection";
import RFTargetAudienceSection from "@/components/RFTargetAudienceSection";
import RFGuaranteesSection from "@/components/RFGuaranteesSection";
import RFFAQSection from "@/components/RFFAQSection";
import RFUrgencySection from "@/components/RFUrgencySection";
import RFFinalCTA from "@/components/RFFinalCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <Helmet>
        <title>RF Ristrutturazione Debiti | Esdebitazione e Crisi D'Impresa</title>
        <meta name="description" content="La prima rete nazionale di Avvocati e Commercialisti specializzati in esdebitazione e crisi d'impresa. Riduci il tuo debito fino all'80%. Consulenza gratuita." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <RFHeader onOpenContact={openContact} />
        
        <main>
          <RFHeroSection onOpenContact={openContact} />
          <RFEmpathySection />
          <RFFalsePromisesSection />
          <RFGoodNewsSection />
          <RFWhoWeAreSection />
          <RFTeamSection />
          <RFStatisticsSection />
          <RFCaseStudiesSection />
          <RFMethodSection />
          <RFTargetAudienceSection />
          <RFGuaranteesSection />
          <RFFAQSection />
          <RFUrgencySection />
          <RFFinalCTA onOpenContact={openContact} />
        </main>
        
        <Footer />
        <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        <StickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Index;
