import { useEffect } from "react";
import { Head } from "vite-react-ssg";

/**
 * Per-page SEO head, rendered into the static HTML at prerender time by
 * vite-react-ssg (via <Head>). Every route ships complete <title>/meta/canonical
 * /Open Graph/Twitter/JSON-LD in its prerendered HTML, so search engines and AI
 * crawlers that don't execute JS read unique metadata per page.
 *
 * Site-wide invariants (favicon, fonts, Organization/WebSite JSON-LD) stay in
 * index.html; everything page-specific is owned here. The prop API matches the
 * previous imperative version so page components did not need to change.
 */

const SITE = "https://www.tuteladebito.it";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;

export interface SEOProps {
  /** Exact <title> text (already includes the "| Tutela Debito" suffix where desired). */
  title: string;
  description?: string;
  keywords?: string;
  /** Robots directive. Defaults to a standard indexable value. */
  robots?: string;
  /** Full canonical URL. When provided, Open Graph / Twitter tags are emitted too. */
  canonical?: string;
  ogType?: string;
  /** Defaults to `title`. */
  ogTitle?: string;
  /** Defaults to `description`. */
  ogDescription?: string;
  /** og:image / twitter:image. Defaults to the site OG image. */
  image?: string;
  /** JSON-LD schema objects. Falsy entries are ignored. */
  jsonLd?: (object | null | undefined)[];
  /** Extra per-page meta tags (e.g. article:published_time). */
  extraMeta?: { name?: string; property?: string; content?: string }[];
}

const SEO = ({
  title,
  description,
  keywords,
  robots = "index, follow, max-image-preview:large, max-snippet:-1",
  canonical,
  ogType = "website",
  ogTitle,
  ogDescription,
  image = DEFAULT_IMAGE,
  jsonLd,
  extraMeta,
}: SEOProps) => {
  const schemas = (jsonLd ?? []).filter(Boolean) as object[];
  const extras = (extraMeta ?? []).filter((m) => m.content != null);

  // <Head> (react-helmet-async, via vite-react-ssg) renders the correct tags into
  // the prerendered static HTML — which is what search engines and AI crawlers read,
  // since they request each URL directly. But it does not reliably update the head on
  // client-side (in-app) navigation in the production build, so the tab title/canonical
  // would go stale as users click around. This effect keeps the crawler-irrelevant but
  // user-facing tags in sync on the client. It never runs during prerender (no useEffect
  // in SSR), so it can't affect the static HTML.
  useEffect(() => {
    document.title = title;

    const upsert = (
      selector: string,
      create: () => HTMLElement,
      attr: string,
      value?: string,
    ) => {
      if (value == null) return;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    upsert('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    }, "content", description);

    upsert('meta[name="robots"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "robots");
      return m;
    }, "content", robots);

    upsert('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    }, "href", canonical);

    if (canonical) {
      upsert('meta[property="og:url"]', () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:url");
        return m;
      }, "content", canonical);
      upsert('meta[property="og:title"]', () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:title");
        return m;
      }, "content", ogTitle ?? title);
      upsert('meta[property="og:description"]', () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:description");
        return m;
      }, "content", ogDescription ?? description);
    }
  }, [title, description, robots, canonical, ogTitle, ogDescription]);

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <link rel="alternate" hrefLang="it-IT" href={canonical} />}

      {/* Open Graph / Twitter — only for shareable, canonical pages. */}
      {canonical && <meta property="og:type" content={ogType} />}
      {canonical && <meta property="og:title" content={ogTitle ?? title} />}
      {canonical && description && (
        <meta property="og:description" content={ogDescription ?? description} />
      )}
      {canonical && <meta property="og:url" content={canonical} />}
      {canonical && <meta property="og:site_name" content="Tutela Debito" />}
      {canonical && <meta property="og:locale" content="it_IT" />}
      {canonical && <meta property="og:image" content={image} />}
      {canonical && <meta name="twitter:card" content="summary_large_image" />}
      {canonical && <meta name="twitter:title" content={ogTitle ?? title} />}
      {canonical && description && (
        <meta name="twitter:description" content={ogDescription ?? description} />
      )}
      {canonical && <meta name="twitter:image" content={image} />}

      {extras.map((m, i) =>
        m.property ? (
          <meta key={`x${i}`} property={m.property} content={m.content} />
        ) : (
          <meta key={`x${i}`} name={m.name} content={m.content} />
        ),
      )}

      {schemas.map((obj, i) => (
        <script key={`ld${i}`} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Head>
  );
};

export default SEO;
