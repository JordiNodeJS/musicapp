import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => headers.set('X-RapidAPI-Key', import.meta.env.VITE_API_KEY)
  }),
  endpoints: builder => ({
    songsByGenre: builder.query({
      query: genre => `/charts/genre-world?genre_code=${genre}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSongsByGenreQuery } = musicApi
