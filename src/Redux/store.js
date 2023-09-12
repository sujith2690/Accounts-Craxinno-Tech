import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";

const store =configureStore({
    reducer:{
        accountStore:accountSlice
    }
})

export default store;