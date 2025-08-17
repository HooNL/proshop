import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../constants"

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })

export const apiSlice = createApi({
  //   reducerPath: "api",
  baseQuery,
  tagTypes: ["Product", "User", "Order"],
  endpoints: (builder) => ({}),
})

// getProducts: builder.query({
//   query: () => '/api/products',
// }),
// getProductById: builder.query({
//   query: (id) => `/api/products/${id}`,
// }),
