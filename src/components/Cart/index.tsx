import * as S from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { hadleOpen, remove } from '../../store/reducers/cartSlice'
import { formatPrice, getTotal } from '../../utils'

import Button from '../Button'
import Tag from '../Tag'

export default function Cart() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const goToCheckout = () => {
    if (items.length === 0) return
    dispatch(hadleOpen())
    navigate('/checkout')
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(hadleOpen())} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item, index) => (
                <S.CartItem key={index}>
                  <img src={item.media.cover} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{formatPrice(item.prices.current)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => dispatch(remove(item.id))}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {formatPrice(getTotal(items))}
              <span>em até 3x sem juros</span>
            </S.Prices>
            <Button
              title="Clique aqui para continuar com a compra"
              type="button"
              variant={'primary'}
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <S.Empty>O carrinho está vazio, adicione alguns jogos</S.Empty>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}
