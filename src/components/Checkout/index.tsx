import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Row } from './styles'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { goPayment, returnCart, setDelivery } from '../../store/reducers/cart'

export type Delivery = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
}

const Checkout = () => {
  const dispatch = useDispatch()
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      addInfo: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'Endereço incorreto')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'Cidade incorreta')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(3, 'Cep incorreto')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'Preencha o número')
        .required('O campo é obrigatório'),
      addInfo: Yup.string()
    }),
    onSubmit: (values) => {
      dispatch(
        setDelivery({
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.addInfo
          }
        })
      )
      dispatch(goPayment())
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message

    return ''
  }

  const goBack = () => {
    dispatch(returnCart())
  }

  return (
    <Form onSubmit={form.handleSubmit}>
      <h3>Entrega</h3>
      <label htmlFor="fullName">Quem irá receber</label>
      <input
        id="fullName"
        type="text"
        name="fullName"
        value={form.values.fullName}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
      <label htmlFor="address">Endereço</label>
      <input
        id="address"
        type="text"
        name="address"
        value={form.values.address}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <small>{getErrorMessage('address', form.errors.address)}</small>

      <label htmlFor="city">Cidade</label>
      <input
        id="city"
        type="text"
        name="city"
        value={form.values.city}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <small>{getErrorMessage('city', form.errors.city)}</small>

      <Row>
        <div>
          <label htmlFor="zipCode">Cep</label>
          <input
            id="zipCode"
            type="text"
            name="zipCode"
            value={form.values.zipCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
        </div>
        <div>
          <label htmlFor="number">Número</label>
          <input
            id="number"
            type="text"
            name="number"
            value={form.values.number}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('number', form.errors.number)}</small>
        </div>
      </Row>
      <label htmlFor="addInfo">Complemento (opcional)</label>
      <input
        className="margin-bottom"
        id="addInfo"
        type="text"
        name="addInfo"
        value={form.values.addInfo}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <small>{getErrorMessage('addInfo', form.errors.addInfo)}</small>
      <Button
        onClick={form.handleSubmit}
        title="Continue com o pagamento"
        as="button"
        htmlType="submit"
      >
        Continue com o pagamento
      </Button>
      <Button onClick={goBack} title="voltar para o carrinho" as="button">
        voltar para o carrinho
      </Button>
    </Form>
  )
}

export default Checkout
