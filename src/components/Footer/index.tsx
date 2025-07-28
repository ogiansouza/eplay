import * as S from './Footer.styles'

const anoAtual = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <S.StyledLink
            title="Clique aqui para acessar jogos de RPG"
            to="/categories#rpg"
          >
            RPG
          </S.StyledLink>
          <S.StyledLink
            title="Clique aqui para acessar jogos de ação"
            to="/categories#action"
          >
            Ação
          </S.StyledLink>
          <S.StyledLink
            title="Clique aqui para acessar jogos de esportes"
            to="/categories#sports"
          >
            Esportes
          </S.StyledLink>
          <S.StyledLink
            title="Clique aqui para acessar jogos de simulação"
            to="/categories#simulation"
          >
            Simulação
          </S.StyledLink>
          <S.StyledLink
            title="Clique aqui para acessar jogos de luta"
            to="/categories#fight"
          >
            Luta
          </S.StyledLink>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <S.StyledLink
            title="Clique aqui para acessar a sessão de promoção"
            to="/#on-sale"
          >
            Promoções
          </S.StyledLink>
          <S.StyledLink
            title="Clique aqui para acessar a sessão de em breve"
            to="/#coming-soon"
          >
            Em breve
          </S.StyledLink>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <p>{anoAtual} - &copy; E-PLAY Todos os direitos reservados</p>
      </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer
