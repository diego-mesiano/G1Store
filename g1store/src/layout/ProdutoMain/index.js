import './style.scss';
import { useParams } from 'react-router';
import api from '../../services/api';
import api2 from '../../services/api2';
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import {CarrinhoContext} from '../../contexts/CarrinhoContext';
import { useContext } from "react";


function ProdutoMain() {
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
      <main className="corpo-produto">
        <section className="imagem-section">
          <img className="imagem-produto" src={produto.imagem} alt={produto.nome} />
        </section>
        <section className="imagem-section">
          <h2>{produto.nome}</h2>
          <p>R${produto.preco}</p>
          
          <p>{produto.descricao}</p>
          <div className="div-botoes">
            <Button size="md" id="botoes-produto" onClick={()=>addProduto(produto)}>Adicionar Carrinho</Button>
            <Button size="md" id="botoes-produto" disabled>Comprar</Button>
          </div>

        </section>
      </main>


      {/* {<Header/>
            <ProdutoMain/>
            <Footer/>} */}
    </>
  );

}

export default ProdutoMain;