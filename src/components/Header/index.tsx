import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkCart } from './styles'
import HeaderImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${HeaderImg})` }}>
    <div className="container">
      <nav>
        <Links>
          <li>
            <Link to="/restaurantes">Restaurantes</Link>
          </li>
        </Links>
      </nav>
      <img src={logo} alt="EPLAY" />
      <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
    </div>
  </HeaderBar>
)

export default Header
