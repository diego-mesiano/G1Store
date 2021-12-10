import './style.scss';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import React from 'react';


function CarrinhoMain() {
    const { produtosCarrinho } = useContext(CarrinhoContext)



    return (
        <>
            {
                produtosCarrinho.map((a) => {

                    return (
                        <React.Fragment key={a.nome}>
                            <p>{a.nome}</p>
                            <p>{a.preco}</p>

                            <p>---------------------</p>
                        </React.Fragment>
                    )
                })








            }

        </>
    );
}

export default CarrinhoMain;