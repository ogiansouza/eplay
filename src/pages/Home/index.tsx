import { useEffect, useState } from 'react'
import HeaderHome from '../../components/HeaderHome'
import RestaurantsList from '../../components/RestaurantsList'

export type Restaurantes = {
  id: number
  titulo: string
  destacado?: boolean
  tipo?: string
  avaliacao?: number
  descricao: string
  capa: string
  cardapio: []
}
const Home = () => {
  const [restaurante, setRestaurante] = useState<Restaurantes[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])
  return (
    <>
      <HeaderHome />
      <RestaurantsList restaurantes={restaurante} />
    </>
  )
}

export default Home
