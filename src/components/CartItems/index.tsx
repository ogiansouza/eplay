import Button from '../Button'
import { CartProduto, InfoCard, Paragrafo } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { goCheckout, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../pages/Home'

const CartItems = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    dispatch(goCheckout())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + (valorAtual.preco ?? 0)
    }, 0)
  }

  return (
    <div>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <CartProduto key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>R$ {formataPreco(item.preco)}</p>
                </div>
                <button type="button" onClick={() => removeItem(item.id)} />
              </CartProduto>
            ))}
          </ul>
          <InfoCard>
            <div className="paragrafos">
              <p>Valor total</p>
              <p>{formataPreco(getTotalPrice())}</p>
            </div>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar a compra"
              as="button"
            >
              Continuar com a entrega
            </Button>
          </InfoCard>
        </>
      ) : (
        <Paragrafo>
          O carrinho está vazio, adicione pelo menos um produto para continuar a
          compra.
        </Paragrafo>
      )}
    </div>
  )
}

export default CartItems
