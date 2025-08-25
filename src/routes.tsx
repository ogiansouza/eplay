import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Categories } from './pages/Categorias'
import { Product } from './pages/Product'
import { Chekout } from './pages/Chekout'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Chekout />} />
  </Routes>
)
