import * as S from './style'

const current = new Date().getFullYear()

export const Footer = () => (
  <S.ContainerFooter>
    <div className="container">
      <S.SectionFooter>
        <S.Title>Categorias</S.Title>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar as jogos de rpg"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar as jogos de ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar as jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar as jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar as jogos de luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.SectionFooter>
      <S.SectionFooter>
        <S.Title>Acesso rápido</S.Title>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de promoções"
              to="#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de em breve"
              to="#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.SectionFooter>
      <p>{current} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.ContainerFooter>
)
