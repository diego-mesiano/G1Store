import './style.scss';
import { Button, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import api from '../../services/api'
import api2 from '../../services/api2'
import { Link } from 'react-router-dom'
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import { useContext } from "react";
import { Helmet } from 'react-helmet-async'
import ConversaoBRL from '../../services/CoversaoBRL';

function ProdutosGerais() {
  const [categoria, setCategoria] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categoriaMostrando, setCategoriaMostrando] = useState("Ultimos produtos cadastrados");
  const { addProduto } = useContext(CarrinhoContext)



  useEffect(() => {
    async function consumoApi() {
      try {
        const [produto, categorias] = await Promise.all(
          [
            api.get('produtos'),
            api.get('produtos/categorias')
          ]
        );
        setProdutos(produto.data);
        setCategoria(categorias.data);
        console.log("Conectado no primeiro backend");
      } catch (err) {
        console.error("Erro backend 1: " + err);
        console.log("Tentando conectar no segundo Backend...")
        try {
          const [a, b] = await Promise.all(
            [
              api2.get('produtos'),
              api2.get('produtos/categorias')
            ]
          );
          setProdutos(a.data);
          setCategoria(b.data);
          console.log("Conectado no segundo backend");

        }
        catch (err) {
          console.error("Erro backend 2: " + err);
        }
      }

    }
    consumoApi();

  },
    []);

  async function consumoCategoria(id) {
    api
      .get(`produtos/categorias/${id}`)
      .then((response) => {
        setProdutos(response.data.produtos)
        setCategoriaMostrando(response.data.nome)
        console.log("Conectado no primeiro backend")
      })
      .catch((err) => {
        console.error(err + " Tentando se conectar no segundo backe-end...");
        api2
          .get(`produtos/categorias/${id}`)
          .then((response) => {
            setProdutos(response.data.produtos)
            setCategoriaMostrando(response.data.nome)
            console.log("Conectado no segundo backend")
          })
          .catch((err) => {
            console.error("Erro ao conectar no segundo backend: " + err);

          })

      })
  }

  return (
    <>

      <Helmet>
        <title>{`G1Store | ${categoriaMostrando}`}</title>
      </Helmet>

      <div id="ancora-produtos" />
      <section>
        <div className="titulo-cards">
          <h2 >Mostrando: {categoriaMostrando}</h2>
        </div>
        <div id="sessao-produtos">
          <div /* className="sticky-top" */ id="menu-categorias">
            <div className="sticky-top h-5 mt-5">
              <Nav defaultActiveKey="/" bg="dark">
                <Nav.Link href={"/produtos"}>Todos os Produtos</Nav.Link>
                {
                  categoria.map((categoria) => {
                    return (

                      <Nav.Link key={categoria.nome} eventKey={categoria.nome} onClick={() => consumoCategoria(categoria.id)}>{categoria.nome}</Nav.Link>

                    )
                  })
                }
              </Nav>
            </div>
          </div>

          <div id="corpo-produtos">

            {

              produtos.map(({ id, imagem, nome, descricao, preco }) => {
                return (


                  <div key={id} >

                    <Card className="card justify-content-center aling-items-center " style={{ width: '13rem' }}>
                      <Card.Img className="img-card p-4" variant="top" src={imagem} />
                      <Card.Body  >
                        <Card.Title >{nome.substr(0, 50)}</Card.Title>
                        <Card.Text>
                          <ConversaoBRL>{preco}</ConversaoBRL> Ou 10x <ConversaoBRL>{preco / 10}</ConversaoBRL><br />
                          {descricao.substr(0, 100)}...
                        </Card.Text>
                      </Card.Body>

                      <div className="btn-group mb-2 mx-2 ">
                        <Link to={`/produtos/${id}`}><Button id="botao-card" className="btn btn-info ">Ver</Button></Link>
                        <Button id="botao-card" className="btn btn-primary " onClick={() => addProduto({ id, imagem, nome, descricao, preco })}>Add Carrinho</Button>
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
