import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContain } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  position: relative;
  background-color: ${Colors.gray};
  border-radius: 8px;
  padding: 8px;
  text-decoration: none;
  color: ${Colors.white};
  display: block;
  height: 100%;

  ${TagContain} {
    margin-right: 8px;
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  display: block;
  margin-top: 16px;
  line-height: 22px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
