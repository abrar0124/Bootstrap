import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customscss.scss";
import Text from "./Text";
import { Col, Container, Row } from "react-bootstrap";

const Bootstrapfooter3 = () => {
  return (
    <div className=" custom-footer footer  text-light text-center py-4">
      <Container>
        <Text
          type={"p"}
          content={
            <>
              All material herein © 2005-2025 Agoda Company Pte. Ltd. All Rights
              Reserved. <br />
              Agoda is part of Booking Holdings Inc, the world leader in online
              travel & related services.{" "}
            </>
          }
        />

        <Row className=" justify-content-center">
          <Col md={3}>
            <img
              src="/Images/agoda.jpeg"
              alt="Agoda"
              className="img-fluid"
              style={{ height: "60px" }}
            />
          </Col>
          <Col md={3}>
            <Text type={"p"} content={"Priceline.com"} />
          </Col>
          <Col md={3}>
            <img
              src="/Images/kayak.png"
              className="img-fluid "
              style={{ height: "20px" }}
            />
          </Col>
          <Col md={3}>
            <Text type={"p"} content={"Booking.com"} />
          </Col>
          <Col md={3}>
            <Text type={"p"} content={"Opentable"} />
          </Col>
        </Row>
        <Text type={"p"} content={"sg-pc-6g-geo-web-user-5956d79776-kvrpk"} />
      </Container>
    </div>
  );
};

export default Bootstrapfooter3;
