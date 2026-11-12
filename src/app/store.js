import { configureStore } from "@reduxjs/toolkit";
import coutnerReducer from "../features/counter/counterSlice"

export const store = configureStore({
    reducer:{
        counter: coutnerReducer
    }
})