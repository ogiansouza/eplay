import { useLocation } from 'react-router-dom'

export const useBackgroundLocation = () => {
  const location = useLocation()

  return location.state?.backgroundLocation as string | undefined
}
