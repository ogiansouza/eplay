import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  font-weight: bold;
  background-size: cover;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Preco = styled.p`
  font-size: 24px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
