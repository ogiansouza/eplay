import { Colors } from '../../styles'
import * as S from './styles'
import PacmanLoader from 'react-spinners/PacmanLoader'

export function Loader() {
  return (
    <S.Container>
      <PacmanLoader color={Colors.white} />
    </S.Container>
  )
}
