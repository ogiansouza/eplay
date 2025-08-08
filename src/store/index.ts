// store/index.ts

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/Cart'
import { api } from '../Services/api'

// ✅ Aqui você cria a store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// ✅ Tipos úteis (opcional, mas recomendado)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
