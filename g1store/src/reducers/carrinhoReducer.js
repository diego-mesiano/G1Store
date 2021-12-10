import Swal from 'sweetalert2';

export const carrinhoReducer = (state, action) =>{
    
    switch (action.type){
        case 'ADD_CARRINHO':
            const checkIfCarrinhoAlreadyExists = state.filter(carrinho =>(
                carrinho.id === action.payload.id
            ));
            if (!checkIfCarrinhoAlreadyExists.length){
                Swal.fire({
                    position: 'bottom-start',
                    icon: 'success',
                    title: 'Produto adicionado ao carrinho',
                    showConfirmButton: false,
                    timer: 1000
                  })
                return [...state, action.payload];
            }else{
                Swal.fire({
                    position: 'bottom-start',
                    icon: 'error',
                    title: 'Produto ja adicionado ao carrinho',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
            return state;
        
        default:
            return state;
    }
}