import { Container, Descricao, Logo } from './styles'

import logo from '../../assets/images/logo.svg'
import insta from '../../assets/images/insta_icon.png'
import face from '../../assets/images/face_icon.png'
import twitter from '../../assets/images/twitter_icon.png'

const Footer = () => {
  return (
    <>
      <Container>
        <div>
          <Logo src={logo} alt="EFOOD" />
          <div>
            <img src={insta} alt="Instagram" />
            <img src={face} alt="Facebok" />
            <img src={twitter} alt="Twitter" />
          </div>
        </div>
        <Descricao>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </Descricao>
      </Container>
    </>
  )
}

export default Footer
