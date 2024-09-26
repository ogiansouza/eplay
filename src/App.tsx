import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Global } from './styles'
import { store } from './store'
import Paths from './routes'

import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <Header />
        <Paths />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
