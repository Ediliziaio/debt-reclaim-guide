

## Piano: Correzione Finale Contrasti + Cambio Nome Brand

### Problemi Identificati

| File | Linea | Problema | Colore Attuale | Sfondo |
|------|-------|----------|----------------|--------|
| **RFWhoWeAreSection.tsx** | 94 | "vantaggio enorme" | `text-primary` (Navy) | Navy |
| **RFWhoWeAreSection.tsx** | 61-62 | Icona Calculator | `bg-secondary/20 text-secondary` (Celeste) | Navy |
| **RFWhoWeAreSection.tsx** | 105-107 | "Faccia Contabile" badge | `bg-secondary/20 text-secondary` (Celeste) | Navy |
| **RFTeamSection.tsx** | 123 | "Co-Fondatore" | `text-primary` (Navy) | Navy |
| **RFTeamSection.tsx** | 129 | "Avvocato Cassazionista..." | `text-trust` (Celeste) | Navy |
| **RFHeader.tsx** | 44 | alt logo | "RF Debt Restructuring" | - |
| **ReteHeader.tsx** | 59 | alt logo | "RF Debt Restructuring" | - |

---

### Modifiche Proposte

#### 1. RFWhoWeAreSection.tsx

**Linea 94** - Titolo "vantaggio enorme":
```tsx
// Da
<span className="text-primary">vantaggio enorme</span>

// A
<span className="text-gold">vantaggio enorme</span>
```

**Linee 61-62** - Box "Codice della Crisi":
```tsx
// Da
<div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
  <Calculator className="w-7 h-7 text-secondary" />
</div>

// A
<div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
  <Calculator className="w-7 h-7 text-gold" />
</div>
```

**Linee 105-107** - Badge "Faccia Contabile":
```tsx
// Da
<div className="flex items-center gap-3 p-4 px-6 rounded-full bg-secondary/20 text-secondary">
  <Calculator className="w-5 h-5" />
  <span className="font-semibold">Faccia Contabile</span>
</div>

// A
<div className="flex items-center gap-3 p-4 px-6 rounded-full bg-gold-light/20 text-gold-light">
  <Calculator className="w-5 h-5" />
  <span className="font-semibold">Faccia Contabile</span>
</div>
```

---

#### 2. RFTeamSection.tsx

**Linea 123** - "Co-Fondatore":
```tsx
// Da
<span className="text-primary text-sm font-semibold uppercase tracking-wide">
  {founder.title}
</span>

// A
<span className="text-gold text-sm font-semibold uppercase tracking-wide">
  {founder.title}
</span>
```

**Linea 129** - Ruolo professionale:
```tsx
// Da
<p className="text-trust font-medium text-sm mt-1">
  {founder.role}
</p>

// A
<p className="text-gold-light font-medium text-sm mt-1">
  {founder.role}
</p>
```

---

#### 3. RFHeader.tsx - Linea 44

```tsx
// Da
<img src={rfLogo} alt="RF Debt Restructuring" className="h-8 md:h-10 w-auto" />

// A
<img src={rfLogo} alt="RF Ristrutturazione Debiti" className="h-8 md:h-10 w-auto" />
```

---

#### 4. ReteHeader.tsx - Linea 59

```tsx
// Da
<img src={rfLogo} alt="RF Debt Restructuring" className="h-8 sm:h-10 w-auto" />

// A
<img src={rfLogo} alt="RF Ristrutturazione Debiti" className="h-8 sm:h-10 w-auto" />
```

---

### Riepilogo File da Modificare

| File | Modifiche |
|------|-----------|
| RFWhoWeAreSection.tsx | 3 modifiche contrasto (primary/secondary → gold) |
| RFTeamSection.tsx | 2 modifiche contrasto (primary/trust → gold) |
| RFHeader.tsx | 1 modifica alt text logo |
| ReteHeader.tsx | 1 modifica alt text logo |

---

### Palette Finale su Sfondo Navy

| Elemento | Colore Corretto |
|----------|-----------------|
| Accenti primari | `text-gold` |
| Accenti secondari | `text-gold-light` |
| Badge background | `bg-gold/20` o `bg-gold-light/20` |
| Testo normale | `text-white` o `text-white/80` |

### Risultato Atteso

- Nessun testo Navy o Celeste su sfondo Navy
- "Co-Fondatore" visibile in Gold
- Ruoli professionisti visibili in Gold-light
- "Faccia Contabile" distinguibile da "Faccia Legale" ma comunque leggibile
- Alt text aggiornato in italiano su entrambi gli header

