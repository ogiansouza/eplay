import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ size = 'small', children }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
