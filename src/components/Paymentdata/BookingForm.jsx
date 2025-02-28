import React from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const BookingForm = () => {
  return (
    <>
      <Card className="p-4 border rounded-3">
        <h5 className="fw-bold">Who's the lead guest?</h5>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" size="lg" placeholder="First name *" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Last name *"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              size="lg"
              placeholder="Email *"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Phone number (optional)"
            />
          </Form.Group>
          <p>
            If you enter your email and do not complete your reservation, we may
            send you reminders.
          </p>
          <Form.Group className="mb-3">
            <Form.Select size="lg">
              <option>Pakistan</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <h5 className="fw-bold mt-4">Special requests</h5>
        <p>Select your preference(s). Subject to availability.</p>
        <Card className="p-3 bg-light">
          <p className="fw-bold">Which type of room would you prefer?</p>
          <Row className="mb-3">
            <Col>
              <Form.Check
                type="radio"
                name="roomType"
                label="Non-smoking"
                id="nonSmoking"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                name="roomType"
                label="Smoking"
                id="smoking"
              />
            </Col>
          </Row>
          <p className="fw-bold">Which bed setup would you prefer?</p>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                name="bedType"
                label="I'd like a large bed"
                id="largeBed"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                name="bedType"
                label="I'd like twin beds"
                id="twinBeds"
              />
            </Col>
          </Row>
        </Card>
        <p className="fw-bold mt-3 text-primary">Show additional preference</p>
      </Card>
      <p className="mt-2 text-end text-danger fw-bold">
        Hurry! Our last room for your dates.
      </p>
    </>
  );
};

export default BookingForm;
