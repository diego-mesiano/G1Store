// import Header from '../../layout/Header/Header';
// import ProdutoMain from '../../layout/ProdutoMain'
// import Footer from '../../layout/Footer'
import './style.scss';
import { useParams } from 'react-router';
import apiProdutos from '../../services/apiProdutos';
import {useState, useEffect} from 'react'


function Produto() {
    const {produtoId} = useParams();
    const [produto, setProduto] = useState({});
    useEffect(() => {
        apiProdutos
        .get(`/produto/${produtoId}`)
        .then((response) => setProduto(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        })
    }, [produto]);
    return (
        <>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            
            {/* {<Header/>
            <ProdutoMain/>
            <Footer/>} */}
        </>
    );
}

export default Produto;


