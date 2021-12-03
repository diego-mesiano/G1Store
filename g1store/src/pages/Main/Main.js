import Header from '../../layout/Header/Header';
import Carrocel from '../../layout/Carrocel';
import Produtos from '../../layout/Produtos';
import Footer from '../../layout/Footer'
import './style.scss';


function Main() {
    return (
        <>
            <Header/>
            <Carrocel/>
            <Produtos/>
            <Footer/>
        </>
    );
}

export default Main;
