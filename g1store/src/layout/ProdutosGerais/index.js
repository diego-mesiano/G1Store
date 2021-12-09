import './style.scss';
import { Button, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import api from '../../services/api'
import {Link} from 'react-router-dom'

function ProdutosGerais() {
  const [categoria, setCategoria] = useState([]);
  const [produtos, setProdutos] = useState([]);


  useEffect(() => {
    async function consumoApi() {
      try {
        const [produtos, categoria] = await Promise.all(
          [
            api.get('produtos'),
            api.get('produtos/categorias')
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
      <div className="titulo-cards">
        <h2 >Ultimos produtos cadastrados</h2>
      </div>
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

                  <Card className="card"  style={{ width: '15rem' }}>
                    <Card.Img className="img-card" variant="top" src={imagem} />
                    <Card.Body  >
                      <Card.Title >{nome}</Card.Title>
                      <Card.Text>
                        R${preco} Ou 10x R${preco / 10},00<br />
                        {descricao.substr(0,100)}...
                      </Card.Text>
                    </Card.Body>

                    <div className="btn-group mb-2 mx-2 ">
                      <Link to={`produtos/${id}`}><Button id="botao-card" className="btn btn-info ">Ver</Button></Link>
                      <Button id="botao-card" className="btn btn-primary ">Add Carrinho</Button>

                    </div>
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
