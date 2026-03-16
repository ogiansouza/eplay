import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 80px 0px 120px 0px;
  background-color: ${cores.pessegoClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-family: bold;
`
