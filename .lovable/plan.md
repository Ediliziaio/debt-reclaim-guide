

## Piano: Rimozione Animazioni e Correzione Mappa Professionisti

### Problema 1: Animazioni da Rimuovere

Tutte le sezioni della pagina /rete utilizzano `useInView` con classi di animazione come:
- `animate-fade-up`
- `animation-delay-XXX`
- `opacity-0` (quando `isInView` e false)
- `animate-fade-in`
- `animate-bounce-soft`

Queste animazioni causano problemi di UX perche:
1. Gli elementi appaiono invisibili (`opacity-0`) finche non entrano in vista
2. Ritardi nelle animazioni (`animation-delay-XXX`) rallentano la percezione
3. Effetti di bounce/pulse sono distraenti

---

### Problema 2: Mappa con Puntini Non Funzionanti

La mappa in `ReteMapSection.tsx` ha diversi problemi:
1. I marker usano animazioni complesse (`marker-appear`, `pulse-glow`)
2. Le posizioni sono basate su coordinate fisse (x, y su 500x800) che potrebbero non essere precise
3. Il glow effect e troppo aggressivo
4. La logica di posizionamento con percentuali potrebbe non funzionare correttamente

---

### File da Modificare

| File | Modifiche |
|------|-----------|
| `ReteHeroSection.tsx` | Rimuovere tutte le animazioni, contenuto sempre visibile |
| `ReteProblemSection.tsx` | Rimuovere animazioni |
| `ReteSolutionSection.tsx` | Rimuovere animazioni |
| `ReteFoundersSection.tsx` | Rimuovere animazioni |
| `ReteMarketStatsSection.tsx` | Rimuovere animazioni |
| `ReteBenefitsSection.tsx` | Rimuovere animazioni |
| `ReteGrowthPathSection.tsx` | Rimuovere animazioni |
| `ReteTestimonialsSection.tsx` | Rimuovere animazioni |
| `ReteComparisonSection.tsx` | Rimuovere animazioni |
| `ReteUrgencySection.tsx` | Rimuovere animazioni |
| `ReteProcessSection.tsx` | Rimuovere animazioni, rimuovere freccia bouncy |
| `ReteFAQSection.tsx` | Rimuovere animazioni |
| `ReteMapSection.tsx` | Rimuovere animazioni + semplificare marker |
| `ReteAvailabilitySection.tsx` | Rimuovere animazioni |
| `ReteContactFormSection.tsx` | Rimuovere animazioni |
| `ReteFinalCTASection.tsx` | Rimuovere animazioni |

---

### Dettaglio: Rimozione Animazioni (Pattern Generale)

Per ogni file:

**Prima:**
```tsx
<div className={`... ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
```

**Dopo:**
```tsx
<div className="...">
```

**Prima:**
```tsx
style={{ animationDelay: `${(index + 1) * 100}ms` }}
```

**Dopo:**
Rimuovere completamente la prop `style`

---

### Dettaglio: Correzione ReteMapSection.tsx

1. **Rimuovere CSS animations inline** (pulse-glow, marker-appear, map-pulse)
2. **Semplificare i marker**:
   - Rimuovere `animate-pulse-glow`
   - Rimuovere `animate-ping` per il ring interno
   - Usare solo colori solidi senza glow pulsante
3. **Posizioni marker**: Mantenere le coordinate attuali ma verificare che funzionino
4. **Rimuovere** `map-pulse-animation` dalla mappa

**Nuovo stile marker semplificato:**
```tsx
<div
  className={`absolute cursor-pointer
    ${config.color} rounded-full border-2 border-white
    hover:scale-125 hover:z-20 transition-transform
    ${activeRegion?.name === region.name ? 'scale-125 z-20' : ''}
  `}
  style={{
    left: `${(region.x / 500) * 100}%`,
    top: `${(region.y / 800) * 100}%`,
    width: `${markerSize}px`,
    height: `${markerSize}px`,
    transform: 'translate(-50%, -50%)',
    boxShadow: config.shadow, // ombra statica, non animata
  }}
>
```

**Nuovo statusConfig semplificato:**
```tsx
const statusConfig = {
  "disponibile": {
    color: "bg-primary",
    shadow: "0 0 12px 4px hsl(142 71% 45% / 0.5)",
    label: "Disponibile",
  },
  "pochi": {
    color: "bg-amber-500",
    shadow: "0 0 10px 3px hsl(38 92% 50% / 0.4)",
    label: "Pochi posti",
  },
  "quasi-completo": {
    color: "bg-destructive",
    shadow: "0 0 10px 3px hsl(0 84% 60% / 0.4)",
    label: "Quasi completo",
  },
};
```

---

### Riepilogo Modifiche

| Categoria | Modifica |
|-----------|----------|
| **16 file** | Rimuovere `useInView` o renderlo non-animato |
| **16 file** | Rimuovere classi `animate-*` e `opacity-0` condizionali |
| **16 file** | Rimuovere `animation-delay-*` |
| **1 file (ReteMapSection)** | Semplificare marker senza animazioni |
| **1 file (ReteProcessSection)** | Rimuovere freccia bouncy |
| **1 file (ReteHeroSection)** | Rimuovere scroll indicator bouncy |

---

### Risultato Atteso

- Contenuto sempre visibile immediatamente
- Nessun effetto di comparsa/scomparsa
- Mappa con marker statici ma interattivi (hover/click)
- Glow statico sui marker (non pulsante)
- UX piu fluida e professionale

