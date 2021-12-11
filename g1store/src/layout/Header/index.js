import './style.scss'
import { Navbar, Nav, Container, Button} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import { useContext } from "react";


function Header() {
  const { produtosCarrinho } = useContext(CarrinhoContext)
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/"><img  className="logo ms-4" src={logo} alt="Logo" width="80"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/#"} className="nav-link">Home</Link>
              <Link to={"/produtos"} className="nav-link">Produtos</Link>
              <Link to={"/carrinho"} className="nav-link">Carrinho
              <Button variant="danger" size="sm" disabled> {Object.keys(produtosCarrinho).length} </Button></Link>
              <Link to={"/sobrenos"} className="nav-link">Sobre Nós</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;



