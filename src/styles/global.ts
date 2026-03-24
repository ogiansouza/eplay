import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  lgScreen: '1024px',
  smScreen: '768px'
}
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.primary};
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
  body {
    width: 100%;
    height: 100vh;
    padding-top: 16vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.secondary};


  }
`
export const MainContainer = styled.div`
  max-width: ${breakpoints.lgScreen};
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: ${breakpoints.lgScreen}) {
    padding: 2%;
  }
  @media screen and (max-width: ${breakpoints.smScreen}) {
    max-width: 80%;
  }
`
