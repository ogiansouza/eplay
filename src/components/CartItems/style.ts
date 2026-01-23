import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const InfoCard = styled.div`
  ${ButtonContainer} {
    display: block;
    max-width: 100%;
    width: 100%;
    background-color: ${cores.fundo};
    color: ${cores.fonte};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin: 0;
    margin-bottom: 8px;
    height: 24px;
  }

  .paragrafos {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
  }
`
export const CartProduto = styled.li`
  background: ${cores.fundo};
  color: ${cores.fonte};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    object-position: center;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 14px;
    font-style: normal;
  }

  img:last-of-type {
    float: right;
  }

  div:last-of-type {
    flex: 1;
  }

  button {
    background: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.fundo3};
  text-align: center;
`
