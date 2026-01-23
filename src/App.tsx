import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
