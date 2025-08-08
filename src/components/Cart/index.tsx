import Button from '../Button'
import {
  CartCOntainer,
  CartItem,
  Overlay,
  Price,
  Quantity,
  SideBAr
} from './styles'

import star from '../../assets/images/star_wars.png'
import Tag from '../Tag'

export const Cart = () => {
  return (
    <CartCOntainer>
      <Overlay />
      <SideBAr>
        <ul>
          <CartItem>
            <img src={star} alt="star" />
            <div>
              <h3>nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={star} alt="star" />
            <div>
              <h3>nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity>2 jogos no carrinho</Quantity>
        <Price>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </Price>
        <Button type="button" title="Clique aqui e continue">
          cosntinuar com a compra
        </Button>
      </SideBAr>
    </CartCOntainer>
  )
}
