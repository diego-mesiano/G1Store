import Header from '../../layout/Header';
import ProdutosGerais from '../../layout/ProdutosGerais'
import Footer from '../../layout/Footer'
import {Helmet} from 'react-helmet'
import './style.scss';


function Produtos() {
    return (
        <>
            <Helmet>
                <title>G1Store | Produtos</title>
            </Helmet>
            <Header/>
            <ProdutosGerais/>
            <Footer/>
        </>
    );
}

export default Produtos;