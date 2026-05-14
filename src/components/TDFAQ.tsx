import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Cosa si intende per esdebitazione?",
    a: "L'esdebitazione è il beneficio della liberazione dai debiti residui dopo l'esecuzione di una procedura di sovraindebitamento o concorsuale. È disciplinata dal Codice della Crisi d'Impresa e dell'Insolvenza (D.lgs. 14/2019) e, per i casi anteriori, dalla L. 3/2012. Non si applica automaticamente: occorre verificare i presupposti soggettivi e oggettivi previsti dalla normativa.",
  },
  {
    q: "Quali procedure esistono per uscire da una situazione di sovraindebitamento?",
    a: "Le principali sono il piano di ristrutturazione dei debiti del consumatore (artt. 67-73 CCII), il concordato minore (artt. 74-83 CCII), la liquidazione controllata (artt. 268 e ss. CCII) e l'esdebitazione del debitore incapiente (art. 283 CCII). Ogni procedura ha requisiti specifici di accesso.",
  },
  {
    q: "Quanto costa l'assistenza legale?",
    a: "Il primo colloquio e la valutazione iniziale sono gratuiti. I costi successivi dipendono dalla complessità del caso e dalla procedura attivata: ti viene comunicato un preventivo scritto prima dell'incarico, comprensivo di onorari professionali e spese vive (contributo unificato, marca da bollo, eventuali compensi di OCC e gestore della crisi).",
  },
  {
    q: "Quanto dura una procedura di sovraindebitamento?",
    a: "I tempi variano in base alla procedura, al Tribunale competente e alla complessità documentale. In via indicativa: dal deposito della domanda all'omologazione possono trascorrere alcuni mesi, mentre la successiva fase esecutiva del piano può estendersi su più anni.",
  },
  {
    q: "Posso accedere alla procedura se non ho beni o redditi?",
    a: "Sì, in determinate condizioni. L'art. 283 CCII disciplina la cd. esdebitazione del debitore incapiente, che consente — una sola volta nella vita e in presenza di precisi requisiti — la cancellazione dei debiti anche in assenza di patrimonio.",
  },
  {
    q: "Il deposito della procedura sospende i pignoramenti?",
    a: "Gli effetti sulle azioni esecutive sono disciplinati dalla legge e variano in base alla procedura attivata. In molti casi (ad esempio art. 70 CCII) è prevista la sospensione delle azioni esecutive sul patrimonio del debitore. La valutazione caso per caso è parte della diagnosi iniziale.",
  },
  {
    q: "Cosa succede alla mia casa di abitazione?",
    a: "La disciplina dell'abitazione del debitore è articolata e dipende dalla procedura, dall'esistenza di un mutuo, dalle ipoteche iscritte, dalla composizione del nucleo familiare. Esistono strumenti di tutela ma non si applicano automaticamente: vanno valutati nel singolo caso.",
  },
  {
    q: "Come posso prenotare la diagnosi gratuita?",
    a: "Puoi contattarci tramite il modulo presente sul sito, telefonicamente o via email. Concordiamo un appuntamento — in studio o da remoto — e ti indichiamo i documenti utili da preparare per il primo incontro.",
  },
];

const TDFAQ = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Domande frequenti</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
              Le domande che riceviamo più spesso.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Risposte di carattere generale. Per una valutazione del tuo caso specifico è sempre opportuno un colloquio individuale, in cui esaminiamo i documenti e le circostanze concrete.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-muted/40 rounded-xl border border-border px-5 lg:px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-navy hover:text-gold-dark py-5 text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TDFAQ;
