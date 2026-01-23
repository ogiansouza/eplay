import { useDispatch, useSelector } from 'react-redux'
import { Form } from './styles'
import { close, returnCart } from '../../store/reducers/cart'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'

const Confirm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { orderId } = useSelector((state: RootReducer) => state.cart)

  const finishOrder = () => {
    dispatch(close())
    navigate('/')
    dispatch(returnCart())
  }

  return (
    <Form>
      <h3>Pedido realizado - {orderId} </h3>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Button onClick={finishOrder} title="fechar carrinho" as="button">
        Concluir
      </Button>
    </Form>
  )
}

export default Confirm
