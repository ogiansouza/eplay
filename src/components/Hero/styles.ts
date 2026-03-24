import styled from 'styled-components'
import { TagStyled } from '../Tag/styles'
import { breakpoints } from '@/styles/global'

export const Banner = styled.div`
  display: block;
  position: relative;
  padding: 2%;
  width: 100%;
  height: 480px;
  padding-top: 16px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: ${breakpoints.smScreen}) {
    background-size: cover;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1A1625;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.56;
  }
  ${TagStyled} {
    margin-right: 16px;
  }
  > div {
    position: relative;
    z-index: 1;
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    gap: 16px;
  }
`
export const Infos = styled.div`
  padding: 16px;
  max-width: 290px;
  background-color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  font-size: 18px;
  h2 {
    font-size: 32px;
  }
  p {
    margin: 16px 0;
    span {
      text-decoration: line-through;
    }
  }
`
