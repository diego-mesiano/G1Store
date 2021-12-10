import './style.scss';
import { useParams } from 'react-router';
import api from '../../services/api';
import api2 from '../../services/api2';
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import {CarrinhoContext} from '../../contexts/CarrinhoContext';
import { Helmet } from 'react-helmet-async';
import { useContext } from "react";
import ConversaoBRL from '../../services/CoversaoBRL';



function ProdutoMain(props) {
  const {addProduto} = useContext(CarrinhoContext)
  const { produtoId } = useParams();
  const [produto, setProduto] = useState({});
  
  
  useEffect(() => {
    api
      .get(`/produtos/${produtoId}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        api2
                .get(`/produtos/${produtoId}`)
                .then((response2) => setProduto(response2.data))
                .catch((err) =>{
                    console.error("ops! ocorreu um erro na nossa segunda opção: " + err);
                })
            });
      
      

  }, [produtoId])
  
  return (
    <>
      <Helmet>
        <title>{`G1Store | ${produto.nome}`}</title>
      </Helmet>
      <main className="corpo-produto">
        <section className="imagem-section">
          <img className="imagem-produto" src={produto.imagem} alt={produto.nome} />
        </section>
        <section className="descricao-section">
          <h2>{produto.nome}</h2>
          <p className="h3"><ConversaoBRL>{[produto.preco]}</ConversaoBRL></p>
          <p>ou em 10x de</p>
          <p className="h3"><ConversaoBRL>{[produto.preco/10]}</ConversaoBRL></p>
          <p>{produto.descricao}</p>
          <div className="div-botoes">
            <Button size="md" id="botoes-produto" onClick={()=>addProduto(produto)}>Adicionar Carrinho</Button>
            <Button size="md" id="botoes-produto" disabled>Comprar</Button>
          </div>
          
        </section>
        
      </main>
      
    </>
  );

}

export default ProdutoMain;