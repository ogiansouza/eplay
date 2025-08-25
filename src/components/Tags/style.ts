import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagsContainer = styled.div<Props>`
  background-color: ${colors.green};
  color: ${colors.white};
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  display: inline-block;
`
