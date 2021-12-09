import './style.scss';
import {useContext, useState} from 'react';
import {CarrinhoContext} from '../../contexts/CarrinhoContext';

function CarrinhoMain(){
    const {produtosCarrinho} = useContext(CarrinhoContext)
    var soma = 0;
    
    
 return(
     <>
        {
           produtosCarrinho.map((a)=>{
                
               return(
                    <>
                   <p>{a.nome}</p> 
                   <p>{a.preco}</p>
                   
                   <p>---------------------</p>
                   </>
               )
           })
        }
                <>
                <p>{soma}</p>
                </>
        {
            
                
                    
                   
                    
                
            
        }
        
     </>
 );   
}

export default CarrinhoMain;