import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import {Helmet} from 'react-helmet'
import './style.scss';

const NotFound = () => {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(timer => --timer)
            if (timer === 0) {
                navigate('/')
            }
        }, 1000);

        return () => clearInterval(intervalId)
    }, [navigate, timer])

    return (
        <>  
            <Helmet>
                <title>G1Store | 404</title>
            </Helmet>
            <Header />
            <main id="corpo404">
                <h2>Nada por aqui =(</h2>
                <h3>Você será redirecionado em {timer}</h3>
            </main>
            <Footer />
        </>
    )
}
export default NotFound;