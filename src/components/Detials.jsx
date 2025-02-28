import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Image,
  Card,
  Badge,
  Button,
} from "react-bootstrap";
import hotels from "./Hotels";
import Header from "./Header";

const Details = () => {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id == id);

  if (!hotel) {
    return <h2 className="text-center mt-5">Hotel not found!</h2>;
  }

  return (
    <>
      <Header />
      <Container style={{ marginTop: "7%" }}>
        <Breadcrumb>
          <Breadcrumb.Item as={Link} to="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item as={Link} to="/">
            United Kingdom Hotels
          </Breadcrumb.Item>
          <Breadcrumb.Item as={Link} to="/">
            London Hotels
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{hotel.name}</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col md={6}>
            <Image
              src={hotel.mainImage}
              fluid
              rounded
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6} className="d-flex flex-wrap gap-2">
            {hotel.gallery.slice(0, 6).map((image, index) => (
              <Image
                key={index}
                src={image}
                fluid
                rounded
                style={{ width: "32%", height: "190px", objectFit: "cover" }}
              />
            ))}
          </Col>
        </Row>

        <Card className="mt-4 p-3">
          <Card.Body>
            <Card.Title>{hotel.name} ⭐⭐⭐</Card.Title>
            <Card.Text>{hotel.discription}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4 p-3">
          <Card.Body>
            <Card.Title>Highlights</Card.Title>
            <Row>
              <Col md={4}>
                <Image src="/Images/bus.svg" />{" "}
                <p>960 meters to public transportation</p>
              </Col>
              <Col md={4}>
                <Image src="/Images/door.svg" /> <p>Check-in [24-hour]</p>
              </Col>
              <Col md={4}>
                <Image src="/Images/Hygen.svg" /> <p>Hygiene Plus</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mt-4 p-3">
          <Card.Body>
            <Card.Title>Facilities</Card.Title>
            <Row>
              {[
                "Free Wi-Fi",
                "Front Desk (24 Hours)",
                "Restaurant",
                "Bar",
                "Garden Area",
                "Luggage storage",
                "Balcony/Terrace",
                "Garden",
                "Laundry",
              ].map((facility, index) => (
                <Col md={4} key={index}>
                  <p>✔ {facility}</p>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>

        <Card className="mt-4 p-3">
          <Card.Body>
            <h5 className="fw-bold">{hotel.rating} Very Good</h5>
            <p className="text-muted">{hotel.reviews} reviews</p>
            <div className="d-flex flex-wrap gap-2">
              <Badge bg="success">Service {hotel.service}</Badge>
              <Badge bg="primary">Location {hotel.locationRating}</Badge>
              <Badge bg="warning">Cleanliness {hotel.cleanliness}</Badge>
              <Badge bg="info">Facilities {hotel.facilities}</Badge>
            </div>
          </Card.Body>
        </Card>

        <Card className="mt-4 p-3">
          <Card.Body>
            <Image src="/Images/map.jpeg" fluid rounded />
            <p className="text-start fw-medium">
              Location Rating: <span className="fw-normal">Very Good</span>
            </p>
            <h5 className="fw-bold">Nearby Places</h5>
            <ul className="list-unstyled">
              <li>🏛 Natural History Museum - 2.6 km</li>
              <li>📍 City Center - 790 meters</li>
            </ul>
          </Card.Body>
        </Card>

        <Button as={Link} to="/" variant="secondary" className="mt-3">
          🔙 Back to Gallery
        </Button>
      </Container>
    </>
  );
};

export default Details;
