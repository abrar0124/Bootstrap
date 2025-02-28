import { useSelector } from "react-redux";
import Header from "./Header";
import { Container, Row, Col, Card } from "react-bootstrap";

function ProductDetail() {
  const selectedProductName = useSelector(
    (state) => state.hotels.selectedProduct
  );
  const products = useSelector((state) => state.hotels.products);
  const filteredProducts = products.filter(
    (p) => p.name === selectedProductName
  );

  if (!selectedProductName) {
    return <h2 className="text-center mt-5">No product selected</h2>;
  }

  return (
    <>
      <Header />
      <Container className="c" style={{ marginTop: "10%" }}>
        <h2 className="text-center">{selectedProductName} Details</h2>
        <Row className="justify-content-center mt-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col key={product.id} md={4} className="mb-3 d-flex">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    style={{ height: "200px" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No products found for {selectedProductName}</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
