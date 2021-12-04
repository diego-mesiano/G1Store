import './style.scss';
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
<<<<<<< HEAD
          <Navbar.Brand href="#"><img className="logo" src={logo} alt="Logo" width="150"/></Navbar.Brand>
=======
          <Navbar.Brand href="#"><img src="" alt="Logo"/></Navbar.Brand>
>>>>>>> a4df55738f0c48b50ed147f580494c1e76c1969d
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Produtos</Nav.Link>
              <Nav.Link href="#action3">Carrinho</Nav.Link>
              <Nav.Link href="#action4">Sobre nós</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;