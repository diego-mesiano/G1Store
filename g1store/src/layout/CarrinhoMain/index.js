import './style.scss';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import React from 'react';
import InformacoesCarrinho from './InformacoesCarrinho';


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
                                    <p>{a.nome}</p>
                                    <p>{a.preco}</p>
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