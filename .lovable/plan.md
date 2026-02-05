

## Piano: Aggiornamento Pagina Professionisti + Nuova Sezione Mappa

### PARTE 1: Aggiunta "Consulenti del Lavoro" alla Terminologia

Modificherò tutti i riferimenti da "Avvocati e Commercialisti" a "Avvocati, Commercialisti e Consulenti del Lavoro" nei seguenti file:

| File | Modifica |
|------|----------|
| `src/pages/Rete.tsx` | Title e meta description |
| `src/components/ReteHeroSection.tsx` | Badge "Per Avvocati e Commercialisti" → "Per Avvocati, Commercialisti e Consulenti del Lavoro" |
| `src/components/ReteProblemSection.tsx` | "Caro Collega Avvocato, Caro Collega Dottore Commercialista" → aggiungere Consulente del Lavoro |
| `src/components/ReteSolutionSection.tsx` | "unisce Avvocati e Commercialisti" → "unisce Avvocati, Commercialisti e Consulenti del Lavoro" |
| `src/components/ReteFAQSection.tsx` | FAQ sul coordinamento tra professionisti |

---

### PARTE 2: Rimozione Sezione Testimonianze

**File: `src/pages/Rete.tsx`**

Rimuoverò il componente `ReteTestimonialsSection` dalla pagina:
- Eliminare l'import (riga 10)
- Eliminare il rendering del componente (riga 42)

Le statistiche (Studi Attivi, Regioni Coperte, ecc.) verranno integrate nella nuova sezione mappa.

---

### PARTE 3: Nuova Sezione "La Rete in Italia" (Riscrittura Completa)

Creerò una nuova versione di `ReteMapSection.tsx` completamente diversa, senza mappa con coordinate ma con un design moderno e pulito.

#### Nuovo Design Proposto

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Copertura Nazionale                                │
│                         ━━━━━━━━━━━━━━━━━━━━━━                                │
│                                                                              │
│                     LA RETE IN TUTTA ITALIA                                  │
│                                                                              │
│    ┌─────────────────────────────────────────────────────────────────────┐  │
│    │                      STATISTICHE CHIAVE                              │  │
│    │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │  │
│    │   │    24    │  │    14    │  │   50+    │  │   96%    │            │  │
│    │   │  Studi   │  │ Regioni  │  │  Posti   │  │ Rinnovo  │            │  │
│    │   │  Attivi  │  │ Coperte  │  │ Aperti   │  │  Annuo   │            │  │
│    │   └──────────┘  └──────────┘  └──────────┘  └──────────┘            │  │
│    └─────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│    ┌─────────────────────────────────────────────────────────────────────┐  │
│    │                        ZONE GEOGRAFICHE                              │  │
│    │                                                                      │  │
│    │   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │  │
│    │   │     NORD        │  │     CENTRO      │  │       SUD       │     │  │
│    │   │                 │  │                 │  │                 │     │  │
│    │   │  • Lombardia    │  │  • Toscana      │  │  • Campania     │     │  │
│    │   │  • Veneto       │  │  • Lazio        │  │  • Puglia       │     │  │
│    │   │  • Piemonte     │  │  • Umbria       │  │  • Sicilia      │     │  │
│    │   │  • Emilia-R.    │  │  • Marche       │  │  • Calabria     │     │  │
│    │   │  • Liguria      │  │  • Abruzzo      │  │  • Sardegna     │     │  │
│    │   │  • FVG          │  │                 │  │  • Basilicata   │     │  │
│    │   │  • Trentino     │  │                 │  │                 │     │  │
│    │   │  • V. d'Aosta   │  │                 │  │                 │     │  │
│    │   │                 │  │                 │  │                 │     │  │
│    │   │   9 studi       │  │   6 studi       │  │   9 studi       │     │  │
│    │   │   📍 Disponibili│  │   📍 Pochi posti│  │   📍 Disponibili│     │  │
│    │   └─────────────────┘  └─────────────────┘  └─────────────────┘     │  │
│    └─────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│    ┌─────────────────────────────────────────────────────────────────────┐  │
│    │                      DISPONIBILITÀ REGIONALE                         │  │
│    │                                                                      │  │
│    │   ┌───────────────────────────────────────────────────────────┐     │  │
│    │   │  Regione          │  Studi Attivi  │  Posti  │   Status   │     │  │
│    │   ├───────────────────┼────────────────┼─────────┼────────────┤     │  │
│    │   │  Lombardia        │       3        │    3    │  🟡 Pochi  │     │  │
│    │   │  Emilia-Romagna   │       3        │    1    │  🔴 Quasi  │     │  │
│    │   │  Sicilia          │       1        │    5    │  🟢 Disp.  │     │  │
│    │   │  Campania         │       1        │    4    │  🟢 Disp.  │     │  │
│    │   │  ...              │      ...       │   ...   │    ...     │     │  │
│    │   └───────────────────────────────────────────────────────────┘     │  │
│    │                                                                      │  │
│    │              Aggiornamento: Febbraio 2026                            │  │
│    └─────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│                         [  Verifica Disponibilità  ]                         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Elementi della Nuova Sezione

**1. Header con Badge e Titolo**
- Badge "Copertura Nazionale"
- Titolo "La Rete in Tutta Italia"
- Sottotitolo descrittivo

**2. Statistiche Chiave (4 card animate)**
- 24 Studi Attivi (con icona Users)
- 14 Regioni Coperte (con icona MapPin)
- 50+ Posti Disponibili (con icona Briefcase)
- 96% Tasso di Rinnovo (con icona RefreshCw)

Utilizzo `useAnimatedCounter` per animare i numeri.

**3. Zone Geografiche (3 card grandi)**

Dividerò l'Italia in 3 macro-zone con card informative:

| Zona | Regioni | Studi | Status |
|------|---------|-------|--------|
| NORD | Lombardia, Veneto, Piemonte, Emilia-Romagna, Liguria, FVG, Trentino, Valle d'Aosta | 9 | Misto |
| CENTRO | Toscana, Lazio, Umbria, Marche, Abruzzo, Molise | 6 | Pochi posti |
| SUD E ISOLE | Campania, Puglia, Sicilia, Calabria, Sardegna, Basilicata | 9 | Disponibile |

Ogni card mostra:
- Nome zona con icona (Compass, Building, Sun)
- Lista regioni coperte
- Numero studi attivi
- Indicatore status (badge colorato)
- Hover effect elegante

**4. Tabella Disponibilità Dettagliata**

Tabella scrollabile con tutte le 20 regioni:
- Colonna Regione
- Colonna Studi Attivi
- Colonna Posti Disponibili
- Colonna Status (badge verde/giallo/rosso)

Design: alternating rows, hover highlight, responsive (stack su mobile).

**5. CTA Finale**

Pulsante "Verifica Disponibilità Nella Tua Zona" che scrolla al form contatti.

---

### PARTE 4: Rimozione ReteAvailabilitySection

Poiché la nuova sezione mappa includerà già la tabella di disponibilità, rimuoverò la sezione separata:

**File: `src/pages/Rete.tsx`**
- Rimuovere import `ReteAvailabilitySection`
- Rimuovere rendering del componente

---

### Riepilogo File da Modificare (8 file)

| File | Modifica |
|------|----------|
| `src/pages/Rete.tsx` | Aggiornare title/meta + rimuovere TestimonialsSection + rimuovere AvailabilitySection |
| `src/components/ReteHeroSection.tsx` | Badge → "Per Avvocati, Commercialisti e Consulenti del Lavoro" |
| `src/components/ReteProblemSection.tsx` | Aggiungere "Consulente del Lavoro" nell'apertura |
| `src/components/ReteSolutionSection.tsx` | Aggiungere "Consulenti del Lavoro" nella descrizione |
| `src/components/ReteFAQSection.tsx` | Aggiornare FAQ sul coordinamento |
| `src/components/ReteMapSection.tsx` | RISCRITTURA COMPLETA con nuovo design |

---

### Dettagli Tecnici

#### Nuovo `ReteMapSection.tsx`

```tsx
// Struttura dati zone geografiche
const zones = [
  {
    name: "Nord Italia",
    icon: Compass,
    color: "primary",
    regions: ["Lombardia", "Veneto", "Piemonte", "Emilia-Romagna", "Liguria", "Friuli-VG", "Trentino-AA", "Valle d'Aosta"],
    studios: 10,
    spots: 18,
    status: "pochi"
  },
  {
    name: "Centro Italia",
    icon: Building,
    color: "gold",
    regions: ["Toscana", "Lazio", "Umbria", "Marche", "Abruzzo", "Molise"],
    studios: 6,
    spots: 14,
    status: "pochi"
  },
  {
    name: "Sud e Isole",
    icon: Sun,
    color: "primary",
    regions: ["Campania", "Puglia", "Sicilia", "Calabria", "Sardegna", "Basilicata"],
    studios: 8,
    spots: 29,
    status: "disponibile"
  }
];

// Dati regionali per tabella
const regions = [
  { name: "Lombardia", studi: 3, posti: 3, status: "pochi" },
  { name: "Veneto", studi: 2, posti: 2, status: "pochi" },
  // ... tutte le regioni
];
```

#### Componenti UI utilizzati
- `useInView` per animazioni scroll
- `useAnimatedCounter` per statistiche animate
- Card con gradient e hover effects
- Tabella responsive con alternating rows
- Badge colorati per status

---

### Risultati Attesi

1. **Inclusività professionale**: Consulenti del Lavoro riconosciuti come target
2. **Pagina più pulita**: Niente testimonianze avvocati, focus su dati concreti
3. **Mappa moderna**: Design professionale senza coordinate problematiche
4. **UX migliorata**: Informazioni chiare e ben organizzate
5. **Mobile-first**: Layout responsive ottimizzato

