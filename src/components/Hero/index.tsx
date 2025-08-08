import { Game } from '../../pages/Home'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styled'

type Props = {
  game: Game
}

export const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag> sistema </Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2> {game.name} </h2>
        <p>
          {game.prices.discount && (
            <span>De ${formataPreco(game.prices.old)} </span>
          )}
          {game.prices.current && (
            <>Por ${formataPreco(game.prices.discount)}</>
          )}
        </p>
        {game.prices.current && (
          <Button
            title="Clique aqui para adicionar no carrinho"
            type="button"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)
