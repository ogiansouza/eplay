import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Perfil />} />
    <Route path="/restaurantes" element={<Home />} />
  </Routes>
)

export default Rotas
