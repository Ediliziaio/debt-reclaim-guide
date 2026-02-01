

## Piano: Header con Sfondo Bianco Fisso

### Problema Identificato

L'header della pagina `/rete` ha attualmente:
- Sfondo **trasparente** (`bg-transparent`) quando `isScrolled = false`
- Il logo RF ha elementi blu che si confondono con lo sfondo blu sfumato della hero section
- Questo crea un conflitto visivo e riduce la leggibilità

### Soluzione Proposta

Cambiare l'header per avere **sempre sfondo bianco**, indipendentemente dallo scroll. Questo:
- Elimina il conflitto cromatico logo blu / sfondo blu
- Mantiene leggibilità costante
- Semplifica la logica dei colori (non serve più alternare bianco/scuro)

---

### Modifiche Tecniche

**File: `src/components/ReteHeader.tsx`**

| Linea | Elemento | Da | A |
|-------|----------|-----|-----|
| 43-46 | Colori dinamici | Alternanza bianco/scuro | Colori fissi scuri |
| 49 | Background header | `bg-transparent` quando non scrollato | `bg-background/95 backdrop-blur-md` sempre |
| 53 | Link "Torna al sito" | `mutedColor` dinamico | `text-muted-foreground` fisso |
| 57 | Divider | `dividerColor` dinamico | `bg-border` fisso |
| 65 | Nav items | `mutedColor` dinamico | `text-muted-foreground` fisso |
| 74 | Icona menu mobile | `textColor` dinamico | `text-foreground` fisso |
| 81 | Menu mobile sfondo | Sfondo navy quando non scrollato | Sfondo bianco sempre |
| 87 | Menu mobile testo | Testo bianco quando non scrollato | Testo scuro sempre |

---

### Codice Aggiornato

```tsx
// Linea 43-46 - Rimuovere logica colori dinamici
// Non più necessari:
// const textColor = isScrolled ? "text-foreground" : "text-white";
// const mutedColor = isScrolled ? "text-muted-foreground" : "text-white/80";
// const borderColor = isScrolled ? "border-border" : "border-white/20";
// const dividerColor = isScrolled ? "bg-border" : "bg-white/30";

// Linea 49 - Header sempre con sfondo bianco
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${isScrolled ? "shadow-soft border-b border-border" : ""}`}>

// Linea 53 - Link fisso scuro
<Link to="/" className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors">

// Linea 57 - Divider fisso
<div className="h-5 sm:h-6 w-px bg-border hidden xs:block" />

// Linea 65 - Nav items fissi scuri
<button ... className="text-sm text-muted-foreground hover:text-primary transition-colors">

// Linea 74 - Icona menu mobile
<button className="md:hidden p-2 text-foreground" ...>

// Linea 81 - Menu mobile sempre con sfondo bianco
<nav className="md:hidden py-4 border-t border-border animate-fade-in">

// Linea 87 - Testo menu mobile sempre scuro
className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
```

---

### Risultato Atteso

- Header sempre visibile con sfondo bianco semi-trasparente
- Logo RF perfettamente leggibile su sfondo chiaro
- Ombra sottile appare solo dopo scroll per separazione visiva
- Menu mobile coerente con sfondo bianco
- Contrasto ottimale tra testo scuro e sfondo chiaro

