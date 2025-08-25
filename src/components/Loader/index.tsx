import { PacmanLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './style'

export const Loader = () => (
  <Container>
    <PacmanLoader color={colors.white} />
  </Container>
)
