import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><strong>Not LoggedIn</strong></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/login" className="nav-link">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup" className="nav-link">
            Signup
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
