import Tag from '../Tag'
import Button from '../Button'
import { parseToBrl } from '../../utils/index'
import { useGetFeaturedGameQuery } from '../../services/api'
import * as S from './Banner.styles'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.BannerStyle style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            <s>
              De <span>{parseToBrl(game.prices.old)}</span>
            </s>
            <br />
            Por <span>{parseToBrl(game.prices.current)}</span>
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.BannerStyle>
  )
}

export default Banner
