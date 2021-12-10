import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {CarrinhoContext} from '../../../contexts/CarrinhoContext';
import {useContext} from "react";
import ConversaoBRL from "../../../services/CoversaoBRL";
import './style.scss'

const GeraCards = ({ inicio, fim, produto }) => {
    const {addProduto} = useContext(CarrinhoContext)
    
    return (
        <>
            <h2 id="titulo carrocel">Produtos em Destaque</h2>
            <div id="destaques-container">
                {
                    
                    produto.slice(inicio, fim).map((produto) => {
                        
                        return (

                                <ul key={produto.nome}>
                                    <img className="imagem-carrocel" src={produto.imagem} alt={produto.nome} />
                                    <li><h3>{produto.nome.substring(0,15)}</h3></li>
                                    <li><h6><ConversaoBRL>{produto.preco}</ConversaoBRL></h6></li>
                                    <li>ou 10x <ConversaoBRL>{produto.preco / 10}</ConversaoBRL></li>
                                    <li>
                                        <Link to={`produtos/${produto.id}`}><Button size="md" id="botoes-produto" style={{marginRight:'10px'}}>Ver</Button></Link>
                                        <Button size="md" id="botoes-produto" onClick={()=>addProduto(produto)}>Add Carrinho</Button>

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