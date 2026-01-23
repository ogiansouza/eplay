import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Row } from './styles'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { formataPreco } from '../../pages/Home'
import { RootReducer } from '../../store'
import {
  goCheckout,
  goConfirm,
  setOrderId,
  clear
} from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'

const Payment = () => {
  const [purchase, { isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const { items, delivery } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      if (!delivery) return
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery,
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
        .unwrap()
        .then((response) => {
          dispatch(setOrderId(response.orderId))
          dispatch(goConfirm())
          dispatch(clear())
        })
    }
  })

  const getErrorMesssage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message

    return ''
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + (valorAtual.preco ?? 0)
    }, 0)
  }

  const goBack = () => {
    dispatch(goCheckout())
  }

  return (
    <Form onSubmit={form.handleSubmit}>
      <h3>Pagamento - Valor a pagar R$ {formataPreco(getTotalPrice())} </h3>
      <label htmlFor="cardOwner">Nome no cartão</label>
      <input
        id="cardOwner"
        type="text"
        name="cardOwner"
        value={form.values.cardOwner}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <small>{getErrorMesssage('cardOwner', form.errors.cardOwner)}</small>
      <Row>
        <div>
          <label htmlFor="cardNumber">Número do cartão</label>
          <InputMask
            className="input-1"
            id="cardNumber"
            type="text"
            name="cardNumber"
            value={form.values.cardNumber}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="9999.9999.9999"
          />
          <small>
            {getErrorMesssage('cardNumber', form.errors.cardNumber)}
          </small>
        </div>
        <div>
          <label htmlFor="cardCode">CVV</label>
          <InputMask
            id="cardCode"
            type="text"
            name="cardCode"
            value={form.values.cardCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="999"
          />
          <small>{getErrorMesssage('cardCode', form.errors.cardCode)}</small>
        </div>
      </Row>
      <Row className="margin-bottom">
        <div>
          <label htmlFor="expiresMonth">Mês do vencimento</label>
          <InputMask
            className="input-2"
            id="expiresMonth"
            type="text"
            name="expiresMonth"
            value={form.values.expiresMonth}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="99"
          />
          <small>
            {getErrorMesssage('expiresMonth', form.errors.expiresMonth)}
          </small>
        </div>
        <div>
          <label htmlFor="expiresYear">Ano do vencimento</label>
          <InputMask
            id="expiresYear"
            type="text"
            name="expiresYear"
            value={form.values.expiresYear}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="99"
          />
          <small>
            {getErrorMesssage('expiresYear', form.errors.expiresYear)}
          </small>
        </div>
      </Row>
      <Button
        onClick={form.handleSubmit}
        title="Finalizar o pagamento da compra"
        as="button"
        htmlType="submit"
      >
        Finalizar pagamento
      </Button>
      <Button
        onClick={goBack}
        title="voltar para a edição de endereço e recomeçar do inicio"
        as="button"
        disabled={isLoading}
      >
        {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
      </Button>
    </Form>
  )
}

export default Payment
