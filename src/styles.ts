import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF',
  preto: 'rgb(17, 17, 17)',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  vermelho: '#E66767',
  vermelhoClaro: '#FFEBD9',
  pessegoClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      list-style: none;
  }

  body {
      background-color: ${cores.pessegoClaro};
      color: ${cores.preto};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }
`
