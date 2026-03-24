import { useTheme } from 'styled-components'
import { ThemeButtonStyled } from './styles'
import { FaSun, FaMoon } from 'react-icons/fa'

type ThemeButtonProps = {
  onClick: () => void
}

const ThemeButton = ({ onClick }: ThemeButtonProps) => {
  const theme = useTheme()
  return (
    <ThemeButtonStyled onClick={onClick}>
      {theme.primary === '#E8E4F0' ? <FaMoon /> : <FaSun />}
    </ThemeButtonStyled>
  )
}

export default ThemeButton
