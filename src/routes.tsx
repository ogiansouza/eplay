import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
