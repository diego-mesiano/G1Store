
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="rounded-top rounded-pill border-bottom border-primary border-5">
        <Container fluid>

          {/* Logo */}
          <Navbar.Brand href="#"><img  className="logo ms-4" src={logo} alt="Logo" width="70"/></Navbar.Brand>

          {/* menu hamburguer */}
          <Navbar.Toggle aria-controls="navbarScroll" />


          {/* menu */}
          <Navbar.Collapse id="navbarScroll" >            
            <Nav className="collapse navbar-collapse justify-content-end align-center" style={{ maxHeight: '100px' }} navbarScroll>

              <Link className="fw-bolder text-decoration-none me-3 text-dark" to={"/"}>
                Home</Link>

              <Link className="fw-bold text-decoration-none me-3 text-dark" to={"/produtos"}>
                Produtos</Link>
                
              <Link className="fw-bold text-decoration-none me-3 text-dark" to={"/"}>
                Carrinho</Link>

              <Link className="fw-bold text-decoration-none me-5 text-dark" to={"/sobrenos"}>
                Sobre Nós</Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>     
  );
}

export default Header;



