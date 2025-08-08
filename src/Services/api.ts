import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeatureGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'Promoções'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'Em breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulacaoGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getRPGGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getsLutaGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos${id}`
    })
  })
})

export const {
  useGetFeatureGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGamesQuery,
  useGetSimulacaoGamesQuery,
  useGetRPGGamesQuery,
  useGetSportGamesQuery,
  useGetsLutaGamesQuery,
  useGetGameQuery
} = api
