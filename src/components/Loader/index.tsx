import { useTheme } from 'styled-components'
import { PacmanLoader } from 'react-spinners'
import { Container } from './styles'

const Loader = () => {
  const theme = useTheme()
  return (
    <Container>
      <PacmanLoader color={theme.primary} size={20} />
    </Container>
  )
}

export default Loader
