import styled from 'styled-components'

import { cores } from '../../styles'

export const ListSection = styled.section`
  padding-top: 52px;
  padding-bottom: 40px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 42px;
  row-gap: 32px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const MenuCard = styled.li`
  background-color: ${cores.vermelho};
  padding: 8px;
  cursor: pointer;
`

export const MenuImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
`

export const MenuTitle = styled.h3`
  margin-top: 8px;
  color: ${cores.vermelhoClaro};
  font-size: 16px;
  font-weight: 700;
`

export const MenuDescription = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${cores.vermelhoClaro};
  font-size: 14px;
  line-height: 22px;
`

export const MenuButton = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding: 16px;
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${cores.vermelho};
  display: flex;
  gap: 24px;
  position: relative;

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background: transparent;
  color: ${cores.branca};
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;
`

export const ModalText = styled.div`
  flex: 1;
  color: ${cores.branca};
`

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
`

export const ModalDescription = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`

export const ModalServing = styled.p`
  margin-top: 24px;
  font-size: 14px;
  line-height: 22px;
`

export const ModalAction = styled.button`
  margin-top: 16px;
  border: none;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.vermelho};
  height: 24px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
