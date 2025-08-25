import { Tags } from '../Tags'
import { Button } from '../Button'
import { parseToBrl } from '../../utils'
import { Loader } from '../Loader'

import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './style'

export const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tags size="big">Destaque do dia</Tags>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Price>
            De <span>{parseToBrl(game?.prices.old)}</span>
            <br />
            por apenas {parseToBrl(game?.prices.discount)}
          </S.Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}
