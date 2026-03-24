import ProductList from '@/components/ProductList'
import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery
} from '@/services/api'

const Categories = () => {
  const actionGames = useGetActionGamesQuery()
  const sportsGames = useGetSportsGamesQuery()
  const simulationGames = useGetSimulationGamesQuery()
  const fightingGames = useGetFightingGamesQuery()
  const rpgGames = useGetRpgGamesQuery()

  const categories = [
    {
      data: actionGames.data,
      isLoading: actionGames.isLoading,
      error: actionGames.error,
      bg: 'black' as const,
      title: 'Ação',
      id: 'action'
    },
    {
      data: sportsGames.data,
      isLoading: sportsGames.isLoading,
      error: sportsGames.error,
      bg: 'gray' as const,
      title: 'Esportes',
      id: 'sports'
    },
    {
      data: simulationGames.data,
      isLoading: simulationGames.isLoading,
      error: simulationGames.error,
      bg: 'gray' as const,
      title: 'Simulação',
      id: 'simulation'
    },
    {
      data: fightingGames.data,
      isLoading: fightingGames.isLoading,
      error: fightingGames.error,
      bg: 'gray' as const,
      title: 'Luta',
      id: 'fight'
    },
    {
      data: rpgGames.data,
      isLoading: rpgGames.isLoading,
      error: rpgGames.error,
      bg: 'gray' as const,
      title: 'RPG',
      id: 'rpg'
    }
  ]
  const isLoading = categories.some((cat) => cat.isLoading)
  const hasError = categories.some((cat) => cat.error)

  if (hasError) {
    return <h4>Erro ao carregar categorias</h4>
  }
  return (
    <>
      {categories.map((category) => (
        <ProductList
          key={category.title}
          games={category.data || []}
          background={category.bg}
          title={category.title}
          id={category.id}
          isLoading={isLoading}
        />
      ))}
    </>
  )
}

export default Categories
