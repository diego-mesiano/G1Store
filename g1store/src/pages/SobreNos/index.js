import Header from '../../layout/Header';
import SobreNosMain from '../../layout/SobreNosMain';
import Footer from '../../layout/Footer'
import {Helmet} from 'react-helmet-async'
import './style.scss';


function SobreNos() {
    return (
        <>
             <Helmet>
                <title>G1Store | Sobre nós</title>
            </Helmet>
            <Header/>
            <SobreNosMain/>
            <Footer/>
        </>
    );
}

export default SobreNos;