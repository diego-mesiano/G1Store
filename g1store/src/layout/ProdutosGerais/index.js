import './style.scss';
import jsonCategoria from './categoriasExemplo.json'
import jsonUltimos from './ultimosExemplo.json'
import { Button, Card} from 'react-bootstrap'

function ProdutosGerais() {
  return (
    <>
      <section>
        <h2 className="titulo-cards">Ultimos produtos cadastrados</h2>
        <div id="sessao-produtos">
          <div id="menu-categorias">
            <ul key={jsonCategoria.nome} >
              {
                jsonCategoria.map((jsonCategoria) => {
                  return (
                    <>
                      <li><h3>{jsonCategoria.nome}</h3></li>
                    </>
                  )
                })
              }
            </ul>
          </div>

          <div id="corpo-produtos">

            {
              jsonUltimos.map((jsonUltimos) => {
                return (
                  <>
                    <Card className="card" style={{ width: '15rem' }}>
                      <Card.Img className="img-card" variant="top" src={jsonUltimos.imagem} />
                      <Card.Body>
                        <Card.Title>{jsonUltimos.nome}</Card.Title>
                        <Card.Text>
                          <p>R${jsonUltimos.preco} Ou 10x R${jsonUltimos.preco / 10},00</p>
                          <p>{jsonUltimos.descricao.substr(0, 100)}...</p>

                        </Card.Text>
                      </Card.Body>
                      <Button className="botao-card" variant="primary">Ver</Button>
                      <Button className="botao-card" variant="primary">Add Carrinho</Button>
                    </Card>
                  </>
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
