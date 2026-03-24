import Product from '@/components/Product'
import * as S from './styles'
import { MainContainer } from '@/styles/global'
import { priceFormatter } from '@/utils'
import Loader from '../Loader'

export type ProductListProps = {
  title?: string
  background: 'black' | 'gray'
  id?: string
  games?: Game[]
  isLoading: boolean
}

const ProductList = ({ title, background, games, id, isLoading }: ProductListProps) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(priceFormatter(game.prices.current))
    }
    return tags
  }
  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <S.ProductListStyled id={id} $background={background}>
        <MainContainer>
          <S.Title>{title}</S.Title>
          <S.List>
            {games &&
              games?.map((game) => (
                <Product
                  background={background}
                  key={game.id}
                  title={game.name}
                  category={game.details.category}
                  system={game.details.system}
                  description={game.description}
                  infos={getGameTags(game)}
                  image={game.media.thumbnail}
                  id={game.id}
                />
              ))}
          </S.List>
        </MainContainer>
      </S.ProductListStyled>
    </>
  )
}

export default ProductList
