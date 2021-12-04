import Header from '../../layout/Header/Header';
import Carrocel from '../../layout/Carrocel';
import ProdutosGerais from '../../layout/ProdutosGerais';
import Footer from '../../layout/Footer'
import './style.scss';



function Main() {
    return (
        <>
            <Header/>
            <Carrocel/>
            <ProdutosGerais/>
            <Footer/>
        </>
    );
}

export default Main;
