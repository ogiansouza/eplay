import styled from 'styled-components'
import { cores } from '../../styles'

export const Head = styled.div`
  width: 100%;
  height: 186px;

  .container {
    display: flex;
    justify-content: space-between;

    .CartItem {
      padding-top: 80px;
    }
  }

  img {
    margin-top: 64px;
    margin-left: 90px;
  }
`
export const Links = styled.h3`
  margin-top: 82px;
  font-size: 18px;
  color: ${cores.fonte};
`
export const LinkCart = styled.span`
  margin-top: 82px;
  font-weight: bold;
  font-size: 18px;
  color: ${cores.fonte};
  cursor: pointer;
`
