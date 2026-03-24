import { TagStyled } from './styles'
export type TagProps = {
  children: string
  size?: 'small' | 'big'
}
const Tag = ({ children, size = 'small' }: TagProps) => {
  return <TagStyled size={size}>{children}</TagStyled>
}

export default Tag
