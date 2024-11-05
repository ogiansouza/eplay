import { ButtonContainer } from '../Button/styles'
import { Description, Modal, ModalContent } from './styles'
import ProdutoImg from '../../assets/images/pizza_popup.png'
import fechar from '../../assets/images/fechar.png'
const Cardapio = () => (
  <Modal>
    <ModalContent>
      <header>
        <img src={fechar} alt="" />
      </header>
      <img src={ProdutoImg} alt="" />
      <Description>
        <h4>Pizza Marguerita</h4>
        <p>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião. <br /> <br />{' '}
          Serve: de 2 a 3 pessoas
        </p>
        <ButtonContainer>Adicionar ao carrinho - R$60,90</ButtonContainer>
      </Description>
    </ModalContent>
    <div className="overlay"></div>
  </Modal>
)
export default Cardapio
