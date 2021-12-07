import './style.scss';
import jsonCategoria from './categoriasExemplo.json'
/*import jsonUltimos from './ultimosExemplo.json'*/
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

 function consumoApi(){
    apiProdutos
    .get("/produto")
      .then((response)=> setProdutos(response.data))
      .catch((err)=>{
        console.error("Erro:" + err);
      });
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
              produtos.map(({id,imagem,nome,descricao,preco}) => {
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
