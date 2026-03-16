import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="*" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/perfil" element={<Categories />} />
  </Routes>
)

export default Rotas
