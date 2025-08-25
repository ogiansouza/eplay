import styled from 'styled-components'
import { colors } from '../../styles'

export const Items = styled.ul`
  @media only screen and (min-width: 600px) {
    display: flex;
  }
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease;
  cursor: zoom-in;
`

export const Item = styled.li`
  position: relative;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  width: 100%;
  height: 300px;

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 150px;
    height: 150px;
    margin-right: 16px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  height: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.73);
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  max-width: 960px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 700;

    > img {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 450px;
  }
`
