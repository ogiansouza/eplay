import { TagsContainer } from './style'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

export const Tags = ({ children, size = 'small' }: Props) => (
  <TagsContainer size={size}>{children}</TagsContainer>
)
