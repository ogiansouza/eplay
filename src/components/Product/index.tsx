import {
  Card,
  CardBorder,
  CardPerfil,
  ContainerTitulo,
  Descricao,
  Titulo,
  TituloPerfil,
  Infos,
  DescricaoPerfil
} from './styles'
import star from '../../assets/images/star_icon.png'
import Tag from '../Tag'
import { BtnLinkSecundario } from '../Button/styles'
import Button from '../Button'

export type Props = {
  title: string
  category: string[]
  image: string
  description: string
  note: string
}

const Product = ({ title, category, image, description, note }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      <Tag>Destaque do dia</Tag>
      {category.map((category) => (
        <Tag key={category}>{category}</Tag>
      ))}
    </Infos>
    <CardBorder>
      <ContainerTitulo>
        <Titulo>{title}</Titulo>
        <Titulo>
          {note}
          <img src={star} alt="estrela" />
        </Titulo>
      </ContainerTitulo>
      <Descricao>{description}</Descricao>
      <Button type="link" to="/perfil" title="Conheça nossos pratos">
        Saiba mais
      </Button>
    </CardBorder>
  </Card>
)

export default Product

export const ProductPerfil = ({ title, image, description }: Props) => (
  <CardPerfil>
    <img src={image} alt={title} />
    <TituloPerfil>{title}</TituloPerfil>
    <DescricaoPerfil>{description}</DescricaoPerfil>
    <BtnLinkSecundario type="link" to="/" title="Adicione ao carrinho">
      Adicionar ao carrinho
    </BtnLinkSecundario>
  </CardPerfil>
)
