import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

type CartItem = {
  id: number
  title: string
  image: string
  price: number
}

type AddCartItemPayload = {
  id: number
  title: string
  image: string
  price: number
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  totalPrice: number
  totalItems: number
  openCart: () => void
  closeCart: () => void
  addItem: (item: AddCartItemPayload) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const totalPrice = useMemo(
    () => items.reduce((acc, item) => acc + item.price, 0),
    [items]
  )

  const value: CartContextType = {
    items,
    isOpen,
    totalPrice,
    totalItems: items.length,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem: (item) => {
      setItems((state) => [
        ...state,
        {
          id: Date.now() + Math.floor(Math.random() * 1000),
          title: item.title,
          image: item.image,
          price: item.price
        }
      ])
    },
    removeItem: (id) => {
      setItems((state) => state.filter((item) => item.id !== id))
    },
    clearCart: () => setItems([])
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
