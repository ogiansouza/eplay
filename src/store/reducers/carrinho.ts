import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { food } from '../../utils/Converter'

type CartState = {
  itens: food[]
  is_open: boolean
}

const initialState: CartState = {
  itens: [],
  is_open: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<food>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index < 0) {
        state.itens.push(action.payload)
      } else {
        state.itens[index].qtd++
      }
    },
    open: (state) => {
      state.is_open = true
    },
    close: (state) => {
      state.is_open = false
    },
    reduce: (state, action: PayloadAction<food>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index >= 0) {
        state.itens[index].qtd--
        if (state.itens[index].qtd < 1) {
          state.itens = state.itens.filter(
            (item) => item.id !== action.payload.id
          )
        }
      }
    },
    remove: (state, action: PayloadAction<food>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        state.itens = state.itens.filter(
          (item) => item.id !== action.payload.id
        )
      }
    }
  }
})

export const { add, open, close, reduce, remove } = carrinhoSlice.actions
export default carrinhoSlice.reducer
