import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.vermelhoClaro};
  font-size: ${(props) => (props.size === 'small' ? '12px' : '16px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'small' ? '4px 6px' : '8px 16px')};
  display: inline-block;
`
