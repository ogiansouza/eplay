import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'
import { BtnLinkSecundario } from '../Button/styles'
import { Container } from '../ProductList/styles'

export const BgHero = styled.header<Props>`
  width: 100%;
  height: 186px;
  align-items: center;

  ${Container} {
    padding-top: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${BtnLinkSecundario} {
    font-size: 18px;
    font-weight: 900;
    background-color: transparent;
    display: flex;
    width: auto;
  }
`

// verificar alinhamento da img
export const Logo = styled.img`
  display: flex;
  align-items: center;
`

// verificar - não ficou exato a posição
export const BgBanner = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const BgOpacity = styled.div`
  width: 100%;
  height: 280px;
  background: rgba(0, 0, 0, 0.5);
`

export const Infos = styled.h2<Props>`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: ${(props) => (props.weight === 'big' ? '700' : '100')};
  line-height: 37.5px;
  padding-top: 25px;
  padding-bottom: 124px;
`
