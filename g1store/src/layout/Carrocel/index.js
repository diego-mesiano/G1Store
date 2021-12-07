import './style.scss';
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import apiProdutos from '../../services/apiProdutos';



function Carrocel() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        async function consumoApi() {
            try {
                const produtos = await Promise.all(
                    apiProdutos.get('produto'),
                );
                setProdutos(produtos.data);
            } catch (err) {
                console.error("Erro:" + err);
            }
        }
        consumoApi();
    }, []);


    const gera3Destaques = (inicio, fim) => {
        {console.log(produtos)}
        return (
            <>
                <h2 id="titulo carrocel">Produtos em Destaque</h2>
                <div id="destaques-container">
                    {
                        produtos.slice(inicio, fim).map((produtos) => {

                            return (

                                <ul key={produtos.id}>
                                    <img src={produtos.imagem} alt="" />
                                    <li><h3>{produtos.nome}</h3></li>
                                    <li><h6>{produtos.preco}</h6></li>
                                    <li>ou 10x R${produtos.preco / 10},00</li>
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