import styled from 'styled-components'

import Bg from '../../assets/images/bg-header.svg'

export const HeaderBar = styled.header`
  padding: 42px;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;
  height: max-content;
`

export const ImgLogo = styled.img`
  max-width: 125px;
  margin-bottom: 128px;
`

export const Titulo = styled.h2`
  text-align: center;
`
