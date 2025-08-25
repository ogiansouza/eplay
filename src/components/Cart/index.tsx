import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Tags } from '../Tags'
import { Button } from '../Button'
import { getTotalPrice, parseToBrl } from '../../utils'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './style'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'isOpen' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} />
              <div>
                <h3>{item.name}</h3>
                <Tags>{item.details.category}</Tags>
                <Tags>{item.details.system}</Tags>
                <p>{parseToBrl(item.prices.current)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <div>
          <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
          <S.Prices>
            Total de {parseToBrl(getTotalPrice(items))}
            <span>em até 6x sem juros</span>
          </S.Prices>
        </div>
        <Button type="button" title="Continuar a compra" onClick={goToCheckout}>
          Continuar a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
