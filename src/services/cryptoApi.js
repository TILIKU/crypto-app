import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4b92161cd1msh6bbab11576085fdp1286dejsn9772236c7145',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
 
}


const baseUrl = 'https://coinranking1.p.rapidapi.com/coin'
const baseCoinUrl = "https://coinranking1.p.rapidapi.com/coin"



const createRequest = (url) => ({url, headers: cryptoApiHeaders})
const createCoinRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query: (count) => createRequest(baseUrl.concat(`s/?limit=${count}`))
        }),
        getCryptoDetails:builder.query({
            query: (coinId) => createCoinRequest(`/${coinId}`)
        })
    })
})


export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery
} = cryptoApi