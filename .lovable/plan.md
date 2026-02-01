
## Piano: Correzione Finale Testo Brand + Colori Celesti

### Parte 1: Cambio Nome Brand "RF Debt Restructuring" → "RF Ristrutturazione Debiti"

Il testo "RF Debt Restructuring" appare in 11 file e va sostituito con "RF Ristrutturazione Debiti".

| File | Occorrenze |
|------|------------|
| RFWhoWeAreSection.tsx | 1 (linea 44) |
| RFTeamSection.tsx | 1 (linea 64) |
| RFTargetAudienceSection.tsx | 1 (linea 40) |
| RFGuaranteesSection.tsx | 2 (linee 100, 118) |
| RFFAQSection.tsx | 1 (linea 66) |
| Index.tsx | 1 (meta title, linea 30) |
| Rete.tsx | 1 (meta title, linea 29) |
| CasiStudio.tsx | 2 (linee 50, 234) |
| ReteFoundersSection.tsx | 1 (linea 55) |
| ReteSolutionSection.tsx | 1 (linea 44) |
| ReteBenefitsSection.tsx | 1 (linea 100) |

---

### Parte 2: Correzione Colore Celeste (`text-secondary` / #3C83F6)

Il colore `secondary` (celeste #3C83F6) viene usato in alcune sezioni. L'utente preferisce non usare questo colore.

**Opzioni di sostituzione:**
- Su sfondo chiaro: `text-primary` (Navy) o `text-gold`
- Su sfondo navy: `text-gold`

| File | Linea | Elemento | Da | A |
|------|-------|----------|-----|-----|
| **RFHeroSection.tsx** | 49 | "PRIMA Rete Nazionale" | `text-secondary` | `text-primary` |
| **RFHeroSection.tsx** | 90-91 | Icona Clock + bg | `bg-secondary/10 text-secondary` | `bg-primary/10 text-primary` |
| **RFGoodNewsSection.tsx** | 88 | Box sfondo | `bg-secondary/10 border-secondary/20` | `bg-primary/10 border-primary/20` |
| **RFGoodNewsSection.tsx** | 90 | "SOLO" | `text-secondary` | `text-primary` |
| **RFGoodNewsSection.tsx** | 97 | Frase finale | `text-secondary` | `text-primary` |
| **RFCaseStudiesSection.tsx** | 85 | Soluzione | `text-secondary` | `text-primary` |
| **RFHeader.tsx** | 55 | Link Rete | `bg-secondary/10 text-secondary` | `bg-gold/20 text-gold` |
| **RFHeader.tsx** | 84 | Link mobile | `text-secondary` | `text-gold` |

---

### Riepilogo Tecnico

**File da modificare per nome brand (11 file):**
- RFWhoWeAreSection.tsx
- RFTeamSection.tsx
- RFTargetAudienceSection.tsx
- RFGuaranteesSection.tsx
- RFFAQSection.tsx
- Index.tsx
- Rete.tsx
- CasiStudio.tsx
- ReteFoundersSection.tsx
- ReteSolutionSection.tsx
- ReteBenefitsSection.tsx

**File da modificare per colore celeste (4 file):**
- RFHeroSection.tsx
- RFGoodNewsSection.tsx
- RFCaseStudiesSection.tsx
- RFHeader.tsx

---

### Palette Finale Coerente

| Contesto | Colore |
|----------|--------|
| Sfondo chiaro, accenti primari | `text-primary` (Navy) |
| Sfondo Navy, tutti gli accenti | `text-gold` o `text-gold-light` |
| Link speciali (Rete Professionisti) | `text-gold` con `bg-gold/20` |
| Nessun uso di | `text-secondary` (celeste) |

---

### Risultato Atteso

- Nome brand unificato: "RF Ristrutturazione Debiti" ovunque
- Nessun testo celeste (#3C83F6) visibile
- Palette coerente Navy + Gold su tutto il sito
- Massima leggibilita su tutti gli sfondi
