import styled from 'styled-components'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const ContainerFooter = styled.footer`
  background-color: ${colors.gray};
  font-size: 14px;
  padding-bottom: 32px;
  margin-top: 40px;
`

export const SectionFooter = styled.section`
  margin-bottom: 64px;
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const Link = styled(HashLink)`
  color: ${colors.lightgray};
  margin-right: 8px;
`
