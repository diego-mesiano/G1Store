import './style.scss';
import jsonCategoria from './categoriasExemplo.json'
import jsonUltimos from './ultimosExemplo.json'
import { Button, Card} from 'react-bootstrap'
import React,{useState} from 'react';

function ProdutosGerais() {
  const [ categoria ] = useState(jsonCategoria);
  const [todosProdutos] = useState(jsonUltimos);
  return (
    <>
      <section>
        <h2 className="titulo-cards">Ultimos produtos cadastrados</h2>
        <div id="sessao-produtos">
          <div id="menu-categorias">
            <ul>
              {
                categoria.map((categoria) => {
                  return (
                    
                      <li key={categoria.nome}><h3>{categoria.nome}</h3></li>
                    
                  )
                })
              }
            </ul>
          </div>

          <div id="corpo-produtos">

            {
              todosProdutos.map((todosProdutos) => {
                return (
                  
                  
                    <div key={todosProdutos.id} >
                      
                    <Card  className="card" style={{ width: '15rem' }}>
                      <Card.Img  className="img-card" variant="top" src={todosProdutos.imagem} />
                      <Card.Body  >
                        <Card.Title >{todosProdutos.nome}</Card.Title>
                        <Card.Text>
                          R${todosProdutos.preco} Ou 10x R${todosProdutos.preco / 10},00<br/>
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
