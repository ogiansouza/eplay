import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import { useGetOnSaleGamesQuery, useGetSoonGamesQuery } from '@/services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleGamesQuery()
  const { data: getSoonGames, isLoading: isLoadingSoon } = useGetSoonGamesQuery()

  return (
    <>
      <Banner />
      <ProductList
        background="gray"
        title="Produtos em destaque"
        games={onSaleGames}
        id="onSale"
        isLoading={isLoadingSale}
      />
      <ProductList
        background="black"
        title="Em breve"
        games={getSoonGames}
        id="comingSoon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
