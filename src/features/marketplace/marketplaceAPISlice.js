import { apiSlice } from '../../app/api/apiSlice'

export const marketplaceAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => '/marketplace/items/',
    }),
    postEvents: builder.mutation({
      query: (post) => ({
        url: '/api/session/',
        method: 'POST',
        body: { ...post },
      }),
    }),
  }),
})

export const { useGetItemsQuery, usePostEventsMutation } = marketplaceAPISlice
