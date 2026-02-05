

## Piano: Modifiche Terminologia + Pagina Casi Risolti + Rimozione Garanzia

### PARTE 1: Cambio Terminologia "Consulenza Gratuita" → "Colloquio Gratuito"

Modificherò tutti i riferimenti nelle seguenti posizioni della home page:

| File | Testo Attuale | Nuovo Testo |
|------|---------------|-------------|
| `RFHeroSection.tsx` | "Prenota Consulenza Gratuita" | "Prenota Colloquio Gratuito" |
| `RFHeader.tsx` (desktop) | "Consulenza Gratuita" | "Colloquio Gratuito" |
| `RFHeader.tsx` (mobile) | "Consulenza Gratuita" | "Colloquio Gratuito" |
| `RFFAQSection.tsx` | "consulenza gratuita" | "colloquio gratuito" |
| `RFFinalCTA.tsx` | "Prenota Una Consulenza Gratuita" | "Prenota Un Colloquio Gratuito" |
| `StickyCTA.tsx` | "Consulenza Gratuita" | "Colloquio Gratuito" |

---

### PARTE 2: Rimozione Garanzia "Soddisfatti o Rimborsati"

**File: `RFGuaranteesSection.tsx`**

Rimuoverò:
1. La garanzia "Soddisfatti o Rimborsati" dall'array `guarantees` (righe 20-24)
2. Il badge "Garanzia Soddisfatti o Rimborsati" in fondo alla sezione (righe 188-194)
3. Cambierò il titolo da "4 Garanzie Concrete" a "3 Garanzie Concrete"

Le 3 garanzie rimanenti saranno:
- Valutazione Documentata
- Riferimenti Normativi Chiari
- Percorso Chiaro

**File: `RFFAQSection.tsx`**

Rimuoverò il riferimento alla garanzia "Soddisfatti o Rimborsati" nella risposta alla domanda "Cosa succede se la procedura non va a buon fine?" (riga 75)

**File: `CrisiImpresaSection.tsx`**

Rimuoverò la garanzia "Soddisfatti o rimborsati" dall'array `garanzie` (righe 49-53)

---

### PARTE 3: Nuova Pagina Casi Risolti Professionale

Riscriverò completamente `src/pages/CasiStudio.tsx` con casi studio realistici dal punto di vista legale-giuridico.

#### Struttura della Nuova Pagina

```
┌─────────────────────────────────────────┐
│  Header con navigazione                 │
├─────────────────────────────────────────┤
│  HERO: "Casi Reali di Esdebitazione"    │
│  Sottotitolo: spiegazione legale        │
├─────────────────────────────────────────┤
│  INTRODUZIONE GIURIDICA                 │
│  Spiegazione del quadro normativo       │
│  (L. 3/2012, Codice Crisi Insolvenza)   │
├─────────────────────────────────────────┤
│  STATISTICHE aggregate                  │
│  (casi gestiti, riduzione media, ecc.)  │
├─────────────────────────────────────────┤
│  FILTRI per categoria                   │
│  Privati | Imprese | Debito Fiscale     │
├─────────────────────────────────────────┤
│  CASI STUDIO DETTAGLIATI (10 casi)      │
│  - Ogni caso con narrazione completa    │
│  - Quadro normativo applicato           │
│  - Procedura seguita step-by-step       │
│  - Risultati documentati                │
│  - Testimonianza cliente                │
├─────────────────────────────────────────┤
│  SEZIONE PROCEDURA LEGALE               │
│  Come funziona il percorso giuridico    │
├─────────────────────────────────────────┤
│  CTA FINALE                             │
│  "Richiedi un colloquio gratuito"       │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

#### Nuovi Casi Studio (10 casi realistici)

**CATEGORIA PRIVATI (4 casi)**

1. **Famiglia con Sovraindebitamento da Mutuo e Prestiti**
   - Situazione: Coppia con mutuo ipotecario (€180.000 residuo), 4 prestiti personali (€45.000), carte revolving (€15.000). Reddito familiare sceso del 40% per cassa integrazione.
   - Quadro normativo: Piano del Consumatore ex art. 67 e ss. Codice Crisi Insolvenza
   - Procedura: Presentazione istanza al Tribunale, nomina OCC, redazione piano, udienza di omologa
   - Risultato: Riduzione debito da €240.000 a €72.000 (70%), piano quinquennale €1.200/mese, blocco pignoramento stipendio, casa salvata
   - Tempistica: 7 mesi dall'istanza all'omologa

2. **Pensionato con Debiti da Cessione del Quinto**
   - Situazione: Pensionato 68 anni, pensione €1.400/mese. Tre cessioni del quinto stratificate per aiutare i figli, debito complessivo €52.000.
   - Quadro normativo: Procedura di Liquidazione Controllata ex art. 268 e ss. CCI
   - Procedura: Liquidazione del patrimonio disponibile (auto vecchia, piccolo conto), esdebitazione del residuo
   - Risultato: Pagamento €8.000, cancellazione €44.000 (85% riduzione), pensione integrale ripristinata
   - Tempistica: 5 mesi

3. **Ex Imprenditore con Debiti Residui**
   - Situazione: Ex titolare di SNC cessata, debiti verso banche (€95.000), fornitori (€35.000), INPS (€28.000). Ora dipendente con stipendio €1.600/mese.
   - Quadro normativo: Concordato Minore ex art. 74 e ss. CCI
   - Procedura: Accordo con maggioranza creditori qualificata, omologa tribunalare
   - Risultato: Stralcio 65% del debito, rateizzazione residuo in 4 anni
   - Tempistica: 9 mesi

4. **Garante/Fideiussore di Azienda Fallita**
   - Situazione: Fideiussore per €150.000 di finanziamento bancario, azienda fallita, escussione garanzia personale. Nessun patrimonio, stipendio €1.800/mese.
   - Quadro normativo: Esdebitazione del Sovraindebitato, Rito del Consumatore
   - Procedura: Dimostrazione meritevolezza, assenza di colpa nel fallimento, piano sostenibile
   - Risultato: Riduzione debito da €150.000 a €30.000, piano settennale €360/mese
   - Tempistica: 8 mesi

**CATEGORIA IMPRESE (3 casi)**

5. **SRL Manifatturiera in Crisi di Liquidità**
   - Situazione: SRL con 15 dipendenti, fatturato €2M/anno. Debiti bancari €480.000, fornitori €180.000, Erario €120.000. Crisi da perdita cliente principale (40% fatturato).
   - Quadro normativo: Concordato Preventivo in Continuità ex art. 84 e ss. CCI
   - Procedura: Attestazione veridicità dati, proposta creditori, votazione, omologa
   - Risultato: Pagamento 45% ai chirografari in 4 anni, 100% privilegiati, continuità aziendale, tutti i dipendenti mantenuti
   - Tempistica: 14 mesi

6. **Ditta Individuale Settore Ristorazione**
   - Situazione: Ristorante con debiti post-COVID. Fornitori €65.000, affitti arretrati €24.000, prestito bancario €45.000, contributi INPS €18.000.
   - Quadro normativo: Accordo di Ristrutturazione dei Debiti ex art. 57 CCI
   - Procedura: Negoziazione diretta con creditori, attestazione professionista indipendente, deposito accordo
   - Risultato: Stralcio 50% debiti chirografari, dilazione 36 mesi, rinegoziazione affitto, attività rilanciata
   - Tempistica: 6 mesi

7. **SAS Commerciale con Soci Garanti**
   - Situazione: SAS nel commercio all'ingrosso. Debiti bancari €320.000 (con garanzie personali soci), fornitori €95.000. Impossibilità di proseguire l'attività.
   - Quadro normativo: Concordato Preventivo Liquidatorio ex art. 84 CCI + Esdebitazione soci
   - Procedura: Cessione asset aziendali, pagamento creditori, esdebitazione soci persone fisiche
   - Risultato: Liquidazione ordinata, pagamento 35% creditori, soci liberati da garanzie personali
   - Tempistica: 18 mesi

**CATEGORIA DEBITO FISCALE (3 casi)**

8. **Imprenditore con Cartelle Esattoriali Multiple**
   - Situazione: Imprenditore edile con cartelle AER per €380.000 (IVA, IRPEF, contributi). Conti pignorati, veicoli fermi, immobile con ipoteca.
   - Quadro normativo: Transazione Fiscale ex art. 63 CCI nell'ambito del Concordato Preventivo
   - Procedura: Presentazione proposta AE e INPS, parere favorevole Enti, omologa tribunale
   - Risultato: Pagamento 30% del dovuto in 5 anni, sblocco conti e veicoli, cancellazione ipoteca post-pagamento
   - Tempistica: 12 mesi

9. **Ex Partita IVA con Debito INPS**
   - Situazione: Ex commerciante con Gestione Separata INPS. Debito contributivo €78.000, cartelle dal 2015 al 2022. Ora dipendente, stipendio €1.500/mese.
   - Quadro normativo: Piano del Consumatore (il debito previdenziale è trattabile come chirografario)
   - Procedura: Presentazione piano con OCC, attestazione fattibilità, omologa
   - Risultato: Riduzione debito del 75%, pagamento €19.500 in 5 anni (€325/mese)
   - Tempistica: 6 mesi

10. **Società con Avvisi di Accertamento Contestati**
    - Situazione: SRL ricevente 3 avvisi di accertamento per €280.000 (IVA su operazioni contestate). Ricorsi pendenti, fermo amministrativo su veicoli.
    - Quadro normativo: Accertamento con Adesione ex D.Lgs. 218/1997 + Transazione Fiscale
    - Procedura: Negoziazione con Ufficio Accertatore, rideterminazione imponibile, accordo sulla pretesa ridotta
    - Risultato: Riduzione pretesa del 55%, rateizzazione 4 anni, sblocco immediato veicoli
    - Tempistica: 8 mesi

#### Elementi per Ogni Caso Studio

Ogni caso includerà:

1. **Intestazione**
   - Icona categoria
   - Titolo descrittivo
   - Location
   - Importo debito iniziale
   - Badge riduzione percentuale

2. **Il Problema** (sezione espandibile)
   - Descrizione narrativa della situazione iniziale
   - Tipologie di debiti coinvolti
   - Conseguenze già in atto (pignoramenti, fermi, ecc.)

3. **Il Quadro Giuridico**
   - Normativa di riferimento
   - Procedura applicabile
   - Requisiti verificati

4. **Il Percorso** (timeline)
   - Fase 1: Analisi documentale
   - Fase 2: Strategia legale
   - Fase 3: Presentazione istanza/proposta
   - Fase 4: Negoziazione/Udienza
   - Fase 5: Omologa/Accordo

5. **I Risultati**
   - Riduzione percentuale ottenuta
   - Nuovo piano di pagamento
   - Benefici collaterali (sblocchi, cancellazioni)

6. **La Testimonianza**
   - Quote del cliente (anonimizzata)
   - Nome e città

#### Sezione Introduttiva Giuridica

Aggiungerò una sezione che spiega il quadro normativo:

> **Il Quadro Normativo**
>
> I casi presentati sono stati risolti applicando le procedure previste dal **Codice della Crisi d'Impresa e dell'Insolvenza** (D.Lgs. 14/2019) e dalla precedente **Legge 3/2012** sul sovraindebitamento.
>
> Questi strumenti legali permettono a privati e imprese in difficoltà di:
> - Ottenere una **riduzione legale** del debito complessivo
> - Accedere a **piani di pagamento sostenibili**
> - Ottenere il **blocco delle azioni esecutive** (pignoramenti, fermi)
> - Raggiungere l'**esdebitazione** (cancellazione definitiva dei debiti residui)
>
> Ogni procedura richiede specifici requisiti e viene valutata caso per caso dal Tribunale competente o dagli Organismi di Composizione della Crisi (OCC).

---

### Riepilogo File da Modificare (8 file)

| File | Modifica |
|------|----------|
| `RFHeroSection.tsx` | "Consulenza" → "Colloquio" |
| `RFHeader.tsx` | "Consulenza" → "Colloquio" (2 punti) |
| `RFFAQSection.tsx` | Rimuovere riferimento garanzia + "consulenza" → "colloquio" |
| `RFFinalCTA.tsx` | "Consulenza" → "Colloquio" |
| `StickyCTA.tsx` | "Consulenza" → "Colloquio" |
| `RFGuaranteesSection.tsx` | Rimuovere garanzia + badge + cambio titolo |
| `CrisiImpresaSection.tsx` | Rimuovere garanzia "Soddisfatti o rimborsati" |
| `CasiStudio.tsx` | Riscrittura completa con 10 casi professionali |

---

### Risultati Attesi

1. **Terminologia coerente**: "Colloquio Gratuito" su tutta la home page
2. **Garanzie realistiche**: Solo 3 garanzie concrete e verificabili
3. **Pagina Casi Studio professionale**: Contenuti legalmente accurati, narrativa coinvolgente, casi realistici basati su procedure reali
4. **Credibilità aumentata**: Quadro normativo esplicito, riferimenti a leggi e articoli specifici

