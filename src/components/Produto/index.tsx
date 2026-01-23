import Button from '../Button'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
  aberto: boolean
}

const Produto = ({ image, title, description, onClick, aberto }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 85) {
      return description.slice(0, 82) + '...'
    }
    return description
  }
  return (
    <Card className={aberto ? 'visivel' : ''}>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{getDescription(description)}</Descricao>
      <Button onClick={onClick} as="button" title="mais detalhes sobre o prato">
        Mais detalhes
      </Button>
    </Card>
  )
}

export default Produto
