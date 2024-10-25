import { Fundo, LogoImg, LogoRedesSociais, DescricaoRodape } from './styles'
import vetorFundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.svg'
import redesSociais from '../../assets/images/redes sociais.png'

const Footer = () => (
  <Fundo style={{ backgroundImage: `url(${vetorFundo})` }}>
    <div className="container">
      <LogoImg src={logo} alt="EFOOD" />
    </div>
    <div>
      <LogoRedesSociais src={redesSociais} alt="Redes Sociais" />
    </div>
    <DescricaoRodape>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </DescricaoRodape>
  </Fundo>
)

export default Footer
