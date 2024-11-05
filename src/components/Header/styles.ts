import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  a {
    color: ${cores.vermelho};
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    margin-top: 83px;
    margin-bottom: 83px;
  }

  div {
    display: flex;
    align-items: center;
    img {
      margin-top: 65px;
      margin-bottom: 65px;
      margin-left: 341px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
`

export const LinkCart = styled.a`
  display: flex;
  margin-left: 193px;
`
