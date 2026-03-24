import LogoSvg from '@/assets/images/logo.svg?react'
import styled from 'styled-components'

export const EplayLogo = styled(LogoSvg)`
  width: 40px;
  height: auto;
  path {
    fill: ${({ theme }) => theme.primary};
  }
`
