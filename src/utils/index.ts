export const priceFormatter = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acc, item) => {
    if (item.prices.current) {
      return (acc += item.prices.current)
    }
    return 0
  }, 0)
}
