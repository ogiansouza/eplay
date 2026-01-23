import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import fundoHeader from '../../assets/images/fundo.png'
import { Head, Links, LinkCart } from './styles'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCartProd = () => {
    dispatch(openCart())
  }

  return (
    <Head style={{ backgroundImage: `url(${fundoHeader})` }}>
      <div className="container">
        <div>
          <Link to="/">
            <Links>Restaurantes</Links>
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="EFOOD" />
          </Link>
        </div>
        <div className="CartItem">
          <LinkCart role="button" onClick={openCartProd}>
            {items.length} Produto(s) no Carrinho
          </LinkCart>
        </div>
      </div>
    </Head>
  )
}

export default Header
