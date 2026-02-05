import { useInView } from "@/hooks/useInView";
import { FileText, Scale, HandshakeIcon, CheckCircle2, Shield, BookOpen, Footprints } from "lucide-react";

const strumentiGiuridici = [
  {
    icon: FileText,
    title: "Accordi di Ristrutturazione dei Debiti",
    description: "Negoziazione strutturata con i creditori per ridefinire termini e importi del debito."
  },
  {
    icon: Scale,
    title: "Concordato Preventivo",
    description: "Procedura che permette di evitare il fallimento preservando l'attività aziendale."
  },
  {
    icon: HandshakeIcon,
    title: "Transazione Fiscale",
    description: "Accordo con l'Erario per ridurre e rateizzare il debito tributario."
  }
];

const attiGestiti = [
  "Inviti a comparire",
  "Avvisi bonari",
  "Avvisi di accertamento",
  "Cartelle di pagamento",
  "Ipotecarie",
  "Pignoramenti",
  "Intimazioni di pagamento",
  "Fermi amministrativi"
];

const garanzie = [
  {
    icon: FileText,
    title: "Valutazione documentata",
    description: "Analisi basata su atti, documenti e precedenti concreti"
  },
  {
    icon: BookOpen,
    title: "Riferimenti normativi",
    description: "Sentenze e norme a supporto di ogni strategia"
  },
  {
    icon: Footprints,
    title: "Percorso chiaro",
    description: "Ogni passaggio spiegato passo dopo passo"
  }
];

const CrisiImpresaSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="crisi-impresa"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-card relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            Per Imprenditori e Società
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            RISOLVI IL DEBITO
          </h2>
          <p className="text-2xl md:text-3xl text-gold font-semibold mb-6">
            con il Fisco e la Crisi d'Impresa
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In presenza dei requisiti previsti dal Nuovo Codice della Crisi e dell'Insolvenza, 
            è possibile rideterminare in modo significativo il debito fiscale e rientrare in un 
            piano sostenibile nel tempo, evitando il collasso dell'azienda.
          </p>
        </div>

        {/* Strumenti Giuridici */}
        <div className={`grid md:grid-cols-3 gap-6 mb-20 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {strumentiGiuridici.map((strumento, index) => (
            <div
              key={index}
              className="bg-background/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/40 hover:bg-background/80 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <strumento.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{strumento.title}</h3>
              <p className="text-muted-foreground">{strumento.description}</p>
            </div>
          ))}
        </div>

        {/* Risultato */}
        <div className={`bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-8 md:p-10 mb-20 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-foreground text-center leading-relaxed">
            È possibile, nei casi consentiti dalla legge, <span className="text-gold font-semibold">ridurre l'esposizione complessiva</span> e 
            rateizzare la parte residua su un orizzonte pluriennale <span className="text-gold font-semibold">(4–5 anni)</span>, 
            preservando la continuità aziendale.
          </p>
        </div>

        {/* Esperienza */}
        <div className={`grid md:grid-cols-2 gap-12 items-center mb-20 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gold/20 border border-gold/30 rounded-xl px-6 py-3">
                <span className="text-4xl font-bold text-gold">20+</span>
                <span className="text-sm text-gold/80 block">anni</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Un metodo legale, strutturato, già applicato con successo
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Da oltre 20 anni affianchiamo imprenditori e società nella gestione, 
              impugnazione e ristrutturazione del debito fiscale, operando nel pieno 
              rispetto della normativa e delle procedure previste.
            </p>
          </div>
          <div className="space-y-4">
            {["Analizzato singolarmente", "Documentato con precisione", "Valutato su precedenti giurisprudenziali concreti"].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-background/50 border border-border/50 rounded-xl p-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gestione Posizioni */}
        <div className={`mb-20 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Gestione completa delle posizioni con <span className="text-gold">Agenzia delle Entrate</span> e <span className="text-gold">AER</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interveniamo anche su singole posizioni debitorie e atti specifici. 
              In presenza dei presupposti legali, l'intervento può portare a riduzioni rilevanti 
              dell'importo o, in determinati casi, all'annullamento dell'atto.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {attiGestiti.map((atto, index) => (
              <div key={index} className="flex items-center gap-3 bg-background/50 border border-border/50 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-foreground text-sm md:text-base">{atto}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Garanzie */}
        <div className={`transition-all duration-700 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-6">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium">Le nostre garanzie</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Niente promesse vaghe.<br />
              <span className="text-gold">Solo diritto, numeri e sentenze.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {garanzie.map((garanzia, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <garanzia.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{garanzia.title}</h4>
                <p className="text-sm text-muted-foreground">{garanzia.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground italic border-t border-border/50 pt-8">
            Operiamo esclusivamente dove esistono reali margini giuridici di intervento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrisiImpresaSection;
