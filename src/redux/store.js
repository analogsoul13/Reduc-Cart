import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishSlice from "./slices/wishSlice";

const productStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishReducer:wishSlice
    }
})

export default productStore