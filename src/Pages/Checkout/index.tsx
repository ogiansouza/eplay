import * as S from './styles'

import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

import Card from '../../components/Card'
import Button from '../../components/Button'
import boleto from '../../images/barcode.svg'
import cartão from '../../images/credit-card.svg'
import { formatPrice, getTotal } from '../../utils'
import { clear } from '../../store/reducers/cartSlice'

type Installments = {
  quantity: number
  amount: number
  formattedAmount: string
}

export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false)
  const [installments, setInstallments] = useState<Installments[]>([])
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const totalPrice = getTotal(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Nome obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail obrigatório'),
      cpf: Yup.string()
        .min(14, 'O CPF deve ter pelo menos 14 caracteres')
        .max(14, 'O CPF deve ter pelo menos 14 caracteres')
        .required('CPF obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('E-mail obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'E-mails não conferem')
        .required('E-mail obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Nome obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('CPF obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Nome obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Número obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Mês obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Ano obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Código obrigatório') : schema
      ),
      installments: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('Parcelamento obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        })),
        billing: {
          document: values.cpf,
          name: values.fullName,
          email: values.email
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner
            },
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isError = fieldName in form.errors
    const hasError = isTouched && isError

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installments[] = []

      for (let i = 1; i <= 6; i++) {
        const amount = totalPrice / i
        const formattedAmount = formatPrice(amount)
        if (i > 3) {
          const amount = (totalPrice * 1.1) / i
          const formattedAmount = formatPrice(amount)
          installmentsArray.push({
            quantity: i,
            amount,
            formattedAmount: formattedAmount + '  (10% de juros)'
          })
        } else {
          installmentsArray.push({
            quantity: i,
            amount,
            formattedAmount
          })
        }
      }
      return installmentsArray
    }
    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title="Muito Obrigado">
          <>
            <p className="margin-top">
              É com satisfação que informamos que recebemos seu pedido com
              sucesso!
              <br />
              Abaixo estão os detalhes da sua compra:
              <br />
              Número do pedido: {data.orderId}
              <br /> Forma de pagamento:
              {payWithCard ? ' Cartão de credito' : ' Boleto bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pinputMaskode levar até 3 dias úteis.
              <br />
              Após a aprovação do pagamento, enviaremos um e-mail contendo o
              código de ativação do jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. <br />
              Você receberá o código no e-mail cadastrado em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. <br /> Caso tenha alguma
              dúvida ou necessite de mais informações, por favor, entre em
              contato conosco através dos nossos canais de atendimento ao
              cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de Cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome Completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    mask="999.999.999-99"
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">Email</label>
                  <input
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">Confirme o Email</label>
                  <input
                    id="confirmDeliveryEmail"
                    type="email"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.tabButton
                type="button"
                onClick={() => setPayWithCard(false)}
                isActive={!payWithCard}
              >
                <img src={boleto} alt="Boleto" />
                Boleto Bancario
              </S.tabButton>
              <S.tabButton
                type="button"
                onClick={() => setPayWithCard(true)}
                isActive={payWithCard}
              >
                <img src={cartão} alt="Cartão de Credito" />
                Cartão de Credito
              </S.tabButton>
              {payWithCard && (
                <>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do Titular do Cartão
                      </label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardOwner') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do Titular do Cartão
                      </label>
                      <InputMask
                        mask="999.999.999-99"
                        id="cpfCardOwner"
                        type="text"
                        name="cpfCardOwner"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardOwnerCpf') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="24px">
                    <S.InputGroup>
                      <label htmlFor="cardDisplayName">Nome no Cartão</label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardDisplayName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Cartão de Crédito</label>
                      <InputMask
                        mask="9999 9999 9999 9999"
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="123">
                      <label htmlFor="expiresMonth">Mês de Vencimento</label>
                      <InputMask
                        mask="99"
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="123">
                      <label htmlFor="expiresYear">Ano de Vencimento</label>
                      <InputMask
                        mask="99"
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        mask="999"
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="24px">
                    <S.InputGroup maxWidth="207px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        name="installments"
                        id="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('installments') ? 'error' : ''
                        }
                      >
                        {installments.map((installment) => (
                          <option
                            key={installment.quantity}
                            value={installment.quantity}
                          >
                            {installment.quantity} x{' '}
                            {installment.formattedAmount}
                          </option>
                        ))}
                      </select>
                    </S.InputGroup>
                  </S.Row>
                </>
              )}
              {!payWithCard && (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </>
          </Card>
          <Button
            variant="primary"
            type="submit"
            title="Clique aqui para finalizar a compra"
          >
            {isLoading ? 'Finalizando...' : 'Finalizar'}
          </Button>
        </form>
      )}
    </div>
  )
}
