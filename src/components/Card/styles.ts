import styled from 'styled-components'
import { colors } from '../../Styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.gray};
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }
  p {
    font-size: 14x;
    line-height: 22px;
  }
`
