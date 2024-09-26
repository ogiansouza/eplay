import * as S from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

export default function Tag({ children, size = 'small' }: Props) {
  return <S.TagContain size={size}>{children}</S.TagContain>
}
