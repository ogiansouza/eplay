import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FaCartShopping } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../Logo'
import * as S from './styles'
import { open } from '@/store/reducers/cart'
import type { AppDispatch, RootReducer } from '@/store'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <S.HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </S.HamburgerMenu>
        <S.LogoLink to="/">
          <Logo />
        </S.LogoLink>

        <S.DesktopLinks>
          <S.LinkItem>
            <Link to="/categories" title="Clique aqui para acessar Categorias">
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink to="/#onSale" title="Clique aqui para acessar Promoções">
              Promoções
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink to="/#comingSoon" title="Clique aqui para acessar Em breve">
              Em breve
            </HashLink>
          </S.LinkItem>
        </S.DesktopLinks>

        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span> - Produto(s) </span>
          <FaCartShopping />
        </S.CartButton>
      </S.HeaderRow>
      <S.MobileLinks className={isOpen ? 'is-open' : ''}>
        <S.LinkItem onClick={() => setIsOpen(false)}>
          <Link to="/categories" title="Clique aqui para acessar Categorias">
            Categorias
          </Link>
        </S.LinkItem>
        <S.LinkItem onClick={() => setIsOpen(false)}>
          <HashLink to="/#onSale" title="Clique aqui para acessar Promoções">
            Promoções
          </HashLink>
        </S.LinkItem>
        <S.LinkItem onClick={() => setIsOpen(false)}>
          <HashLink to="/#comingSoon" title="Clique aqui para acessar Em breve">
            Em breve
          </HashLink>
        </S.LinkItem>
      </S.MobileLinks>
    </S.HeaderBar>
  )
}

export default Header
