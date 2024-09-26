import Banner from '../components/Banner'

import ProductsList from '../components/ProductsList'

import * as Query from '../services/api'

export default function Home() {
  const { data: onSaleGames, isLoading: isLoadingSale } =
    Query.useGetOnSaleQuery()
  const { data: soomGames, isLoading: isLoadingSoon } = Query.useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        title="Promoçôes"
        background="gray"
        games={onSaleGames}
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="coming-soon"
        title="Em Breve"
        background="black"
        games={soomGames}
        isLoading={isLoadingSoon}
      />
    </>
  )
}
