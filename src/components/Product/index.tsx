import Tag from '../Tag'
import {
  Card,
  Content,
  Descricao,
  Infos,
  Nota,
  TopLine,
  Titulo
} from './styles'

import estrela from '../../assets/estrela.png'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Content>
      <TopLine>
        <Titulo>{title}</Titulo>
        <Nota>
          <span>{system}</span>
          <img src={estrela} alt="estrela" />
        </Nota>
      </TopLine>

      <Descricao>{description}</Descricao>
      <Tag>{category}</Tag>
    </Content>
  </Card>
)

export default Product
