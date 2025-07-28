import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
export const colors = {
  white: '#fff',
  black: '#111',
  gray: '#333',
  green: '#10AC84',
  lightGray: '#A3A3A3'
}

export const Breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}
    body{
      color: ${colors.white};
      background-color: ${colors.black};
      padding-top: 40px;
    }

    .container{
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${Breakpoints.desktop}){
        max-width: 80%;
    }
  }
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
