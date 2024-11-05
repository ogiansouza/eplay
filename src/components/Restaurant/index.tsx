import Avaliacao from '../Notas'
import Button from '../Button'
import Tag from '../Tag'
import { Card, TitleCard, Descricao, CardSection, Infos, Rate } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  rates: string[]
}

const Restaurant = ({ title, description, infos, image, rates }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag size="big" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <CardSection>
      <TitleCard>{title}</TitleCard>
      <Rate>
        {rates.map((rate) => (
          <Avaliacao key={rate.toString()}>{rate}</Avaliacao>
        ))}
      </Rate>
      <Descricao>{description}</Descricao>
      <Button type="link" to="/restaurantes" title="Saiba mais">
        Saiba mais
      </Button>
    </CardSection>
  </Card>
)

export default Restaurant
