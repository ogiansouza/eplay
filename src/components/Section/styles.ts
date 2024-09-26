import styled from 'styled-components'

import { Props } from './index'
import { Colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  background-color: ${(props) =>
    props.background === 'black' ? Colors.black : Colors.gray};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.gray : Colors.black};
  }

  p {
    line-height: 22px;
    font-size: 14px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
