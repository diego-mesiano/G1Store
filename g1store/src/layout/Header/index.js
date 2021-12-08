import './style.scss';
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom';


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
              <Link to={"/"} className="nav-link">Home</Link>
              <Link to={"/produto"} className="nav-link">Produtos</Link>
              <Link to={"/"} className="nav-link">Carrinho</Link>
              <Link to={"/sobrenos"} className="nav-link">Sobre Nós</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;



