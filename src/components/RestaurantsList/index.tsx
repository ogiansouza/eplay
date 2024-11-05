import { Restaurantes } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const RestaurantsList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <Restaurant
              key={restaurante.id}
              titulo={restaurante.titulo}
              descricao={restaurante.descricao}
              capa={restaurante.capa}
              destacado={restaurante.destacado ? 'true' : 'false'}
              tipo={restaurante.tipo}
              avaliacao={restaurante.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
