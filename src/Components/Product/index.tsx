import { Tag } from '../Tag';
import * as S from './style';
type Props = {
  image: string;
  infos: string[];
  system: string;
  category: string;
  title: string;
  description: string;
  id: number;
};

export function Product({
  image,
  infos,
  system,
  category,
  title,
  description,
  id,
}: Props) {
  function formatDescription(description: string) {
    if (description.length > 95) {
      return description.slice(0, 92) + '...';
    }
    return description;
  }
  return (
    <S.Card to={`/produto/${id}`}>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{formatDescription(description)}</S.Description>
    </S.Card>
  );
}
