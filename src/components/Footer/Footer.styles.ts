import styled from 'styled-components'
import { colors } from '../../Styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${colors.gray};
  font-size: 14px;
  padding: 32px 0;
  margin-top: 40px;
`
export const SectionTitle = styled.h4`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const StyledLink = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
