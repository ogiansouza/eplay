import styled from 'styled-components'
import { Colors } from '../../styles'

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Itens = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const Item = styled.li`
  position: relative;
  cursor: zoom-in;

  > img {
    border: 2px solid ${Colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  display: none;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      height: 16px;
      width: 16px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
        transition: opacity 0.5s ease;
        transform: scale(1.2);
      }
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

  .iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Aspect ratio of 16:9 */

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`
