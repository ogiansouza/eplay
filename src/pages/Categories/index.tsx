import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetfightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: rpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetfightGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        games={actionGames}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        games={sportGames}
        title="Esportes"
        background="gray"
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="fight"
        games={fightGames}
        title="Luta"
        background="gray"
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        games={rpg}
        title="RPG"
        background="black"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
