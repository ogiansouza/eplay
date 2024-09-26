import * as S from './styles'

type Props = {
  children: JSX.Element
  title: string
}
export default function Card({ children, title }: Props) {
  return (
    <S.Container>
      <h2>{title}</h2>
      {children}
    </S.Container>
  )
}
