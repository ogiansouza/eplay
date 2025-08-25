import { Tags } from '../Tags'

import * as S from './style'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

export const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }
  return (
    <S.Card
      title={`clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} />
      <S.Infos>
        {infos.map((info) => (
          <Tags key={info}>{info}</Tags>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tags>{category}</Tags>
      <Tags>{system}</Tags>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}
