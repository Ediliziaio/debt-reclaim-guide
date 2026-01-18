import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { ChevronDown, ChevronUp } from "lucide-react";

const ReteFAQSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Sono solo un piccolo studio... posso comunque aderire?", a: "Assolutamente sì. Il 65% degli studi nella rete sono professionisti individuali o studi di 2-3 persone. Non serve un mega-studio. Serve voglia di imparare e lavorare seriamente." },
    { q: "Non ho esperienza in esdebitazione... posso comunque partire?", a: "Sì, è esattamente il motivo per cui esiste la rete. Ti formiamo da zero. Ti affianchiamo su ogni pratica. Ti diamo tutti gli strumenti. Il 70% degli studi nella rete non aveva mai gestito una pratica di esdebitazione prima di aderire." },
    { q: "Quanto tempo devo dedicare alla rete?", a: "Dipende da quante pratiche vuoi gestire. Minimo: 2-3 pratiche = 10-15 ore/settimana + 2-3 ore formazione. Puoi gestire l'esdebitazione come attività esclusiva oppure come integrazione." },
    { q: "Posso aderire anche se faccio già altro?", a: "Certo. Molti colleghi nella rete gestiscono anche contabilità ordinaria, diritto di famiglia, successioni. L'esdebitazione diventa una specializzazione aggiuntiva che aumenta il fatturato." },
    { q: "I lead che arrivano sono davvero qualificati?", a: "Sì, li filtriamo prima. Ti mandiamo solo persone con debiti documentati, motivate a risolvere, con requisiti per le procedure, nella tua zona. Tasso di conversione medio: 65%." },
    { q: "Cosa succede se la mia zona è già coperta?", a: "Valutiamo caso per caso. Se la domanda è alta e le competenze sono complementari, possiamo comunque accettarti. Ma i posti sono limitati per garantire qualità." },
    { q: "Posso uscire dalla rete se non sono soddisfatto?", a: "Sì, con preavviso trimestrale. Non ti teniamo in ostaggio. Tasso di rinnovo: 96%, tasso di uscita volontaria: 2%." },
    { q: "Il contributo annuale è deducibile?", a: "Sì, al 100%. È un costo professionale documentato e fatturato regolarmente. Piena deducibilità fiscale." },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            Domande Frequenti <span className="text-primary">(FAQ)</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`bg-card border border-border rounded-xl overflow-hidden ${isInView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 50}ms` }}>
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                </button>
                {openIndex === index && <div className="px-5 pb-5 text-muted-foreground border-t border-border pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteFAQSection;
