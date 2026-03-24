import Card from '@/components/Card'
import { MainContainer } from '@/styles/global'
import { Navigate } from 'react-router-dom'
import { InputMask } from '@react-input/mask'
import { useEffect, useState } from 'react'
import { FaBarcode, FaRegCreditCard } from 'react-icons/fa6'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '@/services/api'
import { useSelector } from 'react-redux'
import type { RootReducer } from '@/store'
import { getTotalPrice, priceFormatter } from '@/utils'
import * as S from './styles'
import Button from '@/components/Button'
import { clear } from '@/store/reducers/cart'
import { useDispatch } from 'react-redux'
export type CheckoutProps = {
  $maxWidth?: string
  $marginTop?: string
}
type Installments = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(true)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [installments, SetInstallments] = useState<Installments[]>([])
  const { items } = useSelector((state: RootReducer) => state.cart)
  const totalPrice = getTotalPrice(items)
  const dispatch = useDispatch()
  useEffect(() => {
    const calculateInstallments = () => {
      const installmentArray: Installments[] = []
      for (let i = 1; i <= 6; i++) {
        installmentArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: priceFormatter(totalPrice / i)
        })
      }
      SetInstallments(installmentArray)
    }

    if (totalPrice > 0) {
      calculateInstallments()
    }
  }, [totalPrice])

  const formik = useFormik({
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
      cardCvv: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa de no mínimo 5 caracteres')
        .required('o campo é obrigatório'),
      email: Yup.string().email('Email inválido').required('o campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'o campo deve conter 14 caracteres')
        .max(14, 'o campo deve conter 14 caracteres')
        .required('o campo é obrigatório'),
      deliveryEmail: Yup.string().email('Email inválido').required('o campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('o campo é Obrigatório'),

      cardOwner: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('o campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('o campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('o campo é obrigatório') : schema
      ),
      cardNumber: Yup.string()
        .test('card-number', 'o campo deve conter 16 dígitos', (value) => {
          if (!payWithCard) return true
          const numbersOnly = value?.replace(/\s/g, '') || ''
          return numbersOnly.length === 16
        })
        .when((_, schema) =>
          payWithCard ? schema.required('o campo é obrigatório') : schema
        ),
      expiresMonth: Yup.string()
        .min(2, 'o campo deve conter 2 caracteres')
        .max(2, 'o campo deve conter 2 caracteres')
        .when((_, schema) =>
          payWithCard ? schema.required('o campo é obrigatório') : schema
        ),
      expiresYear: Yup.string()
        .min(4, 'o campo deve conter 4 caracteres')
        .max(4, 'o campo deve conter 4 caracteres')
        .when((_, schema) =>
          payWithCard ? schema.required('o campo é obrigatório') : schema
        ),
      cardCvv: Yup.string()
        .min(3, 'o campo deve conter 3 caracteres')
        .max(3, 'o campo deve conter 3 caracteres')
        .when((_, schema) =>
          payWithCard ? schema.required('o campo é obrigatório') : schema
        ),
      installments: Yup.number().when((_, schema) =>
        payWithCard ? schema.required('o campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
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
            code: Number(values.cardCvv),
            name: values.cardDisplayName,
            number: values.cardNumber.replace(/\s/g, ''),
            owner: {
              document: values.cpfCardOwner,
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
          price: item.prices.current
        }))
      })
    }
  })

  const chekInputError = (field: string) => {
    const isTouched = field in formik.touched
    const isInvalid = field in formik.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installments[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i + 1,
          amount: totalPrice / i,
          formattedAmount: priceFormatter(totalPrice / 1)
        })
      }
      return installmentsArray
    }
    if (totalPrice > 0) {
      calculateInstallments()
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }
  return (
    <MainContainer>
      {isSuccess && data ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento: {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de que a confirmação
              pode levar até 3 dias úteis. Após a aprovação do pagamento, enviaremos um e-mail
              contendo o código de ativação do jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do código de ativação
              ocorrerá após a aprovação da transação pela operadora do cartão. Você receberá o
              código no e-mail cadastrado em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para garantir que receba
              nossa comunicação. Caso tenha alguma dúvida ou necessite de mais informações, por
              favor, entre em contato conosco através dos nossos canais de atendimento ao cliente
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Card title="Dados de Cobrança">
            <S.ButtonGroup>
              <Button
                title="boleto"
                $variant={payWithCard ? 'secondary' : 'primary'}
                onClick={() => {
                  setPayWithCard(false)
                }}
                hover={false}
              >
                <FaBarcode /> Boleto Bancário
              </Button>
              <Button
                title="credito"
                $variant={payWithCard ? 'primary' : 'secondary'}
                onClick={() => {
                  setPayWithCard(true)
                }}
                hover={false}
              >
                <FaRegCreditCard /> Cartão de Crédito
              </Button>
            </S.ButtonGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={chekInputError('fullName') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={chekInputError('email') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cpf">CPF:</label>
                <InputMask
                  mask="___.___.___-__"
                  replacement={{ _: /\d/ }}
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formik.values.cpf}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={chekInputError('cpf') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
            <h3 className="margin-top">Dados de Entrega - conteúdo digital</h3>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="deliveryEmail">Email</label>
                <input
                  type="email"
                  id="deliveryEmail"
                  name="deliveryEmail"
                  value={formik.values.deliveryEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={chekInputError('deliveryEmail') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                <input
                  type="email"
                  id="confirmDeliveryEmail"
                  name="confirmDeliveryEmail"
                  value={formik.values.confirmDeliveryEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={chekInputError('confirmDeliveryEmail') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
          </Card>
          <Card title="Pagamento">
            <div>
              {payWithCard ? (
                <>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardOwner">Nome do titular do cartão</label>
                      <input
                        type="text"
                        id="cardOwner"
                        name="cardOwner"
                        value={formik.values.cardOwner}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={chekInputError('cardOwner') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
                      <InputMask
                        mask="___.___.___-__"
                        replacement={{ _: /\d/ }}
                        type="text"
                        id="cpfCardOwner"
                        name="cpfCardOwner"
                        value={formik.values.cpfCardOwner}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={chekInputError('cpfCardOwner') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row $marginTop="24px">
                    <S.InputGroup>
                      <label htmlFor="cardDisplayName">Nome impresso no cartão</label>
                      <input
                        type="text"
                        id="cardDisplayName"
                        name="cardDisplayName"
                        value={formik.values.cardDisplayName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={chekInputError('cardDisplayName') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        mask="____ ____ ____ ____"
                        replacement={{ _: /\d/ }}
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formik.values.cardNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={chekInputError('cardNumber') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup $maxWidth="123px">
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <InputMask
                        mask="__"
                        replacement={{ _: /\d/ }}
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={formik.values.expiresMonth}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={chekInputError('expiresMonth') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup $maxWidth="123px">
                      <label htmlFor="expiresYear">Ano do vencimento</label>
                      <InputMask
                        mask="____"
                        replacement={{ _: /\d/ }}
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={formik.values.expiresYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={chekInputError('expiresYear') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup $maxWidth="48px">
                      <label htmlFor="cardCvv">CVV</label>
                      <InputMask
                        mask="___"
                        replacement={{ _: /\d/ }}
                        type="text"
                        id="cardCvv"
                        name="cardCvv"
                        value={formik.values.cardCvv}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={chekInputError('cardCvv') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row $marginTop="24px">
                    <S.InputGroup $maxWidth="150px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        id="installments"
                        name="installments"
                        value={formik.values.installments}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {installments.map((installment) => (
                          <option key={installment.quantity} value={installment.quantity}>
                            {installment.quantity}x de {installment.formattedAmount}
                          </option>
                        ))}
                      </select>
                    </S.InputGroup>
                  </S.Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode
                  levar até 3 dias úteis, devido aos prazos estabelecidos pelas instituições
                  financeiras. Portanto, a liberação do código de ativação do jogo adquirido
                  ocorrerá somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </div>
          </Card>
          <Button title="Finalizar compra" onClick={formik.handleSubmit} $disabled={isLoading}>
            {isLoading ? 'Finalizando Compra...' : 'Finalizar compra'}
          </Button>
        </form>
      )}
    </MainContainer>
  )
}

export default Checkout
