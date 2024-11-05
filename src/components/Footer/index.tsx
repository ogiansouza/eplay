import { Container, Link, Links, SectionLogo } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import X from '../../assets/images/x.png'

const Footer = () => (
  <Container>
    <div className="container">
      <SectionLogo>
        <img src={logo} alt="logo" />
      </SectionLogo>
      <Links>
        <li>
          <Link href="#">
            <img src={instagram} alt="Intagram" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src={facebook} alt="facebook" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src={X} alt="X" />
          </Link>
        </li>
      </Links>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
