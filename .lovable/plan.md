

## Piano: Cambio Schema Colori da Verde a Blu Navy + Oro

### Analisi del Logo

Dal logo "Tutela debito" che hai condiviso, ho identificato i seguenti colori:

| Colore | Uso nel Logo | Valore Approssimativo |
|--------|-------------|----------------------|
| **Navy Blue** | Testo "Tutela" | `#2a3f5f` (HSL: 217 38% 27%) |
| **Gold/Giallo** | Testo "debito" + icona mano | `#f5c542` (HSL: 45 90% 61%) |

### Situazione Attuale

- **Colore primario attuale**: Verde (HSL 142 71% 45%) - "Speranza"
- **Colore secondario**: Blu (HSL 217 91% 60%) - "Fiducia"
- **Nota**: Alcuni componenti usano gia `text-gold` ma il colore NON e definito nel CSS

### Modifiche Proposte

#### 1. File `src/index.css` - Variabili CSS Principali

Cambiare le variabili root:

| Variabile | Da (Verde) | A (Navy/Gold) |
|-----------|-----------|----------------|
| `--primary` | 142 71% 45% | 217 38% 27% (Navy) |
| `--primary-foreground` | 0 0% 100% | 0 0% 100% (invariato) |
| `--accent` | 142 76% 36% | 45 90% 61% (Gold) |
| `--ring` | 142 71% 45% | 217 38% 27% (Navy) |

**Aggiungere nuove variabili Gold:**

```css
/* Gold Accent */
--gold: 45 90% 61%;
--gold-light: 45 90% 71%;
--gold-dark: 45 90% 51%;
```

**Aggiornare ombre e gradienti:**

- `--shadow-primary`: Usare il colore navy
- `--gradient-primary`: Da navy a navy-light
- `--gradient-hero`: Da navy a gold

**Aggiornare animazioni glow:**

- `glow-pulse`: Cambiare da verde a gold

#### 2. File `tailwind.config.ts` - Estensione Colori

Aggiungere la palette gold:

```typescript
gold: {
  DEFAULT: "hsl(var(--gold))",
  light: "hsl(var(--gold-light))",
  dark: "hsl(var(--gold-dark))",
},
```

Aggiornare le keyframes `glow-pulse` da verde a gold.

#### 3. File `src/components/ui/button.tsx` - Varianti Bottoni

Aggiornare le varianti:

- `hero`: Gradiente da navy a gold invece che da verde
- `outline`: Border navy
- `cta`: Mantenere blu o cambiare a gold

---

### Riepilogo Colori Finali

| Ruolo | Colore | HSL | HEX Approssimativo |
|-------|--------|-----|---------------------|
| Primary (Navy) | Blu scuro | 217 38% 27% | #2a3f5f |
| Gold Accent | Oro | 45 90% 61% | #f5c542 |
| Gold Light | Oro chiaro | 45 90% 71% | #f8d76e |
| Gold Dark | Oro scuro | 45 90% 51% | #d4a82e |
| Secondary | Blu medio | 217 91% 60% | #3b82f6 |

---

### File da Modificare

| File | Modifiche |
|------|-----------|
| `src/index.css` | Variabili CSS principali, gradienti, ombre, animazioni |
| `tailwind.config.ts` | Aggiunta palette gold, update keyframes |
| `src/components/ui/button.tsx` | Varianti hero e cta |

---

### Impatto Visivo

Dopo le modifiche:
- Il colore **primario** diventa **Navy Blue** (autorita, professionalita)
- Il colore **accento** diventa **Gold** (eccellenza, valore)
- Tutti i componenti che usano `text-primary`, `bg-primary`, ecc. cambieranno automaticamente
- I componenti che gia usano `text-gold` inizieranno a funzionare correttamente
- I gradienti e le ombre riflettono la nuova palette

### Nota Importante

Dopo aver approvato questo piano, mi manderai il logo esatto che copirero nella cartella assets per sostituire quello attuale.

