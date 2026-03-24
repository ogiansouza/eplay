import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@/components/Button'
import * as S from './styles'
import Tag from '../Tag'
import { IoMdClose } from 'react-icons/io'
import type { AppDispatch, RootReducer } from '@/store'
import { close, remove } from '@/store/reducers/cart'
import { getTotalPrice, priceFormatter } from '@/utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const goToCart = () => {
    navigate('/checkout')
    handleCloseCart()
  }
  const dispatch = useDispatch<AppDispatch>()
  const handleCloseCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={handleCloseCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((i) => (
                <S.CartItem key={i.id}>
                  <img src={i.media.thumbnail} alt={i.name} />
                  <div>
                    <h3>{i.name}</h3>
                    <Tag>{i.details.category}</Tag>
                    <Tag>{i.details.system}</Tag>
                    <span>{priceFormatter(i.prices.current)}</span>
                  </div>
                  <IoMdClose onClick={() => dispatch(remove(i.id))} />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho </S.Quantity>
            <S.Prices>
              Total de {priceFormatter(getTotalPrice(items))} <span>em até 6x sem juros</span>
            </S.Prices>
            <Button title="Clique aqui para continuar com a compra" onClick={goToCart}>
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            Nenhum jogo no carrinho.
            <Button
              title="Clique aqui para continuar com a compra"
              $variant="secondary"
              onClick={handleCloseCart}
            >
              Continuar com a compra
            </Button>
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
