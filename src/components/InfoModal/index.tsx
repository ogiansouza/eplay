import { useDispatch } from 'react-redux'
import fechar from '../../assets/images/fechar.png'
import { Product } from '../../models/Product'
import { formataPreco } from '../../pages/Home'
import Button from '../Button'
import { Modal, ModalContent, ModalItems } from './styles'

import { add, openCart } from '../../store/reducers/cart'

type Props = {
  produto: Product
  aberto: boolean
  fecharModal: () => void
}

const InfoModal = ({ produto, aberto, fecharModal }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
    dispatch(openCart())
    fecharModal()
  }
  return (
    <Modal className={aberto ? 'visivel' : ''}>
      <ModalContent className="container" onClick={(e) => e.stopPropagation()}>
        <header className="fechar">
          <img src={fechar} alt="fechar descrição" onClick={fecharModal} />
        </header>
        <ModalItems key={produto.id}>
          <div>
            <img src={produto.foto} alt={produto.nome} />
          </div>
          <div>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>{produto.porcao}</p>
            <Button
              as="button"
              title="Adicione o Prato ao carrinho"
              onClick={addToCart}
            >
              {`Adicionar ao carrinho ${formataPreco(produto.preco)}`}
            </Button>
          </div>
        </ModalItems>
      </ModalContent>
      <div className="overlay" onClick={fecharModal}></div>
    </Modal>
  )
}

export default InfoModal
