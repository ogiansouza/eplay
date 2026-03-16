import pizza from '../../assets/pizza.png'
import ProfileHero from '../../components/ProfileHero'
import RestaurantMenu, { Dish } from '../../components/RestaurantMenu'

const shortDescription =
  'A classica Marguerita: molho de tomate suculento, mussarela derretida, manjericao fresco e um toque de azeite. Sabor e simplicidade!'

const modalDescription =
  'A pizza Margherita e uma pizza classica da culinaria italiana, reconhecida por sua simplicidade e sabor inigualavel. Ela e feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericao fresco e azeite de oliva extra-virgem. A combinacao de sabores e perfeita, com o molho de tomate suculento e levemente acido, o queijo derretido e cremoso e as folhas de manjericao frescas, que adicionam um toque de sabor herbaceo. E uma pizza simples, mas deliciosa, que agrada a todos os paladares e e uma otima opcao para qualquer ocasiao.'

const dishes: Dish[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description: shortDescription,
    modalDescription,
    price: 60.9,
    serving: 'Serve: de 2 a 3 pessoas',
    priceLabel: 'Adicionar ao carrinho - R$ 60,90',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description: shortDescription,
    modalDescription,
    price: 60.9,
    serving: 'Serve: de 2 a 3 pessoas',
    priceLabel: 'Adicionar ao carrinho - R$ 60,90',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description: shortDescription,
    modalDescription,
    price: 60.9,
    serving: 'Serve: de 2 a 3 pessoas',
    priceLabel: 'Adicionar ao carrinho - R$ 60,90',
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description: shortDescription,
    modalDescription,
    price: 60.9,
    serving: 'Serve: de 2 a 3 pessoas',
    priceLabel: 'Adicionar ao carrinho - R$ 60,90',
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description: shortDescription,
    modalDescription,
    price: 60.9,
    serving: 'Serve: de 2 a 3 pessoas',
    priceLabel: 'Adicionar ao carrinho - R$ 60,90',
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description: shortDescription,
    modalDescription,
    price: 60.9,
    serving: 'Serve: de 2 a 3 pessoas',
    priceLabel: 'Adicionar ao carrinho - R$ 60,90',
    image: pizza
  }
]

const Categories = () => (
  <>
    <ProfileHero />
    <RestaurantMenu dishes={dishes} />
  </>
)

export default Categories
