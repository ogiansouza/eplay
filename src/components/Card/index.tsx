import { Container } from './style'

type Props = {
  children: JSX.Element
  title: string
}

export const Card = ({ children, title }: Props) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}
