import { Imagem, Slogan } from './styles'
import fundoHero from '../../assets/images/fundo.png'

import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${fundoHero})` }}>
    <div className="container">
      <h1>
        <img src={logo} alt="EFOOD" />
      </h1>
      <div>
        <Slogan>Viva experiência gastronomicas no conforto da sua casa</Slogan>
      </div>
    </div>
  </Imagem>
)

export default Hero
