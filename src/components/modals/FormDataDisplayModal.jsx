import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const FormDataDisplayModal = ({ show, handleClose, data }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Submitted Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display all form data in text format */}
        <p>
          Name: {data.name} {data.vorname}
        </p>
        <p>Geschlecht: {data.geschlecht}</p>
        {/* Add more fields as needed */}
        <p>
          Ort: <input type="text" placeholder="Ort eingeben" />
        </p>
        <p>
          Datum: <input type="date" />
        </p>
        <p>
          Unterschrift: <input type="text" placeholder="Unterschrift" />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormDataDisplayModal;
