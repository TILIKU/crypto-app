import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4b92161cd1msh6bbab11576085fdp1286dejsn9772236c7145',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
 
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const options = {
    method: 'GET',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
};

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query: (count) => createRequest(`/?limit=${count}`)
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi