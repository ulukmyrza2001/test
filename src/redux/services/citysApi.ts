import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Citys {
  id: number
  name: string
}

export const citysApi = createApi({
  reducerPath: 'citysApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'asdsad'
  }),
  endpoints: (builder) => ({
    getCity: builder.query<Citys[], null>({
      query: () => 'citys'
    }),
    getSingleCity: builder.query<Citys, { id: number }>({
      query: ({ id }) => `citys/${id}`
    })
  })
})

export const { useGetCityQuery, useGetSingleCityQuery } = citysApi
