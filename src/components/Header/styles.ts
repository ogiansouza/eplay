import styled from 'styled-components'
import { cores } from '../../styles'

export const BgHero = styled.header`
  width: 100%;
  height: 384px;
  display: flex;
  justify-content: center;

  div {
    text-align: center;
  }
`

// verificar alinhamento da img
export const Logo = styled.img`
  margin-top: 40px;
  margin-bottom: 134px;
  align-items: center;
`

export const H1 = styled.h1`
  color: ${cores.rosaEscuro};
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
`
