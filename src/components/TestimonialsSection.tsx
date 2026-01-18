import { Quote, User } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const testimonials = [
    {
      text: "Ho finalmente capito quali erano le mie opzioni legali. Una chiarezza che non avevo trovato altrove.",
      initials: "M.R.",
      location: "Milano",
    },
    {
      text: "Un supporto serio in un momento difficile. Mi hanno seguito con professionalità e umanità.",
      initials: "G.B.",
      location: "Roma",
    },
    {
      text: "Finalmente qualcuno che parla chiaro, senza promesse impossibili. Mi hanno aiutato a vedere la situazione in modo realistico.",
      initials: "A.L.",
      location: "Torino",
    },
  ];

  return (
    <section id="testimonianze" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Quote className="w-5 h-5 text-gold" />
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Testimonianze</span>
            </div>
            
            <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Esperienze reali.{" "}
              <span className="text-gradient-gold">Raccontate con discrezione.</span>
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-2xl p-8 relative transition-all duration-700 hover:border-gold/30 hover:shadow-gold ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Quote icon */}
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <Quote className="w-4 h-4 text-navy-dark" />
                  </div>
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 pt-4">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.initials}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
