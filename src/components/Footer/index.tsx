import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import { Container, Disclaimer, Logo, SocialLinks } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <SocialLinks>
        <a href="#" aria-label="Instagram">
          <img src={instagram} alt="" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src={facebook} alt="" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitter} alt="" />
        </a>
      </SocialLinks>
      <Disclaimer>
        A efood e uma plataforma para divulgacao de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos e toda do
        estabelecimento contratado.
      </Disclaimer>
    </div>
  </Container>
)

export default Footer
