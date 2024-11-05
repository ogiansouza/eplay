import { Routes, Route } from 'react-router-dom'

import Home from './pages/Perfil'
import Perfil from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Perfil />} />
    <Route path="/restaurantes" element={<Home />} />
  </Routes>
)

export default Rotas
