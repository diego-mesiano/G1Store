import { createContext, useReducer, useEffect } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";

export const CarrinhoContext = createContext();

const CarrinhoContextProvider = ({children}) =>{
    const[produtosCarrinho, dispatch] = useReducer(carrinhoReducer,[],()=>{
        const localData = localStorage.getItem('carrinho-G1');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(()=>{
        localStorage.setItem('carrinho-G1', JSON.stringify(produtosCarrinho));
    },[produtosCarrinho]);

    const addProduto = (produto) => dispatch({type: 'ADD_CARRINHO', payload: produto });

    return(
        <CarrinhoContext.Provider value={{produtosCarrinho, addProduto}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoContextProvider;