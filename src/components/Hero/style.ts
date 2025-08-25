import styled from 'styled-components'
import { colors } from '../../styles'
import { TagsContainer } from '../Tags/style'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    ${TagsContainer} {
      margin-right: 8px;
    }
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  font-weight: 700;
  max-width: 290px;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
