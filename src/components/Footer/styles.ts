import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.vermelhoClaro};
  height: 298px;
  padding: 40px 0;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  object-fit: contain;
  margin-bottom: 30px;
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;

  a {
    line-height: 0;
  }

  img {
    width: 24px;
    height: 24px;
    display: block;
  }
`

export const Disclaimer = styled.p`
  max-width: 480px;
  margin-top: 80px;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
  color: ${cores.vermelho};
`
