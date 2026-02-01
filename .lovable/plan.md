

## Piano: Correzione Problemi di Contrasto (Blu su Blu)

### Analisi del Problema

Dopo il rebranding da verde a **Navy Blue** (`#2a3f5f`), ora il colore `--primary` e` è Navy Blue. Questo crea **problemi di contrasto critici** in tutte le sezioni con sfondo Navy (`bg-navy`) dove il testo usa `text-primary`.

### Elementi con Contrasto Insufficiente Identificati

| Componente | Problema | Ubicazione |
|------------|----------|------------|
| **RFWhoWeAreSection** | Badge "Chi Siamo" con `bg-primary/20 text-primary` su sfondo navy | Linea 40 |
| **RFWhoWeAreSection** | Titolo `text-primary` su sfondo navy | Linea 44 |
| **RFWhoWeAreSection** | Icone `text-primary` su sfondo navy | Linee 55, 84, 101 |
| **RFTeamSection** | Badge e titoli `text-primary` su sfondo navy | Linee 57-59, 64 |
| **RFTeamSection** | Specialties badge `text-primary` su sfondo navy | Linea 144 |
| **RFHeroSection** | Badge `text-primary` su sfondo light (ok, ma bg-primary/10 è troppo tenue) | Linea 34 |
| **RFGoodNewsSection** | Badge `text-primary` su sfondo light | Linea 47 |
| **RFUrgencySection** | Icone `text-primary` su sfondo navy | Linea 157 |
| **RFGuaranteesSection** | Badge `text-primary` su sfondo light | Linea 54-56 |
| **RFTargetAudienceSection** | Badge e testi `text-primary` su sfondo light | Linee 33-35 |

### Regola di Contrasto da Applicare

| Sfondo | Colore Testo Accento | Motivazione |
|--------|---------------------|-------------|
| **Chiaro** (bg-background, bg-muted) | `text-primary` (Navy) | Navy su bianco ha ottimo contrasto |
| **Navy** (bg-navy) | `text-gold` o `text-gold-light` | Gold su Navy ha eccellente contrasto |

### Modifiche Proposte

#### 1. RFWhoWeAreSection.tsx
- Linea 40: cambiare da `bg-primary/20 text-primary` a `bg-gold/20 text-gold`
- Linea 44: cambiare da `text-primary` a `text-gold`
- Linea 47: cambiare da `text-primary` a `text-gold`
- Linee 54-55: cambiare da `bg-primary/20` e `text-primary` a `bg-gold/20` e `text-gold`
- Linea 84: cambiare da `text-primary` a `text-gold`
- Linee 100-101, 104-105: cambiare `text-primary` a `text-gold`
- Linea 113: cambiare da `text-primary` a `text-gold`

#### 2. RFTeamSection.tsx
- Linea 57: cambiare da `bg-primary/20 border-primary/30` a `bg-gold/20 border-gold/30`
- Linea 58-59: cambiare `text-primary` a `text-gold`
- Linea 64: cambiare `text-primary` a `text-gold`
- Linea 143-144: cambiare specialties badge da `bg-primary/10 border-primary/20 text-primary` a `bg-gold/10 border-gold/20 text-gold`

#### 3. RFUrgencySection.tsx
- Linee 156-157: cambiare da `bg-primary/20` e `text-primary` a `bg-gold/20` e `text-gold`
- Linea 161, 165: cambiare `text-primary` a `text-gold`
- Linea 175-176: cambiare da `bg-primary/20` e `text-primary` a `bg-gold/20` e `text-gold`
- Linea 183: cambiare da `bg-primary/20 border-primary/30` a `bg-gold/20 border-gold/30`
- Linea 184: cambiare `text-primary` a `text-gold`

#### 4. Sezioni con sfondo chiaro (nessuna modifica)
I seguenti componenti usano `text-primary` su sfondo chiaro, il che funziona bene con Navy su bianco:
- RFHeroSection (sfondo light)
- RFGoodNewsSection (sfondo light)
- RFGuaranteesSection (sfondo muted/light)
- RFMethodSection (sfondo muted)
- RFStatisticsSection (sfondo muted)
- RFTargetAudienceSection (sfondo light)

### Riepilogo File da Modificare

| File | Numero Modifiche | Tipo |
|------|-----------------|------|
| RFWhoWeAreSection.tsx | 12 | text-primary → text-gold su sfondo navy |
| RFTeamSection.tsx | 7 | text-primary → text-gold su sfondo navy |
| RFUrgencySection.tsx | 10 | text-primary → text-gold su sfondo navy |

### Risultato Atteso

Dopo le modifiche:
- **Sfondo Navy**: testo e icone accento saranno **Gold** (eccellente contrasto)
- **Sfondo Light**: testo e icone accento rimarranno **Navy** (eccellente contrasto)
- Palette coerente: Navy come colore primario autorevole, Gold come accento di eccellenza
- Leggibilità garantita su tutte le sezioni

