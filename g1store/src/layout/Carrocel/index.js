import './style.scss';
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import api2 from '../../services/api2';
import GeraCards from './GeraCards';
import fundo from '../../assets/img/fundo.jpg'


function Carrocel() {
    const [produtos, setProdutos] = useState([]);

    function gerarAleatorio(min, max) {
        return Math.random() * (max - min) + min;
      }

    useEffect(() => {
        api
          .get("/produtos")
          .then((response) => setProdutos(response.data))
          .catch((err) => {
            console.error("Ocorreu um erro no primeiro backend: " + err);
            console.log("Tentando conectar no segundo Backend...")
            api2
                .get("/produtos")
                .then((response2) => setProdutos(response2.data))
                .catch((err) =>{
                    console.error("Ocorreu um erro no segundo backend: " + err);
                })
            });
      }, []);

    let aleatorio = gerarAleatorio(0,produtos.length);
    let aleatorio2 = gerarAleatorio(0,produtos.length);


    return (
        <>

            <div  className="d-block w-100 mt-3" id="div-carrocel">
                <Carousel /* fade */ variant="dark" id="carrocel" className="d-block w-100">

                    <Carousel.Item  interval={3000}>

                        <img
                            id="carrocel"
                            className="d-block w-100 justify-content-center "
                            src={fundo}
                            alt="imagem de fundo do carrocel"
                        />

                        <Carousel.Caption id="texto-carrocel">
                            <GeraCards inicio={aleatorio} fim={aleatorio+3} produto={produtos}/>
                        </Carousel.Caption>
                    </Carousel.Item>

                    
                    <Carousel.Item  interval={3000}>

                        <img
                            id="carrocel"
                            className="d-block w-100"
                            src={fundo}
                            alt="Second slide"
                        />
                        <Carousel.Caption id="texto-carrocel">
                            <GeraCards inicio={aleatorio2} fim={aleatorio2 + 3} produto={produtos}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Carrocel;