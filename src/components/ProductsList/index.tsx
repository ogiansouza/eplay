import { formatPrice } from '../../utils'
import { Loader } from '../Loader'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  id?: string
  games?: Game[]
  title: string
  background: 'gray' | 'black'
  isLoading: boolean
}

export default function ProductsList({
  title,
  background,
  games,
  id,
  isLoading
}: Props) {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_data) {
      tags.push(game.release_data)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Section id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  system={game.details.system}
                  title={game.name}
                  id={game.id}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Section>
  )
}
