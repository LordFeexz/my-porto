import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <NavbarBrand>DF Film</NavbarBrand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#superhero">Superhero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
