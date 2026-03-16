import { BrowserRouter } from 'react-router-dom'

import CartSidebar from './components/CartSidebar'
import Footer from './components/Footer'
import Header from './components/Header'
import { CartProvider } from './contexts/CartContext'
import Rotas from './routes'
import { GlobalCss } from './styles'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalCss />
        <Header />
        <Rotas />
        <Footer />
        <CartSidebar />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
