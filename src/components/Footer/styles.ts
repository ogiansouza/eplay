import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
width: 100%
heigth: 298px;
background-color: ${cores.corTexto};
color: ${cores.rosaEscuro};
display: block;
justify-content: center;

  div {
    text-align: center;
    padding-top: 32px;
  }

  img {
    margin-right: 8px;
  }
`

export const Logo = styled.img`
  margin-top: 40px;
  align-items: center;
`

export const Descricao = styled.p`
  padding-top: 80px;
  padding-bottom: 40px;
  text-align: center;
  weight: 400;
  font-size: 10px;
  line-height: 11.72px;
`
