import './style.scss';
import { Carousel } from 'react-bootstrap';
/*import {useState, useEffect} from 'react';*/
import jsonExemplo from './jsonExemplo.json';



function Carrocel() {
    
    /*const [urlImg, setUrlImg] = useState("");
    useEffect(() => {
        setUrlImg(urlImg);
    });*/
    
    
    const gera3Destaques = (inicio, fim) => {
        
        return (
            <>
            <h2 id="titulo carrocel">Produtos em Destaque</h2>
            <div id="destaques-container">
            {   
                jsonExemplo.slice(inicio, fim).map((jsonExemplo) => {
                    
                    return (
                        
                        <ul key={jsonExemplo.id}>
                                <img src={jsonExemplo.imagem} alt="" />
                                <li><h3>{jsonExemplo.nome}</h3></li>
                                <li><h6>{jsonExemplo.preco}</h6></li>
                                <li>ou 10x R${jsonExemplo.preco / 10},00</li>
                            </ul>

                        

                    )
                })           
            }
            </div>    
            </>
        )
    }

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
                        {gera3Destaques(0, 3)}
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
                        {gera3Destaques(3, 6)}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Carrocel;