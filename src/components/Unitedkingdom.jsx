import Text from "./Text";
import { Container, Row, Col } from "react-bootstrap";

function UnitedKingdom() {
  return (
    <Container
      className="text-muted mt-5"
      style={{ marginLeft: "14%", width: "66%" }}
    >
      <Text type="p" content="Fast facts about Kuala Lumpur, Malaysia" />
      <Row className="p-2 bg-light">
        <Col md={6}>
          <Text type="p" content="Accommodations" />
        </Col>
        <Col md={6}>
          <Text type="p" content="Products" />
        </Col>
      </Row>
      <Row className="p-1">
        <Col md={6}>
          <Text type="p" content="Popular hotel" />
        </Col>
        <Col md={6}>
          <Text type="p" content="Zedwell Piccadilly" />
        </Col>
      </Row>
      <Row className="p-2 bg-light">
        <Col md={6}>
          <Text type="p" content="Popular area" />
        </Col>
        <Col md={6}>
          <Text type="p" content="Chelsea" />
        </Col>
      </Row>
      <Row className="p-1">
        <Col md={6}>
          <Text type="p" content="Nightly rates from" />
        </Col>
        <Col md={6}>
          <Text type="p" content="£9" />
        </Col>
      </Row>
      <Row className="p-2 bg-light">
        <Col md={6}>
          <Text type="p" content="Airport" />
        </Col>
        <Col md={6}>
          <Text type="p" content="Heathrow Airport" />
        </Col>
      </Row>
      <Row className="p-2 bg-light">
        <Col md={6}>
          <Text type="p" content="Reasons to visit" />
        </Col>
        <Col md={6}>
          <Text type="p" content="Sightseeing, Shopping, Museum & arts" />
        </Col>
      </Row>
    </Container>
  );
}
export default UnitedKingdom;
