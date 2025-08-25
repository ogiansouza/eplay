import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { TagsContainer } from '../Tags/style'

export const Card = styled(Link)`
  position: relative;
  display: block;
  height: 100%;
  margin-bottom: 8px;
  padding: 8px 8px 16px 8px;
  border-radius: 8px;
  background-color: ${colors.gray};
  color: ${colors.white};
  text-decoration: none;

  img {
    display: bolock;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagsContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weiight: bold;
  margin: 16px 0 8px 0;
`

export const Description = styled.p`
  margin-top: 16px;
  font-size: 14px;
`

export const Infos = styled.div`
  top: 16px;
  right: 16px;
  position: absolute;
`
