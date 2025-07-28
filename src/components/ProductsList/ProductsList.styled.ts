import styled from 'styled-components'

import { Props } from './index'
import { Breakpoints, colors } from '../../Styles'
import { Card } from '../Product/Product.styled'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`
