import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  width: 472px;
  border: 1px solid ${cores.vermelho};
  color: ${cores.vermelho};
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Content = styled.div`
  padding: 8px;
  position: relative;
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`
export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`
export const Nota = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 700;

  img {
    width: 21px;
    height: 21px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
