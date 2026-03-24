import { MainContainer } from '@/styles/global'
import * as S from './styles'
import Tag from '../Tag'
import { useGetFeaturedGameQuery } from '@/services/api'
import { priceFormatter } from '@/utils'
import { ButtonLink } from '../Button/styles'
import Loader from '../Loader'

const Banner = () => {
  const { data: game, isLoading, error } = useGetFeaturedGameQuery()
  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <h1>Erro ao carregar</h1>
  }

  if (!game) {
    return <h1>Nenhum jogo encontrado</h1>
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <MainContainer>
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{priceFormatter(game.prices.old)}</span>
            <br />
            Por {priceFormatter(game.prices.current)}
          </S.Prices>
        </div>
        <ButtonLink to={`/product/${game.id}`} title="Clique aqui para aproveitar essa oferta">
          Aproveitar
        </ButtonLink>
      </MainContainer>
    </S.Image>
  )
}

export default Banner
