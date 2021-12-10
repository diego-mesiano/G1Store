import './style.scss';
import {useContext} from 'react';
import {CarrinhoContext} from '../../contexts/CarrinhoContext';

function CarrinhoMain(){
    const {produtosCarrinho} = useContext(CarrinhoContext)
    
    
    
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
        
     </>
 );   
}

export default CarrinhoMain;