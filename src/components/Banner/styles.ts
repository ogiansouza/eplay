import styled from 'styled-components'
import { TagContain } from '../Tag/styles'

export const Contain = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 560px;

  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContain} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Price = styled.p`
  font-size: 24px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
