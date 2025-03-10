import { Game } from '../pages/Home';

export function parseToBrl(amount = 0) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
}

export function getTotalPrice(items: Game[]) {
  return items.reduce((acumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (acumulator += currentItem.prices.current);
    }
    return 0;
  }, 0);
}
