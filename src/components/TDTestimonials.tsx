import { Quote } from "lucide-react";
import t1 from "@/assets/testimonial-marco.jpg";
import t2 from "@/assets/testimonial-giulia.jpg";
import t3 from "@/assets/testimonial-francesco.jpg";
import t4 from "@/assets/testimonial-laura.jpg";
import Reveal from "./Reveal";

const testimonials = [
  {
    photo: t1,
    name: "Marco T.",
    role: "Ex titolare di impresa individuale",
    text: "Avevo bisogno di chiarezza prima di tutto. Mi hanno spiegato in che procedura potevo rientrare e con quali tempi. Il piano è stato depositato e omologato in meno di un anno.",
  },
  {
    photo: t2,
    name: "Giulia R.",
    role: "Lavoratrice dipendente",
    text: "Mi sono rivolta allo studio dopo aver ricevuto un atto di pignoramento. Ho apprezzato la trasparenza sui costi e la pazienza nel rispondere a tutte le mie domande, anche le più ovvie.",
  },
  {
    photo: t3,
    name: "Francesco D.",
    role: "Imprenditore PMI",
    text: "Avevamo un'esposizione importante con banche e fornitori. Hanno valutato la composizione negoziata e ci hanno seguito durante tutta la fase delle trattative. Un lavoro serio.",
  },
  {
    photo: t4,
    name: "Laura M.",
    role: "Pensionata",
    text: "Per me la cosa più difficile era anche solo parlarne. Mi hanno messo subito a mio agio. Hanno gestito il caso con riservatezza e mi hanno tenuta aggiornata in ogni fase.",
  },
];

const TDTestimonials = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Cosa dicono i clienti</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
              Testimonianze di chi è stato seguito dallo studio.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Le testimonianze sono raccolte con il consenso esplicito dei clienti. Nomi e dettagli sono parzialmente modificati per tutelare la riservatezza.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
            <div
              className="bg-muted/40 rounded-2xl p-6 lg:p-7 border border-border hover:bg-white hover:shadow-card transition-all duration-300 h-full"
            >
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover bg-muted"
                />
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-foreground/60">{t.role}</div>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TDTestimonials;
