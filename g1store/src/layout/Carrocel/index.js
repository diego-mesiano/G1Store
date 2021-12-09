import './style.scss';
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import api2 from '../../services/api2';
import GeraCards from './GeraCards';


function Carrocel() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        api
          .get("/produtos")
          .then((response) => setProdutos(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            console.log("Tentando conectar no segundo Backend...")
            api2
                .get("/produtos")
                .then((response2) => setProdutos(response2.data))
                .catch((err) =>{
                    console.error("ops! ocorreu um erro na nossa segunda opção: " + err);
                })
            });
      }, []);




    return (
        <>

            <div  className="d-block w-100 mt-3" id="div-carrocel">
                <Carousel /* fade */ variant="light" id="carrocel" className="d-block w-100">

                    <Carousel.Item  interval={3000}>

                        <img
                            id="carrocel"
                            className="d-block w-100 justify-content-center "
                            src="https://cdn.pixabay.com/photo/2016/05/24/14/42/blue-1412469_1280.png"
                            alt="imagem de fundo do carrocel"
                        />

                        <Carousel.Caption id="texto-carrocel">
                            <GeraCards inicio={0} fim={3} produto={produtos}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  interval={3000}>

                        <img
                            id="carrocel"
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2016/05/24/14/42/blue-1412469_1280.png"
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