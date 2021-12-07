import './style.scss';
import jsonCategoria from './categoriasExemplo.json'
import jsonUltimos from './ultimosExemplo.json'
import { Button, Card } from 'react-bootstrap'
import React, { useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import apiProdutos from '../../services/apiProdutos'

function ProdutosGerais() {
  const [categoria] = useState(jsonCategoria);
  /*const [todosProdutos] = useState(jsonUltimos);*/

  const [produtos, setProdutos] = useState([]);
  /*const [categoria, setCategoria] = useState({});*/

  useEffect(() => {
    consumoApi();
  }, [])

 const consumoApi = async()=>{
   try{
     const response = await apiProdutos.get('/produto');
     setProdutos(response.data);
   }catch(error){

   }
 }
  return (
    <>
      {console.log(produtos)}
      <div id="ancora-produtos"/>
      <section>
        <h2 className="titulo-cards">Ultimos produtos cadastrados</h2>
        <div id="sessao-produtos">
          <div id="menu-categorias">
            <Nav defaultActiveKey="/" className="flex-column" sticky = " top ">
              <Nav.Link href="/">Todos os Produtos</Nav.Link>
              {
                categoria.map((categoria) => {
                  return (

                    <Nav.Link key={categoria.nome} eventKey={categoria.nome}>{categoria.nome}</Nav.Link>

                  )
                })
              }
            </Nav>
          </div>

          <div id="corpo-produtos">

            {
              produtos.map(({produtos}) => {
                return (


                  <div key={produtos.id} >

                    <Card className="card" style={{ width: '15rem' }}>
                      <Card.Img className="img-card" variant="top" src={produtos.imagem} />
                      <Card.Body  >
                        <Card.Title >{produtos.nome}</Card.Title>
                        <Card.Text>
                          R${produtos.preco} Ou 10x R${produtos.preco / 10},00<br />
                          {produtos.descricao.substr(0, 100)}...
                        </Card.Text>
                      </Card.Body>
                      <Button className="botao-card" variant="primary">Ver</Button>
                      <Button className="botao-card" variant="primary">Add Carrinho</Button>
                    </Card>
                  </div>


                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default ProdutosGerais;
