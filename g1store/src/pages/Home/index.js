import Header from '../../layout/Header';
import Carrocel from '../../layout/Carrocel';
import ProdutosGerais from '../../layout/ProdutosGerais';
import Footer from '../../layout/Footer'
import {Helmet } from "react-helmet-async";
import './style.scss';



const Home=()=> {
    
    return (
        <>  
       
            <Helmet>
                <title>G1Store | Home</title>
            </Helmet>
            <Header/>
            <Carrocel/>
            <ProdutosGerais/>
            <Footer/>
              
        </>
    );
}

export default Home;
