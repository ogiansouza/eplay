import Tag from '../Tag'
import Button from '../Button'

import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)} </span>
            <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}
export default Banner
