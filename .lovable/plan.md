
## Piano: Aggiornamento Biografie Fondatori e Descrizione Rete

### Panoramica
Aggiorneremo le descrizioni dei fondatori in entrambe le landing page con le biografie professionali fornite e aggiungeremo una nuova sezione che descrive l'attivita della rete nella pagina dedicata ai professionisti.

---

### 1. Aggiornamento RFTeamSection.tsx (Pagina B2C - Home)

**File:** `src/components/RFTeamSection.tsx`

Modifiche all'array `founders` (linee 16-35):

**Avv. Armando Rossi:**
- **role:** "Avvocato Cassazionista, Esperto in Diritto d'Impresa"
- **bio:** "Fondatore dello Studio Legale Armando Rossi & Partners, ideatore del brand 'Tutela Debito'. Gia Presidente dell'Ordine degli Avvocati di Napoli e membro del Direttivo OCF, oggi Delegato per i rapporti con Imprese e Consumo. Autore e Direttore della Collana 'Business & Law', vanta numerose pubblicazioni in materia di contenzioso fiscale e bancario."
- **specialties:** ["Codice della Crisi", "Esdebitazione", "Diritto Tributario", "Composizione Negoziata"]

**Dott. Comm. Roberto Fava:**
- **role:** "Commercialista, Curatore Fallimentare"
- **bio:** "Oltre venti anni di esperienza come curatore fallimentare presso i Tribunali di Napoli, Nola e Torre Annunziata. Consulente Tecnico d'Ufficio presso il Tribunale delle Imprese di Napoli. Esperto nominato dalla Prefettura per misure di prevenzione collaborativa ai sensi del codice antimafia."
- **specialties:** ["Concordato Preventivo", "Composizione Negoziata", "Business Plan", "Anatocismo e Usura"]

---

### 2. Aggiornamento ReteFoundersSection.tsx (Pagina B2B - Rete)

**File:** `src/components/ReteFoundersSection.tsx`

Modifiche all'array `founders` (linee 15-32):

**Avv. Armando Rossi:**
- **experience:** "Avvocato Cassazionista, fondatore dello Studio Legale Armando Rossi & Partners e ideatore del brand 'Tutela Debito'. Gia Presidente dell'Ordine degli Avvocati di Napoli, oggi Delegato per i rapporti con Imprese e Consumo."
- **highlight:** "Autore della Collana 'Business & Law' (Edizioni Il Papavero), vanta pubblicazioni su quotidiani nazionali tra cui 'Il Riformista' in materia di crisi d'impresa."

**Dott. Comm. Roberto Fava:**
- **experience:** "Curatore fallimentare presso i Tribunali di Napoli, Nola e Torre Annunziata con oltre venti anni di esperienza. CTU presso il Tribunale delle Imprese di Napoli ed esperto in gestione aziendale."
- **highlight:** "Nominato dalla Prefettura di Napoli quale esperto in gestione aziendale ai sensi del codice antimafia per misure di prevenzione collaborativa."

---

### 3. Nuova Sezione "Di Cosa Si Occupa la Rete" (Pagina Professionisti)

**File:** `src/components/ReteFoundersSection.tsx`

Aggiungere dopo il blocco "Method Statement" (dopo linea 97) una nuova sezione con la descrizione dell'attivita:

```text
Struttura della nuova sezione:
- Titolo: "Di Cosa Si Occupa la Rete"
- Sottotitolo introduttivo
- 3 card con le aree principali:
  1. Crisi d'Impresa - composizione negoziata, concordati, ristrutturazioni
  2. Esdebitazione Persone - piano del consumatore, ristrutturazione debiti
  3. Approccio Integrato - sinergia legale-contabile
```

Contenuto delle card derivato dal testo fornito:

| Area | Descrizione |
|------|-------------|
| **Crisi d'Impresa** | Interventi per aziende in difficolta con approccio integrato legale-contabile. Composizione negoziata, concordato minore, accordi di ristrutturazione, piani attestati, liquidazione controllata. |
| **Esdebitazione** | Supporto a consumatori, professionisti e piccoli imprenditori. Piano del consumatore, ristrutturazione dei debiti, esdebitazione del debitore incapiente. |
| **Metodo Integrato** | Valutazione sostenibilita aziendale, dialogo con creditori, fisco, banche. Predisposizione piani e procedure per chiudere il passato debitorio. |

---

### Riepilogo Modifiche

| File | Tipo Modifica | Linee Interessate |
|------|---------------|-------------------|
| RFTeamSection.tsx | Update founders array | 16-35 |
| ReteFoundersSection.tsx | Update founders array | 15-32 |
| ReteFoundersSection.tsx | Nuova sezione "Rete" | Dopo linea 97 |

### Risultato Atteso

- Biografie professionali e accurate per entrambi i fondatori su entrambe le pagine
- Nuova sezione nella pagina /rete che spiega chiaramente cosa fa l'associazione professionale
- Mantenimento dello stile visivo esistente e coerenza con il design attuale
