import { Botao, Card, CardImg, Descricao, Infos, Nota, Titulo } from './style'
import prato from '../../assets/images/prato de macarrão.png'
import nota from '../../assets/images/nota.png'
import Tag from '../Tag'
import { Link } from 'react-router-dom'

type Props = {
  infos: string[]
}

const Cards = ({ infos }: Props) => (
  <Card>
    <CardImg src={prato} alt="Prato de macarrão" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>
      La Dolce Vita Trattoria
      <Nota src={nota} alt="Avaliação" />
    </Titulo>
    <Descricao>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
      no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
      inesquecível. Peça já!
    </Descricao>
    <Botao>
      <Link to="/categories">Saiba Mais</Link>
    </Botao>
  </Card>
)

export default Cards
