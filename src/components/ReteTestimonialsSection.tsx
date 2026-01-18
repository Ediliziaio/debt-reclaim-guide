import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Quote, Users, MapPin, Euro, ThumbsUp, RefreshCw } from "lucide-react";
import testimonialGiulia from "@/assets/testimonial-giulia.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialFrancesco from "@/assets/testimonial-francesco.jpg";
import testimonialLaura from "@/assets/testimonial-laura.jpg";

const ReteTestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const studiosCount = useAnimatedCounter({ end: 24, duration: 2000, isInView });
  const regionsCount = useAnimatedCounter({ end: 14, duration: 2000, isInView });
  const revenueCount = useAnimatedCounter({ end: 95, duration: 2000, isInView });
  const satisfactionCount = useAnimatedCounter({ end: 92, duration: 2000, isInView });
  const renewalCount = useAnimatedCounter({ end: 96, duration: 2000, isInView });

  const stats = [
    { icon: Users, value: studiosCount, label: "Studi attivi" },
    { icon: MapPin, value: regionsCount, label: "Regioni coperte" },
    { icon: Euro, value: revenueCount, suffix: "k", label: "Fatturato medio/anno" },
    { icon: ThumbsUp, value: satisfactionCount, suffix: "%", label: "Soddisfazione" },
    { icon: RefreshCw, value: renewalCount, suffix: "%", label: "Tasso rinnovo" },
  ];

  const testimonials = [
    {
      name: "Avv. Giulia M.",
      location: "Milano",
      image: testimonialGiulia,
      role: "Avvocato",
      quote: "Sono entrata nella rete 18 mesi fa. Avevo zero esperienza in esdebitazione. Oggi gestisco 12 pratiche attive con un fatturato di oltre €70.000 solo da questo settore. Il supporto del team centrale è stato fondamentale, soprattutto nei primi mesi. Ora mi sento sicura e competente.",
      highlight: "€70.000+ di fatturato in 18 mesi",
    },
    {
      name: "Dott. Comm. Marco T.",
      location: "Napoli",
      image: testimonialMarco,
      role: "Commercialista",
      quote: "Prima gestivo solo contabilità ordinaria. Entrare nella rete mi ha aperto un mondo. Non solo ho quadruplicato il fatturato, ma finalmente lavoro su pratiche stimolanti, dove faccio davvero la differenza per i clienti. E il coordinamento con gli avvocati della rete è perfetto.",
      highlight: "Fatturato quadruplicato",
    },
    {
      name: "Avv. Francesco P.",
      location: "Bologna",
      image: testimonialFrancesco,
      role: "Avvocato",
      quote: "Quello che mi ha convinto è stato il metodo. Non ti lasciano solo. Hai modelli, procedure, supporto costante. E i lead che arrivano sono davvero qualificati. In 12 mesi ho chiuso 9 pratiche con un tasso di successo del 100%. Mai avuto risultati così in altri ambiti.",
      highlight: "9 pratiche, 100% successo",
    },
    {
      name: "Dott. Comm. Laura B.",
      location: "Bari",
      image: testimonialLaura,
      role: "Commercialista",
      quote: "Ero scettica all'inizio. Poi ho fatto due conti: €3.600/anno di contributo contro €40.000+ di fatturato aggiuntivo. È stato un no-brainer. Oggi sono una delle prime in Puglia per esdebitazione. E il bello è che continuo a imparare dai colleghi della rete.",
      highlight: "€40.000+ fatturato aggiuntivo",
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="testimonianze" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chi Sono Gli Studi Che Stanno Già <span className="text-primary">Lavorando Con Noi</span>
            </h2>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 ${isInView ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-4 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role} – {testimonial.location}</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center bg-muted/50 rounded-2xl p-8 ${isInView ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
            <p className="text-lg text-foreground mb-2">
              Questi colleghi un anno fa erano nella <strong>TUA stessa posizione</strong>.
            </p>
            <p className="text-muted-foreground mb-4">
              Oggi fatturano più di te. Lavorano su pratiche più interessanti. Hanno competenze che tu non hai (ancora).
            </p>
            <p className="text-xl font-bold text-primary">
              La differenza? Loro hanno deciso di entrare nella rete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReteTestimonialsSection;
