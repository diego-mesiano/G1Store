import './style.scss';
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import apiProdutos from '../../services/apiProdutos';
import GeraCards from './GeraCards';


function Carrocel() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        apiProdutos
          .get("/produtos")
          .then((response) => setProdutos(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);




    return (
        <>
<<<<<<< HEAD
            <div  className="d-block w-100" id="div-carrocel">
                <Carousel variant="dark" id="carrocel" className="d-block w-100">
=======
            <div classname="container" class="mx-2 " >
                <Carousel variant="dark" id="carrocel">
>>>>>>> 4a66507c37b72ead80f08e5a0e69800b62ae3d5b
                    <Carousel.Item interval={3000}>

                        <img
                            id="carrocel"
                            class="d-block w-100 justify-content-center"
                            src="https://static.vecteezy.com/ti/vetor-gratis/p1/2303937-abstrato-cinza-fundo-com-linhas-onduladas-vetor.jpg"
                            alt="imagem de fundo do carrocel"
                        />

                        <Carousel.Caption id="texto-carrocel">
                            <GeraCards inicio={0} fim={3} produto={produtos}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>

                        <img
                            id="carrocel"
                            class="d-block w-100"
                            src="https://static.vecteezy.com/ti/vetor-gratis/p1/2303937-abstrato-cinza-fundo-com-linhas-onduladas-vetor.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption >
                            <GeraCards inicio={3} fim={6} produto={produtos}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Carrocel;