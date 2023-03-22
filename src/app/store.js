import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

const apiArr = [cryptoApi, cryptoNewsApi]
//apiArr.map((api) => getDefaultMiddleware().concat(api.middleware)),


export default  configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware),
})