import { useDispatch } from 'react-redux'

import { Button } from '../Button'
import { Tags } from '../Tags'

import { Game } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

import * as S from './style'
import { parseToBrl } from '../../utils'

type Props = {
  game: Game
}

export const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tags>{game.details.system}</Tags>
          <Tags>{game.details.category}</Tags>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game?.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game?.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="clique aqui para adiocar esse jogo ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}
