

## Piano: Mostrare l'Immagine Hero su Mobile e Tablet

### Problema Identificato

L'immagine nella sezione Hero ha la classe `hidden lg:block` (riga 19), che la nasconde su tutti i dispositivi con schermo inferiore a 1024px (mobile e tablet).

---

### Soluzione Proposta

Su mobile e tablet, mostrare l'immagine in modo diverso rispetto al desktop:
- **Desktop (lg+)**: Layout attuale con immagine posizionata a destra (50% dello schermo)
- **Mobile/Tablet**: Immagine visibile sopra o sotto il contenuto testuale

---

### Modifiche al File `src/components/RFHeroSection.tsx`

**Approccio**: Aggiungere un'immagine separata per mobile/tablet che appare sotto il contenuto principale.

```text
Struttura attuale:
┌─────────────────────────────────┐
│  [Testo + CTA]  │  [Immagine]   │  ← Desktop (immagine a destra)
└─────────────────────────────────┘

┌─────────────────────────────────┐
│        [Testo + CTA]            │  ← Mobile/Tablet (nessuna immagine)
└─────────────────────────────────┘

Nuova struttura:
┌─────────────────────────────────┐
│  [Testo + CTA]  │  [Immagine]   │  ← Desktop (invariato)
└─────────────────────────────────┘

┌─────────────────────────────────┐
│        [Testo + CTA]            │  ← Mobile/Tablet
├─────────────────────────────────┤
│          [Immagine]             │  ← Nuova immagine per mobile
└─────────────────────────────────┘
```

---

### Codice da Aggiungere

Dopo il blocco "Trust badges" (riga 101), aggiungere una versione mobile dell'immagine:

```tsx
{/* Mobile/Tablet Hero Image */}
<div className="mt-8 lg:hidden opacity-0 animate-fade-up animation-delay-600">
  <div className="relative rounded-2xl overflow-hidden shadow-xl">
    <img 
      src={heroImage} 
      alt="Libertà dai debiti" 
      className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
  </div>
</div>
```

---

### Dettagli Tecnici

| Aspetto | Valore |
|---------|--------|
| Classi responsive | `lg:hidden` (visibile solo sotto 1024px) |
| Altezza immagine | 250px (mobile) / 300px (sm) / 350px (md) |
| Animazione | `animate-fade-up animation-delay-600` (coerente con altre animazioni) |
| Bordi | `rounded-2xl` con `shadow-xl` |
| Overlay | Gradient dal basso per migliore integrazione |

---

### Risultato Atteso

- Su **desktop**: Nessun cambiamento (immagine a destra)
- Su **tablet**: Immagine visibile sotto il contenuto, altezza 350px
- Su **mobile**: Immagine visibile sotto il contenuto, altezza 250-300px
- Animazione coerente con il resto della sezione

