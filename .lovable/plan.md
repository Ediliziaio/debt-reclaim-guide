

## Piano: Aggiornamento Footer con Informazioni Aziendali Complete

### Nuova Struttura del Footer

Ristrutturerò il footer per includere tutte le informazioni richieste, organizzate in modo chiaro e professionale.

### Layout Proposto

| Sezione | Contenuto |
|---------|-----------|
| **Brand** | Logo + descrizione aggiornata (inclusi Consulenti del Lavoro) |
| **Le Nostre Sedi** | Torino + Napoli con indirizzi completi |
| **Contatti** | Telefono + Email + PEC |
| **Orari** | Orari di apertura |
| **Dati Societari** | Ragione sociale, P.IVA, PEC, sede legale |

---

### Dettaglio Modifiche

**File: `src/components/Footer.tsx`**

#### 1. Aggiornamento Descrizione Brand
- Da: "Avvocati e Commercialisti"
- A: "Avvocati, Commercialisti e Consulenti del Lavoro"

#### 2. Nuova Sezione "Le Nostre Sedi"
```
TORINO
Via Frejus 106
10137 Torino

NAPOLI  
Via San Giacomo 24
Napoli (NA)
```

#### 3. Aggiornamento Contatti
- Telefono: +39 352 017 9939
- Email: info@ristrutturazionidebiti.it

#### 4. Nuova Sezione Dati Societari (nel bottom bar)
```
RF DEBT RESTRUCTURING ASSOCIAZIONE PROFESSIONALE
Sede Legale: Via San Giacomo 24, Napoli (NA)
P.IVA: 10974001215
PEC: ristrutturazionidebiti@pec.it
```

---

### Struttura Grid Aggiornata

Passerò da 4 colonne a 5 colonne per desktop, con layout responsive:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]                    │  Le Nostre Sedi  │  Contatti      │  Orari          │
│  La prima rete nazionale   │                  │                │                 │
│  di Avvocati,             │  📍 TORINO       │  📞 +39 352... │  🕐 Lun-Ven     │
│  Commercialisti e          │  Via Frejus 106  │                │  9:00-18:00     │
│  Consulenti del Lavoro...  │  10137 Torino    │  ✉️ info@...   │                 │
│                            │                  │                │  Sab 9:00-13:00 │
│                            │  📍 NAPOLI       │                │                 │
│                            │  Via San Giacomo │                │  Dom: Chiuso    │
│                            │  24, Napoli      │                │                 │
└──────────────────────────────────────────────────────────────────────────────────┘
│                              BOTTOM BAR                                           │
│  © 2026 RF Ristrutturazioni...  │  Privacy │ Cookie │ Note Legali                │
│                                                                                   │
│  RF DEBT RESTRUCTURING ASSOCIAZIONE PROFESSIONALE                                 │
│  Sede Legale: Via San Giacomo 24, Napoli (NA) • P.IVA: 10974001215               │
│  PEC: ristrutturazionidebiti@pec.it                                               │
│                                                                                   │
│  Disclaimer: Le informazioni contenute...                                         │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

### Modifiche Tecniche

1. **Grid layout**: `grid md:grid-cols-2 lg:grid-cols-4` per responsive
2. **Icone aggiuntive**: Importare `Building` da lucide-react per le sedi
3. **Sezione dati societari**: Nuovo blocco nel bottom bar con sfondo leggermente diverso
4. **Link email/telefono**: Aggiungere `href="mailto:..."` e `href="tel:..."`

---

### Codice Aggiornato

Le modifiche principali:
- Sezione Brand con descrizione aggiornata
- Nuova sezione "Le Nostre Sedi" con entrambi gli indirizzi
- Contatti aggiornati con numero e email corretti
- Sezione dati legali nel footer bottom con ragione sociale, P.IVA e PEC

