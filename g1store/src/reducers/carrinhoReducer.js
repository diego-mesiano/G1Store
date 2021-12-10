import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export const carrinhoReducer = (state, action) =>{
    
    switch (action.type){
        case 'ADD_CARRINHO':
            const checkIfCarrinhoAlreadyExists = state.filter(carrinho =>(
                carrinho.id === action.payload.id
            ));
            if (!checkIfCarrinhoAlreadyExists.length){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Produto adicionado ao carrinho',
                    showConfirmButton: false,
                    timer: 1500
                  })
                return [...state, action.payload];
            }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Produto ja se encontra no carrinho',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
            return state;
        default:
            return state;
    }
}