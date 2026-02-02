import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ReteFAQSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Sono solo un piccolo studio... posso comunque aderire?", 
      a: "Assolutamente sì. La rete è pensata proprio per studi piccoli e medi che vogliono accedere a competenze e strumenti normalmente riservati a grandi organizzazioni. Molti dei nostri membri più soddisfatti sono professionisti individuali o piccoli studi associati." 
    },
    { 
      q: "Non ho esperienza in esdebitazione... posso comunque partire?", 
      a: "Sì, è proprio per questo che esiste il percorso formativo strutturato. Molti membri sono partiti da zero e oggi sono riconosciuti come esperti. Il metodo ti accompagna passo passo dall'apprendimento delle basi fino alla gestione di casi complessi." 
    },
    { 
      q: "Quanto tempo devo dedicare alla rete?", 
      a: "Dipende dai tuoi obiettivi di crescita. L'attività minima richiesta è: Formazione: 4-6 ore/mese (webinar e aggiornamenti). Gestione pratiche: secondo il tuo carico di lavoro. Coordinamento: 2-3 ore/mese (call operative, confronti). È un'attività che si integra perfettamente con la tua attività professionale esistente." 
    },
    { 
      q: "Posso aderire anche se ho già altri impegni professionali?", 
      a: "Certamente. La maggior parte dei membri continua a gestire le proprie attività tradizionali e integra l'esdebitazione come area di specializzazione. Non devi abbandonare nulla, aggiungi competenze." 
    },
    { 
      q: "Come funziona il coordinamento tra avvocati e commercialisti?", 
      a: "È uno dei punti di forza della rete. Ogni pratica ha un team integrato avvocato-commercialista. La piattaforma gestionale coordina automaticamente le attività, ci sono protocolli chiari di collaborazione e referenti dedicati per ogni tipologia di caso." 
    },
    { 
      q: "Cosa succede se la mia zona è già coperta?", 
      a: "Se la provincia ha già raggiunto il numero massimo di studi, viene creata una lista d'attesa. In alcuni casi possiamo valutare l'ingresso in zone limitrofe o in aree metropolitane più ampie. Contattaci per verificare la situazione attuale." 
    },
    { 
      q: "Posso uscire dalla rete se cambio idea?", 
      a: "Sì. Il contratto prevede clausole di recesso con preavviso. Crediamo nella collaborazione volontaria e motivata, non vogliamo trattenere chi non è convinto. Il tasso di rinnovo del 96% dimostra che chi entra, resta perché vede valore concreto." 
    },
    { 
      q: "C'è un periodo di prova?", 
      a: "I primi 6 mesi sono considerati un periodo di reciproco adattamento. Se entro questo termine ritieni che la rete non sia adatta a te, il recesso è facilitato. Allo stesso modo, valutiamo se il nuovo membro si integra bene nel metodo e nei valori della rete." 
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Domande <span className="text-gold">Frequenti</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-card border border-border rounded-xl overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
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
