import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../Redux/Hotelslice";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./customscss.scss";

function Hommepage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.hotels.products);

  return (
    <Container className="text-center" style={{ marginTop: "10%" }}>
      <h2>Top destinations</h2>
      <p className="text-danger">
        Discover the beauty of this world: experience the best cities to feed
        your wanderlust
      </p>
      <Row className="d-flex justify-content-center gap-4">
        {products.map((product) => (
          <Col key={product.id} md={3} className="d-flex">
            <Link
              to={`/ProductDetail/${product.id}`}
              onClick={() => dispatch(setSelectedProduct(product.name))}
              className="text-decoration-none w-100"
            >
              <Card className="h-100 shadow-sm">
                <Card.Img
                  src={product.image}
                  alt={product.name}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Hommepage;
