export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return (accumulator += currentItem.prices.current!)
  }, 0)
}
