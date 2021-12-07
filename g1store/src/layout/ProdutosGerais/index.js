import './style.scss';
import { Button, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import apiProdutos from '../../services/apiProdutos'

function ProdutosGerais() {
  const [categoria, setCategoria] = useState([]);
  const [produtos, setProdutos] = useState([]);


  useEffect(() => {
    async function consumoApi() {
      try {
        const [produtos, categoria] = await Promise.all(
          [
            apiProdutos.get('produto'),
            apiProdutos.get('produto/categorias')
          ]
        );
        setProdutos(produtos.data);
        setCategoria(categoria.data);
      }catch(err){
        console.error("Erro:" + err);
      }
    }  
    consumoApi();
  }, []);



return (
  <>
    {console.log(produtos)}
    <div id="ancora-produtos" />
    <section>
      <h2 className="titulo-cards">Ultimos produtos cadastrados</h2>
      <div id="sessao-produtos">
        <div id="menu-categorias">
          <Nav defaultActiveKey="/" className="flex-column" sticky=" top ">
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
            produtos.map(({ id, imagem, nome, descricao, preco }) => {
              return (


                <div key={id} >

                  <Card className="card" style={{ width: '15rem' }}>
                    <Card.Img className="img-card" variant="top" src={imagem} />
                    <Card.Body  >
                      <Card.Title >{nome}</Card.Title>
                      <Card.Text>
                        R${preco} Ou 10x R${preco / 10},00<br />
                        {descricao}
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
