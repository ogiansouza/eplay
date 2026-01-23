import { Imagem, Slogan } from './styles'
import fundoHero from '../../assets/images/fundo.png'

import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${fundoHero})` }}>
    <div className="container">
      <img src={logo} alt="EFOOD" />
      <div>
        <Slogan>Viva experiência gastronomicas no conforto da sua casa</Slogan>
      </div>
    </div>
  </Imagem>
)

export default Hero
