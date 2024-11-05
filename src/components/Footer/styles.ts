import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  height: 298px;
  margin-top: 72px;

  p {
    text-align: center;
    line-height: 12px;
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`

export const SectionLogo = styled.div`
  margin-left: 450px;

  img {
    margin-top: 40px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: 18px;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const Link = styled.a`
  margin-right: 8px;
`
