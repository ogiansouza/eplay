import { Link } from 'react-router-dom'
import HeaderImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { HeaderBar, Title } from './styles'

const HeaderHome = () => (
  <HeaderBar style={{ backgroundImage: `url(${HeaderImg})` }}>
    <div className="container">
      <Link to="/restaurantes">
        <img src={logo} alt="EPLAY" />
      </Link>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderBar>
)

export default HeaderHome
