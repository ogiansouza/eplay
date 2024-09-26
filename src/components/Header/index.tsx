import { Link } from 'react-router-dom'

import * as S from './styles'

import Logo from '../../images/logo.svg'
import Cart from '../../images/carrinho.svg'

import { hadleOpen } from '../../store/reducers/cartSlice'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Header() {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="container">
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </S.Hamburguer>
            <Link to="/">
              <h1>
                <img src={Logo} alt="EPLAY" />
              </h1>
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <Link
                    title="Clique aqui para acessar a pagina de categorias"
                    to="/categories"
                  >
                    Categorias
                  </Link>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a pagina de novidades"
                    to="/#coming-soon"
                  >
                    Em breve
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a pagina de promoções"
                    to="/#on-sale"
                  >
                    Promoções
                  </HashLink>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.CartButton role="button" onClick={() => dispatch(hadleOpen())}>
            {items.length}
            <span>- produto(s)</span>
            <img src={Cart} alt="Carrinho de Compras" />
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <Link
                title="Clique aqui para acessar a pagina de categorias"
                to="/categories"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a pagina de novidades"
                to="/#coming-soon"
                onClick={() => setIsMenuOpen(false)}
              >
                Em breve
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a pagina de promoções"
                to="/#on-sale"
                onClick={() => setIsMenuOpen(false)}
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </div>
  )
}
