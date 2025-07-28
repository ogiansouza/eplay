import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Categories from './components/Pages/Categories'
import Product from './components/Pages/Product'
import Checkout from './components/Pages/Checkout'
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
