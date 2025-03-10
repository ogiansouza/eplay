import { PacmanLoader } from 'react-spinners';
import { colors } from '../../styles';
import { Container } from './style';

export function Loader() {
  return (
    <Container>
      <PacmanLoader color={colors.white} />
    </Container>
  );
}
