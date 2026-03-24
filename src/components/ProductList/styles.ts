import styled from 'styled-components'
import { Card } from '../Product/styles'
import { breakpoints } from '@/styles/global'

export const ProductListStyled = styled.section<{ $background: 'black' | 'gray' }>`
  width: 100%;
  background-color: ${({ $background, theme }) =>
    $background === 'black' ? theme.secondary : theme.tertiary};
  padding: 32px 0;
  ${Card} {
    background-color: ${({ $background, theme }) =>
      $background === 'black' ? theme.tertiary : theme.secondary};
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  list-style: none;
  margin-top: 40px;
  @media (max-width: ${breakpoints.smScreen}) {
    grid-template-columns: 1fr;
  }
`
