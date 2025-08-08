import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useEffect, useState } from 'react'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../Services/api'

export interface GalleryItem {
  type: 'imagem' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }

  details: {
    category: string
    system: string
    developer: string
    puvlisher: string
    languages: string
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])

  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
    fetch('https://ebac-fake-api.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="gray" />
        <ProductsList games={soonGames} title="Em breve" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
