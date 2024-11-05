import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import Avaliacao from '../Avaliacao'
import Button from '../Button'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  color: ${cores.vermelho};
  border-right: 1px solid ${cores.vermelho};
  border-bottom: 1px solid ${cores.vermelho};
  border-left: 1px solid ${cores.vermelho};
  padding-bottom: 8px;
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 217px;
  }
  ${TagContainer} {
    margin-right: 8px;
  }
  ${ButtonLink} {
    margin-bottom: 8px;
  }
`

export const CardSection = styled.div`
  margin-left: 8px;
  position: relative;
`
export const TitleCard = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: block;
  padding-top: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  padding: 16px 8px 16px 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const Rate = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`
