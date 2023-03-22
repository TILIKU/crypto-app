import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4b92161cd1msh6bbab11576085fdp1286dejsn9772236c7145',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'


const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews:builder.query({
            query: ([ newsCategory, count]) => createRequest(`/news.search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi