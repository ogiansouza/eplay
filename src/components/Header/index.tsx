import { Container } from '../../styles'
import { HeaderBar, ImgLogo, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <Container>
      <ImgLogo src={logo} alt="efood" />
      <Titulo>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Titulo>
    </Container>
  </HeaderBar>
)

export default Header
