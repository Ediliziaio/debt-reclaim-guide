import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { FileCheck, Home, Building, Receipt, User, Briefcase, Scale, Users, TrendingDown, ThumbsUp, Banknote, ArrowRight, Clock, Euro, Target, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const stats = [
  { value: "150+", label: "Casi gestiti", icon: Users },
  { value: "60%", label: "Riduzione media debito", icon: TrendingDown },
  { value: "95%", label: "Clienti soddisfatti", icon: ThumbsUp },
  { value: "€50M+", label: "Debiti gestiti", icon: Banknote }
];

const categories = [
  { id: "all", label: "Tutti" },
  { id: "Privato", label: "Privato" },
  { id: "Impresa", label: "Impresa" },
  { id: "Fiscale", label: "Fiscale" }
];

interface CaseStudy {
  category: string;
  categoryColor: string;
  title: string;
  situation: string;
  solution: string;
  result: string;
  icon: typeof Home;
  duration: string;
  debtAmount: string;
  savedAmount: string;
  challenges: string[];
  benefits: string[];
  timeline: { phase: string; description: string }[];
  testimonial: string;
}

const caseStudies: CaseStudy[] = [
  {
    category: "Privato",
    categoryColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "Esdebitazione Famiglia con Debiti Multipli",
    situation: "Una famiglia monoreddito si trovava in una situazione critica con €120.000 di debiti accumulati tra mutuo ipotecario, tre prestiti personali e due carte revolving. Il capofamiglia aveva perso il lavoro e i creditori avevano già avviato azioni esecutive, mettendo a rischio la casa familiare.",
    solution: "Abbiamo attivato la procedura di sovraindebitamento ai sensi della L. 3/2012, predisponendo un piano del consumatore che prevedeva il pagamento del 20% del debito in 60 rate mensili sostenibili, con la protezione immediata del patrimonio familiare.",
    result: "Riduzione dell'80% del debito complessivo, rata sostenibile di €400/mese per 5 anni.",
    icon: Home,
    duration: "8 mesi",
    debtAmount: "€120.000",
    savedAmount: "€96.000",
    challenges: [
      "Creditori multipli con interessi conflittuali",
      "Procedura esecutiva immobiliare già avviata",
      "Presenza di debiti chirografari e privilegiati",
      "Reddito familiare fortemente ridotto"
    ],
    benefits: [
      "Sospensione immediata di tutte le azioni esecutive",
      "Protezione della prima casa familiare",
      "Rata mensile calibrata sul reddito effettivo",
      "Nuovo inizio senza debiti residui al termine del piano"
    ],
    timeline: [
      { phase: "Analisi", description: "Studio approfondito della situazione debitoria e patrimoniale" },
      { phase: "Strategia", description: "Elaborazione del piano del consumatore con l'OCC" },
      { phase: "Deposito", description: "Presentazione della domanda al Tribunale competente" },
      { phase: "Omologa", description: "Approvazione del piano da parte del giudice" }
    ],
    testimonial: "Pensavamo di perdere la nostra casa e di rovinare il futuro dei nostri figli. Grazie al loro supporto professionale e umano, abbiamo ritrovato la serenità e una prospettiva di vita dignitosa."
  },
  {
    category: "Impresa",
    categoryColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    title: "Ristrutturazione Debito Aziendale",
    situation: "Una PMI del settore manifatturiero con 12 dipendenti aveva accumulato €500.000 di debiti tra esposizioni bancarie, fornitori e contributi previdenziali arretrati. L'azienda era tecnicamente solvente ma aveva un grave problema di liquidità che minacciava la continuità operativa.",
    solution: "Abbiamo negoziato un accordo di ristrutturazione dei debiti ex art. 182-bis L.F. con i principali creditori, ottenendo uno stralcio significativo e un piano di rientro compatibile con i flussi di cassa aziendali.",
    result: "Attività salvata, debito ridotto del 45%, tutti i 12 posti di lavoro preservati.",
    icon: Building,
    duration: "12 mesi",
    debtAmount: "€500.000",
    savedAmount: "€225.000",
    challenges: [
      "Esposizione bancaria con più istituti di credito",
      "Fornitori strategici con crediti significativi",
      "Contributi INPS e INAIL arretrati",
      "Necessità di mantenere l'operatività aziendale"
    ],
    benefits: [
      "Continuità aziendale garantita durante la procedura",
      "Conservazione di tutti i rapporti di lavoro",
      "Mantenimento delle linee di credito operative",
      "Piano di rientro sostenibile in 5 anni"
    ],
    timeline: [
      { phase: "Due Diligence", description: "Analisi completa dei crediti e della situazione aziendale" },
      { phase: "Negoziazione", description: "Trattative con banche e creditori principali" },
      { phase: "Accordo", description: "Sottoscrizione dell'accordo di ristrutturazione" },
      { phase: "Omologa", description: "Validazione giudiziale dell'accordo" }
    ],
    testimonial: "Stavamo per chiudere e licenziare tutti. Oggi l'azienda è in salute, i dipendenti sono al sicuro e abbiamo ripreso a investire. Un lavoro straordinario."
  },
  {
    category: "Fiscale",
    categoryColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    title: "Transazione con Agenzia delle Entrate",
    situation: "Un imprenditore del settore edile aveva accumulato €280.000 di debiti tributari tra IVA, IRPEF e contributi. I suoi conti correnti erano stati pignorati, i veicoli aziendali sottoposti a fermo e l'attività era paralizzata dalle cartelle esattoriali.",
    solution: "Abbiamo avviato una procedura di composizione della crisi con transazione fiscale, dimostrando l'incapacità del debitore di soddisfare integralmente i crediti erariali e proponendo un pagamento parziale ma certo.",
    result: "Riduzione del 65% del debito fiscale, sblocco immediato di conti e veicoli aziendali.",
    icon: Receipt,
    duration: "10 mesi",
    debtAmount: "€280.000",
    savedAmount: "€182.000",
    challenges: [
      "Cartelle esattoriali con interessi e sanzioni elevate",
      "Fermi amministrativi su tutti i mezzi aziendali",
      "Pignoramenti presso terzi sui conti correnti",
      "Impossibilità di partecipare a gare pubbliche"
    ],
    benefits: [
      "Sblocco immediato di conti correnti e veicoli",
      "Riduzione drastica di sanzioni e interessi",
      "Rateizzazione del residuo in 72 mesi",
      "Recupero del DURC e accesso a nuovi appalti"
    ],
    timeline: [
      { phase: "Ricognizione", description: "Mappatura completa del debito tributario" },
      { phase: "Proposta", description: "Elaborazione della proposta di transazione fiscale" },
      { phase: "Istruttoria", description: "Valutazione da parte dell'Agenzia delle Entrate" },
      { phase: "Approvazione", description: "Omologa della transazione fiscale" }
    ],
    testimonial: "Mi sentivo schiacciato dal Fisco, senza via d'uscita. Oggi ho ripreso a lavorare serenamente e sto pagando rate sostenibili. Mi hanno letteralmente salvato l'attività."
  },
  {
    category: "Privato",
    categoryColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "Piano del Consumatore per Ex Imprenditore",
    situation: "Un ex titolare di partita IVA, dopo la chiusura forzata della sua attività commerciale, si trovava con €90.000 di debiti residui tra fornitori, banche e Agenzia delle Entrate. Da lavoratore dipendente non aveva più alcuna possibilità di ripagare queste somme.",
    solution: "Abbiamo predisposto un piano del consumatore ex L. 3/2012, dimostrando che il debitore, non più imprenditore, poteva accedere a questa procedura più snella e favorevole per ottenere l'esdebitazione completa.",
    result: "Esdebitazione totale al termine del piano quadriennale, nuovo inizio garantito.",
    icon: User,
    duration: "6 mesi",
    debtAmount: "€90.000",
    savedAmount: "€90.000",
    challenges: [
      "Debiti misti (imprenditoriali e personali)",
      "Qualificazione del soggetto come consumatore",
      "Creditori aggressivi con azioni esecutive",
      "Necessità di proteggere lo stipendio"
    ],
    benefits: [
      "Esdebitazione completa al termine del piano",
      "Protezione della quota di stipendio essenziale",
      "Nessuna segnalazione in CRIF dopo il completamento",
      "Possibilità di accedere nuovamente al credito"
    ],
    timeline: [
      { phase: "Qualificazione", description: "Analisi della legittimazione come consumatore" },
      { phase: "Piano", description: "Redazione del piano con l'OCC territoriale" },
      { phase: "Udienza", description: "Presentazione al Tribunale competente" },
      { phase: "Esecuzione", description: "Adempimento del piano e esdebitazione finale" }
    ],
    testimonial: "Dopo la chiusura della mia attività mi sentivo un fallito. Grazie a loro ho capito che si può ricominciare e oggi vivo senza l'incubo dei debiti."
  },
  {
    category: "Impresa",
    categoryColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    title: "Concordato Preventivo per Azienda Commerciale",
    situation: "Una società commerciale con 15 dipendenti aveva accumulato €800.000 di debiti verso banche, fornitori e Fisco. Erano già state avviate procedure esecutive e l'azienda rischiava il fallimento con la perdita di tutti i posti di lavoro.",
    solution: "Abbiamo predisposto un concordato preventivo con continuità aziendale, elaborando un piano industriale che prevedeva la ristrutturazione del debito e la prosecuzione dell'attività con il mantenimento dei livelli occupazionali.",
    result: "Debito ridotto del 55%, attività proseguita regolarmente, 15 dipendenti salvati.",
    icon: Briefcase,
    duration: "18 mesi",
    debtAmount: "€800.000",
    savedAmount: "€440.000",
    challenges: [
      "Crisi di liquidità grave e immediata",
      "Fornitori strategici con crediti rilevanti",
      "Procedure esecutive già avviate",
      "Necessità di mantenere la fiducia del mercato"
    ],
    benefits: [
      "Protezione automatica dalle azioni esecutive",
      "Continuità dei rapporti commerciali strategici",
      "Conservazione dell'avviamento aziendale",
      "Salvaguardia di 15 posti di lavoro"
    ],
    timeline: [
      { phase: "Pre-concordato", description: "Ricorso per la protezione del patrimonio aziendale" },
      { phase: "Piano", description: "Elaborazione del piano di concordato con attestazione" },
      { phase: "Adunanza", description: "Votazione dei creditori sulla proposta" },
      { phase: "Omologa", description: "Approvazione definitiva del Tribunale" }
    ],
    testimonial: "Pensavamo fosse finita per la nostra azienda di famiglia. Oggi siamo in piena ripresa e abbiamo potuto mantenere tutti i nostri collaboratori. Un risultato incredibile."
  },
  {
    category: "Fiscale",
    categoryColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    title: "Rateizzazione e Sgravio Cartelle Esattoriali",
    situation: "Un libero professionista aveva accumulato €150.000 di cartelle esattoriali per contributi INPS, IVA e addizionali regionali. I suoi conti correnti professionali erano stati pignorati, rendendo impossibile l'esercizio dell'attività.",
    solution: "Abbiamo impugnato le cartelle viziate da irregolarità formali e sostanziali, ottenendo lo sgravio parziale. Per il residuo, abbiamo negoziato una rateizzazione straordinaria in 72 rate mensili.",
    result: "Sblocco immediato dei conti, riduzione del 40% del debito, piano sostenibile in 6 anni.",
    icon: Scale,
    duration: "4 mesi",
    debtAmount: "€150.000",
    savedAmount: "€60.000",
    challenges: [
      "Pignoramenti attivi sui conti professionali",
      "Cartelle notificate con vizi procedurali",
      "Impossibilità di esercitare la professione",
      "Urgenza dello sblocco per riprendere l'attività"
    ],
    benefits: [
      "Sblocco rapido dei conti correnti",
      "Annullamento delle cartelle illegittime",
      "Rate mensili calibrate sulla capacità contributiva",
      "Ripresa immediata dell'attività professionale"
    ],
    timeline: [
      { phase: "Urgenza", description: "Ricorso per lo sblocco dei conti pignorati" },
      { phase: "Impugnazione", description: "Ricorsi contro le cartelle viziate" },
      { phase: "Sgravio", description: "Ottenimento dello sgravio parziale" },
      { phase: "Rateizzazione", description: "Accordo per il pagamento dilazionato" }
    ],
    testimonial: "Non potevo più lavorare, i miei conti erano bloccati. In pochi mesi mi hanno rimesso in piedi. Professionalità e umanità rare."
  }
];

interface CaseStudiesSectionProps {
  onOpenContact?: () => void;
}

const CaseStudiesSection = ({ onOpenContact }: CaseStudiesSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  const filteredCases = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section 
      id="casi-risolti" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <FileCheck className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">CASI RISOLTI</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Risultati concreti.{" "}
            <span className="text-gold">Casi reali.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ogni situazione è unica. Ecco alcuni esempi di come abbiamo aiutato i nostri clienti 
            a superare momenti difficili.
          </p>
        </div>

        {/* Statistics Bar */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card/50 border border-gold/10 rounded-xl p-4 lg:p-6 text-center hover:border-gold/30 transition-all"
              >
                <Icon className="w-5 h-5 text-gold mx-auto mb-2" />
                <div className="font-heading text-2xl lg:text-3xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeFilter === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-5 transition-all ${
                activeFilter === cat.id 
                  ? "bg-gold text-primary-foreground hover:bg-gold/90" 
                  : "border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50"
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {filteredCases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div
                key={`${caseStudy.category}-${index}`}
                onClick={() => setSelectedCase(caseStudy)}
                className={`bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-gold/30 hover:scale-[1.02] hover:shadow-lg transition-all duration-500 group cursor-pointer ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isInView ? `${index * 100 + 200}ms` : '0ms' }}
              >
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${caseStudy.categoryColor}`}>
                    {caseStudy.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {caseStudy.title}
                </h3>

                {/* Preview Content */}
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {caseStudy.situation}
                </p>

                {/* Result Highlight */}
                <div className="pt-3 border-t border-border">
                  <span className="text-gold font-medium text-sm">✓ {caseStudy.result}</span>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1 mt-4 text-gold/70 group-hover:text-gold transition-colors text-sm font-medium">
                  <span>Scopri di più</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Disclaimer */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto italic">
            I casi presentati sono esempi rappresentativi. Ogni situazione è unica e i risultati 
            dipendono dalle specifiche circostanze. Non costituiscono garanzia di esito.
          </p>
        </div>
      </div>

      {/* Case Study Detail Dialog */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="sm:max-w-2xl bg-card border-gold/20 max-h-[90vh] p-0">
          {selectedCase && (() => {
            const Icon = selectedCase.icon;
            return (
              <ScrollArea className="max-h-[85vh]">
                <div className="p-6">
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border ${selectedCase.categoryColor}`}>
                        {selectedCase.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                    </div>
                    <DialogTitle className="font-heading text-xl font-bold text-foreground">
                      {selectedCase.title}
                    </DialogTitle>
                  </DialogHeader>

                  {/* Key Stats Badges */}
                  <div className="flex flex-wrap gap-3 mt-4 mb-6">
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg border border-border">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-sm font-medium">{selectedCase.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg border border-border">
                      <Euro className="w-4 h-4 text-destructive" />
                      <span className="text-sm">Debito: <strong>{selectedCase.debtAmount}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 bg-gold/10 px-3 py-2 rounded-lg border border-gold/20">
                      <Target className="w-4 h-4 text-gold" />
                      <span className="text-sm text-gold">Risparmiato: <strong>{selectedCase.savedAmount}</strong></span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Situazione */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                        📌 Situazione Iniziale
                      </h4>
                      <p className="text-foreground/90 text-sm leading-relaxed">
                        {selectedCase.situation}
                      </p>
                    </div>

                    {/* Sfide */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                        ⚠️ Sfide Principali
                      </h4>
                      <ul className="grid gap-2">
                        {selectedCase.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="text-destructive mt-0.5">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Soluzione */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                        ⚖️ Strategia Legale
                      </h4>
                      <p className="text-foreground/90 text-sm leading-relaxed">
                        {selectedCase.solution}
                      </p>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                        📋 Fasi del Processo
                      </h4>
                      <div className="relative pl-4 border-l-2 border-gold/30 space-y-4">
                        {selectedCase.timeline.map((step, idx) => (
                          <div key={idx} className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gold border-2 border-card"></div>
                            <div>
                              <span className="text-sm font-semibold text-gold">{step.phase}</span>
                              <p className="text-xs text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Risultati */}
                    <div className="bg-gold/5 p-4 rounded-lg border border-gold/20">
                      <h4 className="text-sm font-semibold text-gold mb-3 flex items-center gap-2">
                        ✓ Risultati Ottenuti
                      </h4>
                      <p className="text-foreground font-medium text-sm mb-3">
                        {selectedCase.result}
                      </p>
                      <ul className="grid gap-2">
                        {selectedCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="text-gold mt-0.5">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonianza */}
                    <div className="bg-muted/30 p-4 rounded-lg border border-border relative">
                      <Quote className="w-8 h-8 text-gold/20 absolute top-3 right-3" />
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                        💬 Testimonianza del Cliente
                      </h4>
                      <p className="text-foreground/90 text-sm italic leading-relaxed pr-8">
                        "{selectedCase.testimonial}"
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">— Cliente anonimo</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground italic mb-4">
                      Hai una situazione simile? Possiamo aiutarti a trovare la soluzione più adatta alle tue esigenze specifiche.
                    </p>
                    {onOpenContact && (
                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        onClick={() => {
                          setSelectedCase(null);
                          onOpenContact();
                        }}
                      >
                        Richiedi una Consulenza Gratuita
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </ScrollArea>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudiesSection;
