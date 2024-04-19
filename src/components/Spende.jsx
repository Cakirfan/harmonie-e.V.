import React from "react";
import { Accordion, Row, Col, Card } from "react-bootstrap";

const Spende = () => {
  return (
    <>
      <Row xs={1} md={2} className="g-4 mx-auto">
        <Row className="bg-warning g-0 mx-auto my-5 shadow-lg rounded-2">
          <Col md={8}>
            <Card.Body className="m-5">
              <Accordion defaultActiveKey="0">
                <p className="text-start fs-4 text-success fw-semibold">
                  Ihre Spenden sind uns wichtig.
                </p>
                <Accordion.Item eventKey="1" className="shadow-lg">
                  <Accordion.Header>Unsere Bankverbindung...</Accordion.Header>
                  <Accordion.Body className="text-secondary lh-sm py-4">
                    <p className="mb-2 fs-5">Harmonie e.V.</p>
                    <p className="mb-2 fs-5">Sparkasse Neuss</p>
                    <p className="mb-1 fs-5">
                      IBAN: DE75 3055 0000 0093 6728 55
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Col>
          <Col md={4}>
            <Card.Img
              variant="top"
              height={350}
              src="https://cdn.pixabay.com/photo/2022/03/23/20/42/mobile-phone-7087886_640.jpg"
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Spende;
