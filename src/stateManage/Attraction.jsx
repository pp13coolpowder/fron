import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const AttractionApi = createApi({
    reducerPath: 'AttractionApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.melivecode.com/api/' }),
    endpoints: (builder) => ({
        getattraAttractionByName: builder.query  ({
            query: () => `th/attractions`,
            
        }),
        getattraAttractionById: builder.query  ({
            query: (id) => `th/attractions/${id}`,
            
        }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetattraAttractionByNameQuery,useGetattraAttractionByIdQuery } = AttractionApi