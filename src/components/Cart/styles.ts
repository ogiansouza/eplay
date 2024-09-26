import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContain } from '../Tag/styles'
import { ButtonContain } from '../Button/styles'

import fechar from '../../images/fechar.png'

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
  display: none;
  justify-content: flex-end;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  max-width: 360px;
  width: 100%;
  background-color: ${Colors.gray};
  padding: 40px 16px 0px 16px;

  ${ButtonContain} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Colors.lightGray};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  border-bottom: 1px solid ${Colors.lightGray};
  padding: 8px 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  div {
    h3 {
      color: ${Colors.white};
      font-weight: bold;
      font-size: 16px;
    }

    span {
      display: block;
      color: ${Colors.white};
      font-weight: bold;
      font-size: 14px;
    }

    ${TagContain} {
      margin: 8px 8px 16px 0;
    }
  }

  button {
    position: absolute;
    top: 8;
    right: 0;
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
  }
`

export const Empty = styled.p`
  color: ${Colors.white};
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  text-align: center;
  margin-top: 32px;
`
