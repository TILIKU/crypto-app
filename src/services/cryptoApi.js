import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4b92161cd1msh6bbab11576085fdp1286dejsn9772236c7145',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
 
}


const baseUrl = 'https://coinranking1.p.rapidapi.com'



const createRequest = (url) => ({url, headers: cryptoApiHeaders})
const createCoinRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query: (count) => createRequest(baseUrl.concat(`/coins/?limit=${count}`))
        }),
        getCryptoDetails:builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            //coinId here is just an object not the actual ID xdd
            query: (coinId) => createRequest(baseUrl.concat(`/coin/${coinId?.coinId}/history/?timePeriod=${coinId?.timePeriod}`))
        })
    })
})


export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
} = cryptoApi