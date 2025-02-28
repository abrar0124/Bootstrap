import { Accordion, Container, Row, Col, Image } from "react-bootstrap";
import Text from "./Text";

function Accordioncompo() {
  return (
    <Container>
      <Row className="w-100" style={{ marginLeft: "10%" }}>
        <Col md={6}>
          <Text type="p" content="Frequently Asked Questions" />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What's the typical price of a hotel in London tonight?
              </Accordion.Header>
              <Accordion.Body>
                The average price for a 3-star hotel in London this evening is
                USD 113. The typical price for a 4-star resort in London this
                evening is USD 184. The typical price for a 5-star hotel in
                London this evening is USD 483.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What are the most suitable properties around London intended for
                solo travelers?
              </Accordion.Header>
              <Accordion.Body>
                The average price for a 3-star hotel in London this evening is
                USD 113. The typical price for a 4-star resort in London this
                evening is USD 184. The typical price for a 5-star hotel in
                London this evening is USD 483.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What hotels found in London are exceptionally rated for value
                for money?
              </Accordion.Header>
              <Accordion.Body>
                The average price for a 3-star hotel in London this evening is
                USD 113. The typical price for a 4-star resort in London this
                evening is USD 184. The typical price for a 5-star hotel in
                London this evening is USD 483.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={6}>
          <Image
            src="/Images/londonbuild.jpg"
            fluid
            style={{ height: "70%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Accordioncompo;
