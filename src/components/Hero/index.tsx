import { Imagem, Titulo, SubTitulo } from './styles'
import bannerImg from '../../assets/images/Hero.png'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Titulo>Italiana</Titulo>
    <SubTitulo>La Dolce Vita Trattoria</SubTitulo>
  </Imagem>
)

export default Hero
