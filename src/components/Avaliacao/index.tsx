import Estrela from '../../assets/images/estrela.png'
import { Nota } from './styles'

type Props = {
  children: string
}

const Avaliacao = ({ children }: Props) => (
  <Nota>
    <span>{children}</span>
    <img src={Estrela} alt="Estrela" />
  </Nota>
)

export default Avaliacao
