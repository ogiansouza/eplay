import ProductsList from '../../components/ProductsList'
import Games from '../../models/Games'

import japa from '../../assets/japa.png'
import comida from '../../assets/comida.png'

const promocoes: Games[] = [
  {
    id: 1,
    category: 'Saiba mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japa,
    title: 'Hioki Sushi',
    system: '4.9',
    infos: ['Destaque da semana', 'Japonesa ']
  },
  {
    id: 2,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria ',
    system: '4.6',
    infos: ['Italiano']
  },
  {
    id: 3,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria ',
    system: '4.8',
    infos: ['Italiano']
  },
  {
    id: 4,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria ',
    system: '4.7',
    infos: ['Italiano']
  },
  {
    id: 5,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria ',
    system: '4.5',
    infos: ['Italiano']
  },
  {
    id: 6,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria ',
    system: '5.0',
    infos: ['Italiano']
  }
]

const Home = () => (
  <>
    {/* <Banner /> */}
    <ProductsList title="Promoções" background="gray" games={promocoes} />
  </>
)

export default Home
