import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  rosaClaro: '#FFF8F2',
  rosaEscuro: '#E66767',
  corTexto: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    align-itens: center;
  }

  body {
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro}
  }
`
