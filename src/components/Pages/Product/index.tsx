import { useParams } from 'react-router-dom'
import Hero from '../../Hero'
import Section from '../../Section'
import Gallery from '../../Gallery'
import { useGetGameQuery } from '../../../services/api'
import Loader from '../../Loader'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }
  return (
    <>
      <Hero game={game} />
      <Section title="sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />{' '}
          <b>{game.details.developer}:</b> Avalanche Software <br />{' '}
          <b>{game.details.publisher}:</b> Portkey Games, subsidiária da Warner
          Bros. Interactive Entertainment <br /> <b>Idiomas:</b> O jogo oferece
          suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
