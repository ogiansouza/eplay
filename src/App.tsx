import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/store'

import { MainContainer, GlobalStyle } from '@/styles/global'
import Header from '@/components/Header'
import RoutesApp from '@/routes'
import Footer from '@/components/Footer/Footer'
import LightTheme from '@/themes/light'
import DarkTheme from '@/themes/dark'
import Cart from '@/components/Cart'
import { useState } from 'react'
import ThemeButton from '@/components/ThemeButton/ThemeButton'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
          <GlobalStyle />
          <MainContainer>
            <Header />
          </MainContainer>
          <RoutesApp />
          <Footer />
          <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)} />
          <Cart />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
