export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotal = (items: Game[]) =>
  items.reduce((sum, item) => sum + (item.prices.current || 0), 0)
