import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.tertiary};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`

export const SectionTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: ${({ theme }) => theme.quaternary};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
