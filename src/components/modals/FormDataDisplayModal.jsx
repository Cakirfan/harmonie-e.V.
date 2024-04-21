import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FaCheck, FaPrint } from "react-icons/fa";

const FormDataDisplayModal = ({ show, handleClose, data }) => {
  const printRef = useRef();

  const handlePrint = () => {
    if (printRef.current) {
      const printContents = printRef.current.innerHTML;
      const windowPrint = window.open("", "", "height=842, width=595");

      const css = `
        <style>
          body { 
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
          }
          .titel {
            margin-top: 50px;
            font-size: 24px;
            text-align: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
            font-size: 14px;
          }
          h1, h2 {
            text-align: center;
          }
          p {
            margin-bottom: 10px;
            font-size: 11px;
          }
          .fw-semibold {
            font-weight: 600;
          }
          .fw-light {
            font-weight: 300;
          }
          .fs-5 {
            font-size: 1.25rem; /* Adjust size as necessary */
          }
          .text-left {
            text-align: left; /* Ensure left alignment in print */
          }
          .text-right {
            text-align: right; /* Ensure right alignment in print */
          }
          .signature-container {
            display: flex;
            justify-content: space-between; /* Spread children across the available space */
            align-items: center; /* Align children vertically */
            margin-top: 40px; /* Adjust according to your layout */
          }
          .signature-left, .signature-right {
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Left side align start */
          }
          .signature-right {
            align-items: flex-end; /* Right side align end */
          }
        </style>
      `;

      windowPrint.document.write(`
        <html>
        <head>
          <title>Antrag auf Mitgliedschaft</title>
          ${css}
        </head>
        <body>
          ${printContents}
        </body>
        </html>
      `);

      windowPrint.document.close();
      windowPrint.focus();
      setTimeout(() => {
        windowPrint.print();
        windowPrint.close();
      }, 250);
    } else {
      console.error("Print content is not available.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="titel">Antrag auf Mitgliedschaft</Modal.Title>
      </Modal.Header>
      <Modal.Body ref={printRef}>
        <Table bordered hover>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                {data.vorname} {data.nachname}
              </td>
            </tr>
            <tr>
              <th>Geschlecht</th>
              <td>{data.geschlecht}</td>
            </tr>
            <tr>
              <th>Straße/HausNr</th>
              <td>{data.strasse}</td>
            </tr>
            <tr>
              <th>Ort</th>
              <td>{data.wohnort}</td>
            </tr>
            <tr>
              <th>Geburtsdatum</th>
              <td>{data.geburtsdatum}</td>
            </tr>
            <tr>
              <th>Tel</th>
              <td>{data.tel}</td>
            </tr>
            <tr>
              <th>E-Mail</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <p>
                  <span className="fw-semibold">Hinweis: </span>
                  In der Regel werden die Monatsraten zum 1. oder 15. des Monats
                  von Ihrem privaten Bankkonto per Einzugsermächtigung
                  abgebucht.
                </p>
              </td>
            </tr>
            <tr>
              <th>Förderbeitrag (€)</th>
              <td>{data.förderbeitrag}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <p>
                  Ich ermächtige den Harmonie bis auf Widerruf, die fälligen
                  Beiträge von meinem Konto abzubuchen.
                </p>
              </td>
            </tr>
            <tr>
              <th>Kontonummer</th>
              <td>{data.kontonr}</td>
            </tr>
            <tr>
              <th>IBAN</th>
              <td>{data.iban}</td>
            </tr>
            <tr>
              <th>BLZ BIC</th>
              <td>{data.bic}</td>
            </tr>
            <tr>
              <th>Kreditinstitut</th>
              <td>{data.institut}</td>
            </tr>
            <tr>
              <th>Kontoinhaber/in</th>
              <td>{data.inhaber}</td>
            </tr>
          </tbody>
        </Table>
        <div className="my-3">
          <p className="fw-semibold fs-5">Danke!</p>
          {[
            "Förderbeiträge an den Harmonie e.V. können bis zu 20 Prozent des Gesamtbetrags nach § 10 b EStG als Sonderausgaben bei der Steuererklärung geltend gemacht werden. Ab einem Fördermitgliedsbeitrag von 25,- € im Monat erhalten Sie von uns mit Ablauf des Kalenderjahres automatisch eine Zuwendungsbestätigung.",
            "Die Fördermitgliedschaft kann darüber hinaus jederzeit schriftlich ohne Einhaltung einer Frist beendet werden.",
            "Ihre Daten werden von uns vertraulich im Sinne des Datenschutzgesetzes behandelt.",
            "Sie bekommen eine Kopie des Fördermitgliedschaftsantrages per Email, wenn Sie Ihre Email Adresse angeben.",
            "Die Satzung kann jederzeit beim Vorstand des Vereins eingesehen und abgeholt werden. Zudem bin ich mit der Speicherung und Verarbeitung meiner personenbezogenen Daten für Vereinszwecke, gemäß des Datenschutzgesetzes einverstanden. Ich habe das jederzeitige Recht, Auskunft über meine vom Verein gespeicherten Daten zu erhalten.",
            "Durch meine untenstehende Unterschrift erkenne ich die gültigen Satzungen und Ordnungen des Harmonie e.V. als verbindlich an.",
          ].map((text, index) => (
            <p key={index}>
              <FaCheck /> {text}
            </p>
          ))}
        </div>
        <div className="signature-container d-flex align-content-center justify-content-between">
          <div className="signature-left">
            <div>______________________</div>
            <div>Datum - Ort</div>
          </div>
          <div className="signature-right">
            <div>______________________</div>
            <div>Unterschrift</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handlePrint}>
          <FaPrint /> Print
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormDataDisplayModal;
