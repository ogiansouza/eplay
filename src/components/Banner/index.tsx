import { BgBanner, BgHero, BgOpacity, Infos, Logo } from './styles'

//verificar essas importações para ver se possivel deixar
// em apenas uma linha
import bannerImg from '../../assets/images/vector.png'
import logo from '../../assets/images/logo.svg'
import bgBanner from '../../assets/images/la_dolce_vita.svg'

import { BtnLinkSecundario } from '../Button/styles'
import { Container } from '../ProductList/styles'

export type Props = {
  weight?: 'small' | 'big'
}

const Banner = () => {
  return (
    <>
      <BgHero style={{ backgroundImage: `url(${bannerImg})` }}>
        <Container>
          <BtnLinkSecundario to="/">Restaurantes</BtnLinkSecundario>
          <Logo src={logo} alt="EFOOD" />
          <BtnLinkSecundario to="/">Carrinho</BtnLinkSecundario>
        </Container>
      </BgHero>
      <BgBanner style={{ backgroundImage: `url(${bgBanner})` }}>
        <BgOpacity>
          <Container>
            <Infos weight="small">Italiana</Infos>
            <Infos weight="big">La Dolce Vita Trattoria</Infos>
          </Container>
        </BgOpacity>
      </BgBanner>
    </>
  )
}

export default Banner
