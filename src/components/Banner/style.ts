import styled from 'styled-components'
import { TagsContainer } from '../Tags/style'

export const Image = styled.div`
  width: 100%;
  height: 560px;
  padding: 32px 0 56px 0;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagsContainer} {
    position: absolute;
    top: 0;
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
  font-size: 32px;
  max-width: 450px;
`

export const Price = styled.p`
  font-size: 24px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
