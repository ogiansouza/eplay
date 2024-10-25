import Footer from '../../components/Footer'
import HeaderCategories from '../../components/HeaderCategories'
import Hero from '../../components/Hero'
import {
  Botao,
  CardCategories,
  Colunas,
  Imagem,
  Modal,
  ModalContent,
  Paragrafo,
  Titulo,
  Image,
  TituloCard,
  ParagrafoCard,
  ModalCard,
  HeaderCard,
  BotaoCard
} from './styles'
import pizza from '../../assets/images/pizza marguerita.png'
import pizza3 from '../../assets/images/pizza marguerita 3.png'
import fechar from '../../assets/images/close.png'
import { useState } from 'react'

const Categorias = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [buttonText, setButtonText] = useState('')

  return (
    <>
      <HeaderCategories />
      <Hero />
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <HeaderCard>
            <img
              src={fechar}
              alt="Fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </HeaderCard>
          <ModalCard>
            <div>
              <Image src={pizza3} alt="Pizza de Marguerita" />
            </div>
            <div>
              <TituloCard>Pizza Marguerita</TituloCard>
              <ParagrafoCard>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br></br>
                <br></br>
                Serve: de 2 a 3 pessoas
              </ParagrafoCard>
              <BotaoCard>Adicionar ao carrinho - R$ 60,90</BotaoCard>
            </div>
          </ModalCard>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
      <Colunas>
        <CardCategories>
          <Imagem src={pizza} alt="Pizza de Marguerita" />
          <Titulo>Pizza Marguerita</Titulo>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Botao
            onMouseEnter={() => setButtonText('Mais detalhes')}
            onMouseLeave={() => setButtonText('Adicionar ao carrinho')}
            onClick={() => setModalEstaAberto(true)}
          >
            {buttonText}
          </Botao>
        </CardCategories>
        <CardCategories>
          <Imagem src={pizza} alt="Pizza de Marguerita" />
          <Titulo>Pizza Marguerita</Titulo>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Botao
            onMouseEnter={() => setButtonText('Mais detalhes')}
            onMouseLeave={() => setButtonText('Adicionar ao carrinho')}
            onClick={() => setModalEstaAberto(true)}
          >
            {buttonText}
          </Botao>
        </CardCategories>
        <CardCategories>
          <Imagem src={pizza} alt="Pizza de Marguerita" />
          <Titulo>Pizza Marguerita</Titulo>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Botao
            onMouseEnter={() => setButtonText('Mais detalhes')}
            onMouseLeave={() => setButtonText('Adicionar ao carrinho')}
            onClick={() => setModalEstaAberto(true)}
          >
            {buttonText}
          </Botao>
        </CardCategories>
        <CardCategories>
          <Imagem src={pizza} alt="Pizza de Marguerita" />
          <Titulo>Pizza Marguerita</Titulo>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Botao
            onMouseEnter={() => setButtonText('Mais detalhes')}
            onMouseLeave={() => setButtonText('Adicionar ao carrinho')}
            onClick={() => setModalEstaAberto(true)}
          >
            {buttonText}
          </Botao>
        </CardCategories>
        <CardCategories>
          <Imagem src={pizza} alt="Pizza de Marguerita" />
          <Titulo>Pizza Marguerita</Titulo>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Botao
            onMouseEnter={() => setButtonText('Mais detalhes')}
            onMouseLeave={() => setButtonText('Adicionar ao carrinho')}
            onClick={() => setModalEstaAberto(true)}
          >
            {buttonText}
          </Botao>
        </CardCategories>
        <CardCategories>
          <Imagem src={pizza} alt="Pizza de Marguerita" />
          <Titulo>Pizza Marguerita</Titulo>
          <Paragrafo>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Paragrafo>
          <Botao
            onMouseEnter={() => setButtonText('Mais detalhes')}
            onMouseLeave={() => setButtonText('Adicionar ao carrinho')}
            onClick={() => setModalEstaAberto(true)}
          >
            {buttonText}
          </Botao>
        </CardCategories>
      </Colunas>
      <Footer />
    </>
  )
}

export default Categorias
