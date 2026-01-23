import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Checkout from './components/Checkout'
import Confirm from './components/Confirm'
import Payment from './components/Payment'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />

    <Route path="/checkout" element={<Checkout />} />
    <Route path="/checkout/payment" element={<Payment />} />
    <Route path="/checkout/confirm" element={<Confirm />} />
  </Routes>
)

export default Rotas
