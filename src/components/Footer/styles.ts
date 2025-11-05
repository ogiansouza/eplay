import styled from 'styled-components'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${colors.gray};
  color: ${colors.lightgray};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`

export const LinkItem = styled(HashLink)`
  color: ${colors.lightgray};
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
