import { configureStore } from "@reduxjs/toolkit";
import { AttractionApi } from "./Attraction";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import Id_ from "./Id_";
import back from "./back";

export const store = configureStore({
    reducer:{
        [AttractionApi.reducerPath]:AttractionApi.reducer,
        id:Id_,
        bg:back
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AttractionApi.middleware),
})

setupListeners(store.dispatch)