import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4321/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "",
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: "auth/",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    addPlaceImage: builder.mutation({
      query: (data) => ({
        url: "upload",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetUsersQuery,
  useLoginUserMutation,
  useAddPlaceImageMutation,
} = apiSlice;
