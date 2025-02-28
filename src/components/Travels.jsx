import React from "react";
import "./customscss.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import Text from "./Text";

const hotelsData = [
  {
    name: "Apartments",
    image: "/Images/travel1.jpg",
    description: "156,786 properties",
  },
  {
    name: "Vacation Rentals",
    image: "/Images/travel2.jpg",
    description: "517,703 properties",
  },
  {
    name: "Private villas",
    image: "/Images/travel3.jpg",

    description: "181,167 properties",
  },
  {
    name: "Bungalows",
    image: "/Images/travel4.jpg",

    description: "8,801 properties",
  },
];

const Travels = () => {
  return (
    <>
      <div className="border-top py-4">
        <Container>
          <Text type="h2" content="Explore more travel vacation rentals" />
          <Row className=" w-75 mt-5 mx-auto ">
            {hotelsData.map((hotel, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className=" hover-shadow h-100  border">
                  <Card.Img variant="top" src={hotel.image} alt={hotel.name} />
                  <Card.Body>
                    <Card.Title className="fs-5 text-dark text-start">
                      {hotel.name}
                    </Card.Title>
                    <Card.Text className="text-muted text-start">
                      {hotel.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      ;
    </>
  );
};

export default Travels;
