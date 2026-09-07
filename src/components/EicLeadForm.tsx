import { useEffect, useRef, useState } from "react";

/**
 * Modulo di contatto ospitato da EdiliziaInCloud: le richieste entrano
 * direttamente nel CRM dello studio.
 *
 * Sostituisce i moduli precedenti, che simulavano l'invio con un ritardo e
 * mostravano "Richiesta inviata" senza recapitare nulla a nessuno.
 *
 * Tre dettagli non ovvi:
 *
 * 1. L'`src` si compone solo nel browser, perché include i parametri di
 *    campagna presi dall'URL corrente. In fase di prerender `window` non
 *    esiste, quindi l'iframe viene montato dopo l'idratazione: così si carica
 *    una volta sola e già con i parametri giusti, invece di caricarsi due volte
 *    cambiando `src` a posteriori.
 *
 * 2. L'altezza arriva dal modulo via postMessage. Il messaggio viene accettato
 *    solo se proviene davvero da quell'iframe e da quell'origine: senza i due
 *    controlli qualunque pagina o script potrebbe pilotare il layout.
 *
 * 3. Il modulo raccoglie dati personali su un dominio di terze parti: va
 *    citato nell'informativa privacy.
 */

const FORM_ORIGIN = "https://app.ediliziaincloud.com";
const SLUG = "tutela-debito";
const COMPANY_ID = "3c6e1cf3-1b86-4ddd-add0-4e377bd5cab3";

/** Parametri di campagna da trasferire al modulo, per attribuire il lead. */
const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "wbraid",
  "gbraid",
  "fbclid",
  "ttclid",
  "msclkid",
  "li_fat_id",
];

const MIN_HEIGHT = 620;
const MAX_HEIGHT = 2600;

const buildSrc = (): string => {
  const base = `${FORM_ORIGIN}/f?slug=${SLUG}&company_id=${COMPANY_ID}`;
  try {
    const current = new URLSearchParams(window.location.search);
    const extra = TRACKING_PARAMS.flatMap((key) => {
      const value = current.get(key);
      return value ? [`${encodeURIComponent(key)}=${encodeURIComponent(value)}`] : [];
    });
    return extra.length ? `${base}&${extra.join("&")}` : base;
  } catch {
    return base;
  }
};

interface EicLeadFormProps {
  /** Titolo accessibile dell'iframe, adattato al contesto in cui compare. */
  title?: string;
  className?: string;
}

const EicLeadForm = ({ title = "Richiedi una valutazione gratuita", className }: EicLeadFormProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    setSrc(buildSrc());
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== FORM_ORIGIN) return;
      if (event.source !== iframeRef.current?.contentWindow) return;
      const data = event.data as { type?: string; slug?: string; height?: number } | null;
      if (!data || data.type !== "eic-lead-form-height" || data.slug !== SLUG) return;
      const next = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, Number(data.height ?? 0) + 16));
      if (next) setHeight(next);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Prima dell'idratazione si riserva lo spazio, così l'arrivo del modulo non
  // fa saltare il layout (e non peggiora il CLS).
  if (!src) {
    return (
      <div
        className={className}
        style={{ minHeight: MIN_HEIGHT }}
        aria-hidden="true"
      />
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      className={className}
      style={{
        width: "100%",
        height,
        border: 0,
        maxWidth: 640,
        margin: "0 auto",
        display: "block",
        borderRadius: 12,
        overflow: "hidden",
      }}
    />
  );
};

export default EicLeadForm;
