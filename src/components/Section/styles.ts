import styled from 'styled-components'
import { Card } from '../Product/styles'
import type { SectionProps } from '.'

export const ProductListStyled = styled.section<SectionProps>`
  width: 100%;
  background-color: ${({ $background, theme }) =>
    $background === 'black' ? theme.secondary : theme.tertiary};
  padding: 32px 0;
  ${Card} {
    background-color: ${({ $background, theme }) =>
      $background === 'black' ? theme.tertiary : theme.secondary};
  }
  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  list-style: none;
  margin-top: 40px;
`
