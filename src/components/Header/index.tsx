import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { useCart } from '../../contexts/CartContext'
import {
  CompactHeaderBar,
  CompactHeaderContent,
  Headerbar,
  HeroTitle,
  Logo,
  TopButton,
  TopLink
} from './styles'

const Header = () => {
  const { pathname } = useLocation()
  const { openCart, totalItems } = useCart()
  const isProfilePage = pathname === '/perfil'

  if (isProfilePage) {
    return (
      <CompactHeaderBar>
        <div className="container">
          <CompactHeaderContent>
            <TopLink to="/perfil">Restaurantes</TopLink>
            <Link to="/">
              <Logo src={logo} alt="efood" />
            </Link>
            <TopButton type="button" onClick={openCart}>
              {totalItems} produto(s) no carrinho
            </TopButton>
          </CompactHeaderContent>
        </div>
      </CompactHeaderBar>
    )
  }

  return (
    <Headerbar>
      <div className="container">
        <Link to="/perfil">
          <Logo src={logo} alt="efood" />
        </Link>
        <HeroTitle>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </HeroTitle>
      </div>
    </Headerbar>
  )
}

export default Header
