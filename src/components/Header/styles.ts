import { breakpoints } from '@/styles/global'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoLink = styled(Link)`
  @media (max-width: ${breakpoints.lgScreen}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const DesktopLinks = styled(Links)`
  @media (max-width: ${breakpoints.lgScreen}) {
    display: none;
  }
  @media (max-width: ${breakpoints.smScreen}) {
    font-size: 12px;
    margin-left: 20px;
  }
`

export const MobileLinks = styled(Links)`
  display: none;
  margin-left: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  @media (max-width: ${breakpoints.lgScreen}) {
    font-size: 14px;
    margin-top: 16px;
    &.is-open {
      display: block;
    }
  }

  li a {
    @media (max-width: ${breakpoints.lgScreen}) {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const HeaderBar = styled.header`
  position: fixed;
  top: 16px;
  left: 50%;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  z-index: 888;
  transform: translate(-50%);
  background-color: ${({ theme }) => theme.tertiary};
  border: 1px solid ${({ theme }) => theme.primary};
  @media (max-width: ${breakpoints.lgScreen}) {
    width: 80%;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakpoints.lgScreen}) {
    position: relative;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  & a {
    text-decoration: none;
    font-weight: bold;
  }
  @media (max-width: ${breakpoints.lgScreen}) {
    margin-right: 0;
  }
`
export const CartButton = styled.span`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.primary === '#1A1625' ? theme.primary:theme.secondary};
  background-color: ${({ theme }) => theme.quinary};
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: ${breakpoints.lgScreen}) {
    padding-top: 8px;
    span {
      display: none;
    }
  }

  svg {
    display: flex;
    margin-left: 16px;
  }
  *{
    color: ${({ theme }) => theme.primary === '#1A1625' ? theme.primary:theme.secondary};
  }
`
export const HamburgerMenu = styled.div`
  display: none;
  box-sizing: border-box;
  width: 40px;
  min-width: 40px;
  flex-shrink: 0;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  span {
    display: block;
    height: 2px;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.primary};
  }
  @media (max-width: ${breakpoints.lgScreen}) {
    display: flex;
  }
`
