import { Link } from 'react-router-dom'
import styled from 'styled-components'
import type { ButtonProps } from '.'

export const ButtonStyled = styled.button<ButtonProps>`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  background-color: ${({ $variant, theme }) =>
    $variant === 'primary' ? theme.quinary : 'transparent'};
  border: 2px solid
    ${({ $variant, theme }) => ($variant === 'primary' ? theme.quaternary : theme.primary)};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ $variant, theme }) =>
      $variant === 'primary' ? 'transparent' : theme.secondary};
  }
  &.disable-hover {
    background-color: ${({ $variant, theme }) =>
      $variant === 'primary' ? theme.quinary : 'transparent'};
  }
  &:hover {
    background-color: '';
  }
`
export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
  }
`
