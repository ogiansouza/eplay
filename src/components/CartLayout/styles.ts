import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CartContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: ${cores.pretoTrans};
`
export const Sidebar = styled.aside`
  background-color: ${cores.fonte};
  color: ${cores.fundo};
  padding: 40px 16px 0 16px;
  z-index: 1;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    display: block;
    max-width: 100%;
    width: 100%;
    background-color: ${cores.fundo};
    color: ${cores.fonte};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin: 0;
    margin-bottom: 8px;
  }

  .paragrafos {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
  }
`
