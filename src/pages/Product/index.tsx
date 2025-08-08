import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Galerry } from '../Categories/Gallery'
import { useGetGameQuery } from '../../Services/api'

const Product = () => {
  const { id } = useParams()

  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>CArregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.puvlisher}
          <br /> <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas,
          incluindo {game.details.languages}
          configurações do jogo.
        </p>
      </Section>
      <Galerry
        nome={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
