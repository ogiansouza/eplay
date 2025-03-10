import * as S from './style';
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <S.Container>
      <div className="container">
        <S.FootSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/categories#rpg">RPG</S.Link>
            </li>
            <li>
              <S.Link to="/categories#action">Ação</S.Link>
            </li>
            <li>
              <S.Link to="/categories#sports">Esportes</S.Link>
            </li>
            <li>
              <S.Link to="/categories#simulation">Sinulação</S.Link>
            </li>
            <li>
              <S.Link to="/categories#">FPS</S.Link>
            </li>
            <li>
              <S.Link to="/categories#fight">Luta</S.Link>
            </li>
          </S.Links>
        </S.FootSection>
        <S.FootSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/#on-sale">Promoções</S.Link>
            </li>
            <li>
              <S.Link to="/#coming-soon">Em breve</S.Link>
            </li>
          </S.Links>
        </S.FootSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  );
}
