import * as S from './style';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { useGetFeaturedGameQuery } from '../../services/api';
import { parseToBrl } from '../../utils';
import { Loader } from '../Loader';

export function Banner() {
  const { data: game } = useGetFeaturedGameQuery();

  if (!game) return <Loader />;
  const route = `/produto/${game.id}`;
  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="large">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span>
            <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          title="Clique aqui para aproveitar esta oferta"
          to={route}
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  );
}
