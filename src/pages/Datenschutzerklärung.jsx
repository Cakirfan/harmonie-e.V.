import React from "react";
import { motion } from "framer-motion";

const Datenschutzerklärung = () => {

    const containerVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.7,
        },
      },
    };

  return (
    <motion.section
      className="container mt-5 shadow-lg p-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Datenschutzerklärung</h1>
      <hr className="border-3 shadow border-danger my-4" />

      <div className="mb-5">
        <h3 className="mb-4">1. Datenschutz auf einen Blick</h3>
        <div className="lh-sm my-4">
          <h4 className="text-secondary">Allgemeine Hinweise</h4>
          <p className="text-secondary">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>
        </div>
        <div className="mb-4 lh-sm mb-5">
          <h4 className="text-secondary mb-3">
            Datenerfassung auf dieser Website
          </h4>
          <div className="mb-4">
            <h5>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h5>
            <p className="text-secondary">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Hinweis zur Verantwortlichen Stelle“ in dieser
              Datenschutzerklärung entnehmen.
            </p>
          </div>
          <div className="mb-4">
            <h5>Wie erfassen wir Ihre Daten?</h5>
            <p className="text-secondary">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
            <p className="text-secondary">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>
          </div>
          <div className="mb-4">
            <h5>Wofür nutzen wir Ihre Daten?</h5>
            <p className="text-secondary">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </div>
          <div className="mb-4">
            <h5>Welche Rechte haben Sie bezüglich Ihrer Daten?</h5>
            <p className="text-secondary">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
            <p className="text-secondary">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>
          </div>
          <h4 className="text-secondary mb-3">
            Analyse-Tools und Tools von Dritt­anbietern
          </h4>
          <div className="mb-4">
            <p className="text-secondary">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen.
            </p>
            <p className="text-secondary">
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie
              in der folgenden Datenschutzerklärung.
            </p>
          </div>
        </div>{" "}
      </div>

      <div className="mb-5">
        <h3 className="mb-4">2. Hosting</h3>
        <div className="lh-sm mb-4">
          <h4 className="text-secondary my-3">Externes Hosting</h4>
          <p className="text-secondary">
            Diese Website wird bei einem externen Dienstleister gehostet
            (Hoster). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
            und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
            Websitezugriffe und sonstige Daten, die über eine Website generiert
            werden, handeln.
          </p>
          <p className="text-secondary">
            Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
            gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
            lit. b DSGVO) und im Interesse einer sicheren, schnellen und
            effizienten Bereitstellung unseres Online-Angebots durch einen
            professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
            Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
            oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
            Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
            ist jederzeit widerrufbar.
          </p>
          <p className="text-secondary">
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
            Erfüllung seiner Leistungspflichten erforderlich ist und unsere
            Weisungen in Bezug auf diese Daten befolgen.
          </p>
          <p className="text-secondary">Wir setzen folgenden Hoster ein:</p>
          <div>
            <p className="lh-sm text-secondary">STRATO AG</p>
            <p className="lh-sm text-secondary">Otto-Ostrowski-Straße 7</p>
            <p className="lh-sm text-secondary">10249 Berlin</p>
          </div>
        </div>
        <div>
          <h4>Auftragsverarbeitung</h4>
          <p className="text-secondary">
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben
            genannten Anbieter geschlossen. Hierbei handelt es sich um einen
            datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet,
            dass dieser die personenbezogenen Daten unserer Websitebesucher nur
            nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="mb-4">
          3. Allgemeine Hinweise und Pflicht­informationen
        </h3>
        <div className="lh-sm mb-4">
          <h4 className="text-secondary my-4">Datenschutz</h4>
          <p className="text-secondary">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="text-secondary">
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie persönlich identifiziert werden können. Die
            vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
            und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
            Zweck das geschieht.
          </p>
          <p className="text-secondary">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="text-secondary">Hinweis zur verantwortlichen Stelle</h4>
        <div className="lh-sm my-4">
          <div>
            <p className="text-secondary">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
          </div>
          <div className="lh-sm mb-5">
            <p className="text-secondary lh-sm">Harmonie e.V.</p>
            <p className="text-secondary lh-sm">Zufuhrstraße 2</p>
            <p className="text-secondary lh-sm">41462 Neuss</p>
          </div>
          <div className="mb-4 lh-sm mb-5">
            <p className="text-secondary lh-sm">Vereinsregister: .......</p>
            <p className="text-secondary lh-sm">
              Registergericht: Amtsgericht Düsseldorf
            </p>
          </div>{" "}
          <div className="mb-4 lh-sm mb-5">
            <p className="text-secondary">Telefon: 15566 051266</p>
            <p className="text-secondary">EMail: info@harmonieneuss.de</p>
          </div>
          <div className="mb-4 lh-sm mb-5">
            <p className="text-secondary">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="text-secondary">Speicherdauer</h4>
        <div className="lh-sm  my-4">
          <p className="text-secondary">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
            ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
            zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben (z. B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
            erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
            auf dieser Website
          </h4>
          <p className="text-secondary">
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
            wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
            Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
            Falle einer ausdrücklichen Einwilligung in die Übertragung
            personenbezogener Daten in Drittstaaten erfolgt die
            Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
            DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff
            auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting)
            eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf
            Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit
            widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
            Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten
            wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
            Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung
            einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von
            Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf
            Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
            DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
            Rechtsgrundlagen wird in den folgenden Absätzen dieser
            Datenschutzerklärung informiert.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
          </h4>
          <p className="text-secondary">
            Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den
            USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten.
            Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in
            diese Drittstaaten übertragen und dort verarbeitet werden. Wir
            weisen darauf hin, dass in diesen Ländern kein mit der EU
            vergleichbares Datenschutzniveau garantiert werden kann.
            Beispielsweise sind US-Unternehmen dazu verpflichtet,
            personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne
            dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es
            kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B.
            Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
            Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern.
            Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h4>
          <p className="text-secondary">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
            gegen Direktwerbung (Art. 21 DSGVO)
          </h4>
          <p className="text-secondary">
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
            ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN,
            DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
            VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN;
            DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING.
            DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
            ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH
            EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
            MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE
            GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
            UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
            GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN
            (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
          </p>
          <p className="text-secondary">
            WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
            BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
            VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
            DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
            SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
            WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
            NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH
            ART. 21 ABS. 2 DSGVO).
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Beschwerde­recht bei der zuständigen Aufsichts­behörde
          </h4>
          <p className="text-secondary">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
            besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
            gerichtlicher Rechtsbehelfe.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Recht auf Daten­übertrag­barkeit
          </h4>
          <p className="text-secondary">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
            oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
            an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
            soweit es technisch machbar ist.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">SSL- bzw. TLS-Verschlüsselung</h4>
          <p className="text-secondary">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
            oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-
            bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
            Sie daran, dass die Adresszeile des Browsers von „http://“ auf
            „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p className="text-secondary">
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
            Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
            werden.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Auskunft, Löschung und Berichtigung
          </h4>
          <p className="text-secondary">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung und ggf. ein Recht auf
            Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
            Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an
            uns wenden.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Recht auf Einschränkung der Verarbeitung
          </h4>
          <p className="text-secondary">
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu können Sie sich
            jederzeit an uns wenden. Das Recht auf Einschränkung der
            Verarbeitung besteht in folgenden Fällen:
          </p>
          <ul className="list-group list-group-numbered">
            <li className="list-group-item text-secondary">
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, benötigen wir in der Regel
              Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
              das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
            <li className="list-group-item text-secondary">
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
              geschah/geschieht, können Sie statt der Löschung die Einschränkung
              der Datenverarbeitung verlangen.
            </li>
            <li className="list-group-item text-secondary">
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
              sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
              Rechtsansprüchen benötigen, haben Sie das Recht, statt der
              Löschung die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
            <li className="list-group-item text-secondary">
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abwägung zwischen Ihren und unseren Interessen
              vorgenommen werden. Solange noch nicht feststeht, wessen
              Interessen überwiegen, haben Sie das Recht, die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
          </ul>
          <p className="text-secondary">
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
            abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
            Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
            Rechte einer anderen natürlichen oder juristischen Person oder aus
            Gründen eines wichtigen öffentlichen Interesses der Europäischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Widerspruch gegen Werbe-E-Mails
          </h4>
          <p className="text-secondary">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien wird hiermit widersprochen. Die
            Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
            im Falle der unverlangten Zusendung von Werbeinformationen, etwa
            durch Spam-E-Mails, vor.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <h3>4. Datenerfassung auf dieser Website</h3>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">Cookies</h4>
          <p className="text-secondary">
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
            kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
            Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
            automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
            gespeichert, bis Sie diese selbst löschen oder eine automatische
            Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p className="text-secondary">
            Teilweise können auch Cookies von Drittunternehmen auf Ihrem
            Endgerät gespeichert werden, wenn Sie unsere Seite betreten
            (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung
            bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur
            Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p className="text-secondary">
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
            technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht
            funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
            von Videos). Andere Cookies dienen dazu, das Nutzerverhalten
            auszuwerten oder Werbung anzuzeigen.
          </p>
          <p className="text-secondary">
            Cookies, die zur Durchführung des elektronischen
            Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
            erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
            Optimierung der Website (z. B. Cookies zur Messung des Webpublikums)
            erforderlich sind (notwendige Cookies), werden auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
            Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
            berechtigtes Interesse an der Speicherung von notwendigen Cookies
            zur technisch fehlerfreien und optimierten Bereitstellung seiner
            Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und
            vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt
            die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung
            ist jederzeit widerrufbar.
          </p>
          <p className="text-secondary">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
            Cookies informiert werden und Cookies nur im Einzelfall erlauben,
            die Annahme von Cookies für bestimmte Fälle oder generell
            ausschließen sowie das automatische Löschen der Cookies beim
            Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies
            kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="text-secondary">
            Soweit Cookies von Drittunternehmen oder zu Analysezwecken
            eingesetzt werden, werden wir Sie hierüber im Rahmen dieser
            Datenschutzerklärung gesondert informieren und ggf. eine
            Einwilligung abfragen.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">Kontaktformular</h4>
          <p className="text-secondary">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="text-secondary">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
            auf unserem berechtigten Interesse an der effektiven Bearbeitung der
            an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
            Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
            abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-secondary">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck für die Datenspeicherung
            entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
            Zwingende gesetzliche Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Anfrage per E-Mail, Telefon oder Telefax
          </h4>
          <p className="text-secondary">
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
            Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen
            Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
            uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
            Ihre Einwilligung weiter.
          </p>
          <p className="text-secondary">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
            auf unserem berechtigten Interesse an der effektiven Bearbeitung der
            an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
            Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
            abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-secondary">
            Die von Ihnen an uns per Kontaktanfragen übersandten Daten
            verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
            Einwilligung zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
            Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
            gesetzliche Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <h3>5. Soziale Medien</h3>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            Social-Media-Elemente mit Shariff
          </h4>
          <p className="text-secondary">
            Auf dieser Website werden Elemente von sozialen Medien verwendet (z.
            B. Facebook, Twitter, Instagram, Pinterest, XING, LinkedIn, Tumblr).
          </p>
          <p className="text-secondary">
            Die Social-Media-Elemente können Sie in der Regel anhand der
            jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf
            dieser Website zu gewährleisten, verwenden wir diese Elemente nur
            zusammen mit der sogenannten „Shariff“-Lösung. Diese Anwendung
            verhindert, dass die auf dieser Website integrierten
            Social-Media-Elemente Ihre personenbezogenen Daten schon beim ersten
            Betreten der Seite an den jeweiligen Anbieter übertragen.
          </p>
          <p className="text-secondary">
            Erst wenn Sie das jeweilige Social-Media-Element durch Anklicken der
            zugehörigen Schaltfläche aktivieren, wird eine direkte Verbindung
            zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das
            Social-Media-Element aktivieren, erhält der jeweilige Anbieter die
            Information, dass Sie mit Ihrer IP-Adresse diese Website besucht
            haben. Wenn Sie gleichzeitig in Ihrem jeweiligen
            Social-Media-Account (z. B. Facebook) eingeloggt sind, kann der
            jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto
            zuordnen.
          </p>
          <p className="text-secondary">
            Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des
            Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG dar. Diese
            Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
            widerrufen.
          </p>
          <p className="text-secondary">
            Der Einsatz des Dienstes erfolgt, um die gesetzlich vorgeschriebenen
            Einwilligungen für den Einsatz bestimmter Technologien einzuholen.
            Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">Facebook</h4>
          <p className="text-secondary">
            Auf dieser Website sind Elemente des sozialen Netzwerks Facebook
            integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland
            Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten
            werden nach Aussage von Facebook jedoch auch in die USA und in
            andere Drittländer übertragen.
          </p>
          <p className="text-secondary">
            Eine Übersicht über die Facebook Social-Media-Elemente finden Sie
            hier:{" "}
            <a
              href=" https://developers.facebook.com/docs/plugins/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.facebook.com/docs/plugins/?locale=de_DE.
            </a>
          </p>
          <p className="text-secondary">
            Wenn das Social-Media-Element aktiv ist, wird eine direkte
            Verbindung zwischen Ihrem Endgerät und dem Facebook-Server
            hergestellt. Facebook erhält dadurch die Information, dass Sie mit
            Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook
            „Like-Button“ anklicken, während Sie in Ihrem Facebook-Account
            eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem
            Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser
            Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass
            wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
            übermittelten Daten sowie deren Nutzung durch Facebook erhalten.
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
            von Facebook unter:{" "}
            <a
              href="https://de-de.facebook.com/privacy/explanation"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://de-de.facebook.com/privacy/explanation
            </a>{" "}
          </p>
          <p className="text-secondary">
            Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
            Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung
            des Dienstes auf Grundlage unseres berechtigten Interesses an einer
            möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
          </p>
          <p className="text-secondary">
            Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten
            auf unserer Website erfasst und an Facebook weitergeleitet werden,
            sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal
            Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese
            Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame
            Verantwortlichkeit beschränkt sich dabei ausschließlich auf die
            Erfassung der Daten und deren Weitergabe an Facebook. Die nach der
            Weiterleitung erfolgende Verarbeitung durch Facebook ist nicht Teil
            der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden
            Verpflichtungen wurden in einer Vereinbarung über gemeinsame
            Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie
            unter:{" "}
            <a
              href="https://www.facebook.com/legal/controller_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/controller_addendum.
            </a>{" "}
            Laut dieser Vereinbarung sind wir für die Erteilung der
            Datenschutzinformationen beim Einsatz des Facebook-Tools und für die
            datenschutzrechtlich sichere Implementierung des Tools auf unserer
            Website verantwortlich. Für die Datensicherheit der
            Facebook-Produkte ist Facebook verantwortlich. Betroffenenrechte (z.
            B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten
            Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die
            Betroffenenrechte bei uns geltend machen, sind wir verpflichtet,
            diese an Facebook weiterzuleiten.
          </p>
          <p className="text-secondary">
            Die Datenübertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gestützt. Details finden
            Sie hier:
          </p>
          <p className="text-secondary">
            <a
              href="https://www.facebook.com/legal/EU_data_transfer_addendum, https://de-de.facebook.com/help/566994660333381"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/EU_data_transfer_addendum,
              https://de-de.facebook.com/help/566994660333381
            </a>{" "}
            <span> und </span>
            <a
              href="https://www.facebook.com/policy.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/policy.php.
            </a>
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">Twitter</h4>
          <p className="text-secondary">
            Auf dieser Website sind Funktionen des Dienstes Twitter eingebunden.
            Diese Funktionen werden angeboten durch die Twitter International
            Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07,
            Irland.
          </p>
          <p className="text-secondary">
            Wenn das Social-Media-Element aktiv ist, wird eine direkte
            Verbindung zwischen Ihrem Endgerät und dem Twitter-Server
            hergestellt. Twitter erhält dadurch Informationen über den Besuch
            dieser Website durch Sie. Durch das Benutzen von Twitter und der
            Funktion „Re-Tweet“ werden die von Ihnen besuchten Websites mit
            Ihrem Twitter-Account verknüpft und anderen Nutzern bekannt gegeben.
            Wir weisen darauf hin, dass wir als Anbieter der Seiten keine
            Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung
            durch Twitter erhalten. Weitere Informationen hierzu finden Sie in
            der Datenschutzerklärung von Twitter unter:{" "}
            <a
              href="https://twitter.com/de/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://twitter.com/de/privacy.
            </a>
          </p>
          <p className="text-secondary">
            Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
            Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung
            des Dienstes auf Grundlage unseres berechtigten Interesses an einer
            möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
          </p>
          <p className="text-secondary">
            Die Datenübertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gestützt. Details finden
            Sie hier:{" "}
            <a
              href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://gdpr.twitter.com/en/controller-to-controller-transfers.html.
            </a>
          </p>
          <p className="text-secondary">
            Ihre Datenschutzeinstellungen bei Twitter können Sie in den
            Konto-Einstellungen unter{" "}
            <a
              href=" https://twitter.com/account/settings "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://twitter.com/account/settings
            </a>{" "}
            ändern.
          </p>
        </div>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">Instagram</h4>
          <p className="text-secondary">
            Auf dieser Website sind Funktionen des Dienstes Instagram
            eingebunden. Diese Funktionen werden angeboten durch die Meta
            Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal
            Harbour, Dublin 2, Irland.
          </p>
          <p className="text-secondary">
            Wenn das Social-Media-Element aktiv ist, wird eine direkte
            Verbindung zwischen Ihrem Endgerät und dem Instagram-Server
            hergestellt. Instagram erhält dadurch Informationen über den Besuch
            dieser Website durch Sie.
          </p>
          <p className="text-secondary">
            Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie
            durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit
            Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch
            dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin,
            dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
            übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
          </p>
          <p className="text-secondary">
            Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
            Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung
            des Dienstes auf Grundlage unseres berechtigten Interesses an einer
            möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
          </p>
          <p className="text-secondary">
            Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten
            auf unserer Website erfasst und an Facebook bzw. Instagram
            weitergeleitet werden, sind wir und die Meta Platforms Ireland
            Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland
            gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26
            DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei
            ausschließlich auf die Erfassung der Daten und deren Weitergabe an
            Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende
            Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der
            gemeinsamen Verantwortung. Die uns gemeinsam obliegenden
            Verpflichtungen wurden in einer Vereinbarung über gemeinsame
            Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie
            unter:{" "}
            <a
              href="https://www.facebook.com/legal/controller_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/controller_addendum.
            </a>{" "}
            Laut dieser Vereinbarung sind wir für die Erteilung der
            Datenschutzinformationen beim Einsatz des Facebook- bzw.
            Instagram-Tools und für die datenschutzrechtlich sichere
            Implementierung des Tools auf unserer Website verantwortlich. Für
            die Datensicherheit der Facebook bzw. Instagram-Produkte ist
            Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen)
            hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten
            können Sie direkt bei Facebook geltend machen. Wenn Sie die
            Betroffenenrechte bei uns geltend machen, sind wir verpflichtet,
            diese an Facebook weiterzuleiten.
          </p>
          <p className="text-secondary">
            Die Datenübertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gestützt. Details finden
            Sie hier:
            <a
              href="https://www.facebook.com/legal/EU_data_transfer_addendum,
              https://help.instagram.com/519522125107875"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/EU_data_transfer_addendum,
              https://help.instagram.com/519522125107875
            </a>{" "}
            und{" "}
            <a
              href="https://de-de.facebook.com/help/566994660333381"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://de-de.facebook.com/help/566994660333381.
            </a>{" "}
          </p>
          <p className="text-secondary">
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
            von Instagram:{" "}
            <a
              href="https://instagram.com/about/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://instagram.com/about/legal/privacy/.
            </a>{" "}
          </p>
        </div>
      </div>

      <div className="mb-5">
        <h3>6. Plugins und Tools</h3>
        <div className="lh-sm my-4">
          <h4 className="text-secondary my-4">
            YouTube mit erweitertem Datenschutz
          </h4>
          <p className="text-secondary">
            Diese Website bindet Videos der YouTube ein. Betreiber der Seiten
            ist die Google Ireland Limited („Google“), Gordon House, Barrow
            Street, Dublin 4, Irland.
          </p>
          <p className="text-secondary">
            Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus
            bewirkt laut YouTube, dass YouTube keine Informationen über die
            Besucher auf dieser Website speichert, bevor diese sich das Video
            ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den
            erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen.
            So stellt YouTube – unabhängig davon, ob Sie sich ein Video ansehen
            – eine Verbindung zum Google DoubleClick-Netzwerk her.
          </p>
          <p className="text-secondary">
            Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine
            Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem
            YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
            Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie
            YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil
            zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem
            YouTube-Account ausloggen.
          </p>
          <p className="text-secondary">
            Des Weiteren kann YouTube nach Starten eines Videos verschiedene
            Cookies auf Ihrem Endgerät speichern oder vergleichbare
            Wiedererkennungstechnologien (z. B. Device-Fingerprinting)
            einsetzen. Auf diese Weise kann YouTube Informationen über Besucher
            dieser Website erhalten. Diese Informationen werden u. a. verwendet,
            um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu
            verbessern und Betrugsversuchen vorzubeugen.
          </p>
          <p className="text-secondary">
            Gegebenenfalls können nach dem Start eines YouTube-Videos weitere
            Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen
            Einfluss haben.
          </p>
          <p className="text-secondary">
            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
            Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
            oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
            Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
            ist jederzeit widerrufbar.
          </p>
          <p className="text-secondary">
            Weitere Informationen über Datenschutz bei YouTube finden Sie in
            deren Datenschutzerklärung unter:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy?hl=de.
            </a>{" "}
          </p>
          <p className="text-secondary">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.e-recht24.de
            </a>{" "}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Datenschutzerklärung;
