import './style.scss';
import { useParams } from 'react-router';
import apiProdutos from '../../services/apiProdutos';
import { useState, useEffect } from 'react'



function ProdutoMain() {
  
  const { produtoId } = useParams();
  const [produto, setProduto] = useState({});
  useEffect(() => {
    apiProdutos
      .get(`/produtos/${produtoId}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
  }, [produtoId])
  return (
    <>
    <div id="teste">
      <p>{produto.nome}</p>
      <p>{produto.preco}</p>
      <p>{produto.descricao}</p>
    </div>
      

      {/* {<Header/>
            <ProdutoMain/>
            <Footer/>} */}
    </>
  );

}

export default ProdutoMain;