import styled from 'styled-components'
import { cores } from '../../styles'
import { BtnLinkSecundario } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
`

export const CardBorder = styled.div`
  border: 1px solid ${cores.rosaEscuro};
  padding-bottom: 14px;
  margin-top: -8px;
`

export const CardPerfil = styled.div`
  background-color: ${cores.rosaEscuro};
  padding-bottom: 14px;
  position: relative;

  img {
    padding: 8px;
  }

  ${BtnLinkSecundario} {
    width: 304px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px
  color: ${cores.rosaEscuro};
  font-weight: bold;
  margin-top: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 8px;
  }
`
export const TituloPerfil = styled.h3`
  font-size: 16px;
  color: ${cores.branca};
  weight: 900;
  padding: 8px;
  line-weight: 22px;
`

export const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
  padding-bottom: 16px;
`

export const DescricaoPerfil = styled.p`
  color: ${cores.branca};
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  padding-rigth: 8px;
`
