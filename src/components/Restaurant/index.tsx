import Avaliacao from '../Avaliacao'
import Button from '../Button'
import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'
import { Card, TitleCard, Descricao, CardSection, Infos, Rate } from './styles'

type Props = {
  titulo: string
  destacado?: string
  tipo?: string
  avaliacao?: number
  descricao: string
  capa: string
}

const Restaurant = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <Card>
    <img src={capa} alt={titulo} />
    <Infos>{tipo && <Tag>{tipo}</Tag>}</Infos>
    <CardSection>
      <TitleCard>{titulo}</TitleCard>
      <Rate>
        {avaliacao !== undefined && (
          <Avaliacao>{avaliacao.toString()}</Avaliacao>
        )}
      </Rate>
      <Descricao>{descricao}</Descricao>
      <ButtonLink to="/" title="Saiba mais">
        Saiba mais
      </ButtonLink>
    </CardSection>
  </Card>
)

export default Restaurant
