
## Piano: Aggiungere Animazioni Scroll-Triggered alla Pagina Professionisti (/rete)

### Pattern di Animazione da Replicare

La home page utilizza un pattern coerente basato su:

1. **Hook `useInView`** con threshold 0.2-0.3
2. **Transizioni CSS** con classi condizionali:
   - `transition-all duration-700`
   - `${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
3. **Delay progressivi** per liste:
   - `style={{ transitionDelay: '${200 + index * 100}ms' }}`
4. **Varianti di animazione**:
   - Fade up: `translate-y-8` -> `translate-y-0`
   - Fade laterale: `translate-x-8` o `-translate-x-8` -> `translate-x-0`
   - Scale: `scale-95` -> `scale-100`

---

### File da Modificare (16 componenti)

| File | Stato Attuale | Modifiche |
|------|---------------|-----------|
| `ReteHeroSection.tsx` | Nessuna animazione | Aggiungere `animate-fade-up` + `animation-delay-XXX` |
| `ReteProblemSection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteSolutionSection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteFoundersSection.tsx` | Ha `useInView` ma non usa animazioni | Attivare transizioni |
| `ReteMarketStatsSection.tsx` | Ha `useInView` ma non usa animazioni | Attivare transizioni |
| `ReteBenefitsSection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteGrowthPathSection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteTestimonialsSection.tsx` | Ha `useInView` ma non usa animazioni | Attivare transizioni |
| `ReteComparisonSection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteUrgencySection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteProcessSection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteFAQSection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteMapSection.tsx` | Nessuna animazione | Aggiungere `useInView` per header/stats |
| `ReteAvailabilitySection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteContactFormSection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |
| `ReteFinalCTASection.tsx` | Nessuna animazione | Aggiungere `useInView` + transizioni |

---

### Implementazione Tipo per Ogni Sezione

**Prima (senza animazioni):**
```tsx
const ReteSectionExample = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Titolo</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="p-6 bg-card rounded-xl">
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

**Dopo (con animazioni):**
```tsx
import { useInView } from "@/hooks/useInView";

const ReteSectionExample = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Titolo
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 bg-card rounded-xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

### Dettagli Specifici per Sezione

#### ReteHeroSection
- Badge: `animate-fade-up`
- H1: `animate-fade-up animation-delay-100`
- Subheadline: `animate-fade-up animation-delay-200`
- CTA buttons: `animate-fade-up animation-delay-300`
- Stats: `animate-fade-up animation-delay-400`

#### ReteProblemSection, ReteSolutionSection
- Header con fade up
- Cards con delay progressivo `200 + index * 100ms`

#### ReteFoundersSection
- Header con fade up
- Founder cards con delay `200 + index * 150ms`
- Stats box con fade up `delay-500`

#### ReteMarketStatsSection
- Header badge con scale `${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`
- Stats cards con delay progressivo

#### ReteBenefitsSection
- Header con fade up
- Accordion items con delay progressivo

#### ReteGrowthPathSection
- Header con fade up
- Timeline cards con delay progressivo (alternando lati)

#### ReteTestimonialsSection
- Stats con delay progressivo
- Testimonial cards con delay `200 + index * 100ms`

#### ReteComparisonSection
- Header con fade up
- Due colonne con fade laterale opposto

#### ReteUrgencySection
- Badge con scale animation
- Reason cards con delay progressivo

#### ReteProcessSection
- Header con fade up
- Timeline steps con delay progressivo

#### ReteFAQSection
- Header con fade up
- FAQ items con delay progressivo

#### ReteMapSection
- Header con fade up
- Stats grid con delay
- Legend con fade up delay

#### ReteAvailabilitySection
- Header con fade up
- Table rows con delay progressivo

#### ReteContactFormSection
- Header con fade up
- Form con fade up delay-200

#### ReteFinalCTASection
- Header con fade up
- Two paths con fade laterale opposto
- CTA con scale animation

---

### Risultato Atteso

- Animazioni scroll-triggered coerenti con la home page
- Elementi che appaiono gradualmente quando entrano in viewport
- Delay progressivi per liste e griglie
- UX fluida e professionale
- Pattern identico tra home e pagina professionisti
