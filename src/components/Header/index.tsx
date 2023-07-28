import { BgHero, H1, Logo } from './styles'

//verificar essas importações para ver se possivel deixar
// em apenas uma linha
import bannerImg from '../../assets/images/vector.png'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <BgHero style={{ backgroundImage: `url(${bannerImg})` }}>
    <div>
      <Logo src={logo} alt="EFOOD" />
      <H1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </H1>
    </div>
  </BgHero>
)

export default Header
