import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

import { useCart } from '../../contexts/CartContext'
import {
  CartAction,
  CartAside,
  CartCard,
  CartContent,
  CartImage,
  CartItemPrice,
  CartItemText,
  CartItemTitle,
  CartList,
  CartOverlay,
  CartTotal,
  CartTotalLabel,
  CartTotalValue,
  DeleteButton,
  FieldError,
  FormActions,
  FormField,
  FormGrid,
  FormInput,
  FormLabel,
  FormTitle,
  SuccessText
} from './styles'

const toCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

type DeliveryForm = {
  receiver: string
  address: string
  city: string
  zip: string
  number: string
  complement: string
}

type PaymentForm = {
  cardName: string
  cardNumber: string
  cvv: string
  expMonth: string
  expYear: string
}

const initialDelivery: DeliveryForm = {
  receiver: '',
  address: '',
  city: '',
  zip: '',
  number: '',
  complement: ''
}

const initialPayment: PaymentForm = {
  cardName: '',
  cardNumber: '',
  cvv: '',
  expMonth: '',
  expYear: ''
}

const onlyDigits = (value: string) => value.replace(/\D/g, '')

const CartSidebar = () => {
  const { clearCart, closeCart, isOpen, items, removeItem, totalPrice } =
    useCart()
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>(
    'cart'
  )
  const [orderId, setOrderId] = useState<number | null>(null)
  const [delivery, setDelivery] = useState<DeliveryForm>(initialDelivery)
  const [payment, setPayment] = useState<PaymentForm>(initialPayment)
  const [deliveryErrors, setDeliveryErrors] = useState<Record<string, string>>(
    {}
  )
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!isOpen) {
      setStep('cart')
      setOrderId(null)
      setDelivery(initialDelivery)
      setPayment(initialPayment)
      setDeliveryErrors({})
      setPaymentErrors({})
    }
  }, [isOpen])

  const finishOrder = () => {
    clearCart()
    closeCart()
  }

  const changeDelivery =
    (field: keyof DeliveryForm) => (event: ChangeEvent<HTMLInputElement>) => {
      setDelivery((state) => ({ ...state, [field]: event.target.value }))
    }

  const changeDeliveryDigits =
    (field: keyof DeliveryForm, max: number) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setDelivery((state) => ({
        ...state,
        [field]: onlyDigits(event.target.value).slice(0, max)
      }))
    }

  const changePayment =
    (field: keyof PaymentForm) => (event: ChangeEvent<HTMLInputElement>) => {
      setPayment((state) => ({ ...state, [field]: event.target.value }))
    }

  const changePaymentDigits =
    (field: keyof PaymentForm, max: number) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setPayment((state) => ({
        ...state,
        [field]: onlyDigits(event.target.value).slice(0, max)
      }))
    }

  const validateDelivery = () => {
    const errors: Record<string, string> = {}

    if (!delivery.receiver.trim()) errors.receiver = 'Informe quem vai receber'
    if (!delivery.address.trim()) errors.address = 'Informe o endereco'
    if (!delivery.city.trim()) errors.city = 'Informe a cidade'

    if (!delivery.zip.trim()) {
      errors.zip = 'Informe o CEP'
    } else if (onlyDigits(delivery.zip).length !== 8) {
      errors.zip = 'CEP deve ter 8 digitos'
    }

    if (!delivery.number.trim()) {
      errors.number = 'Informe o numero'
    } else if (!/^\d+$/.test(delivery.number.trim())) {
      errors.number = 'Numero invalido'
    }

    setDeliveryErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validatePayment = () => {
    const errors: Record<string, string> = {}

    if (!payment.cardName.trim()) errors.cardName = 'Informe o nome no cartao'

    const cardDigits = onlyDigits(payment.cardNumber)
    if (!cardDigits) {
      errors.cardNumber = 'Informe o numero do cartao'
    } else if (cardDigits.length < 13 || cardDigits.length > 19) {
      errors.cardNumber = 'Cartao invalido'
    }

    const cvvDigits = onlyDigits(payment.cvv)
    if (!cvvDigits) {
      errors.cvv = 'Informe o CVV'
    } else if (cvvDigits.length < 3 || cvvDigits.length > 4) {
      errors.cvv = 'CVV invalido'
    }

    const month = Number(onlyDigits(payment.expMonth))
    if (!payment.expMonth.trim()) {
      errors.expMonth = 'Informe o mes'
    } else if (!Number.isInteger(month) || month < 1 || month > 12) {
      errors.expMonth = 'Mes invalido'
    }

    const year = Number(onlyDigits(payment.expYear))
    const currentYear = new Date().getFullYear() % 100
    if (!payment.expYear.trim()) {
      errors.expYear = 'Informe o ano'
    } else if (
      !Number.isInteger(year) ||
      year < currentYear ||
      year > currentYear + 20
    ) {
      errors.expYear = 'Ano invalido'
    }

    setPaymentErrors(errors)
    return Object.keys(errors).length === 0
  }

  if (!isOpen) {
    return null
  }

  return (
    <CartOverlay onClick={closeCart}>
      <CartAside
        onClick={(event: MouseEvent<HTMLElement>) => event.stopPropagation()}
      >
        <CartContent>
          {step === 'cart' ? (
            <>
              <CartList>
                {items.map((item) => (
                  <CartCard key={item.id}>
                    <CartImage src={item.image} alt={item.title} />
                    <CartItemText>
                      <CartItemTitle>{item.title}</CartItemTitle>
                      <CartItemPrice>{toCurrency(item.price)}</CartItemPrice>
                    </CartItemText>
                    <DeleteButton
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remover item"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 6H21M8 6V4H16V6M7 6V20H17V6M10 10V17M14 10V17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </DeleteButton>
                  </CartCard>
                ))}
              </CartList>

              <CartTotal>
                <CartTotalLabel>Valor total</CartTotalLabel>
                <CartTotalValue>{toCurrency(totalPrice)}</CartTotalValue>
              </CartTotal>

              <CartAction type="button" onClick={() => setStep('delivery')}>
                Continuar com a entrega
              </CartAction>
            </>
          ) : step === 'delivery' ? (
            <>
              <FormTitle>Entrega</FormTitle>

              <FormField>
                <FormLabel>Quem ira receber</FormLabel>
                <FormInput
                  value={delivery.receiver}
                  onChange={changeDelivery('receiver')}
                  $hasError={!!deliveryErrors.receiver}
                  placeholder="Ex: Joao Paulo de Souza"
                />
                {deliveryErrors.receiver && (
                  <FieldError>{deliveryErrors.receiver}</FieldError>
                )}
              </FormField>

              <FormField>
                <FormLabel>Endereco</FormLabel>
                <FormInput
                  value={delivery.address}
                  onChange={changeDelivery('address')}
                  $hasError={!!deliveryErrors.address}
                  placeholder="Ex: Rua das Flores, 123"
                />
                {deliveryErrors.address && (
                  <FieldError>{deliveryErrors.address}</FieldError>
                )}
              </FormField>

              <FormField>
                <FormLabel>Cidade</FormLabel>
                <FormInput
                  value={delivery.city}
                  onChange={changeDelivery('city')}
                  $hasError={!!deliveryErrors.city}
                  placeholder="Ex: Sao Paulo"
                />
                {deliveryErrors.city && (
                  <FieldError>{deliveryErrors.city}</FieldError>
                )}
              </FormField>

              <FormGrid>
                <FormField>
                  <FormLabel>CEP</FormLabel>
                  <FormInput
                    value={delivery.zip}
                    onChange={changeDeliveryDigits('zip', 8)}
                    $hasError={!!deliveryErrors.zip}
                    placeholder="00000000"
                  />
                  {deliveryErrors.zip && (
                    <FieldError>{deliveryErrors.zip}</FieldError>
                  )}
                </FormField>
                <FormField>
                  <FormLabel>Numero</FormLabel>
                  <FormInput
                    value={delivery.number}
                    onChange={changeDeliveryDigits('number', 10)}
                    $hasError={!!deliveryErrors.number}
                    placeholder="123"
                  />
                  {deliveryErrors.number && (
                    <FieldError>{deliveryErrors.number}</FieldError>
                  )}
                </FormField>
              </FormGrid>

              <FormField>
                <FormLabel>Complemento (opcional)</FormLabel>
                <FormInput
                  value={delivery.complement}
                  onChange={changeDelivery('complement')}
                  placeholder="Apto, bloco, referencia"
                />
              </FormField>

              <FormActions>
                <CartAction
                  type="button"
                  onClick={() => {
                    if (validateDelivery()) {
                      setStep('payment')
                    }
                  }}
                >
                  Continuar com o pagamento
                </CartAction>
                <CartAction type="button" onClick={() => setStep('cart')}>
                  Voltar para o carrinho
                </CartAction>
              </FormActions>
            </>
          ) : step === 'payment' ? (
            <>
              <FormTitle>
                Pagamento - Valor a pagar {toCurrency(totalPrice)}
              </FormTitle>

              <FormField>
                <FormLabel>Nome no cartao</FormLabel>
                <FormInput
                  value={payment.cardName}
                  onChange={changePayment('cardName')}
                  $hasError={!!paymentErrors.cardName}
                  placeholder="Como esta no cartao"
                />
                {paymentErrors.cardName && (
                  <FieldError>{paymentErrors.cardName}</FieldError>
                )}
              </FormField>

              <FormGrid>
                <FormField>
                  <FormLabel>Numero do cartao</FormLabel>
                  <FormInput
                    value={payment.cardNumber}
                    onChange={changePaymentDigits('cardNumber', 19)}
                    $hasError={!!paymentErrors.cardNumber}
                    placeholder="0000 0000 0000 0000"
                  />
                  {paymentErrors.cardNumber && (
                    <FieldError>{paymentErrors.cardNumber}</FieldError>
                  )}
                </FormField>
                <FormField>
                  <FormLabel>CVV</FormLabel>
                  <FormInput
                    value={payment.cvv}
                    onChange={changePaymentDigits('cvv', 4)}
                    $hasError={!!paymentErrors.cvv}
                    placeholder="123"
                  />
                  {paymentErrors.cvv && (
                    <FieldError>{paymentErrors.cvv}</FieldError>
                  )}
                </FormField>
              </FormGrid>

              <FormGrid>
                <FormField>
                  <FormLabel>Mes de vencimento</FormLabel>
                  <FormInput
                    value={payment.expMonth}
                    onChange={changePaymentDigits('expMonth', 2)}
                    $hasError={!!paymentErrors.expMonth}
                    placeholder="MM"
                  />
                  {paymentErrors.expMonth && (
                    <FieldError>{paymentErrors.expMonth}</FieldError>
                  )}
                </FormField>
                <FormField>
                  <FormLabel>Ano de vencimento</FormLabel>
                  <FormInput
                    value={payment.expYear}
                    onChange={changePaymentDigits('expYear', 2)}
                    $hasError={!!paymentErrors.expYear}
                    placeholder="AA"
                  />
                  {paymentErrors.expYear && (
                    <FieldError>{paymentErrors.expYear}</FieldError>
                  )}
                </FormField>
              </FormGrid>

              <FormActions>
                <CartAction
                  type="button"
                  onClick={() => {
                    if (validatePayment()) {
                      setOrderId(Math.floor(100000 + Math.random() * 900000))
                      setStep('success')
                    }
                  }}
                >
                  Finalizar pagamento
                </CartAction>
                <CartAction type="button" onClick={() => setStep('delivery')}>
                  Voltar para a edicao de endereco
                </CartAction>
              </FormActions>
            </>
          ) : (
            <>
              <FormTitle>Pedido realizado - Pedido #{orderId ?? 0}</FormTitle>

              <SuccessText>
                Estamos felizes em informar que seu pedido ja esta em processo
                de preparacao e, em breve, sera entregue no endereco fornecido.
              </SuccessText>
              <SuccessText>
                Gostariamos de ressaltar que nossos entregadores nao estao
                autorizados a realizar cobrancas extras.
              </SuccessText>
              <SuccessText>
                Lembre-se da importancia de higienizar as maos apos o
                recebimento do pedido, garantindo assim sua seguranca e
                bem-estar durante a refeicao.
              </SuccessText>
              <SuccessText>
                Esperamos que desfrute de uma deliciosa e agradavel experiencia
                gastronomica. Bom apetite!
              </SuccessText>

              <FormActions>
                <CartAction type="button" onClick={finishOrder}>
                  Concluir
                </CartAction>
              </FormActions>
            </>
          )}
        </CartContent>
      </CartAside>
    </CartOverlay>
  )
}

export default CartSidebar
