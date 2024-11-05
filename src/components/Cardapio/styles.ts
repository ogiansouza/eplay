import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  max-width: 1024px;
  width: 100%;
  height: 344px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  header {
    img {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
  > img {
    width: 280px;
    height: 280px;
    margin: 32px 24px 32px 32px;
    object-fit: cover;
  }
`
export const Description = styled.div`
  margin-right: 32px;
  h4 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.branca};
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: ${cores.branca};
    line-height: 22px;
  }
  ${ButtonContainer} {
    padding: 4px 7px;
    margin-top: 16px;
  }
`
