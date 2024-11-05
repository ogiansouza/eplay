import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Home from './pages/Perfil'
import Perfil from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Perfil />} />
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
