function ConversaoBRL({children}){
    
   
    return(
       <>
        {
            
            children.toLocaleString('pt-br',{style:'currency', currency:'BRL'})
           

        }
       </>

    )
        
    
}

export default ConversaoBRL