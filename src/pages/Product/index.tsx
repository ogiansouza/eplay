import { useParams } from 'react-router-dom'

import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Gallery } from '../../components/Gallery'
import { Loader } from '../../components/Loader'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

export const Product = () => {
  const { id } = useParams() as GameParams

  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game?.description}</p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <ul>
          <li>
            <b>Plataforma:</b> {game?.details.system}
          </li>
          <li>
            <b>Desenvolvedor:</b> {game?.details.developer}
          </li>
          <li>
            <b>Editora:</b> {game?.details.publisher}
          </li>
          <li>
            <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
            {game?.details.languages.join(', ')}
          </li>
        </ul>
      </Section>
      <Gallery
        nome={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}
