import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../../components/Button'
import Card from '../../components/Card'

import barCode from '../../assets/images/barCode.svg'
import creditCard from '../../assets/images/creditCard.svg'

import { getTotalPrice, parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

import * as S from './styles'
import { clear } from '../../store/reducers/cart'

type Installments = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWitchCard] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installments[]>([])
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'minimo 5 caracteres')
        .required('campo obrigatório!'),
      email: Yup.string()
        .email('E-mail inválido!')
        .required('campo obrigatório!'),
      cpf: Yup.string()
        .min(14, 'cpf imcompleto')
        .max(14, 'cpf incorreto')
        .required('campo obrigatório!'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido!')
        .required('campo obrigatório!'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os E-mails são diferetes')
        .required('campo obrigatório!'),

      cardOwner: Yup.string().when((values, Schema) =>
        payWithCard ? Schema.required('o campo é obrigatório') : Schema
      ),
      cpfOwner: Yup.string().when((values, Schema) =>
        payWithCard ? Schema.required('o campo é obrigatório') : Schema
      ),
      cardDisplayName: Yup.string().when((values, Schema) =>
        payWithCard ? Schema.required('o campo é obrigatório') : Schema
      ),
      cardNumber: Yup.string().when((values, Schema) =>
        payWithCard ? Schema.required('o campo é obrigatório') : Schema
      ),
      expiresMonth: Yup.string().when((values, Schema) =>
        payWithCard ? Schema.required('o campo é obrigatório') : Schema
      ),
      expiresYear: Yup.string().when((values, Schema) =>
        payWithCard ? Schema.required('o campo é obrigatório') : Schema
      ),
      cardCode: Yup.string().when((values, Schema) =>
        payWithCard ? Schema.required('o campo é obrigatório') : Schema
      ),
      installments: Yup.number().when((values, Schema) =>
        payWithCard ? Schema.required('o campo é obrigatório') : Schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: Number(values.installments),
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfOwner,
              name: values.cardOwner
            },
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installments[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
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
        <Card title="Muito obrigado!">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso!
              <br /> Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br /> Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : ' Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="fullName"
                    value={form.values.fullName}
                    id="fullName"
                    type="text"
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="email"
                    value={form.values.email}
                    id="email"
                    type="email"
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    mask="999.999.999-99"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="cpf"
                    value={form.values.cpf}
                    id="cpf"
                    type="text"
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    id="deliveryEmail"
                    type="email"
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    id="confirmDeliveryEmail"
                    type="email"
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
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => setPayWitchCard(false)}
                type="button"
              >
                <img src={barCode} alt="boleto" /> Boleto bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => setPayWitchCard(true)}
                type="button"
              >
                <img src={creditCard} alt="boleto" /> Cartão de crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          name="cardOwner"
                          value={form.values.cardOwner}
                          id="cardOwner"
                          type="text"
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfOwner">
                          CPF do titular do cartão
                        </label>
                        <InputMask
                          mask="999.999.999-99"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          name="cpfOwner"
                          value={form.values.cpfOwner}
                          id="cpfOwner"
                          type="text"
                          className={
                            checkInputHasError('cpfOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          id="cardDisplayName"
                          type="text"
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Numero do cartão</label>
                        <InputMask
                          mask="9999 9999 9999 9999"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          name="cardNumber"
                          value={form.values.cardNumber}
                          id="cardNumber"
                          type="text"
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês do vencimento</label>
                        <InputMask
                          mask="99"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          id="expiresMonth"
                          type="text"
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <InputMask
                          mask="99"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          name="expiresYear"
                          value={form.values.expiresYear}
                          id="expiresYear"
                          type="text"
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          mask="999"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          name="cardCode"
                          value={form.values.cardCode}
                          id="cardCode"
                          type="text"
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="136px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          name="installments"
                          value={form.values.installments}
                          id="installments"
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installments) => (
                            <option
                              value={installments.quantity}
                              key={installments.quantity}
                            >
                              {installments.quantity}x de{' '}
                              {installments.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            onClick={form.handleSubmit}
            type="submit"
            title="Clique aqui para finalizar a compra"
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
