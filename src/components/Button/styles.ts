import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.bege};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 84px;
  color: ${cores.vermelho};
`

export const ButtonLink = styled(Link)`
  color: ${cores.begeClaro};
  background-color: ${cores.vermelho};
  font-size: 14px;
  font-weigth: 700;
  padding: 4px 6px;
  text-decoration: none;
`
