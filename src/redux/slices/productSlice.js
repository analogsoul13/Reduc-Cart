import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsThunk=createAsyncThunk('products/fetchProductsThunk',async()=>{
    const response = await axios.get('https://dummyjson.com/products')
    localStorage.setItem('products',JSON.stringify(response.data.products))
    return response.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        product:[],
        loading:false,
        error:"",
        productPerPage:10,
        currentPage:1
    },
    reducers:{
        nextPage(state){
            state.currentPage++
        },
        prevPage(state){
            state.currentPage--
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductsThunk.fulfilled,(state,action)=>{
            state.product=action.payload
            state.loading=false
        }),
        builder.addCase(fetchProductsThunk.pending,(state,action)=>{
            state.product=[]
            state.loading=true
        }),
        builder.addCase(fetchProductsThunk.rejected,(state,action)=>{
            state.product=[]
            state.loading=false
            state.error="Api fetching Failed"
        })
    }
})

export default productSlice.reducer
export const {nextPage, prevPage}=productSlice.actions