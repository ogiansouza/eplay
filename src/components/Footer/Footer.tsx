import { MainContainer } from '@/styles/global'
import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <MainContainer>
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link to="/categories#rpg" title="Clique aqui para acessar jogos RPG">
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link to="/categories#action" title="Clique aqui para acessar jogos Ação">
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link to="/categories#sports" title="Clique aqui para acessar jogos Esportes">
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link to="/categories#simulation" title="Clique aqui para acessar jogos Simulação">
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link to="/categories#fight" title="Clique aqui para acessar jogos Luta">
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link to="/#onSale">Promoções</S.Link>
          </li>
          <li>
            <S.Link to="/#comingSoon">Em breve</S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </MainContainer>
  </S.Container>
)

export default Footer
