import styled from 'styled-components'
import { Colors, breackpoints } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breackpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`
export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breackpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0px;
      text-align: center;
    }
  }
`

export const HeaderBar = styled.header`
  background-color: ${Colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  h1 {
    line-height: 0;
  }

  a,
  span {
    color: ${Colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    @media (max-width: ${breackpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
export const CartButton = styled.span`
  display: flex;
  cursor: pointer;
  img {
    margin-left: 16px;
  }
  @media (max-width: ${breackpoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  display: none;
  width: 32px;

  @media (max-width: ${breackpoints.tablet}) {
    display: block;

    span {
      margin-bottom: 4px;
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${Colors.white};
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`
