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
import TDFAQ, { faqs } from "@/components/TDFAQ";
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
        title="Esdebitazione, cartelle e crisi d'impresa | Tutela Debito"
        description="Studio legale per esdebitazione, sovraindebitamento, cartelle e crisi d'impresa. Prima diagnosi riservata. Sedi a Napoli, Milano e Torino."
        keywords="esdebitazione, sovraindebitamento, crisi d'impresa, cartella esattoriale, pignoramento, studio legale debiti, avvocato debiti, composizione negoziata, piano del consumatore, rottamazione"
        robots="index, follow, max-image-preview:large, max-snippet:-1"
        canonical="https://www.tuteladebito.it/"
        ogTitle="Tutela Debito | Esdebitazione e Crisi d'Impresa"
        ogDescription="Studio legale specializzato in esdebitazione, sovraindebitamento e crisi d'impresa. Sedi a Napoli, Milano e Torino."
        jsonLd={[
          // Le stesse domande visibili in pagina, così come le legge l'utente:
          // è la sezione che i motori di risposta citano per le query "cos'è
          // l'esdebitazione", "quanto dura una procedura", "posso accedere se…".
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://www.tuteladebito.it/#faq",
            "inLanguage": "it-IT",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.tuteladebito.it/",
            "url": "https://www.tuteladebito.it/",
            "name": "Tutela Debito | Esdebitazione, Crisi d'Impresa, Contenzioso Tributario",
            "inLanguage": "it-IT",
            "isPartOf": { "@id": "https://www.tuteladebito.it/#website" },
            "about": { "@id": "https://www.tuteladebito.it/#organization" },
            "publisher": { "@id": "https://www.tuteladebito.it/#organization" },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1"],
            },
          },
        ]}
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
