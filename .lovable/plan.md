
## Piano: Ottimizzazione Aspect Ratio Immagini Fondatori

### Analisi Attuale

Le immagini dei fondatori sono visualizzate in due componenti con configurazioni diverse:

| Componente | Aspect Ratio | Altezza | Object Position |
|------------|--------------|---------|-----------------|
| ReteFoundersSection | 4:3 | auto | center (default) |
| RFTeamSection | libero | 320px (h-80) | top |

### Problema
Le due pagine mostrano le stesse persone con ritagli diversi, creando inconsistenza visiva. Per un aspetto professionale, entrambi i componenti dovrebbero usare lo stesso aspect ratio con focus sul volto.

### Soluzione Proposta

Standardizzare entrambi i componenti con:
- **Aspect ratio 1:1 (quadrato)** - ideale per foto profilo professionali
- **Object-position: top** - per centrare il volto
- **Object-fit: cover** - già presente, mantiene il riempimento

### Modifiche Tecniche

**1. File `src/components/ReteFoundersSection.tsx` (linea 59)**

Cambiare da:
```tsx
<div className="aspect-[4/3] overflow-hidden">
  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
</div>
```

A:
```tsx
<div className="aspect-square overflow-hidden">
  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top" />
</div>
```

**2. File `src/components/RFTeamSection.tsx` (linee 78-83)**

Cambiare da:
```tsx
<div className="relative h-80 overflow-hidden">
  <img
    src={founder.image}
    alt={founder.name}
    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
  />
```

A:
```tsx
<div className="relative aspect-square overflow-hidden">
  <img
    src={founder.image}
    alt={founder.name}
    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
  />
```

### Risultato Atteso

- Entrambe le pagine mostreranno le foto dei fondatori con aspect ratio 1:1 (quadrato)
- Il volto sarà sempre centrato nella parte superiore dell'immagine
- Look professionale e coerente su tutto il sito
- Le card si adatteranno automaticamente alla nuova dimensione delle immagini
