import './style.scss';
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import apiProdutos from '../../services/apiProdutos';
import GeraCards from './GeraCards';



function Carrocel() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        apiProdutos
          .get("/produto")
          .then((response) => setProdutos(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);




    return (
        <>

            <Carousel variant="dark" id="carrocel">
                <Carousel.Item interval={3000}>

                    <img
                        id="carrocel"
                        className="d-block w-100 justify-content-center"
                        src="https://static.vecteezy.com/ti/vetor-gratis/p1/2303937-abstrato-cinza-fundo-com-linhas-onduladas-vetor.jpg"
                        alt="imagem de fundo do carrocel"
                    />
                    <Carousel.Caption id="texto-carrocel">
                        <GeraCards inicio={0} fim={3} produtos={produtos}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>

                    <img
                        id="carrocel"
                        className="d-block w-100"
                        src="https://static.vecteezy.com/ti/vetor-gratis/p1/2303937-abstrato-cinza-fundo-com-linhas-onduladas-vetor.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption >
                    <GeraCards inicio={3} fim={6} produtos={produtos}/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Carrocel;