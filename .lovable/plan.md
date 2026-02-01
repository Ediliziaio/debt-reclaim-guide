

## Piano: Inserimento Logo + Correzione Contrasto Celeste su Blu Navy

### Parte 1: Inserimento Logo Ufficiale

Il logo "RF Ristrutturazione Debiti" verra copiato nella cartella assets e utilizzato nei componenti header.

**File da creare:**
- `src/assets/rf-logo.png` - copia da `user-uploads://AR_Group_1.png`

**File da modificare:**
- `src/components/RFHeader.tsx` - sostituire il testo "RF" + "Debt Restructuring" con il logo immagine
- `src/components/ReteHeader.tsx` - stesso aggiornamento per la pagina /rete

---

### Parte 2: Correzione Problemi di Contrasto (Celeste su Navy)

Ho identificato che il colore `secondary` (blu celeste HSL 217 91% 60%) viene usato in diversi punti su sfondo Navy, creando contrasto insufficiente. Il problema e visibile perche il celeste e troppo vicino al blu navy.

**Regola da applicare:**
- Su sfondo Navy: usare `text-gold` invece di `text-secondary`
- Su sfondo chiaro: `text-secondary` o `text-primary` rimangono validi

**File con problemi identificati:**

| File | Elemento | Problema | Soluzione |
|------|----------|----------|-----------|
| **RFFinalCTA.tsx** | Linea 22-23 | Icona Shield con `text-primary` (navy) su sfondo navy | Cambiare a `text-gold` |
| **RFFinalCTA.tsx** | Linee 27, 32 | Testo `text-primary` su sfondo navy | Cambiare a `text-gold` |
| **RFFinalCTA.tsx** | Linee 44, 48, 52 | Icone info `text-primary` su sfondo navy | Cambiare a `text-gold` |
| **RFFalsePromisesSection.tsx** | Linea 73 | Testo `text-primary` su sfondo navy | Cambiare a `text-gold` |
| **RFHeroSection.tsx** | Linea 49 | `text-secondary` su sfondo chiaro | OK, ma potrebbe usare Navy per coerenza |
| **ReteFoundersSection.tsx** | Linea 108 | `text-primary` su sfondo navy ("metodo di lavoro collaudato") | Cambiare a `text-gold` |
| **ReteFoundersSection.tsx** | Linea 113 | Icone statistiche `text-primary` su sfondo navy | Cambiare a `text-gold` |

---

### Riepilogo Modifiche Tecniche

**1. Logo (2 file)**
```
RFHeader.tsx, ReteHeader.tsx:
- Import logo
- Sostituire <span>RF</span> con <img src={logo}>
- Mantenere responsive (altezza ~32-40px)
```

**2. Contrasto RFFinalCTA.tsx (linee 22-52)**
```tsx
// Da
<Shield className="w-10 h-10 text-primary" />
<span className="text-primary">Gratuita</span>
<Phone className="w-4 h-4 text-primary" />

// A
<Shield className="w-10 h-10 text-gold" />
<span className="text-gold">Gratuita</span>
<Phone className="w-4 h-4 text-gold" />
```

**3. Contrasto RFFalsePromisesSection.tsx (linea 73)**
```tsx
// Da
<p className="text-xl mt-6 font-semibold text-primary">

// A
<p className="text-xl mt-6 font-semibold text-gold">
```

**4. Contrasto ReteFoundersSection.tsx (linee 108, 113)**
```tsx
// Da
<strong className="text-primary">metodo di lavoro collaudato</strong>
<stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />

// A
<strong className="text-gold">metodo di lavoro collaudato</strong>
<stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
```

---

### Risultato Atteso

Dopo le modifiche:
- Logo RF ufficiale visibile nell'header su entrambe le pagine
- Nessun testo celeste o blu navy su sfondo navy
- Accenti dorati su tutte le sezioni scure
- Piena leggibilita in ogni sezione del sito

---

### Aggiunta Memory

Aggiorneremo la memoria del progetto con le seguenti regole di design per riferimenti futuri:
- **Palette**: Navy (#2a3f5f) primario, Gold (#f5c542) accento
- **Contrasto**: Su sfondo Navy usare sempre Gold per accenti

