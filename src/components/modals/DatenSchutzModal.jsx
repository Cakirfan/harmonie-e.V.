import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DatenSchutzModal({ showd, handleClosed }) {
  

  return (
    <>
      <Modal
        show={showd}
        onHide={handleClosed}
        className="border border-warning"
      >
        <Modal.Header closeButton className="bg-warning border border-danger">
          <Modal.Title className="text-dark fw-semibold fs-2">
            Datenschutzerklärung
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" mb-3 h-75">
          <p className="text-start mb-3">
            Soweit nachstehend keine anderen Angaben gemacht werden, ist die
            Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder
            vertraglich vorgeschrieben, noch für einen Vertragsabschluss
            erforderlich. Sie sind zur Bereitstellung der Daten nicht
            verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt
            nur soweit bei den nachfolgenden Verarbeitungsvorgängen keine
            anderweitige Angabe gemacht wird.
          </p>
          <p className="text-start mb-5">
            "Personenbezogene Daten" sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person beziehen.
          </p>
          <h5 className="mb-3">Server-Logfiles</h5>
          <p className="text-start mb-5">
            Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person
            zu machen. Es werden bei jedem Zugriff auf unsere Website
            Nutzungsdaten durch Ihren Internetbrowser übermittelt und in
            Protokolldaten (Server-Logfiles) gespeichert. Zu diesen
            gespeicherten Daten gehören z.B. Name der aufgerufenen Seite, Datum
            und Uhrzeit des Abrufs, übertragene Datenmenge und der anfragende
            Provider. Diese Daten dienen ausschließlich der Gewährleistung eines
            störungsfreien Betriebs unserer Website und zur Verbesserung unseres
            Angebotes. Eine Zuordnung dieser Daten zu einer bestimmten Person
            ist nicht möglich.
          </p>
          <h5 className="mb-3">
            Erhebung und Verarbeitung bei Nutzung des Kontaktformulars
          </h5>
          <p className="text-start mb-3">
            Bei der Nutzung des Kontaktformulars erheben wir Ihre
            personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur
            in dem von Ihnen zur Verfügung gestellten Umfang. Die
            Datenverarbeitung dient dem Zweck der Kontaktaufnahme. Mit Absenden
            Ihrer Nachricht willigen Sie in die Verarbeitung der übermittelten
            Daten ein. Die Verarbeitung erfolgt auf Grundlage des Art. 6 (1)
            lit. a DSGVO mit Ihrer Einwilligung.
          </p>
          <p className="text-start mb-5">
            Sie können Ihre Einwilligung jederzeit durch Mitteilung an uns
            widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der
            Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.
            Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage.
            Ihre Daten werden anschließend gelöscht, sofern Sie der
            weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.
          </p>
          <h5 className="mb-3">Cookies</h5>
          <p className="text-start mb-4">
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien,
            die im Internetbrowser bzw. vom Internetbrowser auf dem
            Computersystem eines Nutzers gespeichert werden. Ruft ein Nutzer
            eine Website auf, so kann ein Cookie auf dem Betriebssystem des
            Nutzers gespeichert werden. Dieser Cookie enthält eine
            charakteristische Zeichenfolge, die eine eindeutige Identifizierung
            des Browsers beim erneuten Aufrufen der Website ermöglicht. Wir
            setzen Cookies zu dem Zweck ein, unser Angebot nutzerfreundlicher,
            effektiver und sicherer zu machen. Des Weiteren ermöglichen Cookies
            unseren Systemen, Ihren Browser auch nach einem Seitenwechsel zu
            erkennen und Ihnen Services anzubieten. Einige Funktionen unserer
            Internetseite können ohne den Einsatz von Cookies nicht angeboten
            werden. Für diese ist es erforderlich, dass der Browser auch nach
            einem Seitenwechsel wiedererkannt wird.
          </p>
          <p className="text-start mb-4">
            Wir verwenden auf unserer Website darüber hinaus Cookies zu dem
            Zweck, eine Analyse des Surfverhaltens unserer Seitenbesucher zu
            ermöglichen.
          </p>
          <p className="text-start mb-4">
            Des Weiteren verwenden wir Cookies zu dem Zweck, Seitenbesucher
            anschließend auf anderen Webseiten mit gezielter,
            interessenbezogener Werbung anzusprechen.
          </p>
          <p className="text-start mb-3">
            Die Verarbeitung erfolgt auf Grundlage des § 15 (3) TMG sowie Art. 6
            (1) lit. f DSGVO aus dem berechtigten Interesse an den oben
            genannten Zwecken.
          </p>
          <p className="text-start mb-3">
            Die auf diese Weise von Ihnen erhobenen Daten werden durch
            technische Vorkehrungen pseudonymisiert. Eine Zuordnung der Daten zu
            Ihrer Person ist daher nicht mehr möglich. Die Daten werden nicht
            gemeinsam mit sonstigen personenbezogenen Daten von Ihnen
            gespeichert.
          </p>
          <p className="text-start mb-3">
            Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen diese auf Art. 6 (1) f DSGVO
            beruhende Verarbeitung Sie betreffender personenbezogener Daten zu
            widersprechen.
          </p>
          <p className="text-start mb-3">
            Cookies werden auf Ihrem Rechner gespeichert. Daher haben Sie die
            volle Kontrolle über die Verwendung von Cookies. Durch die Auswahl
            entsprechender technischer Einstellungen in Ihrem Internetbrowser
            können Sie die Speicherung der Cookies und Übermittlung der
            enthaltenen Daten verhindern. Bereits gespeicherte Cookies können
            jederzeit gelöscht werden. Wir weisen Sie jedoch darauf hin, dass
            Sie dann gegebenenfalls nicht sämtliche Funktionen dieser Website
            vollumfänglich werden nutzen können.
          </p>
          <p className="text-start mb-5">
            Unter den nachstehenden Links können Sie sich informieren, wie Sie
            die Cookies bei den wichtigsten Browsern verwalten (u.a. auch
            deaktivieren) können:
          </p>
          <div className="mb-3 truncate">
            Chrome Browser:{" "}
            <a
              className="text-sky-600 overflow-ellipsis"
              href="https://support.google.com/accounts/answer/61416?hl=de"
            >
              https://support.google.com/accounts/answer/61416?hl=de
            </a>
          </div>
          <div className="mb-3 truncate">
            Internet Explorer:
            <a
              className="text-sky-600"
              href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
            >
              https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies
            </a>
          </div>
          <div className="mb-3 truncate">
            Mozilla Firefox:
            <a
              className="text-sky-600"
              href="https://support.mozilla.org/de/kb/verbesserter-schutz-aktivitatenverfolgung-desktop?redirectslug=cookies-erlauben-und-ablehnen&redirectlocale=de"
            >
              https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
            </a>
          </div>
          <div className="mb-5 truncate">
            Safari:
            <a
              className="text-sky-600"
              href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"
            >
              https://support.apple.com/de-de/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            </a>
          </div>
          <h5 className="mb-3">Nutzung von Google Analytics</h5>
          <p className="text-start mb-3">
            Nutzung von Google Analytics Wir verwenden auf unserer Website den
            Webanalysedienst Google Analytics der Google Inc. (1600 Amphitheatre
            Parkway, Mountain View, CA 94043, USA; „Google“). Die
            Datenverarbeitung dient dem Zweck der Analyse dieser Website und
            ihrer Besucher. Dazu wird Google im Auftrag des Betreibers dieser
            Website die gewonnenen Informationen benutzen, um Ihre Nutzung der
            Website auszuwerten, um Reports über die Websiteaktivitäten
            zusammenzustellen und um weitere, mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen gegenüber dem
            Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics
            von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
            Daten von Google zusammengeführt.
          </p>
          <p className="text-start mb-3">
            Google Analytics verwendet Cookies, die eine Analyse der Benutzung
            der Website durch Sie ermöglichen. Die durch die Cookies erzeugten
            Informationen über Ihre Benutzung dieser Website werden in der Regel
            an einen Server von Google in den USA übertragen und dort
            gespeichert. Auf dieser Website ist die IP-Anonymisierung aktiviert.
            Dadurch wird Ihre IP-Adresse von Google innerhalb von
            Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
            zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an
            einen Server von Google in den USA übertragen und dort gekürzt. Ihre
            Daten werden gegebenenfalls in die USA übermittelt. Für
            Datenübermittlungen in die USA ist ein Angemessenheitsbeschluss der
            Europäischen Kommission vorhanden. Die Verarbeitung erfolgt auf
            Grundlage des Art. 6 (1) lit. f DSGVO aus dem berechtigten Interesse
            an der bedarfsgerechten und zielgerichteten Gestaltung der Website.
            Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen diese auf Art. 6 (1) f DSGVO
            beruhende Verarbeitung Sie betreffender personenbezogener Daten zu
            widersprechen.
          </p>
          <p className="text-start mb-3">
            Sie können dazu die Speicherung der Cookies durch die Auswahl
            entsprechender technischer Einstellungen Ihrer Browser-Software
            verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
            Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
            vollumfänglich werden nutzen können. Sie können des Weiteren die
            Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der
            Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
            Verarbeitung dieser Daten durch Google verhindern, indem sie das
            unter dem folgenden Link verfügbare Browser-Plug-in herunterladen
            und installieren{" "}
            <div className="truncate">
              <a
                className="text-sky-600"
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
              >
                [https://tools.google.com/dlpage/gaoptout?hl=de]
              </a>{" "}
            </div>
            . Um die Erfassung durch Google Analytics geräteübergreifend zu
            verhindern können Sie einen Opt-Out-Cookie setzen. Opt-Out-Cookies
            verhindern die zukünftige Erfassung Ihrer Daten beim Besuch dieser
            Website. Sie müssen das Opt-Out auf allen genutzten Systemen und
            Geräten durchführen, damit dies umfassend wirkt. Wenn Sie hier
            klicken, wird das Opt-Out-Cookie gesetzt: Google Analytics
            deaktivieren.
          </p>
          <div className="mb-5">
            Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden
            Sie unter{" "}
            <div className=" truncate">
              <a
                className="text-sky-600"
                href="https://marketingplatform.google.com/about/analytics/terms/de/"
              >
                https://www.google.com/analytics/terms/de.html
              </a>{" "}
            </div>
            bzw. unter
            <div className="truncate">
              <a
                className="text-sky-600"
                href="https://policies.google.com/?hl=de&gl=de"
              >
                https://www.google.de/intl/de/policies/
              </a>{" "}
            </div>
            .
          </div>
          <h5 className="mb-3">
            Verwendung von Google Adwords Conversion-Tracking
          </h5>
          <p className="text-start mb-3">
            Wir verwenden auf unserer Website das Online-Werbeprogramm „Google
            AdWords“ und in diesem Rahmen Conversion-Tracking
            (Besuchsaktionsauswertung). Das Google Conversion Tracking ist ein
            Analysedienst der Google Inc. (1600 Amphitheatre Parkway, Mountain
            View, CA 94043, USA; „Google“). Wenn Sie auf eine von Google
            geschaltete Anzeige klicken, wird ein Cookie für das
            Conversion-Tracking auf Ihrem Rechner abgelegt. Diese Cookies haben
            eine begrenzte Gültigkeit, enthalten keine personenbezogenen Daten
            und dienen somit nicht der persönlichen Identifizierung. Wenn Sie
            bestimmte Seiten unserer Website besuchen und das Cookie noch nicht
            abgelaufen ist, können Google und wir erkennen, dass Sie auf die
            Anzeige geklickt haben und zu dieser Seite weitergeleitet wurden.
            Jeder Google AdWords-Kunde erhält ein anderes Cookie. Somit besteht
            keine Möglichkeit, dass Cookies über die Websites von AdWords-Kunden
            nachverfolgt werden können.
          </p>
          <p className="text-start mb-3">
            Die Informationen, die mit Hilfe des Conversion-Cookie eingeholt
            werden, dienen dem Zweck Conversion-Statistiken zu erstellen.
            Hierbei erfahren wir die Gesamtanzahl der Nutzer, die auf eine
            unserer Anzeigen geklickt haben und zu einer mit einem
            Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Wir
            erhalten jedoch keine Informationen, mit denen sich Nutzer
            persönlich identifizieren lassen. Die Verarbeitung erfolgt auf
            Grundlage des Art. 6 (1) lit. f DSGVO aus dem berechtigten Interesse
            an zielgerichteter Werbung und der Analyse der Wirkung und Effizienz
            dieser Werbung.
          </p>
          <p className="text-start mb-3">
            Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen diese auf Art. 6 (1) f DSGVO
            beruhende Verarbeitung Sie betreffender personenbezogener Daten zu
            widersprechen.
          </p>
          <p className="text-start mb-3">
            Dazu können Sie die Speicherung der Cookies durch die Auswahl
            entsprechender technischer Einstellungen Ihrer Browser-Software
            verhindern. Wir weisen Sie jedoch darauf hin, dass Sie in diesem
            Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
            vollumfänglich werden nutzen können. Sie werden sodann nicht in die
            Conversion-Tracking Statistiken aufgenommen.
          </p>
          <p className="text-start mb-3">
            Des Weiteren können Sie in den Einstellungen für Werbung bei Google
            für Sie personalisierte Werbung deaktivieren. Eine Anleitung dazu
            finden Sie unter{" "}
            <div className="truncate">
              <a
                className="text-sky-600"
                href="https://support.google.com/My-Ad-Center-Help/answer/12155764?hl=de&visit_id=638352260993288091-677417330&rd=1"
              >
                https://support.google.com/ads/answer/2662922?hl=de
              </a>
            </div>
            Darüber hinaus können Sie die Verwendung von Cookies durch
            Drittanbieter deaktivieren, indem sie die Deaktivierungsseite der
            Netzwerkwerbeinitiative (Network Advertising Initiative) unter
            <div className="truncate">
              <a
                className="text-sky-600"
                href="https://optout.networkadvertising.org/?c=1"
              >
                https://www.networkadvertising.org/choices/
              </a>{" "}
            </div>
            aufrufen und die dort genannten weiterführenden Information zum
            Opt-Out umsetzen.
          </p>
          <p className="text-start mb-5">
            Weiterführende Informationen sowie die Datenschutzerklärung von
            Google finden Sie unter:{" "}
            <div className="truncate">
              <a
                className="text-sky-600"
                href="https://policies.google.com/privacy?gl=de"
              >
                https://www.google.de/policies/privacy/
              </a>{" "}
            </div>
          </p>
          <p className="text-start mb-3">Verwendung von GoogleMaps</p>
          <p className="text-start mb-3">
            Wir verwenden auf unserer Website die Funktion zur Einbettung von
            GoogleMaps-Karten der Google Inc. (1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA; “Google”).
          </p>
          <p className="text-start mb-3">
            Die Funktion ermöglicht die visuelle Darstellung von geographischen
            Informationen und interaktiven Landkarten.
          </p>
          <p className="text-start mb-3">
            Dabei werden von Google bei Aufrufen der Seiten, in die
            GoogleMaps-Karten eingebunden sich, auch Daten der Besucher der
            Seiten erhoben, verarbeitet und genutzt. Nähere Informationen zur
            Erhebung und Nutzung der Daten durch Google finden Sie in den
            Datenschutzhinweisen von Google unter
            <div className="truncate">
              <a
                className="text-sky-600"
                href="https://policies.google.com/privacy"
              >
                https://www.google.com/privacypolicy.html
              </a>{" "}
            </div>
            . Dort haben Sie auch im Datenschutzcenter die Möglichkeit Ihre
            Einstellungen zu verändern, so dass Sie Ihre von Google
            verarbeiteten Daten verwalten und schützen können.
          </p>
          <p className="text-start mb-3">
            Ihre Daten werden dabei gegebenenfalls auch in die USA übermittelt.
            Für Datenübermittlungen in die USA ist ein Angemessenheitsbeschluss
            der Europäischen Kommission vorhanden.
          </p>
          <p className="text-start mb-3">
            Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen diese auf Art. 6 (1) f DSGVO
            beruhende Verarbeitung Sie betreffender personenbezogener Daten zu
            widersprechen.
          </p>
          <p className="text-start mb-5">
            Dazu müssen Sie die Anwendung JavaScript in Ihrem Browser
            ausschalten. Wir weisen Sie jedoch darauf hin, dass Sie in diesem
            Fall gegebenenfalls nicht sämtliche Funktionen dieser Website, wie
            bspw. die interaktive Kartenanzeige, vollumfänglich werden nutzen
            können.
          </p>
          <h5 className="mb-3">Dauer der Speicherung</h5>
          <p className="text-start mb-5">
            Nach vollständiger Vertragsabwicklung werden die Daten zunächst für
            die Dauer der Gewährleistungsfrist, danach unter Berücksichtigung
            gesetzlicher, insbesondere steuer- und handelsrechtlicher
            Aufbewahrungsfristen gespeichert und dann nach Fristablauf gelöscht,
            sofern Sie der weitergehenden Verarbeitung und Nutzung nicht
            zugestimmt haben.
          </p>
          <p className="text-start mb-3">Rechte der betroffenen Person</p>
          <p className="text-start mb-3">
            Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen folgende
            Rechte nach Art. 15 bis 20 DSGVO zu: Recht auf Auskunft, auf
            Berichtigung, auf Löschung, auf Einschränkung der Verarbeitung, auf
            Datenübertragbarkeit.
          </p>
          <p className="text-start mb-5">
            Außerdem steht Ihnen nach Art. 21 (1) DSGVO ein Widerspruchsrecht
            gegen die Verarbeitungen zu, die auf Art. 6 (1) f DSGVO beruhen,
            sowie gegen die Verarbeitung zum Zwecke von Direktwerbung.
          </p>
          <p className="text-start mb-5">
            Kontaktieren Sie uns auf Wunsch. Die Kontaktdaten finden Sie in
            unserem Impressum.
          </p>
          <h5 className="mb-3">Beschwerderecht bei der Aufsichtsbehörde</h5>
          <p className="text-start mb-3">
            Sie haben gemäß Art. 77 DSGVO das Recht, sich bei der
            Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die
            Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt
          </p>
        </Modal.Body>
        <Modal.Footer className="bg-warning border border-danger">
          <Button variant="secondary" onClick={handleClosed}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DatenSchutzModal;
