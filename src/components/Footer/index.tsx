import * as S from './styles'

const date = new Date().getFullYear()

export default function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.SectionFooter>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.ListLinks>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
              <S.Link
                title="Clique aqui para acessar jogos de Ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
              <S.Link
                title="Clique aqui para acessar jogos de Esportes"
                to="/categories#sports"
              >
                Esportes
              </S.Link>
              <S.Link
                title="Clique aqui para acessar jogos de Luta"
                to="/categories#fight"
              >
                Luta
              </S.Link>
              <S.Link
                title="Clique aqui para acessar jogos de Simulação"
                to="/categories#simulation"
              >
                Simulação
              </S.Link>
            </li>
          </S.ListLinks>
        </S.SectionFooter>
        <S.SectionFooter>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.ListLinks>
            <S.Link title="Clique aqui para acessar promocões" to="/#on-sale">
              Promoções
            </S.Link>
            <S.Link
              title="Clique aqui para acessar a sessão em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </S.ListLinks>
        </S.SectionFooter>
        <S.SectionFooter>
          <p>{date} - &copy;E-PLAY Todos os direitos reservados</p>
        </S.SectionFooter>
      </div>
    </S.Footer>
  )
}
