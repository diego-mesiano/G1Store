import './style.scss';
import { Carousel } from 'react-bootstrap';
import jsonExemplo from './jsonExemplo.json';


function Carrocel() {
    return (
        <>
            <Carousel variant="dark" id="carrocel">
                <Carousel.Item interval={3000}>

                    <img
                        id="carrocel"
                        className="d-block w-100"
                        src="https://static.vecteezy.com/ti/vetor-gratis/p1/2303937-abstrato-cinza-fundo-com-linhas-onduladas-vetor.jpg"
                    />
                    <Carousel.Caption id="texto-carrocel">
                        <h2>Produtos em Destaque</h2>
                        <div id="destaques-container">
                            {
                                jsonExemplo.slice(0, 3).map((jsonExemplo) => {
                                    return (
                                        <>

                                            <ul key={jsonExemplo.id}>
                                                <img src={jsonExemplo.imagem} alt="" />
                                                <li><h3>{jsonExemplo.nome}</h3></li>
                                                <li><h4>{jsonExemplo.preco}</h4></li>
                                            </ul>

                                        </>
                                    )
                                })
                            }

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        id="carrocel"
                        className="d-block w-100"
                        src="https://static.vecteezy.com/ti/vetor-gratis/p1/2303937-abstrato-cinza-fundo-com-linhas-onduladas-vetor.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption id="texto-carrocel">
                        <h2>Produtos em Destaque</h2>
                        <div id="destaques-container">
                            {
                                jsonExemplo.slice(3, 6).map((jsonExemplo) => {
                                    return (
                                        <>
                                            <div>
                                                <ul key={jsonExemplo.id}>
                                                    <img src={jsonExemplo.imagem} alt="" />
                                                    <li><h3>{jsonExemplo.nome}</h3></li>
                                                    <li><h4>{jsonExemplo.preco}</h4></li>
                                                </ul>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Carrocel;