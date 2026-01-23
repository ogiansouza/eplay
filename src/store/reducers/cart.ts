import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../models/Product'
import { Delivery } from '../../components/Checkout'

type CartState = {
  items: Product[]
  delivery?: Delivery
  orderId?: string
  isOpen: boolean
  step: 'cart' | 'checkout' | 'payment' | 'confirm'
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)

      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('Este produto já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    setDelivery: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
    openCart: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    goCheckout: (state) => {
      state.step = 'checkout'
    },

    goPayment: (state) => {
      state.step = 'payment'
    },

    goConfirm: (state) => {
      state.step = 'confirm'
    },

    returnCart: (state) => {
      state.step = 'cart'
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  openCart,
  remove,
  close,
  goCheckout,
  goPayment,
  goConfirm,
  returnCart,
  setDelivery,
  setOrderId,
  clear
} = cartSlice.actions

export default cartSlice.reducer
