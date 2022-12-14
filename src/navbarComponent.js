
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import logo from './logo.svg';
import ayf from './images/ayf.jpg';
import Image from 'react-bootstrap/Image'

const NavbarComponent = () => {
const stylesNav = {
    marginleft:'120px'
}
    return (
        <div>
    <Navbar bg="light" expand="lg">
      <Container className=" containerSize">
        <Navbar.Brand href="#home">
            <Image src={ayf} className="navHead"/>
            <p className="darkHeading">Anglican Youth Fellowship (AYF) <br/> Udu West Archdeaconry Council</p>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto darkHeading" style={stylesNav}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarComponent;