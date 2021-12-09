import './style.scss';
import {useContext} from 'react';
import {CarrinhoContext} from '../../assets/contexts/CarrinhoContext';

function CarrinhoMain(){
    const {produtosCarrinho} = useContext(CarrinhoContext)
 return(
     <>
        
     </>
 );   
}

export default CarrinhoMain;