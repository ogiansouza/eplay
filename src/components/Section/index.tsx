import { Children } from 'react'
import { Container, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children?: JSX.Element
}

export const Section = ({ title, background, children }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title> {title} </Title>
        {children}
      </div>
    </Container>
  )
}
