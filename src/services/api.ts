import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../models/Restaurante'

type PurchaseResponse = {
  orderId: string
}

type PurchaseProduct = {
  id: number
  price: number
}

type PurchasePayload = {
  products: PurchaseProduct[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeatureRestaurantesQuery,
  useGetRestauranteQuery,
  usePurchaseMutation
} = api

export default api
