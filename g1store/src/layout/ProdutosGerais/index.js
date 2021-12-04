import './style.scss';
import jsonCategoria from './categoriasExemplo.json'
import jsonUltimos from './ultimosExemplo.json'
import { Button, Card } from 'react-bootstrap'
import React, { useState} from 'react';
import Nav from 'react-bootstrap/Nav';

function ProdutosGerais() {
  const [categoria] = useState(jsonCategoria);
  const [todosProdutos] = useState(jsonUltimos);
  return (
    <>
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
              todosProdutos.map((todosProdutos) => {
                return (


                  <div key={todosProdutos.id} >

                    <Card className="card" style={{ width: '15rem' }}>
                      <Card.Img className="img-card" variant="top" src={todosProdutos.imagem} />
                      <Card.Body  >
                        <Card.Title >{todosProdutos.nome}</Card.Title>
                        <Card.Text>
                          R${todosProdutos.preco} Ou 10x R${todosProdutos.preco / 10},00<br />
                          {todosProdutos.descricao.substr(0, 100)}...
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
