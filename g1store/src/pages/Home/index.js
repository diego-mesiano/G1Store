import Header from '../../layout/Header';
import Carrocel from '../../layout/Carrocel';
import ProdutosGerais from '../../layout/ProdutosGerais';
import Footer from '../../layout/Footer'
import './style.scss';



const Home=()=> {
    
    return (
        <>
            <Header/>
            <Carrocel/>
            <ProdutosGerais/>
            <Footer/>
        </>
    );
}

export default Home;
