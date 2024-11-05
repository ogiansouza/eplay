import Product from '../Product'
import { Container, List } from './styles'

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductsList
