import { Link } from "react-router-dom";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import Text from "../Text";

const HotelCard = ({ hotel }) => {
  return (
    <Card className="mb-4 p-3 shadow-sm">
      <Row className="g-0">
        {/* Left Column - Image Gallery */}
        <Col md={4}>
          <Link to={`/details/${hotel.id}`}>
            <Image
              src={hotel.mainImage}
              className="rounded"
              alt={hotel.name}
              fluid
              style={{ width: "80%" }}
            />
          </Link>

          <div className="d-flex flex-wrap rounded" style={{ width: "80%" }}>
            {hotel.gallery.slice(0, 10).map((image, index) => (
              <Link to={`/details/${hotel.id}`} key={index}>
                <Image
                  src={image}
                  className="m-class"
                  width="60"
                  height="50"
                  alt="Gallery"
                />
              </Link>
            ))}
          </div>
        </Col>
        {/* Middle Column - Hotel Info */}
        <Col>
          <Link
            to={`/details/${hotel.id}`}
            className="nav-class navbar-brand fs-5 card-title fw-bold"
          >
            {hotel.name}
            <br />
            {hotel.place}
          </Link>
          <p>
            {hotel.Star}
            <span className="text-primary">
              {hotel.location}
              <Link
                to="#"
                className="ms-2 text-decoration-none text-primary hover-bg-primary"
              >
                - View on map
              </Link>
            </span>
          </p>
          <p className="text-muted mt-3">{hotel.discription}</p>
          <p className="fw-bold">
            Available dates:
            <span className="ms-2 fw-normal">{hotel.availableDates}</span>
          </p>
        </Col>

        {/* Right Column - Price & Booking */}
        <Col
          md={3}
          className="border-start d-flex flex-column align-items-end pe-3"
        >
          <Text type="p" content="Very good" />
          <span className="text-muted fs-5 mb-5">{hotel.rating} Reviews</span>
          <p className="text-danger fw-medium fs-4">PKR {hotel.price}</p>
          <Button
            as={Link}
            to="/Booknow"
            variant="primary"
            size="lg"
            className="mt-5"
          >
            Check availability
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default HotelCard;
