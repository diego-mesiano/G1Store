import './style.scss';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import React from 'react';
import InformacoesCarrinho from './InformacoesCarrinho';
import ConversaoBRL from '../../services/CoversaoBRL';
import { Card, Button } from 'react-bootstrap';

function CarrinhoMain() {
    const { produtosCarrinho } = useContext(CarrinhoContext)



    return (
        <>
            <main className='corpo-carrinho'>
                <section className='produtos-carrinho'>
                    {
                        produtosCarrinho.map((a) => {

                            return (
                                <React.Fragment key={a.nome}>
                                    <Card className="card justify-content-center aling-items-center " style={{ width: '17rem' }}>
                                        <Card.Img className="img-card p-4" variant="top" src={a.imagem} />
                                        <Card.Body  >
                                            <Card.Title >{a.nome.substr(0, 50)}</Card.Title>
                                            <Card.Text>
                                                <ConversaoBRL>{a.preco}</ConversaoBRL> Ou 10x <ConversaoBRL>{a.preco / 10}</ConversaoBRL><br />
                                                {a.descricao.substr(0, 100)}...
                                            </Card.Text>
                                        </Card.Body>

                                        <div className="btn-group mb-2 mx-2 ">

                                            <Button variant="danger" id="botao-card" className="btn btn-primary " onClick={() => null}>Excluir</Button>
                                        </div>
                                    </Card>
                                </React.Fragment>
                            )
                        })
                    }
                </section>
                <section className='corpo-informacoes'>
                    <InformacoesCarrinho />
                </section>
            </main>
        </>
    );
}

export default CarrinhoMain;