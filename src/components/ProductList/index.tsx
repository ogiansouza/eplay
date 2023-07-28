import Restaurante from '../../models/Restaurantes'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  restaurante: Restaurante[]
}

const ProductList = ({ restaurante }: Props) => (
  <Container>
    <List>
      {restaurante.map((restaurante) => (
        <Product
          key={restaurante.id}
          category={restaurante.category}
          description={restaurante.description}
          image={restaurante.image}
          title={restaurante.title}
          note={restaurante.note}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
