import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Restaurante from '../../models/Restaurantes'

import hioki from '../../assets/images/hioki_sushi.svg'
import laDolceVita from '../../assets/images/la_dolce_vita.svg'
import Footer from '../../components/Footer'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    category: ['Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Suchi',
    image: hioki,
    note: '4.9'
  },
  {
    id: 2,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: laDolceVita,
    note: '4.6'
  },
  {
    id: 3,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: laDolceVita,
    note: '4.6'
  },
  {
    id: 4,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: laDolceVita,
    note: '4.6'
  },
  {
    id: 5,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: laDolceVita,
    note: '4.6'
  },
  {
    id: 6,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: laDolceVita,
    note: '4.6'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList restaurante={restaurantes} />
    <Footer />
  </>
)

export default Home
