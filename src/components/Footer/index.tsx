import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de RPG"
              to="/categories/#rpg"
            >
              RPG
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de Ação"
              to="/categories/#action"
            >
              Ação
            </S.LinkItem>
          </li>

          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories/#sports"
            >
              Esportes
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories/#simulation"
            >
              Simulação
            </S.LinkItem>
          </li>

          <li>
            <S.LinkItem
              title="Clique aqui para acessar jogos de Luta"
              to="/categories/#fight"
            >
              Luta
            </S.LinkItem>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.LinkItem>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY todos os direitos reservados </p>
    </div>
  </S.Container>
)

export default Footer
