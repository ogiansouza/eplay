import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import fechar from '../../assets/images/fechar.png'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`
export const CartCOntainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-opne {
    display: flex;
  }
`
export const SideBAr = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const Price = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    color: ${cores.branca};
    font-weight: bold;
  }
  span {
    display: block;
    font-size: 14px;
    color: ${cores.branca};
    font-weight: bold;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
  }
`
