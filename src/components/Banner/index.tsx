import { Image, Title, Title2 } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Title>Italiana</Title>
      <div>
        <Title2>La Dolce Vita Trattoria</Title2>
      </div>
    </div>
  </Image>
)
export default Banner
