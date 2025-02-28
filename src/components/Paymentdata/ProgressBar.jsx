import React from "react";
import { Button, Col, Row, Image, Container } from "react-bootstrap";

const ProgressBar = () => {
  return (
    <Container className="py-2">
      <Row className="d-flex justify-content-between align-items-center text-center">
        <Col md="2">
          <Image
            className="ago"
            src="/Images/ago.png"
            fluid
            style={{ maxWidth: "45%" }}
          />
        </Col>
        <Col md="2">
          <p className="text-primary fw-medium mb-0">Customer Information</p>
        </Col>
        <Col md="2">
          <p className="fw-medium mb-0">Payment Information</p>
        </Col>
        <Col md="2">
          <p className="fw-medium mb-0">Booking is Confirmed!</p>
        </Col>
        <Col md="2">
          <Button variant="outline-primary">Sign in</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressBar;
