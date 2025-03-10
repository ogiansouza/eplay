import { Link } from 'react-router-dom';
import * as S from './style';
import logo from '../../images/logo.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../store/reducers/cart';
import { RootReducer } from '../../store';
import { useState } from 'react';

export function Header() {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  function openCart() {
    dispatch(open());
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <img src={logo} alt="EPLAY" />
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <Link to="/categories">Categorias</Link>
                </S.LinkItem>
                <S.LinkItem>
                  <Link to="/news">Novidades</Link>
                </S.LinkItem>
                <S.LinkItem>
                  <Link to="/sales">Promoções</Link>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.ButtonCart onClick={openCart}>
            <div>
              {items.length}
              <span> - Produto(s)</span>
            </div>
            <FaShoppingCart />
          </S.ButtonCart>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <Link to="/categories">Categorias</Link>
            </S.LinkItem>
            <S.LinkItem>
              <Link to="/news">Novidades</Link>
            </S.LinkItem>
            <S.LinkItem>
              <Link to="/sales">Promoções</Link>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </div>
  );
}
