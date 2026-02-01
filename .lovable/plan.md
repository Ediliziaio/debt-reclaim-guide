

## Piano: Bilanciamento Oro nelle Sezioni del Sito

### Problema Identificato
Attualmente il sito usa prevalentemente Navy per tutti gli accenti. L'oro appare solo nel gradient del bottone Hero ma non è abbastanza visibile. Per rendere il design più accattivante e bilanciato, serve alternare Navy e Oro nelle varie sezioni.

---

### Strategia di Colori per Sezione

| Sezione | Accento Attuale | Accento Proposto |
|---------|-----------------|------------------|
| **Hero** | Navy + Gradient | **Bottone full Gold** + accenti Navy |
| **Good News** | Solo Navy | **Icone e checkmark in Oro** |
| **Method** | Solo Navy | Numeri e icone alternati **Navy/Oro** |
| **Statistics** | Navy + Celeste | Navy + **Oro** (no celeste) |
| **Case Studies** | Solo Navy | Badge riduzione in **Oro** |

---

### Modifiche Dettagliate

#### 1. RFHeroSection.tsx - Bottone CTA più Accattivante

**Problema**: Il bottone `variant="hero"` ha gradient navy-oro ma il navy domina.

**Soluzione**: Usare `variant="cta"` che è full gold, più visibile e accattivante.

```tsx
// Linea 61-69 - Bottone primario
<Button 
  variant="cta"  // cambiato da "hero"
  size="lg" 
  onClick={onOpenContact}
  className="group w-full sm:w-auto text-sm md:text-base"
>
```

**Bonus**: Aggiungere accento oro nel titolo per bilanciare.

```tsx
// Linea 41-45 - Titolo
<h1>
  <span className="text-gold">BASTA</span> Notti Insonni  // cambiato da text-primary
  ...
</h1>
```

---

#### 2. RFGoodNewsSection.tsx - Alternare Oro

**Problema**: Tutte le icone e checkmark sono Navy su sfondo chiaro.

**Soluzione**: Icone dei benefit in Oro per risaltare.

```tsx
// Linea 68-69 - Icone benefit
<div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold flex items-center justify-center">
  <benefit.icon className="w-6 h-6 text-gold group-hover:text-gold-foreground" />
</div>

// Linea 73 - Checkmark
<Check className="w-5 h-5 text-gold" />
```

---

#### 3. RFMethodSection.tsx - Numeri e Icone Alternati

**Problema**: Tutti i numeri e icone sono Navy.

**Soluzione**: Alternare tra Navy (dispari) e Oro (pari).

```tsx
// Numeri: "01" e "03" Navy, "02" e "04" Oro
// Icone: stessa alternanza
```

---

#### 4. RFStatisticsSection.tsx - Sostituire Celeste con Oro

**Problema**: Usa `secondary` (celeste #3C83F6) che non fa parte della palette.

**Soluzione**: Sostituire `secondary` con `gold` ovunque.

```tsx
// colorClasses - Linea 127-131
secondary: {
  bg: 'bg-gold/10',          // era bg-secondary/10
  text: 'text-gold',          // era text-secondary
  border: 'border-gold/20 hover:border-gold/40',  // era border-secondary
}

// Background blur - Linea 58
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
```

---

#### 5. RFCaseStudiesSection.tsx - Badge Riduzione in Oro

**Problema**: Il badge con la percentuale di riduzione è Navy.

**Soluzione**: Badge in Oro per evidenziare il risultato positivo.

```tsx
// Linea 78-81 - Badge riduzione
<div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gold/10 text-gold font-bold text-sm">
  <TrendingDown className="w-4 h-4" />
  -{caseItem.reduction}
</div>
```

---

### Riepilogo Modifiche per File

| File | Modifiche |
|------|-----------|
| **RFHeroSection.tsx** | Bottone → `variant="cta"`, "BASTA" → `text-gold` |
| **RFGoodNewsSection.tsx** | Icone benefit → `text-gold`, Check → `text-gold` |
| **RFMethodSection.tsx** | Numeri/icone alternati Navy/Oro |
| **RFStatisticsSection.tsx** | `secondary` → `gold` ovunque |
| **RFCaseStudiesSection.tsx** | Badge riduzione → `text-gold` |

---

### Risultato Atteso

- Bottone Hero immediatamente visibile con sfondo oro pieno
- Alternanza cromatica equilibrata tra sezioni
- Nessun uso di celeste (#3C83F6)
- Palette coerente: Navy per elementi strutturali, Oro per accenti e call-to-action
- Maggiore appeal visivo e invito all'azione più evidente

