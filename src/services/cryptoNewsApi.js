import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd76edc124554498abb5e1b139fc058a4',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'


const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/v2/everything?q=${newsCategory}&publishedAt&apiKey=57082477bdb745adb73589067d2305d9&count=${count}`),
      }),
    }),
  });

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi