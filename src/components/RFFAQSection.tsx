import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  questions: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "esdebitazione",
    label: "Esdebitazione Privati",
    questions: [
      {
        question: "Cos'è l'esdebitazione e chi può richiederla?",
        answer: "L'esdebitazione è una procedura legale prevista dalla Legge 3/2012 (Legge sul Sovraindebitamento) che permette a persone fisiche non fallibili di liberarsi dai debiti che non possono pagare. Possono accedervi consumatori, piccoli imprenditori, professionisti, artigiani e tutti coloro che non sono soggetti a fallimento. È necessario dimostrare di essere in una situazione di sovraindebitamento, ovvero l'incapacità oggettiva di far fronte alle proprie obbligazioni."
      },
      {
        question: "Quanto debito si può cancellare realmente?",
        answer: "Nella nostra esperienza, i nostri clienti ottengono mediamente una riduzione del 60-80% del debito complessivo. In alcuni casi eccezionali, con il piano del consumatore, si può arrivare anche alla cancellazione totale del debito residuo dopo il pagamento della quota concordata. Ogni caso è diverso e dipende dalla situazione patrimoniale e reddituale del debitore."
      },
      {
        question: "I miei beni verranno pignorati durante la procedura?",
        answer: "No, uno dei principali vantaggi dell'avvio di una procedura di sovraindebitamento è proprio il BLOCCO immediato di tutte le azioni esecutive. Ciò significa che pignoramenti, ipoteche e sequestri vengono sospesi dal momento dell'ammissione alla procedura. In molti casi, è possibile anche salvare la prima casa."
      },
      {
        question: "Quanto tempo ci vuole per completare la procedura?",
        answer: "I tempi variano da caso a caso. Generalmente, dalla prima consulenza all'omologa del piano passano 4-8 mesi. Il piano di pagamento può poi durare da 3 a 7 anni, a seconda della situazione. Durante tutto il periodo, sei protetto dalle azioni dei creditori e paghi solo la quota concordata."
      }
    ]
  },
  {
    id: "impresa",
    label: "Crisi d'Impresa",
    questions: [
      {
        question: "Cos'è il concordato preventivo?",
        answer: "Il concordato preventivo è una procedura che permette all'imprenditore in crisi di proporre ai creditori un accordo per il pagamento parziale o dilazionato dei debiti. A differenza del fallimento, permette di continuare l'attività aziendale, salvaguardare i posti di lavoro e mantenere il controllo dell'impresa sotto supervisione del tribunale."
      },
      {
        question: "È possibile ottenere lo stralcio dei debiti fiscali?",
        answer: "Sì, attraverso la transazione fiscale è possibile ottenere una significativa riduzione dei debiti verso l'Agenzia delle Entrate e l'INPS. Lo stralcio può riguardare sanzioni, interessi e, in alcuni casi, anche parte del capitale. È una delle procedure più efficaci per le aziende con pesanti pendenze tributarie."
      },
      {
        question: "Cosa succede ai dipendenti durante la ristrutturazione?",
        answer: "L'obiettivo principale della ristrutturazione del debito aziendale è proprio quello di salvare l'impresa e i posti di lavoro. Nella maggior parte dei casi che seguiamo, riusciamo a preservare l'occupazione attraverso piani di risanamento che mantengono attiva l'azienda. In alcuni casi può essere necessaria una riorganizzazione, ma sempre con tutele per i lavoratori."
      },
      {
        question: "Posso continuare a lavorare durante la procedura?",
        answer: "Assolutamente sì. A differenza del fallimento, le procedure di composizione della crisi come il concordato o gli accordi di ristrutturazione permettono all'imprenditore di continuare la propria attività. Anzi, la continuità aziendale è spesso un requisito fondamentale per l'approvazione del piano da parte dei creditori."
      }
    ]
  },
  {
    id: "costi",
    label: "Procedure e Costi",
    questions: [
      {
        question: "Quanto costa affidarsi a RF Ristrutturazioni Debiti?",
        answer: "La consulenza iniziale è GRATUITA e senza impegno. Durante questo incontro analizziamo la tua situazione e ti diciamo onestamente se possiamo aiutarti. Solo dopo, in caso di esito positivo, ti presentiamo un preventivo dettagliato con tutti i costi. Non ci sono sorprese: sai esattamente quanto spenderai dall'inizio alla fine."
      },
      {
        question: "Come posso pagare i vostri onorari se sono già in difficoltà?",
        answer: "Comprendiamo perfettamente la situazione. Per questo offriamo piani di pagamento rateali personalizzati sulle tue possibilità. In molti casi, il risparmio ottenuto dalla riduzione del debito supera di gran lunga i nostri onorari. Consideriamolo un investimento per la tua libertà finanziaria."
      },
      {
        question: "Cosa succede se la procedura non va a buon fine?",
        answer: "Prima di accettare un caso, valutiamo attentamente la fattibilità della procedura. Se riteniamo che non ci siano i presupposti per un esito positivo, te lo diciamo subito e non procediamo. Inoltre, offriamo una garanzia 'Soddisfatti o Rimborsati' sulla consulenza iniziale: se non possiamo aiutarti, ti rimborsiamo."
      },
      {
        question: "Come si svolge il primo incontro?",
        answer: "Il primo incontro può avvenire in presenza presso uno dei nostri studi o in videoconferenza, come preferisci. Ti chiediamo di portare la documentazione disponibile sui tuoi debiti (lettere, decreti ingiuntivi, cartelle esattoriali). Analizziamo insieme la situazione, ti spieghiamo le opzioni disponibili e rispondiamo a tutte le tue domande. Tutto senza impegno."
      }
    ]
  }
];

const RFFAQSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("esdebitazione");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-trust/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Domande Frequenti</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hai Domande?{" "}
            <span className="text-primary">Abbiamo Risposte.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ecco le risposte alle domande più frequenti che riceviamo. 
            Se non trovi quello che cerchi, contattaci direttamente.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenQuestion(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {currentCategory?.questions.map((faq, index) => (
            <div
              key={faq.question}
              className={`mb-4 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <button
                onClick={() => toggleQuestion(faq.question)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  openQuestion === faq.question
                    ? 'bg-primary/5 border-primary/30 shadow-md'
                    : 'bg-background border-border hover:border-primary/20 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading font-semibold text-foreground text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openQuestion === faq.question ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === faq.question ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground mb-4">
            Non hai trovato la risposta che cercavi?
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-semibold">
            <MessageCircle className="w-5 h-5" />
            <span>Contattaci per una consulenza gratuita</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFFAQSection;
