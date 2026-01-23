import CartLayout from '../CartLayout'
import CartItems from '../CartItems'
import Checkout from '../Checkout'
import Payment from '../Payment'
import Confirm from '../Confirm'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen, step } = useSelector((state: RootReducer) => state.cart)

  if (!isOpen) return null

  return (
    <CartLayout>
      {step === 'cart' && <CartItems />}
      {step === 'checkout' && <Checkout />}
      {step === 'payment' && <Payment />}
      {step === 'confirm' && <Confirm />}
    </CartLayout>
  )
}

export default Cart
