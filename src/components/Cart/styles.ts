import styled from 'styled-components'
import { TagStyled } from '../Tag/styles'
import { ButtonStyled } from '../Button/styles'
export const Overlay = styled.div`
  position: absolute;
  top: auto;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: none;
  justify-content: flex-end;
  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  width: 100%;
  max-width: 360px;
  background-color: ${({ theme }) => theme.tertiary};
  z-index: 1000;
  padding: 40px 16px 0 16px;
  ${ButtonStyled} {
    max-width: 100%;
    width: 100%;
  }
  .empty-text {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
    text-align: center;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 24px;
  span {
    display: block;
    font-size: 12px;
    color: ${({ theme }) => theme.quaternary};
  }
`
export const Quantity = styled(Prices)`
  font-size: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.quaternary};
  padding: 8px 0;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    font-weight: bold;
    font-size: 16px;
  }
  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }
  ${TagStyled} {
    margin: 8px 8px 16px 0;
  }
  svg {
    position: absolute;
    top: 8px;
    right: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`
