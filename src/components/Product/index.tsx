import Tag from '@/components/Tag'
import * as S from './styles'
import { Link } from 'react-router-dom'
export type CardProps = {
  background: 'black' | 'gray'
  title: string
  category: string
  system: string
  description: string
  infos?: string[]
  image: string
  id: number
}
const Product = ({
  background,
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: CardProps) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }
  return (
    <S.Card $background={background} title={`Clique aqui para ver mais detalhes do jogo: ${title}`}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Infos>
          {infos?.map((info) => (
            <Tag key={info}>{getDescription(info)}</Tag>
          ))}
        </S.Infos>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <S.Description $background={background}>{getDescription(description)}</S.Description>
      </Link>
    </S.Card>
  )
}

export default Product
