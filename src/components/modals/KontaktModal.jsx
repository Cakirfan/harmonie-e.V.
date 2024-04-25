import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { IoOpenOutline } from "react-icons/io5";
import DatenSchutzModal from "./DatenSchutzModal";
import FormDataDisplayModal from "./FormDataDisplayModal"; // New component to display the form data
import { Col, Row } from "react-bootstrap";

const KontaktModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    geschlecht: "",
    vorname: "",
    nachname: "",
    strasse: "",
    wohnort: "",
    tel: "",
    email: "",
    geburtsdatum: "",
    förderbeitrag: "",
    kontonr: "",
    iban: "",
    bic: "",
    institut: "",
    inhaber: "",
  });

  const [showFormData, setShowFormData] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setSubmittedData(formData);
      setShowFormData(true);
      handleClose();
      console.log(formData);
      setFormData({
        geschlecht: "",
        vorname: "",
        nachname: "",
        strasse: "",
        wohnort: "",
        tel: "",
        email: "",
        geburtsdatum: "",
        förderbeitrag: "",
        kontonr: "",
        iban: "",
        bic: "",
        institut: "",
        inhaber: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [showd, setShowd] = useState(false);
  const handleClosed = () => setShowd(false);
  const handleShowd = () => setShowd(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="border border-warning">
        <Modal.Header closeButton className="bg-warning border border-danger">
          <Modal.Title className="text-dark fw-semibold fs-2">
            Antrag auf Mitgliedschaft
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-danger-subtle border border-danger">
          <p className="text-start fw-bold">
            Fühlen Sie sich frei uns zu kontaktieren! Mit diesem Formular können
            Sie uns Ihre Fragen, Anregungen oder Feedback zukommen lassen.
          </p>
          <Form onSubmit={handleSubmit} id="kontaktForm">
            <Row>
              <Col md={6}>
                <Form.Group className="my-3" controlId="formGender">
                  <Form.Select
                    id="geschlecht"
                    name="geschlecht"
                    value={formData.geschlecht}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Geschlecht auswählen...</option>
                    <option value="m">Männlich</option>
                    <option value="f">Weiblich</option>
                    <option value="d">Divers</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Control
                    type="text"
                    id="vorname"
                    name="vorname"
                    value={formData.vorname}
                    onChange={handleChange}
                    placeholder="Vorname"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNachName">
                  <Form.Control
                    type="text"
                    id="nachname"
                    name="nachname"
                    value={formData.nachname}
                    onChange={handleChange}
                    placeholder="Nachname"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTel">
                  <Form.Control
                    type="tel"
                    id="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    placeholder="Telefon"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@beispiel.com"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mt-md-3">
                <Form.Group className="mb-3" controlId="formStreet">
                  <Form.Control
                    type="text"
                    id="strasse"
                    name="strasse"
                    value={formData.strasse}
                    onChange={handleChange}
                    placeholder="Straße / HausNr"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCity">
                  <Form.Control
                    type="text"
                    id="wohnort"
                    name="wohnort"
                    value={formData.wohnort}
                    onChange={handleChange}
                    placeholder="PLZ / Wohnort"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBirthdate">
                  <Form.Label className="text-secondary" htmlFor="geburtsdatum">
                    Geburtsdatum
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="geburtsdatum"
                    name="geburtsdatum"
                    value={formData.geburtsdatum}
                    onChange={handleChange}
                    placeholder="Geburtsdatum"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFörderbeitrag">
                  <Form.Control
                    type="number"
                    id="förderbeitrag"
                    name="förderbeitrag"
                    value={formData.förderbeitrag}
                    onChange={handleChange}
                    placeholder="Förderbeitrag (€)"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Text className="text-success text-center my-2 fs-4 fw-semibold">
                  Bank Verbindung
                </Form.Text>
                <Form.Group className="mb-3" controlId="formKontoNr">
                  <Form.Control
                    type="number"
                    id="kontonr"
                    name="kontonr"
                    value={formData.kontonr}
                    onChange={handleChange}
                    placeholder="Konto Nr."
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formIBAN">
                  <Form.Control
                    type="number"
                    id="iban"
                    name="iban"
                    value={formData.iban}
                    onChange={handleChange}
                    placeholder="IBAN"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBIC">
                  <Form.Control
                    type="number"
                    id="bic"
                    name="bic"
                    value={formData.bic}
                    onChange={handleChange}
                    placeholder="BLZ BIC"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKreditInstitut">
                  <Form.Control
                    type="text"
                    id="institut"
                    name="institut"
                    value={formData.institut}
                    onChange={handleChange}
                    placeholder="KreditInstitut"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formInhaber">
                  <Form.Control
                    type="text"
                    id="inhaber"
                    name="inhaber"
                    value={formData.inhaber}
                    onChange={handleChange}
                    placeholder="Kontoinhaber/in"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="ms-4">
              <Form.Check className="" aria-label="option 1" required />
              <p className="text-start">
                Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                stimme zu, dass meine Angaben zur Kontaktaufnahme und für
                Rückfragen gespeichert werden.
                <span className="" onClick={handleShowd}>
                  <IoOpenOutline className="ms-1 text-primary" />
                </span>
              </p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-warning border border-danger">
          <Button variant="danger" onClick={handleClose}>
            Schließen
          </Button>
          <Button
            type="submit"
            variant="success"
            onClick={handleSubmit}
            form="kontaktForm"
          >
            Weiter
          </Button>
        </Modal.Footer>
      </Modal>
      <DatenSchutzModal showd={showd} handleClosed={handleClosed} />
      <FormDataDisplayModal
        show={showFormData}
        handleClose={() => setShowFormData(false)}
        data={submittedData}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default KontaktModal;
