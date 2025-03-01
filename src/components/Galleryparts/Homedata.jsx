import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setSelectedDate } from "../../Redux/Hotelslice";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

function Homedata() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.hotels.searchQuery);
  const selectedDate = useSelector((state) => state.hotels.selectedDate);

  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center text-center"
      style={{
        backgroundImage: "url('/Images/back.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <h1 className="fw-bold text-white">London hotels & places to stay</h1>
        <p className="text-white">
          Search to compare prices and discover great deals with free
          cancellation
        </p>
        <Row className="bg-light p-3 rounded d-flex align-items-center justify-content-between gap-2">
          {/* Location Input */}
          <Col md={3}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="London"
                className="fs-5 p-3"
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              />
            </InputGroup>
          </Col>

          {/* Date Inputs */}
          <Col md={4}>
            <InputGroup>
              <Form.Control
                type="date"
                value={selectedDate}
                onChange={(e) => dispatch(setSelectedDate(e.target.value))}
              />
              <Form.Control
                type="date"
                className="p-3"
                value={selectedDate}
                onChange={(e) => dispatch(setSelectedDate(e.target.value))}
              />
            </InputGroup>
          </Col>

          {/* Guests Selection */}
          <Col md={3}>
            <Form.Select className="p-3">
              <option>2 adults, 1 room</option>
              <option>1 adult, 1 room</option>
              <option>3 adults, 2 rooms</option>
            </Form.Select>
          </Col>

          {/* Search Button - Remains in the Same Row */}
          <Col md="auto">
            <Button variant="primary" className="p-3 fs-5">
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homedata;
