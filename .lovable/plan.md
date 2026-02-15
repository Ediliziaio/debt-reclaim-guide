
## Correzione Refuso in RFHeroSection

### Problema
Nel file `src/components/RFHeroSection.tsx` (riga 44-45), la subheadline contiene testo duplicato e attaccato:

**Attuale (errato):**
> Finalmente la PRIMA Rete Nazionale che unisce Avvocati, Commercialisti e Consulenti del Lavoro Specializzati in Esdebitazione e Crisi D'Impresa**PRIMA Rete Nazionale** che unisce Avvocati e Commercialisti Specializzati in Esdebitazione e Crisi D'Impresa

### Correzione
**File: `src/components/RFHeroSection.tsx`** (righe 44-46)

Sostituire con una frase pulita e unica:

> Finalmente la **PRIMA Rete Nazionale** che unisce Avvocati, Commercialisti e Consulenti del Lavoro Specializzati in Esdebitazione e Crisi D'Impresa

- Rimuovere la duplicazione
- Mantenere lo `<span>` con stile bold/primary solo su "PRIMA Rete Nazionale"
- Includere "Consulenti del Lavoro" nella versione corretta
