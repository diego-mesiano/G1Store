
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

<<<<<<< HEAD
          
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              
            >
              <Link to={"/"} className="nav-link">Home</Link>
              <Link to={"/produtos"} className="nav-link">Produtos</Link>
              <Link to={"/"} className="nav-link">Carrinho</Link>
              <Link to={"/sobrenos"} className="nav-link">Sobre Nós</Link>
=======
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

>>>>>>> 4a66507c37b72ead80f08e5a0e69800b62ae3d5b
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>     
  );
}

export default Header;



