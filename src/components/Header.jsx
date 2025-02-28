import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { setSearchQuery } from "../Redux/Hotelslice";

function Header() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.hotels.searchQuery);

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="p-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fs-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Homepage" className="fs-5">
              Homepage
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search hotels..."
              className="me-2"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <Button variant="outline-success" type="button">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
