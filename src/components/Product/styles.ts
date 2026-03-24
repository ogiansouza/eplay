import styled from 'styled-components'
import { TagStyled } from '@/components/Tag/styles'

export const Card = styled.div<{ $background: 'black' | 'gray' }>`
  background-color: ${({ $background, theme }) =>
    $background === 'black' ? theme.primary : theme.secondary};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  display: block;
  > a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagStyled} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Description = styled.p<{ $background: 'black' | 'gray' }>`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
