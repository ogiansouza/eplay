import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  magenta: '#E66767',
  rose: '#FFEBD9',
  bege: '#FFF8F2',
  amarelo: '#FFB930 '
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.magenta};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`
