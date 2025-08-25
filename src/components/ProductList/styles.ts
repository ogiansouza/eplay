import styled from 'styled-components'

import { Props } from '.'
import { breakpoint, colors } from '../../styles'
import { Card } from '../Product/style'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding-bottom: 32px;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  gap: 40px 24px;

  @media only screen and (min-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const Title = styled.h2`
  margin-bottom: 40px;
`
