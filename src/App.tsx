import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/restaurantes" element={<Perfil />} />
    <Route path="/" element={<Home />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
