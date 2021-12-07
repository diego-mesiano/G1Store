import './style.scss';
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'


function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>

          <Navbar.Brand href="#"><img className="logo" src={logo} alt="Logo" width="150"/></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link to={"/"}>Home</Nav.Link>
              <Nav.Link to={"/produto"}>Produtos</Nav.Link>
              <Nav.Link>Carrinho</Nav.Link>
              <Nav.Link to={"/sobrenos"}>Sobre Nós</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;



