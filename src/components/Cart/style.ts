import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/style'
import { TagsContainer } from '../Tags/style'

import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: end;

  &.isOpen {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  padding: 40px 16px;
  background-color: ${colors.gray};
  height: 100%;
  width: 360px;
  z-index: 1;

  ${ButtonContainer} {
    width: 100%;
    margin-top: 24px;
  }
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightgray};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    margin-right: 23px;
    object-fit: cover;
  }

  ${TagsContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
export const Quantity = styled.p`
  margin: 32px 0 16px 0;
  font-size: 16px;
`

export const Prices = styled.p`
  font-size: 14px;
  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightgray};
  }
`
