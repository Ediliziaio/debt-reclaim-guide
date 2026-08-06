# Tutela Debito — tuteladebito.it

Sito dello **Studio Legale Avv. Armando Rossi** (brand *Tutela Debito*): esdebitazione,
sovraindebitamento, crisi d'impresa e contenzioso tributario. Sedi a Napoli, Milano e Torino.

Produzione: <https://www.tuteladebito.it> — deploy automatico su Vercel dal branch `main`.

## Stack

| | |
|---|---|
| Build | Vite 5 + [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg) (prerendering statico) |
| UI | React 18 · TypeScript · Tailwind CSS · shadcn-ui (Radix) |
| Routing | react-router-dom 6 (route table in `src/App.tsx`) |
| Head / SEO | `src/components/SEO.tsx` (react-helmet-async via `<Head>` di vite-react-ssg) |

## Comandi

```bash
npm install        # dipendenze
npm run dev        # dev server su http://localhost:8080
npm run build      # prebuild (sitemap + llms-full) + build statico in dist/
npm run preview    # serve dist/ in locale
npm run lint       # eslint
npm run favicons   # rigenera favicon e icone dal marchio del logo
npx tsc -p tsconfig.app.json --noEmit   # typecheck
```

## Perché SSG e non SPA

Il sito vive di ricerca organica e di citazioni negli assistenti AI (ChatGPT, Claude,
Perplexity, Google AI Overviews). Molti di questi crawler **non eseguono JavaScript**: con una
SPA vedrebbero una pagina vuota. `npm run build` prerenderizza ogni rotta in HTML completo —
testo dell'articolo, `<title>`/meta/canonical per pagina e JSON-LD — quindi ogni URL è leggibile
e citabile senza JS. Le rotte degli articoli sono generate da `getStaticPaths` in `src/App.tsx`.

## Struttura

```
src/
  App.tsx                 route table (fonte di verità delle rotte prerenderizzate)
  main.tsx                entry SSG + client
  components/
    SEO.tsx               <title>, meta, canonical, OG/Twitter, JSON-LD per pagina
    TD*.tsx               sezioni di pagina (hero, metodo, FAQ, footer…)
    ui/                   shadcn-ui
  data/
    articles.ts           tipi Article/Block + loader e helper
    articlesMeta.ts       metadati di tutti gli articoli (titolo, excerpt, keywords, intro…)
    articlesContent.ts    contenuto completo, sincrono, per il prerender
    articleSeo.ts         <title> e meta description in lunghezza SERP
    articles/<slug>.ts    corpo dell'articolo come array di Block tipizzati
    cities.ts             dati delle landing locali /studio-legale-<città>
  pages/                  una per rotta
scripts/
  generate-sitemap.mjs    sitemap.xml dalle rotte reali (gira nel prebuild)
public/                   robots.txt, llms.txt, sitemap.xml, favicon, cover articoli
```

## Aggiungere un articolo

1. Crea `src/data/articles/<slug>.ts` che esporta `meta` (`ArticleMeta`) e `article` (`Article`,
   con `content: Block[]`).
2. Aggiungi la stessa `meta` in `src/data/articlesMeta.ts` (alimenta liste, correlati, categorie).
3. Aggiungi `<slug>` in `src/data/articleSeo.ts` con `seoTitle` (≤ ~60 caratteri) e
   `metaDescription` (~155 caratteri).
4. Metti la cover 1200×630 in `public/covers/<slug>.png` (il titolo è già impresso
   sull'immagine: niente overlay scuro sopra).
5. `npm run build` — sitemap, rotta statica e `llms-full.txt` si aggiornano da soli.

I blocchi disponibili sono in `src/data/articles.ts`: `p`, `h2`, `h3`, `ul`, `ol`, `quote`,
`note`, `table`, `faq`, `image`. Il primo blocco `faq` di ogni articolo diventa automaticamente
schema `FAQPage`; gli `h2` con `id` alimentano l'indice laterale.

## SEO / GEO / AEO

Il posizionamento è l'obiettivo primario del progetto, sui motori classici e sugli assistenti AI:

- **robots.txt** — accesso esplicito a tutti i crawler AI rilevanti; `/pre-diagnosi` e
  `/post-consulenza` esclusi (pagine di funnel, non indicizzabili).
- **llms.txt** — mappa del sito in linguaggio naturale per gli assistenti AI.
- **JSON-LD** — `LegalService` + `WebSite` site-wide in `index.html`; per pagina `Article`,
  `FAQPage`, `BreadcrumbList` e schema locali dai componenti.
- **Contenuto** — ogni articolo apre con una risposta diretta autoconsistente, cita la norma
  (CCII, DPR 602/73…) ed espone tabelle e FAQ: è il formato che gli engine generativi estraggono.

Quando aggiungi rotte, ricordati che la **fonte di verità** è `src/App.tsx`: sitemap e prerender
partono da lì e da `src/data/articles/`.
