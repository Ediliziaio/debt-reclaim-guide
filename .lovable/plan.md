
## Piano: Miglioramento Pagina /rete (Professionisti) con Bilanciamento Oro

### Problemi Identificati

Analizzando il codice della pagina /rete, ho trovato gli stessi problemi della home page:
- Predominanza di Navy come accento (text-primary)
- Utilizzo di `secondary` (celeste #3C83F6) che non fa parte della palette
- Bottoni CTA con gradient poco visibile
- Brand "RF Debt Restructuring" ancora presente in alcuni file (già corretto)
- Mancanza di alternanza cromatica tra sezioni

---

### Modifiche Proposte per Sezione

#### 1. ReteHeroSection.tsx - Bottone CTA + Accenti Oro

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 24-26 | Badge "Per Avvocati" | `text-primary bg-primary/20` | `text-gold bg-gold/20` |
| 37 | "PRIMA Rete Nazionale" | `text-primary` | `text-gold` |
| 48 | "know-how, coordinamento..." | `text-primary` | `text-gold` |
| 55 | Bottone CTA | `variant="hero"` | `variant="cta"` |
| 78 | Icone stats | `text-primary` | `text-gold` |
| 91 | Pallino scroll | `bg-primary` | `bg-gold` |

---

#### 2. ReteBenefitsSection.tsx - Icone in Oro Alternate

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 118 | "RF Debt Restructuring" | brand inglese | già corretto |
| 138-139 | Icone benefit | `bg-primary/10 text-primary` | Alternare Navy/Oro |
| 148 | Valore benefit | `text-primary` | `text-gold` |
| 167 | Check icone | `text-primary` | `text-gold` |
| 180 | Box totale | `from-primary to-secondary` | `from-navy to-primary` (rimuove celeste) |

---

#### 3. ReteEarningsSection.tsx - Sostituire Celeste

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 81 | Box "+1500% ROI" | `bg-secondary` | `bg-gold` |
| 141 | Gradient progress bar | `from-primary to-secondary` | `from-primary to-gold` |

---

#### 4. ReteROISection.tsx - Rimuovere Celeste

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 49 | Header scenario conserv. | `bg-secondary/10` | `bg-primary/10` |
| 102 | Gradient scenario realist. | `from-primary to-secondary` | `from-navy to-gold` |

---

#### 5. ReteTestimonialsSection.tsx - Highlight in Oro

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 109 | Badge highlight | `bg-primary/10 text-primary` | `bg-gold/10 text-gold` |

---

#### 6. ReteComparisonSection.tsx - Box "Entri" in Oro

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 79-84 | Colonna "Se ENTRI" | `bg-primary/5 text-primary` | `bg-gold/5 text-gold` |
| 89 | Check icone | `text-primary` | `text-gold` |
| 105 | Bottone CTA | `bg-primary` | `bg-gold text-navy-dark` |

---

#### 7. ReteProcessSection.tsx - Numeri Alternati

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 114, 135-148 | Step label + stats | `text-primary` | Alternare Navy/Oro (1,3,5 Navy / 2,4 Oro) |
| 124, 142 | Check icone | `text-primary` | `text-gold` |
| 149-151 | Icone centrali timeline | `bg-primary` | Alternare `bg-primary` e `bg-gold` |

---

#### 8. ReteHeader.tsx - Bottone CTA Oro

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 69 | Bottone header | `variant="hero"` | `variant="cta"` |
| 92 | Bottone mobile | `variant="hero"` | `variant="cta"` |

---

### Riepilogo Modifiche per File

| File | Modifiche Principali |
|------|---------------------|
| **ReteHeroSection.tsx** | Badge oro, bottone CTA, icone stats oro, highlight oro |
| **ReteBenefitsSection.tsx** | Icone alternate, check oro, rimuove gradient celeste |
| **ReteEarningsSection.tsx** | Box ROI → oro, progress bar → oro |
| **ReteROISection.tsx** | Rimuove secondary, gradient → navy/gold |
| **ReteTestimonialsSection.tsx** | Badge highlight → oro |
| **ReteComparisonSection.tsx** | Colonna "Entri" → oro, bottone → oro |
| **ReteProcessSection.tsx** | Check oro, timeline alternata |
| **ReteHeader.tsx** | Bottoni → variant="cta" |

---

### Strategia Colori Finale

| Contesto | Colore |
|----------|--------|
| Sfondo chiaro, accenti primari | `text-primary` (Navy) |
| Elementi highlight/CTA | `text-gold` |
| Badge successo/risultati | `bg-gold/10 text-gold` |
| Bottoni principali | `variant="cta"` (sfondo oro) |
| Gradient decorativi | `from-navy to-gold` (no celeste) |
| Icone alternate | Navy (1,3,5) / Oro (2,4,6) |

---

### Risultato Atteso

- Pagina /rete visivamente coerente con la home page
- Nessun uso di celeste (#3C83F6/secondary)
- Bottoni CTA più visibili e accattivanti
- Alternanza cromatica Navy/Oro tra le sezioni
- Highlight in oro per risultati e badge di successo
- Brand unificato "RF Ristrutturazione Debiti" (già fatto)
