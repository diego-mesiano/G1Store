import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
const GeraCards = ({ inicio, fim, produto }) => {

    return (
        <>
            <h2 id="titulo carrocel">Produtos em Destaque</h2>
            <div id="destaques-container">
                {
                    produto.slice(inicio, fim).map((produto) => {

                        return (
                            
                                <ul key={produto.nome}>
                                    <img src={produto.imagem} alt={produto.nome} />
                                    <li><h3>{produto.nome}</h3></li>
                                    <li><h6>{produto.preco}</h6></li>
                                    <li>ou 10x R${produto.preco / 10},00</li>
                                    <li>
                                        <Link to={`produtos/${produto.id}`}><Button size="md" id="botoes-produto" style={{marginRight:'10px'}}>Ver</Button></Link>
                                        <Button size="md" id="botoes-produto">Add Carrinho</Button>

                                    </li>
                                </ul>

                        )
                    })
                }

            </div>
        </>
    )
}

export default GeraCards;