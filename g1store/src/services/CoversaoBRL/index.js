import './style.scss'
function ConversaoBRL({children}){
    
   
    return(
       <>
            <div className='preco-pt-brl'>
                {
            
                    children.toLocaleString('pt-br',{style:'currency', currency:'BRL'})
           

                }
            </div>
       </>

    )
        
    
}

export default ConversaoBRL