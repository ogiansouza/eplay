import {
  Card,
  Infos,
  CardSection,
  CardSections,
  Descricao,
  Nome
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'
import Button from '../Button'

export type Props = {
  title: string
  description: string
  stars: number
  infos: string[]
  image: string
  id: number
}

const Rest = ({ title, description, stars, infos, image, id }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardSections>
      <CardSection>
        <Nome>{title}</Nome>
        <div className="nota">
          <Tag>{stars}</Tag>
          <img src={estrela} alt="estrela" />
        </div>
      </CardSection>
      <Descricao>{description}</Descricao>
      <Button as="link" to={`/perfil/${id}`} title="Saiba mais">
        Saiba mais
      </Button>
    </CardSections>
  </Card>
)

export default Rest
