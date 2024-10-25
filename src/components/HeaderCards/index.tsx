import { Produto } from '../../pages/Home'
import Cards from '../Cards'
import { List, ListCard } from './styles'

export type Props = {
  produtos: Produto[]
}

const HeaderCards = ({ produtos }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getHeaderCards = (produtos: Produto) => {
    const tags = []
    if (produtos.release_date) {
      tags.push(produtos.release_date)
    }

    if (produtos.prices.discount) {
      tags.push(`${produtos.prices.discont}%`)
    }

    if (produtos.prices.current) {
      tags.push(formataPreco(produtos.prices.current))
    }
  }

  return (
    <section>
      <ListCard>
        <List>
          {produtos.map((produto) => (
            <Cards key={produto.id} infos={getHeaderCards(produto)} />
          ))}
        </List>
      </ListCard>
    </section>
  )
}

export default HeaderCards
