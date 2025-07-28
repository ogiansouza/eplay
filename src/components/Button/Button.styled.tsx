import styled from 'styled-components'
import { colors } from '../../Styles'
import { Link } from 'react-router-dom'
import { Props } from './index'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  cursor: pointer;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  border: 2px solid;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: ${colors.white};
  background-color: transparent;
  text-decoration: none;
`
