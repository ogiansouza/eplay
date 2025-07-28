import { Breakpoints, colors } from '../../Styles'
import styled from 'styled-components'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${Breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 80px;

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    a {
      margin: 0 auto;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${Breakpoints.tablet}) {
    display: none;
  }
`
export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  @media (max-width: ${Breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
