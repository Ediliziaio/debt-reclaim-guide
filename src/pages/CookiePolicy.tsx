import TDLegalLayout from "@/components/TDLegalLayout";

const CookiePolicy = () => {
  return (
    <TDLegalLayout
      title="Cookie Policy"
      subtitle="Informativa sull'uso dei cookie da parte del sito tuteladebito.it, ai sensi della normativa italiana ed europea in materia di protezione dei dati personali."
      lastUpdate="14 maggio 2026"
      icon="cookie"
      metaDescription="Cookie Policy di Tutela Debito: tipologie di cookie utilizzati, finalità, durata, e modalità di gestione delle preferenze."
      canonicalPath="/cookie"
    >
      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. I cookie consentono al sito di funzionare correttamente, ricordare le preferenze dell'utente e raccogliere informazioni statistiche aggregate sulla navigazione.
      </p>

      <h2>2. Tipologie di cookie utilizzati</h2>
      <p>Il sito <strong>tuteladebito.it</strong> utilizza le seguenti tipologie di cookie:</p>

      <h3>2.1 Cookie tecnici (necessari)</h3>
      <p>
        Sono cookie indispensabili al corretto funzionamento del sito. Non richiedono consenso preventivo e non possono essere disattivati senza compromettere la fruibilità del sito. Includono:
      </p>
      <ul>
        <li>Cookie di sessione per la gestione della navigazione.</li>
        <li>Cookie di preferenza (es. lingua, accettazione del banner cookie).</li>
        <li>Cookie di sicurezza per prevenire attacchi.</li>
      </ul>

      <h3>2.2 Cookie analitici di prima parte</h3>
      <p>
        Sono cookie utilizzati per raccogliere informazioni in forma aggregata e anonima sull'utilizzo del sito (es. numero di visitatori, pagine più visitate, durata della visita). Quando configurati con anonimizzazione dell'IP e in assenza di trasferimento a terzi, sono assimilati ai cookie tecnici e non richiedono consenso.
      </p>

      <h3>2.3 Cookie analitici di terze parti</h3>
      <p>
        Possono essere installati servizi di analisi forniti da terze parti (ad esempio Google Analytics) che utilizzano cookie per raccogliere dati aggregati sull'utilizzo del sito. Tali cookie sono installati solo previo consenso dell'utente. I dati raccolti sono trattati dal fornitore secondo la propria informativa privacy.
      </p>

      <h3>2.4 Cookie di profilazione e marketing</h3>
      <p>
        Il sito <strong>non utilizza</strong> cookie di profilazione o di marketing per finalità pubblicitarie. Eventuali variazioni future saranno comunicate preventivamente tramite aggiornamento della presente policy e raccolta del consenso esplicito.
      </p>

      <h2>3. Cookie di terze parti</h2>
      <p>
        Il sito può integrare contenuti o servizi forniti da terze parti che, a loro volta, possono installare cookie sui dispositivi degli utenti. Le terze parti operano come autonomi titolari del trattamento. Di seguito le principali:
      </p>

      <table>
        <thead>
          <tr>
            <th>Fornitore</th>
            <th>Finalità</th>
            <th>Durata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Fonts</td>
            <td>Caricamento font tipografici</td>
            <td>Sessione</td>
          </tr>
          <tr>
            <td>Google Analytics (eventuale)</td>
            <td>Statistiche aggregate di utilizzo</td>
            <td>Fino a 26 mesi</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Durata dei cookie</h2>
      <p>I cookie possono essere classificati in base alla loro durata:</p>
      <ul>
        <li><strong>Cookie di sessione</strong>: si cancellano automaticamente alla chiusura del browser.</li>
        <li><strong>Cookie persistenti</strong>: rimangono memorizzati nel dispositivo per un periodo determinato (variabile, da pochi minuti a diversi mesi).</li>
      </ul>

      <h2>5. Gestione delle preferenze</h2>
      <p>
        L'utente può in qualsiasi momento gestire o disattivare i cookie tramite:
      </p>
      <ul>
        <li>Le impostazioni del proprio browser (Chrome, Firefox, Safari, Edge ecc.).</li>
        <li>Il banner di consenso visualizzato alla prima visita al sito.</li>
        <li>Strumenti di gestione del consenso disponibili sul sito (se presenti).</li>
      </ul>
      <p>
        Si segnala che la disattivazione dei cookie tecnici può compromettere il corretto funzionamento del sito.
      </p>

      <h3>Come disattivare i cookie nei principali browser</h3>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>6. Trattamento dei dati raccolti tramite cookie</h2>
      <p>
        I dati raccolti tramite cookie sono trattati nel rispetto della <a href="/privacy">Privacy Policy</a> dello Studio, da consultare per informazioni complete su titolare, finalità, base giuridica, conservazione e diritti dell'interessato.
      </p>

      <h2>7. Modifiche alla Cookie Policy</h2>
      <p>
        Lo Studio si riserva di aggiornare la presente Cookie Policy in caso di modifiche tecniche, organizzative o normative. Le modifiche saranno pubblicate su questa pagina con la data di ultimo aggiornamento.
      </p>

      <blockquote>
        Per qualsiasi domanda relativa all'uso dei cookie è possibile contattare lo Studio all'indirizzo <a href="mailto:info@studioavvocatorossi.it">info@studioavvocatorossi.it</a>.
      </blockquote>
    </TDLegalLayout>
  );
};

export default CookiePolicy;
