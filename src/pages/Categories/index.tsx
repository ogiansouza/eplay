import { Loader } from '../../Components/Loader';
import { ProductsList } from '../../Components/ProductsList';

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
} from '../../services/api';

export function Categories() {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery();
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery();
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery();
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery();
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery();

  return (
    <>
      <ProductsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        title="Esportes"
        background="gray"
        games={sportGames}
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulationGames}
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="fight"
        title="Luta"
        background="gray"
        games={fightGames}
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        title="RPG"
        background="black"
        games={rpgGames}
        isLoading={isLoadingRpg}
      />
    </>
  );
}
