

## Piano: Link Casi Risolti nel Menu + Immagini nella Pagina + Miglioramento Header

### 1. Aggiunta Link "Casi Risolti" nel Menu di Navigazione Home

**File: `src/components/RFHeader.tsx`**

Aggiungerò un link alla pagina `/casi-studio` sia nel menu desktop che mobile.

| Posizione | Prima | Dopo |
|-----------|-------|------|
| Menu desktop | Solo scroll links interni | + Link "Casi Risolti" con icona `FileText` |
| Menu mobile | Solo scroll links interni | + Link "Casi Risolti" con icona `FileText` |

Il link sarà posizionato prima del badge "Per Professionisti" per mantenere la gerarchia visiva.

---

### 2. Miglioramento Header Pagina Casi Studio

**File: `src/pages/CasiStudio.tsx`**

L'header attuale usa solo testo "RF" senza logo. Lo migliorerò:

| Elemento | Prima | Dopo |
|----------|-------|------|
| Logo | Testo "RF" stilizzato | Immagine `rf-logo-new.png` |
| Titolo | "Casi Risolti" | "Casi Risolti" con stile migliorato |
| Layout | Semplice | Più professionale con separatore |
| Hamburger mobile | Assente | Aggiungere menu mobile con navigazione |

Struttura del nuovo header:

```
┌─────────────────────────────────────────────────────────────┐
│  ← Torna al sito  |  [LOGO]  |                 [CTA Button] │
└─────────────────────────────────────────────────────────────┘
```

---

### 3. Aggiunta Immagini alla Pagina Casi Studio

Aggiungerò immagini nelle seguenti posizioni:

#### 3.1 Hero Section con Immagine di Background

Utilizzerò `handshake-trust.jpg` o `authority-legal.jpg` come background sfumato nella hero section.

#### 3.2 Icone Rappresentative per Ogni Categoria

Manterrò le icone Lucide attuali (sono appropriate per il contesto legale) ma aggiungerò delle immagini decorative:

- **Sezione Legal Framework**: Aggiungerò `authority-legal.jpg` come immagine laterale
- **Sezione CTA Finale**: Utilizzerò `cta-handshake.jpg` come background

#### 3.3 Immagine Decorativa nella Sezione Introduttiva

Aggiungerò un'immagine nella sezione "Il Quadro Normativo" per rendere il layout più bilanciato (testo a sinistra, immagine a destra).

---

### 4. Struttura Dettagliata delle Modifiche

#### File: `src/components/RFHeader.tsx`

Modifiche:
1. Importare `FileText` da lucide-react e `Link` da react-router-dom
2. Aggiungere voce "Casi Risolti" nel menu desktop (riga ~47-52)
3. Aggiungere voce "Casi Risolti" nel menu mobile (riga ~80-89)

Nuovo codice menu desktop:
```tsx
<nav className="hidden md:flex items-center gap-6 lg:gap-8">
  {["chi-siamo", "metodo", "statistiche"].map((id) => (...))}
  
  <Link 
    to="/casi-studio" 
    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
  >
    <FileText className="w-4 h-4" />
    Casi Risolti
  </Link>
  
  <Link to="/rete" className="...">Per Professionisti</Link>
  <Button>Colloquio Gratuito</Button>
</nav>
```

#### File: `src/pages/CasiStudio.tsx`

Modifiche:
1. Importare il logo: `import rfLogo from "@/assets/rf-logo-new.png"`
2. Importare `OptimizedImage` per le immagini ottimizzate
3. Importare le immagini necessarie:
   - `import authorityImage from "@/assets/authority-legal.jpg"`
   - `import ctaImage from "@/assets/cta-handshake.jpg"`

4. **Nuovo Header** (righe 587-607):
```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16 md:h-20">
      <div className="flex items-center gap-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs sm:text-sm hidden xs:inline">Torna al sito</span>
        </Link>
        <div className="h-5 sm:h-6 w-px bg-border hidden xs:block" />
        <Link to="/" className="flex items-center">
          <img src={rfLogo} alt="RF Ristrutturazioni Debiti" className="h-8 sm:h-10 w-auto" />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground hidden md:inline">
          Casi Risolti
        </span>
        <Button variant="hero" size="sm" onClick={() => setIsContactOpen(true)}>
          Colloquio Gratuito
        </Button>
      </div>
    </div>
  </div>
</header>
```

5. **Hero Section con Immagine** (righe 610-627):

Aggiungerò un'immagine decorativa sul lato destro della hero section su desktop:

```tsx
<section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
  {/* Background Image (solo desktop) */}
  <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
    <OptimizedImage
      src={authorityImage}
      alt=""
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Contenuto esistente */}
  </div>
</section>
```

6. **Sezione Legal Framework con Immagine** (righe 629-673):

Layout 2 colonne: testo a sinistra, immagine a destra:

```tsx
<section className="py-12 md:py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
      {/* Colonna Sinistra: Testo */}
      <div className="bg-background border border-border rounded-2xl p-6 md:p-10">
        {/* Contenuto esistente */}
      </div>
      
      {/* Colonna Destra: Immagine */}
      <div className="hidden lg:block">
        <OptimizedImage
          src={authorityImage}
          alt="Studio legale professionale"
          className="w-full h-80 object-cover rounded-2xl"
          containerClassName="shadow-card"
        />
      </div>
    </div>
  </div>
</section>
```

7. **CTA Finale con Background Image** (righe 917-940):

Aggiungerò un'immagine di sfondo alla sezione CTA:

```tsx
<section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 opacity-10">
    <OptimizedImage
      src={ctaImage}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Contenuto esistente */}
  </div>
</section>
```

---

### 5. Riepilogo File da Modificare

| File | Modifiche |
|------|-----------|
| `src/components/RFHeader.tsx` | Aggiungere link "Casi Risolti" desktop + mobile |
| `src/pages/CasiStudio.tsx` | Header con logo + immagini decorative nelle sezioni |

---

### Risultati Attesi

1. **Navigazione migliorata**: Gli utenti possono accedere ai Casi Risolti direttamente dal menu principale
2. **Brand consistency**: Logo RF presente anche nella pagina Casi Studio
3. **Impatto visivo**: Immagini professionali che rafforzano la credibilità
4. **UX coerente**: Header della pagina Casi Studio allineato allo stile generale del sito

