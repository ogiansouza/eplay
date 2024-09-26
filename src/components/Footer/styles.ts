import styled from 'styled-components'
import { Colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Footer = styled.footer`
  background-color: ${Colors.gray};
  padding: 22px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const SectionFooter = styled.div`
  margin-bottom: 64px;
`

export const SectionTitle = styled.h4`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const ListLinks = styled.ul`
  display: flex;
`
export const Link = styled(HashLink)`
  color: ${Colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`
