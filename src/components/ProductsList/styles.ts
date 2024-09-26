import styled from 'styled-components'
import { Props } from './index'
import { Colors, breackpoints } from '../../styles'
import { Card } from '../Product/styles'

export const Section = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  background-color: ${(props) =>
    props.background === 'black' ? Colors.black : Colors.gray};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.gray : Colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breackpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breackpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
