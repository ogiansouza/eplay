import styled from 'styled-components'
import { Link } from 'react-router-dom'

import heroPattern from '../../assets/Vector.svg'
import { cores } from '../../styles'

const BasePattern = `
  background-color: ${cores.vermelhoClaro};
  background-image: url(${heroPattern});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Headerbar = styled.header`
  height: 384px;
  padding: 64px 0 40px;
  ${BasePattern}

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CompactHeaderBar = styled.header`
  height: 186px;
  ${BasePattern}

  .container {
    height: 100%;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  object-fit: contain;
`

export const CompactHeaderContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  ${Logo} {
    justify-self: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 12px;
    padding: 20px 0;
  }
`

export const TopLink = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  color: ${cores.vermelho};
  text-decoration: none;
`

export const TopButton = styled.button`
  justify-self: end;
  border: none;
  background: transparent;
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
    justify-self: center;
  }
`

export const HeroTitle = styled.h1`
  max-width: 560px;
  margin-top: 138px;
  text-align: center;
  color: ${cores.vermelho};
  font-size: 36px;
  line-height: 1.25;
  font-weight: 900;

  @media (max-width: 768px) {
    margin-top: 96px;
    padding: 0 24px;
  }
`
