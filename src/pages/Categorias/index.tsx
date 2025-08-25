import { ProductList } from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSportGamesQuery,
  useGetSimulationGameQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightGameQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGameQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductList
        title="Ação"
        games={actionGames}
        background={'gray'}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        title="Esportes"
        games={sportGames}
        background={'black'}
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductList
        title="Luta"
        games={fightGames}
        background={'gray'}
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        title="Rpg"
        games={rpgGames}
        background={'black'}
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductList
        title="Simulacão"
        games={simulationGames}
        background={'gray'}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}
