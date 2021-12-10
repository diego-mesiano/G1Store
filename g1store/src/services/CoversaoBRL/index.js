import './style.scss'
function ConversaoBRL({children}){
    
   
    return(
       <>
            <span className="preco-pt-brl">
                {
            
                    children.toLocaleString('pt-br',{style:'currency', currency:'BRL'})
           

                }
            </span>
       </>

    )
        
    
}

export default ConversaoBRL