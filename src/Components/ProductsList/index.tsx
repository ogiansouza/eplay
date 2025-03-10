import { Product } from '../Product';
import { List, Container } from './style';
import { Game } from '../../pages/Home';
import { parseToBrl } from '../../utils';
import { Loader } from '../Loader';

export type Props = {
  title: string;
  background: 'gray' | 'black';
  games?: Game[];
  id?: string;
  isLoading: boolean;
};

export function ProductsList({
  title,
  background,
  games,
  id,
  isLoading,
}: Props) {
  function getGameTags(game: Game) {
    const tags: string[] = [];
    if (game.release_date) {
      tags.push(game.release_date);
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`);
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current));
    }
    return tags;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  category={game.details.category}
                  system={game.details.system}
                  title={game.name}
                  description={game.description}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  );
}
