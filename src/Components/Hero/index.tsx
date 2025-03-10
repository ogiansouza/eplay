import { Game } from '../../pages/Home';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { Banner, Infos } from './style';
import { parseToBrl } from '../../utils';
import { add } from '../../store/reducers/cart';
import { useDispatch } from 'react-redux';
type Props = {
  game: Game;
};

export function Hero({ game }: Props) {
  const dispatch = useDispatch();
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <div>
            {game.prices.old && <span>De {parseToBrl(game.prices.old)}</span>}
            {game.prices.current && (
              <p>Por {parseToBrl(game.prices.current)}</p>
            )}
          </div>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho."
              variant="primary"
              onClick={() => dispatch(add(game))}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  );
}
