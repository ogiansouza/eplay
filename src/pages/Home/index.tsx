import Banner from '../../components/Banner'

import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        games={onSaleGames}
        title="Promoções"
        background="gray"
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="coming-soon"
        games={soonGames}
        title="Em breve"
        background="black"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
