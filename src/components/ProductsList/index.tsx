import Games from '../../models/Games'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  games: Games[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {games?.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            system={game.system}
            title={game.title}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
