import Header from '../../layout/Header';
import CarrinhoMain from '../../layout/CarrinhoMain/';
import InformacoesCarrinho from '../../layout/CarrinhoMain/InformacoesCarrinho';
import Footer from '../../layout/Footer'
import {Helmet} from 'react-helmet'
import './style.scss';



function Carrinho() {
    return (
        <>
            <Helmet>
                <title>G1Store | Carrinho</title>
            </Helmet>
            <Header/>
            <CarrinhoMain/>
            <InformacoesCarrinho/>
            <Footer/>
        </>
    );
}

export default Carrinho;