import ProductsList from '../components/ProductsList'
import * as Query from '../services/api'

export default function Categories() {
  const { data: action, isLoading: isLoadingAction } =
    Query.useGetActionGamesQuery()
  const { data: rpg, isLoading: isLoadingRpg } = Query.useGetRpgGamesQuery()
  const { data: fight, isLoading: isLoadingFight } =
    Query.useGetFightGamesQuery()
  const { data: simulation, isLoading: isLoadingSimulation } =
    Query.useGetSimulationGamesQuery()
  const { data: sport, isLoading: isLoadingSport } =
    Query.useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        id="rpg"
        title="RPG"
        background="black"
        games={rpg}
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="action"
        title="Ação"
        background="gray"
        games={action}
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        title="Esportes"
        background="black"
        games={sport}
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="fight"
        title="Luta"
        background="gray"
        games={fight}
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulation}
        isLoading={isLoadingSimulation}
      />
    </>
  )
}
