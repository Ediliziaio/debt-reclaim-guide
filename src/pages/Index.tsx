import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import StatisticsSection from "@/components/StatisticsSection";
import PositioningSection from "@/components/PositioningSection";
import IntermediateCTA from "@/components/IntermediateCTA";
import MethodSection from "@/components/MethodSection";
import CrisiImpresaSection from "@/components/CrisiImpresaSection";
import AuthoritySection from "@/components/AuthoritySection";
import TeamSection from "@/components/TeamSection";
import ComparisonSection from "@/components/ComparisonSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
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
        <title>Studio Tutela Debito | Avvocati Specializzati in Gestione Debiti</title>
        <meta 
          name="description" 
          content="Studio legale specializzato nella tutela del debitore. Consulenza legale per sovraindebitamento, ristrutturazione debiti e protezione patrimoniale. Primo colloquio gratuito." 
        />
        <meta name="keywords" content="avvocato debiti, tutela debitore, sovraindebitamento, ristrutturazione debiti, consulenza legale debiti" />
        <link rel="canonical" href="https://www.studiotutedebito.it" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header onOpenContact={openContact} />
        
        <main>
          <HeroSection onOpenContact={openContact} />
          <CaseStudiesSection onOpenContact={openContact} />
          <ProblemSection />
          <IntermediateCTA 
            onOpenContact={openContact} 
            text="Non restare fermo. Ogni giorno conta."
          />
          <StatisticsSection />
          <PositioningSection />
          <IntermediateCTA 
            onOpenContact={openContact} 
            text="Inizia oggi il tuo percorso verso la serenità."
          />
          <MethodSection />
          <CrisiImpresaSection />
          <AuthoritySection />
          <TeamSection />
          <ComparisonSection />
          <IntermediateCTA 
            onOpenContact={openContact} 
            text="Scopri come possiamo aiutarti."
          />
          <TestimonialsSection />
          <FAQSection />
          <FinalCTASection onOpenContact={openContact} />
        </main>
        
        <Footer />
        
        <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        <StickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Index;