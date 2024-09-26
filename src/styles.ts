import { createGlobalStyle } from 'styled-components'

export const Colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  green: '#10AC84',
  lightGray: '#A3A3A3'
}

export const breackpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;

    body {
      background-color: ${Colors.black};
      color: ${Colors.white};
      padding-top: 40px;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breackpoints.desktop} ){
        max-width: 80%;
      }
    }
  }
`
