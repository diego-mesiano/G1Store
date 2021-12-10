import Header from '../../layout/Header';
import CarrinhoMain from '../../layout/CarrinhoMain/';

import Footer from '../../layout/Footer'
import {Helmet} from 'react-helmet-async'
import './style.scss';



function Carrinho() {
    return (
        <>
            <Helmet>
                <title>G1Store | Carrinho</title>
            </Helmet>
            <Header/>
            <CarrinhoMain/>
            <Footer/>
        </>
    );
}

export default Carrinho;