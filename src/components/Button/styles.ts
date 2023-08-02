import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonCard = styled.button`
  background-color: ${cores.rosaEscuro};
  color: ${cores.corTexto};
  font-size: 14px;
  padding: 4px 6px;
  margin: 8px;
  border: none;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.rosaEscuro};
  color: ${cores.corTexto};
  font-size: 14px;
  padding: 4px 6px;
  text-decoration: none;
  margin: 8px;
`

export const BtnLinkSecundario = styled(ButtonLink)`
  background-color: ${cores.corTexto};
  color: ${cores.rosaEscuro};
  font-size: 14px;
  padding: 4px 6px;
  text-decoration: none;
  margin: 8px;
  width: 304px;
  font-weight: 700;
`
