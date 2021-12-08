
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar variant="primary" expand="lg" fixed="top" class="border-bottom border-success">
        <Container fluid>

          {/* Logo */}
          <Navbar.Brand href="#"><img className="logo" src={logo} alt="Logo" width="70"/></Navbar.Brand>

          {/* menu hamburguer */}
          <Navbar.Toggle aria-controls="navbarScroll" />

          {/* menu */}
          <Navbar.Collapse id="navbarScroll" >            
            <Nav class="collapse navbar-collapse justify-content-end align-center" style={{ maxHeight: '100px' }} navbarScroll>

              <Link class="fw-bolder text-decoration-none me-3 text-dark" to={"/"}>
                Home</Link>
              <Link class="fw-bold text-decoration-none me-3 text-dark" to={"/produto"}>
                Produtos</Link>

              <Link class="fw-bold text-decoration-none me-3 text-dark" to={"/produto"}>
                Produtos</Link>

              <Link class="fw-bold text-decoration-none me-3 text-dark" to={"/"}>
                Carrinho</Link>

              <Link class="fw-bold text-decoration-none me-3 text-dark" to={"/sobrenos"}>
                Sobre Nós</Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>     
  );
}

export default Header;



