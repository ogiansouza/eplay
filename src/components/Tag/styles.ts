import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline;
  background-color: ${cores.rosaEscuro};
  color: ${cores.bege};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  line-height: 15px;
  align-text: center;
  padding: 5px;
  margin: 5px;
`
