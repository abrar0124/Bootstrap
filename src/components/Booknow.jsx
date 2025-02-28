import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customscss.scss";
import Header from "./Header";
import ProgressBar from "./Paymentdata/ProgressBar";
import BookingForm from "./Paymentdata/BookingForm";
import BookingSummary from "./Paymentdata/BookingSummary";

const HotelBookingPage = () => {
  return (
    <>
      <Header />
      <div className="p-class">
        <ProgressBar />
        <Alert
          variant="danger"
          className="text-center fs-6 text-muted p-3 mt-2"
        >
          We are holding your price...{" "}
          <span className="text-danger fw-bold">00:19:24</span>
        </Alert>
        <Container className="w-75">
          <Row className="mt-4">
            <Col md={7}>
              <BookingForm />
            </Col>
            <Col md={4}>
              <BookingSummary />
            </Col>
          </Row>
        </Container>
        <div className="max-class border text-center p-3">
          <Button variant="primary" size="lg" className=" v mt-2 w-100 ">
            NEXT: FINAL STEP
          </Button>
          <p className="text-muted mt-2">You won’t be charged yet.</p>
        </div>
      </div>
    </>
  );
};

export default HotelBookingPage;
