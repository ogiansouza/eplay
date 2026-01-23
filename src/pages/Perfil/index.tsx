import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Produtos from '../../components/Produtos'

import { useState } from 'react'
import InfoModal from '../../components/InfoModal'
import { Product } from '../../models/Product'
import { useGetRestauranteQuery } from '../../services/api'

const Perfil = () => {
  const [modalAberto, setModalAberto] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(
    null
  )

  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id ?? '')

  if (restaurante) {
    return (
      <>
        <Header />
        <Banner banner={restaurante} />
        <Produtos
          produtos={restaurante.cardapio}
          aberto={modalAberto}
          onProdutoClick={(produto) => {
            setProdutoSelecionado(produto)
            setModalAberto(true)
          }}
        />
        {modalAberto && produtoSelecionado && (
          <InfoModal
            produto={produtoSelecionado}
            aberto={modalAberto}
            fecharModal={() => setModalAberto(false)}
          />
        )}
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Perfil
