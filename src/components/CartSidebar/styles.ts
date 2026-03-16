import styled from 'styled-components'

import { cores } from '../../styles'

export const CartOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: flex-end;
`

export const CartAside = styled.aside`
  width: 360px;
  min-height: 1005px;
  height: 100%;
  background-color: ${cores.vermelho};
`

export const CartContent = styled.div`
  padding-top: 32px;
  padding-bottom: 40px;
  padding-left: 8px;
  padding-right: 8px;
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartCard = styled.li`
  width: 344px;
  height: 100px;
  background-color: ${cores.vermelhoClaro};
  padding: 8px;
  display: flex;
  position: relative;
`

export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  display: block;
`

export const CartItemText = styled.div`
  margin-left: 8px;
`

export const CartItemTitle = styled.h3`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 900;
`

export const CartItemPrice = styled.p`
  margin-top: 16px;
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 400;
`

export const DeleteButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  border: none;
  background: transparent;
  color: ${cores.vermelho};
  cursor: pointer;
  line-height: 0;
`

export const CartTotal = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

export const CartTotalLabel = styled.span`
  color: ${cores.vermelhoClaro};
  font-size: 14px;
  font-weight: 700;
`

export const CartTotalValue = styled.span`
  color: ${cores.vermelhoClaro};
  font-size: 14px;
  font-weight: 700;
`

export const CartAction = styled.button`
  width: 344px;
  height: 24px;
  margin-top: 16px;
  border: none;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

export const FormTitle = styled.h2`
  color: ${cores.vermelhoClaro};
  font-size: 16px;
  font-weight: 700;
`

export const FormField = styled.div`
  margin-top: 16px;
`

export const FormLabel = styled.label`
  color: ${cores.vermelhoClaro};
  font-size: 14px;
  font-weight: 700;
  display: block;
`

export const FormInput = styled.input<{ $hasError?: boolean }>`
  margin-top: 8px;
  width: 100%;
  height: 32px;
  border: 1px solid ${(props) => (props.$hasError ? '#b00020' : 'transparent')};
  background-color: ${cores.vermelhoClaro};
  color: ${cores.cinza};
  font-size: 18px;
  font-weight: 700;
  padding: 0 8px;
  outline: none;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

export const FormActions = styled.div`
  margin-top: 24px;
`

export const SuccessText = styled.p`
  margin-top: 24px;
  color: ${cores.vermelhoClaro};
  font-size: 14px;
  line-height: 1.35;
`

export const FieldError = styled.small`
  display: block;
  margin-top: 4px;
  color: #ffe3e7;
  font-size: 11px;
  font-weight: 700;
`
