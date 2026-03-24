import { CardContainer } from './styles'
type CardProps = {
  children: React.ReactNode
  title: string
}
const Card = ({ children, title }: CardProps) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      {children}
    </CardContainer>
  )
}

export default Card
