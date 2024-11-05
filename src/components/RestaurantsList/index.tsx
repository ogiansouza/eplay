import Restaurant from '../Restaurant'
import { Container, List } from './styles'
import Japonesa from '../../assets/images/japonesa.png'
import Italiana from '../../assets/images/italiana.png'

const RestaurantsList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurant
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Destaque da semana', 'Japonesa']}
          image={Japonesa}
          rates={['4.9']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          infos={['Italiana']}
          image={Italiana}
          rates={['4.6']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          infos={['Italiana']}
          image={Italiana}
          rates={['4.6']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          infos={['Italiana']}
          image={Italiana}
          rates={['4.6']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          infos={['Italiana']}
          image={Italiana}
          rates={['4.6']}
        />
        <Restaurant
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          infos={['Italiana']}
          image={Italiana}
          rates={['4.6']}
        />
      </List>
    </div>
  </Container>
)

export default RestaurantsList
