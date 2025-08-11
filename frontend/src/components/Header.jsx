import { Navbar, Nav, Container } from "react-bootstrap"
import { FaShoppingCart, FaUser } from "react-icons/fa"

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#cart">
                <FaShoppingCart /> Cart{" "}
                <span className="badge bg-secondary">0</span>
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
