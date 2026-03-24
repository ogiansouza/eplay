import styled from 'styled-components'
import { TagStyled } from '@/components/Tag/styles'
import { MainContainer } from '@/styles/global'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-size: cover;
  background-position: 100% 35%;
  background-repeat: no-repeat;
  font-weight: bold;
  position: relative;
  ${MainContainer} {
    position: relative;
    padding-top: 340px;
    padding-left: 2%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }
  ${TagStyled} {
    position: absolute;
    top: 32px;
    left: 2%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) =>
      theme.primary === '#E8E4F0' ? theme.secondary : theme.tertiary};
    opacity: 0.7;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
  color: ${({ theme }) => theme.primary};
`
export const Prices = styled.p`
  font-size: 24px;
  max-width: 450px;
  margin-top: 24px;
  color: ${({ theme }) => theme.primary};
  span {
    text-decoration: line-through;
  }
`
