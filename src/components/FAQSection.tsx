import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { User, Building2, Clock } from "lucide-react";

const faqPrivati = [
  {
    question: "Quanto tempo ci vuole per risolvere una situazione debitoria?",
    answer: "I tempi variano in base alla complessità del caso. In media, le procedure di composizione della crisi da sovraindebitamento richiedono dai 6 ai 18 mesi. Durante la prima consulenza gratuita, analizzeremo la tua situazione specifica e ti forniremo una stima realistica dei tempi."
  },
  {
    question: "Quali debiti possono essere gestiti con la tutela legale?",
    answer: "Possiamo intervenire su quasi tutte le tipologie di debito: mutui, finanziamenti, carte di credito, debiti con Agenzia delle Entrate, contributi INPS, debiti commerciali e fornitori. Alcune eccezioni riguardano gli assegni di mantenimento e le sanzioni penali."
  },
  {
    question: "Perderò la mia casa o i miei beni?",
    answer: "Non necessariamente. La legge sul sovraindebitamento prevede specifiche tutele per la prima casa e per i beni essenziali. Il nostro obiettivo è sempre quello di proteggere il tuo patrimonio nel rispetto della normativa vigente."
  },
  {
    question: "Cosa succede se non riesco a pagare le rate concordate?",
    answer: "Prima di definire un piano di rientro, analizziamo attentamente la tua capacità di pagamento reale. In caso di difficoltà impreviste durante la procedura, esistono strumenti legali per modificare il piano. Ti seguiremo in ogni fase."
  },
  {
    question: "I creditori possono continuare a contattarmi?",
    answer: "Una volta avviata la procedura legale, i creditori sono tenuti a interagire esclusivamente attraverso il nostro studio. Questo ti garantisce serenità e protezione da pressioni indebite."
  },
  {
    question: "Posso accedere alla procedura se sono un lavoratore autonomo o una partita IVA?",
    answer: "Sì, la legge sul sovraindebitamento è applicabile anche a lavoratori autonomi, professionisti e piccoli imprenditori non fallibili. Ogni categoria ha procedure specifiche che valuteremo insieme."
  },
  {
    question: "Cosa devo portare alla prima consulenza?",
    answer: "Per una valutazione completa, ti chiediamo di portare: documenti di identità, ultime dichiarazioni dei redditi, elenco dei debiti con relativi importi, eventuali atti di precetto o pignoramenti ricevuti, e una panoramica dei tuoi beni."
  }
];

const faqCrisiImpresa = [
  {
    question: "Cos'è la Transazione Fiscale e quando è applicabile?",
    answer: "La Transazione Fiscale è uno strumento previsto dal Codice della Crisi che permette di negoziare con l'Agenzia delle Entrate una riduzione del debito tributario. È applicabile nell'ambito di Accordi di Ristrutturazione dei Debiti o Concordato Preventivo, e consente di ottenere lo stralcio di sanzioni e interessi, e in alcuni casi anche di parte del capitale."
  },
  {
    question: "Quali sono i requisiti per accedere al Concordato Preventivo?",
    answer: "Il Concordato Preventivo è accessibile alle imprese in stato di crisi o insolvenza che non siano già dichiarate fallite. I requisiti principali sono: superamento delle soglie dimensionali previste dalla legge, presentazione di un piano che garantisca almeno il 20% ai creditori chirografari, e dimostrazione della fattibilità del piano stesso."
  },
  {
    question: "È possibile ridurre il debito con l'Agenzia delle Entrate senza fallire?",
    answer: "Sì, attraverso strumenti come gli Accordi di Ristrutturazione dei Debiti o la Composizione Negoziata della Crisi è possibile ristrutturare il debito fiscale preservando la continuità aziendale. Questi strumenti permettono di negoziare con l'Erario piani di rientro sostenibili e, in alcuni casi, la riduzione dell'importo dovuto."
  },
  {
    question: "Cosa posso fare se ho ricevuto un avviso di accertamento o una cartella esattoriale?",
    answer: "È fondamentale agire tempestivamente. Possiamo analizzare l'atto per verificare eventuali vizi di forma o sostanza che ne consentano l'impugnazione. In alternativa, possiamo valutare strumenti di definizione agevolata, rateizzazione o, se sussistono i presupposti, l'accesso a procedure di ristrutturazione del debito."
  },
  {
    question: "Come funziona la formula 'soddisfatti o rimborsati' per la consulenza?",
    answer: "La formula si applica alla fase di consulenza iniziale, nei limiti previsti dal contratto. Se dall'analisi preliminare emerge l'assenza di margini giuridici di intervento, la consulenza viene rimborsata. Operiamo esclusivamente dove esistono reali possibilità di successo, con trasparenza e responsabilità."
  },
  {
    question: "Quanto si può risparmiare con una Transazione Fiscale?",
    answer: "I risultati variano significativamente caso per caso. In generale, è possibile ottenere l'azzeramento di sanzioni e interessi di mora, e in alcuni casi una riduzione del debito tributario principale. In procedimenti di concordato, abbiamo ottenuto riduzioni complessive anche superiori al 50-60% del debito originario."
  }
];

const faqProcedureCosti = [
  {
    question: "Quanto costa la prima consulenza?",
    answer: "La prima consulenza è sempre gratuita e senza impegno. Durante questo incontro analizzeremo la tua situazione, valuteremo le possibili soluzioni e ti forniremo un preventivo chiaro e dettagliato per le eventuali attività successive."
  },
  {
    question: "Come vengono calcolati gli onorari dello studio?",
    answer: "Gli onorari sono calcolati in base alla complessità del caso, al tipo di procedura necessaria e al valore della posizione debitoria. Forniamo sempre un preventivo scritto prima di iniziare qualsiasi attività, con la possibilità di pagamento rateizzato."
  },
  {
    question: "È possibile rateizzare i costi della procedura?",
    answer: "Sì, comprendiamo che chi ha problemi di debito potrebbe avere difficoltà anche con i costi legali. Offriamo piani di pagamento personalizzati e rateizzazioni flessibili per rendere accessibile il nostro servizio a tutti."
  },
  {
    question: "Quanto dura una procedura di sovraindebitamento?",
    answer: "I tempi variano in base alla procedura scelta: il piano del consumatore richiede mediamente 6-12 mesi per l'omologa, la liquidazione controllata 12-18 mesi, mentre l'accordo di composizione della crisi circa 8-14 mesi. Dopo l'omologa, il piano di rientro può durare da 3 a 7 anni."
  },
  {
    question: "Quali sono le fasi della procedura e i relativi tempi?",
    answer: "Le fasi principali sono: 1) Consulenza e analisi (1-2 settimane), 2) Raccolta documentazione (2-4 settimane), 3) Predisposizione proposta (2-3 settimane), 4) Deposito e procedura giudiziale (4-8 mesi), 5) Esecuzione del piano (3-7 anni). Ti accompagniamo in ogni fase con aggiornamenti costanti."
  },
  {
    question: "Ci sono costi aggiuntivi oltre agli onorari legali?",
    answer: "Oltre agli onorari, le procedure prevedono costi vivi quali: contributo unificato, marche da bollo, compenso dell'OCC (Organismo di Composizione della Crisi) e eventuali spese di notifica. Ti forniremo un prospetto completo di tutti i costi preventivabili."
  },
  {
    question: "Cosa succede se la procedura non va a buon fine?",
    answer: "Prima di avviare qualsiasi procedura, valutiamo attentamente le probabilità di successo. Se durante l'iter emergono ostacoli imprevisti, ti informeremo tempestivamente sulle alternative disponibili. Non addebitiamo onorari per attività non concordate preventivamente."
  },
  {
    question: "È possibile avere un preventivo prima di iniziare?",
    answer: "Assolutamente sì. Dopo la consulenza gratuita, riceverai un preventivo dettagliato con tutti i costi previsti, le tempistiche stimate e le modalità di pagamento. Nessuna sorpresa: la trasparenza è un nostro valore fondamentale."
  }
];

type TabType = "privati" | "impresa" | "procedure";

const FAQSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<TabType>("privati");

  const currentFaqs = activeTab === "privati" 
    ? faqPrivati 
    : activeTab === "impresa" 
      ? faqCrisiImpresa 
      : faqProcedureCosti;

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 bg-card"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span 
              className={`inline-block text-gold text-sm font-medium tracking-wider uppercase mb-4 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Domande Frequenti
            </span>
            <h2 
              className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Hai delle domande?
              <br />
              <span className="text-gold">Abbiamo le risposte.</span>
            </h2>
            <p 
              className={`text-muted-foreground text-lg transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Ecco le risposte alle domande più comuni dei nostri clienti.
            </p>
          </div>

          {/* Tabs */}
          <div 
            className={`flex justify-center mb-10 transition-all duration-700 delay-250 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex flex-wrap justify-center bg-background/50 border border-border rounded-xl p-1.5 gap-2">
              <button
                onClick={() => setActiveTab("privati")}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === "privati"
                    ? "bg-gold text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                }`}
              >
                <User className="w-4 h-4" />
                Tutela Debito Privati
              </button>
              <button
                onClick={() => setActiveTab("impresa")}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === "impresa"
                    ? "bg-gold text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                }`}
              >
                <Building2 className="w-4 h-4" />
                Crisi d'Impresa
              </button>
              <button
                onClick={() => setActiveTab("procedure")}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === "procedure"
                    ? "bg-gold text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                }`}
              >
                <Clock className="w-4 h-4" />
                Procedure e Costi
              </button>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4" key={activeTab}>
              {currentFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background/50 border border-border rounded-lg px-6 data-[state=open]:border-gold/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-5 text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <p 
            className={`text-center text-muted-foreground mt-12 transition-all duration-700 delay-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Non hai trovato la risposta che cercavi?{" "}
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
            >
              Contattaci direttamente
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
