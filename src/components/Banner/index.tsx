import * as S from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Loader } from '../Loader'

import { formatPrice } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

export default function Banner() {
  const { data: destaque, isLoading } = useGetFeaturedGameQuery()

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Contain style={{ backgroundImage: `url(${destaque?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{destaque?.name}</S.Title>

          <S.Price>
            De <span>{formatPrice(destaque?.prices.old)}</span> <br /> por
            apenas {formatPrice(destaque?.prices.current)}
          </S.Price>
        </div>
        <Button
          variant="secondary"
          type="link"
          to={`/product/${destaque?.id}`}
          title={'Clique aqui para aproveitar a oferta'}
        >
          Aproveitar
        </Button>
      </div>
    </S.Contain>
  )
}
