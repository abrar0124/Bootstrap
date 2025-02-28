import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

const BookingSummary = () => {
  return (
    <Card className=" p-3">
      <Row className="align-items-center">
        <Col md={5}>
          <Image
            className="rounded"
            src="/Images/italy.jpeg"
            alt="Hotel"
            fluid
            style={{ height: "250px" }}
          />
        </Col>
        <Col md={7}>
          <h6 className="fw-bold fsize">
            Britannia International Hotel Canary Wharf
          </h6>
          <p className="ds">⭐⭐⭐⭐</p>
          <p className="ds text-primary fw-bold">
            6.9 Good{" "}
            <span className="ds text-muted fw-normal">(2133 reviews)</span>
          </p>
          <p className="ds">163 Marsh Wall, Canary Wharf, London,...</p>
          <p className="ds text-primary fw-bold">What's Nearby</p>
        </Col>
      </Row>

      <Card className="bg-color p-2 mt-3 rounded">
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              className="w-100 rounded"
              src="/Images/newbed.jpeg"
              alt="Room"
              fluid
            />
          </Col>
          <Col md={6}>
            <p className="fs fw-bold">1 x Standard Double Room</p>
            <p className="fs">20m² | Max: 2 adults</p>
          </Col>
        </Row>
        <p className="ds text-success fw-bold">Luggage storage available</p>
        <p className="ds text-success fw-bold">24 hours check-in</p>
        <p>1 double bed | 24-hour check-in</p>
        <p className="ds text-danger fw-bold">
          Hurry! Last room for your dates at this place
        </p>
      </Card>

      <Card className="p-2 text-center mt-2">
        <p className="fs text-danger fw-bold">
          Hurry! Last room for your dates at this place
        </p>
      </Card>

      <Card className="p-2 text-center mt-2">
        <p className="fs text-danger">
          It's only <span className="text-danger fw-bold">10</span> days until
          your check-in.{" "}
          <span className="fw-bold">Rates may rise if you don’t book now.</span>
        </p>
      </Card>

      <Card className="rounded mt-2 p-3">
        <div className="bgs rounded">
          <p>
            <Image className="g" src="/Images/img38.png" alt="Discount" fluid />
          </p>
          <p className="d-flex justify-content-between p-2">
            Real Price: <del className="ms fw-medium">1,194,374.12</del>
          </p>
          <p className="d-flex justify-content-between p-2">
            Price: <span className="mss fw-medium">738,660.49</span>
          </p>
        </div>
        <Row className="d-flex justify-content-between mt-2">
          <Col>
            <h5 className="fs md">Price</h5>
          </Col>
          <Col className="text-end">
            <h4 className="fs md">PKR 886,392.58</h4>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};

export default BookingSummary;
