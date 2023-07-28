import Restaurante from '../../models/Restaurantes'
import { Container, List } from './styles'
import { ProductPerfil } from '../Product'

type Props = {
  restaurante: Restaurante[]
}

const ProductListPerfil = ({ restaurante }: Props) => (
  <Container>
    <List>
      {restaurante.map((restaurante) => (
        <ProductPerfil
          key={restaurante.id}
          description={restaurante.description}
          image={restaurante.image}
          title={restaurante.title}
          category={[]}
          note={''}
        />
      ))}
    </List>
  </Container>
)

export default ProductListPerfil
