import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosaEscuro};
  color: ${cores.corTexto};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  margin-right: 8px;
  padding: ${(props) => (props.size === 'big' ? '6px 4px' : '4px 6px')};
`
