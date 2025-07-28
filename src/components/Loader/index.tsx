import { PacmanLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../Styles'

const Loader = () => (
  <>
    <Container>
      <PacmanLoader color={colors.white} />
    </Container>
  </>
)

export default Loader
