import { CartContainer, Overlay, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { close as closeCart, returnCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  children: React.ReactNode
}

const CartLayout = ({ children }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeCart())
    dispatch(returnCart())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleClose} />
      <Sidebar>{children}</Sidebar>
    </CartContainer>
  )
}

export default CartLayout
