import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  border-radius: 8px;
  background: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  border-radius: 8px;
  background: transparent;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
`
