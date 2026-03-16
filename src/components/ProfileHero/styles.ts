import styled from 'styled-components'

import apresentacao from '../../assets/apresentacao.png'
import { cores } from '../../styles'

export const HeroContainer = styled.section`
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${apresentacao});
  background-size: cover;
  background-position: center;
  color: ${cores.branca};

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 32px;
  }
`

export const HeroCuisine = styled.h2`
  font-size: 32px;
  font-weight: 100;
`

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
`
