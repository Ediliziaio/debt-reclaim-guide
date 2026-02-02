

## Piano: Aggiornamento Logo e Brand RF Ristrutturazioni Debiti

### Obiettivo

1. Aggiornare il file `.lovable/plan.md` per documentare il completamento del cambio brand
2. Sostituire il vecchio logo con il nuovo logo caricato dall'utente
3. Aggiornare il Footer per usare il nuovo logo e brand name

---

### Modifiche da Effettuare

#### 1. Copiare il Nuovo Logo

Copiare il logo caricato dall'utente nella cartella assets:
- **Da**: `user-uploads://AR_Group_2.png`
- **A**: `src/assets/rf-logo-new.png`

---

#### 2. Aggiornare `.lovable/plan.md`

Aggiornare il documento per riflettere il completamento del piano e le nuove modifiche:

| Sezione | Contenuto |
|---------|-----------|
| Stato | Completato |
| Brand | RF Ristrutturazioni Debiti |
| Logo | Nuovo logo con scudo RF + "Ristrutturazioni Debiti" |

---

#### 3. Aggiornare gli Header

**File: `src/components/RFHeader.tsx`** e **`src/components/ReteHeader.tsx`**

- Cambiare l'import da `rf-logo.png` a `rf-logo-new.png`
- Mantenere l'alt text "RF Ristrutturazioni Debiti"

---

#### 4. Aggiornare il Footer

**File: `src/components/Footer.tsx`**

Il footer attualmente mostra:
- Icona "Scale" generica
- Nome "Studio Tutela Debito"

Deve essere aggiornato a:
- Nuovo logo RF
- Nome "RF Ristrutturazioni Debiti"
- Descrizione aggiornata

**Modifiche specifiche:**

| Riga | Prima | Dopo |
|------|-------|------|
| 1 | `import { Scale, ... }` | `import { MapPin, Phone, Mail, Clock }` (rimuovere Scale) |
| 1+ | - | `import rfLogo from "@/assets/rf-logo-new.png";` |
| 10-20 | Icona Scale + "Studio Tutela Debito" | Logo RF + "RF Ristrutturazioni Debiti" |
| 73 | "Studio Tutela Debito" | "RF Ristrutturazioni Debiti" |

---

### Codice Aggiornato per Footer

```tsx
{/* Brand */}
<div className="md:col-span-2">
  <div className="flex items-center gap-3 mb-4">
    <img src={rfLogo} alt="RF Ristrutturazioni Debiti" className="h-10 w-auto" />
  </div>
  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
    La prima rete nazionale di Avvocati e Commercialisti specializzati in esdebitazione e crisi d'impresa.
    Ti affianchiamo con competenza, metodo e trasparenza.
  </p>
</div>

{/* Bottom bar */}
<p className="text-xs text-muted-foreground">
  © {new Date().getFullYear()} RF Ristrutturazioni Debiti. Tutti i diritti riservati.
</p>
```

---

### Riepilogo File da Modificare

| File | Azione |
|------|--------|
| `.lovable/plan.md` | Aggiornare stato e documentazione |
| `src/assets/rf-logo-new.png` | Copiare nuovo logo |
| `src/components/RFHeader.tsx` | Cambiare import logo |
| `src/components/ReteHeader.tsx` | Cambiare import logo |
| `src/components/Footer.tsx` | Sostituire icona con logo, aggiornare nome brand |

---

### Risultato Atteso

- Nuovo logo RF visibile in tutti gli header (Home e Rete)
- Nuovo logo RF visibile nel footer
- Brand name "RF Ristrutturazioni Debiti" coerente ovunque
- File plan.md aggiornato con lo stato completato

