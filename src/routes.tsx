import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categorias from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categorias />} />
  </Routes>
)

export default Rotas
