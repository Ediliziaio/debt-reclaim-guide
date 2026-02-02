

## Piano: Cambio Brand da "RF Ristrutturazione Debiti" a "RF Ristrutturazioni Debiti"

### Modifica Richiesta

Cambiare il nome del brand da:
- **Prima**: RF Ristrutturazione Debiti (singolare)
- **Dopo**: RF Ristrutturazioni Debiti (plurale - con la "i")

---

### File da Modificare

Ho trovato **85 occorrenze** in **14 file** che devono essere aggiornate:

| File | Occorrenze | Tipo |
|------|------------|------|
| `src/pages/Index.tsx` | 1 | Meta title |
| `src/pages/Rete.tsx` | 1 | Meta title |
| `src/pages/CasiStudio.tsx` | 2 | Meta title + quote |
| `src/components/RFHeader.tsx` | 1+ | Alt logo |
| `src/components/ReteHeader.tsx` | 1 | Alt logo |
| `src/components/RFWhoWeAreSection.tsx` | 1 | Titolo sezione |
| `src/components/RFTeamSection.tsx` | 1 | Titolo sezione |
| `src/components/RFTargetAudienceSection.tsx` | 1 | Titolo sezione |
| `src/components/RFFAQSection.tsx` | 1 | Domanda FAQ |
| `src/components/ReteFoundersSection.tsx` | 1 | Descrizione fondatori |
| `src/components/ReteBenefitsSection.tsx` | 2 | Titolo + descrizione |
| `src/components/ReteFinalCTASection.tsx` | 1 | Footer CTA |
| Altri file | Varie | Testi vari |

---

### Operazione

Eseguiro un **find & replace globale** in tutti i 14 file:

```
"RF Ristrutturazione Debiti" → "RF Ristrutturazioni Debiti"
```

Questo include:
- Titoli delle pagine (meta tag)
- Alt text delle immagini logo
- Titoli delle sezioni
- Testi descrittivi
- FAQ
- Testimonianze e citazioni

---

### Risultato Atteso

- Il brand sara coerentemente "RF Ristrutturazioni Debiti" in tutto il sito
- Nessun impatto sulla struttura del codice
- Solo sostituzione testuale

