import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Quote, Users, MapPin, Briefcase, RefreshCw } from "lucide-react";
import testimonialGiulia from "@/assets/testimonial-giulia.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialFrancesco from "@/assets/testimonial-francesco.jpg";
import testimonialLaura from "@/assets/testimonial-laura.jpg";

const ReteTestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const studiosCount = useAnimatedCounter({ end: 24, duration: 2000, isInView });
  const regionsCount = useAnimatedCounter({ end: 14, duration: 2000, isInView });
  const spotsCount = useAnimatedCounter({ end: 50, duration: 2000, isInView });
  const renewalCount = useAnimatedCounter({ end: 96, duration: 2000, isInView });

  const stats = [
    { icon: Users, value: studiosCount, label: "Studi Attivi" },
    { icon: MapPin, value: regionsCount, label: "Regioni Coperte" },
    { icon: Briefcase, value: spotsCount, suffix: "+", label: "Posti Disponibili" },
    { icon: RefreshCw, value: renewalCount, suffix: "%", label: "Tasso Rinnovo" },
  ];

  const testimonials = [
    {
      name: "Avv. Marco R.",
      location: "Milano",
      image: testimonialMarco,
      role: "Partner dal 2023",
      headline: "Ho sviluppato competenze che da solo mi avrebbero richiesto anni",
      quote: "La vera differenza non sono solo i numeri, ma la sicurezza professionale che ho acquisito. Oggi gestisco pratiche complesse con la certezza di fare la cosa giusta per i miei clienti. Il supporto della rete è stato fondamentale, soprattutto nei primi mesi quando tutto era nuovo.",
    },
    {
      name: "Avv. Giulia M.",
      location: "Milano",
      image: testimonialGiulia,
      role: "Avvocato",
      headline: "Sono passata da contabilità ordinaria a specialista riconosciuta",
      quote: "Sono entrata nella rete 18 mesi fa senza alcuna esperienza in esdebitazione. Oggi gestisco 12 pratiche attive e vengo cercata specificamente per la mia competenza in questo settore. Il percorso formativo strutturato e il supporto costante del team centrale hanno fatto tutta la differenza. Ora mi sento finalmente un'esperta.",
    },
    {
      name: "Dott. Comm. Marco T.",
      location: "Napoli",
      image: testimonialMarco,
      role: "Commercialista",
      headline: "Ho trovato un settore dove faccio davvero la differenza",
      quote: "Prima gestivo solo contabilità ordinaria. Entrare nella rete mi ha aperto un mondo professionale che non conoscevo. Il coordinamento con gli avvocati della rete è perfetto e finalmente lavoro su casi dove posso davvero aiutare le persone in momenti difficili. È stimolante professionalmente e gratificante umanamente.",
    },
    {
      name: "Avv. Francesco P.",
      location: "Bologna",
      image: testimonialFrancesco,
      role: "Avvocato",
      headline: "Il metodo strutturato elimina ogni incertezza",
      quote: "Quello che mi ha convinto è stato l'approccio scientifico. Non ti lasciano solo, hai modelli testati, procedure collaudate, supporto costante. In 12 mesi ho chiuso 9 pratiche con risultati eccellenti. Mai avuto questa soddisfazione professionale in altri ambiti. Ogni caso è un'opportunità di apprendimento.",
    },
    {
      name: "Dott. Comm. Laura B.",
      location: "Bari",
      image: testimonialLaura,
      role: "Commercialista",
      headline: "Oggi sono un punto di riferimento riconosciuto",
      quote: "All'inizio ero scettica: un altro network, un'altra promessa. Poi ho capito che qui c'era sostanza vera. Formazione continua, supporto tecnico autentico, strumenti professionali concreti. Oggi sono tra i principali riferimenti in Puglia per l'esdebitazione e continuo a imparare dai colleghi della rete.",
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="testimonianze" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              La Voce Di Chi Ha Già <span className="text-gold">Scelto Di Crescere</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-4 text-center">
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-gold'}`} />
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <Quote className="w-10 h-10 text-gold/20 mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-3">"{testimonial.headline}"</h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role} – {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {testimonials.slice(3).map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-colors"
              >
                <Quote className="w-10 h-10 text-gold/20 mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-3">"{testimonial.headline}"</h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                  />
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role} – {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-navy rounded-2xl p-8">
            <p className="text-lg text-white mb-2">
              Questi colleghi un anno fa erano nella <strong className="text-gold">TUA stessa posizione</strong>.
            </p>
            <p className="text-white/70 mb-4">
              Oggi hanno competenze che tu non hai (ancora). Gestiscono pratiche che tu rifiuti. Sono riconosciuti come esperti nel loro territorio.
            </p>
            <p className="text-xl font-bold text-gold">
              La differenza? Hanno scelto di investire nella loro crescita professionale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteTestimonialsSection;
