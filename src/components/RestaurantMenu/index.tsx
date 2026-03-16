import { MouseEvent, useState } from 'react'

import { useCart } from '../../contexts/CartContext'
import {
  CloseButton,
  List,
  ListSection,
  MenuButton,
  MenuCard,
  MenuDescription,
  MenuImage,
  MenuTitle,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalOverlay,
  ModalServing,
  ModalText,
  ModalTitle
} from './styles'

export type Dish = {
  id: number
  title: string
  description: string
  image: string
  price: number
  modalDescription?: string
  serving?: string
  priceLabel?: string
}

type Props = {
  dishes: Dish[]
}

const RestaurantMenu = ({ dishes }: Props) => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const { addItem, openCart } = useCart()

  const addDishToCart = () => {
    if (!selectedDish) {
      return
    }

    addItem({
      id: selectedDish.id,
      image: selectedDish.image,
      title: selectedDish.title,
      price: selectedDish.price
    })
    setSelectedDish(null)
    openCart()
  }

  return (
    <>
      <ListSection>
        <div className="container">
          <List>
            {dishes.map((dish) => (
              <MenuCard key={dish.id} onClick={() => setSelectedDish(dish)}>
                <MenuImage src={dish.image} alt={dish.title} />
                <MenuTitle>{dish.title}</MenuTitle>
                <MenuDescription>{dish.description}</MenuDescription>
                <MenuButton type="button">Adicionar ao carrinho</MenuButton>
              </MenuCard>
            ))}
          </List>
        </div>
      </ListSection>

      {selectedDish && (
        <ModalOverlay onClick={() => setSelectedDish(null)}>
          <ModalContent
            onClick={(event: MouseEvent<HTMLDivElement>) =>
              event.stopPropagation()
            }
          >
            <CloseButton type="button" onClick={() => setSelectedDish(null)}>
              &times;
            </CloseButton>
            <ModalImage src={selectedDish.image} alt={selectedDish.title} />
            <ModalText>
              <ModalTitle>{selectedDish.title}</ModalTitle>
              <ModalDescription>
                {selectedDish.modalDescription ?? selectedDish.description}
              </ModalDescription>
              <ModalServing>
                {selectedDish.serving ?? 'Serve: de 2 a 3 pessoas'}
              </ModalServing>
              <ModalAction type="button" onClick={addDishToCart}>
                {selectedDish.priceLabel ?? 'Adicionar ao carrinho - R$ 60,90'}
              </ModalAction>
            </ModalText>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default RestaurantMenu
