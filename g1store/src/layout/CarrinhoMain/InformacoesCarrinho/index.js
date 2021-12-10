import './style.scss';
import { useContext } from 'react';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'


function InformacoesCarrinho() {
    const { produtosCarrinho } = useContext(CarrinhoContext)
    let b = []

    const navigate = useNavigate();

    function limparLocalStorage() {
        return (


            Swal.fire({
                title: 'Deseja realmente limpar o carrinho?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, quero limpar'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear()
                    navigate('/', { replace: true })
                    window.location.reload();
                }
            })



        )
    }
    return (
        <>
            <section>
                {produtosCarrinho.map((a) => {
                    if (typeof a.preco !== "undefined") { b.push(a.preco) }
                    return null
                })
                }

                <h4>Itens: {b.length}</h4>

                <h4>Total: R$
                    {
                        b.reduce(function (total, numero) {
                            return total + numero;
                        }, 0).toFixed(2)
                    }
                </h4>
                <Button variant="danger"  onClick={() =>limparLocalStorage()} disabled={b.length>0 ? false : true} >Limpar Carrinho</Button>
                <Button variant="success" disabled>Finalizar Compra</Button>
            </section>
        </>
    )
}

export default InformacoesCarrinho;